/**
 * Submits a response to a Google Form.
 *
 * Posts to the form's public `formResponse` endpoint - the same one the real
 * form posts to from a browser - so no Google account, API key, or credential
 * is involved. `fields` maps Google entry IDs (e.g. "entry.1148927156") to the
 * values to store; blank values are sent as empty strings.
 *
 * Google answers with an HTML confirmation page rather than a machine-readable
 * status, so a non-error response is treated as success. Throws on a network
 * failure, a timeout, or an HTTP error status.
 */
export async function submitToGoogleForm(formId, fields, timeoutMs = 8000) {
  const body = new URLSearchParams();
  for (const [entryId, value] of Object.entries(fields)) {
    body.append(entryId, value == null ? "" : String(value));
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(
      `https://docs.google.com/forms/d/e/${formId}/formResponse`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
        signal: controller.signal,
      }
    );

    if (!res.ok) {
      throw new Error(`Google Forms responded with ${res.status}`);
    }
  } finally {
    clearTimeout(timer);
  }
}
