/**
 * Submits a response to a Google Form.
 *
 * Posts to the form's public `formResponse` endpoint - the same one the real
 * form posts to from a browser - so no Google account, API key, or credential
 * is involved. `fields` maps Google entry IDs (e.g. "entry.1148927156") to the
 * values to store; blank values are sent as empty strings.
 *
 * Google answers with an HTML page rather than a machine-readable status, and
 * on success it commonly replies with a 3xx redirect to the confirmation page,
 * so any 2xx or 3xx is treated as accepted. Throws on a network failure, a
 * timeout, or any other status, with the status and body snippet attached so
 * the cause shows up in server logs.
 */
export async function submitToGoogleForm(formId, fields, timeoutMs = 8000) {
  const body = new URLSearchParams();
  for (const [entryId, value] of Object.entries(fields)) {
    body.append(entryId, value == null ? "" : String(value));
  }
  // Sent by the real form; harmless for single-page forms that don't need them.
  body.append("fvv", "1");
  body.append("pageHistory", "0");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const url = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // Google can reject requests that don't look like a browser.
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml",
      },
      body,
      // A 302 to the confirmation page means accepted - don't chase it.
      redirect: "manual",
      signal: controller.signal,
    });

    const accepted = (res.status >= 200 && res.status < 400) || res.status === 0;
    if (!accepted) {
      let snippet = "";
      try {
        snippet = (await res.text()).replace(/\s+/g, " ").slice(0, 300);
      } catch {}
      throw new Error(
        `Google Forms rejected submission: HTTP ${res.status}. Body: ${snippet}`
      );
    }
  } catch (err) {
    if (err?.name === "AbortError") {
      throw new Error(`Google Forms request timed out after ${timeoutMs}ms`);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}
