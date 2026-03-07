"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import EmailVerificationForm from "@/components/otherPages/EmailVerificationForm";
// Client component that safely handles URL parameters
function VerificationContent() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [verified, setVerified] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [planRef, setPlanRef] = useState("");
  const router = useRouter();
  useEffect(() => {
    // Safely access URL parameters on the client side only
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const ref = params.get("ref") || "";
    // Store the plan reference
    setPlanRef(ref);
    if (token) {
      // Token exists, proceed with verification
      sessionStorage.setItem("emailVerificationToken", token);
      fetch(`/api/verify-email?token=${token}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setVerified(true);
            setLoading(false);
            // Use the plan from the token if available, otherwise use the ref from URL
            const planToUse = data.plan || ref;
            // Get the app domain for redirection
            const appDomain = "https://app.spotwizz.com";
            // Redirect to the app domain with the email and plan
            window.location.href = `${appDomain}/account/signup?email_address=${encodeURIComponent(data.email)}&plan=${encodeURIComponent(planToUse)}`;
          } else {
            setError(data.error || "Invalid or expired token");
            setLoading(false);
          }
        })
        .catch(() => {
          setError("Error verifying email");
          setLoading(false);
        });
    } else {
      // No token, show the form instead of an error
      setShowForm(true);
      setLoading(false);
    }
  }, [router]);
  if (showForm) {
    return <EmailVerificationForm initialPlan={planRef} />;
  }
  return (
    <div className="panel w-100 sm:w-350px text-center">
      {loading && <p className="text-gray-600 dark:text-gray-300">Verifying your email...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {verified && <p className="text-green-500">Email successfully verified! Redirecting to app...</p>}
    </div>
  );
}
// Main page component with Suspense boundary
export default function EmailVerificationPage() {
  return (
    <div className="section py-6 sm:py-9" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container max-w-xl">
        <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
          <h1 className="h3 sm:h1 m-0">Email Verification</h1>
          <Suspense fallback={<p className="text-gray-600 dark:text-gray-300">Loading...</p>}>
            <VerificationContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}