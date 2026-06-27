"use client";
import { useState } from "react";
import Link from "next/link";

export default function EmailVerificationForm({ initialPlan = "" }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [plan] = useState(initialPlan);

  // Function to validate the email format
  const validateEmailFormat = (email) => {
    // Basic regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Function to check for disposable/temporary email domains
  const isDisposableEmail = (email) => {
    const disposableDomains = [
      'temp-mail.org', 'tempmail.com', 'mailinator.com', 'guerrillamail.com',
      'sharklasers.com', 'throwawaymail.com', '10minutemail.com', 'yopmail.com',
      'getairmail.com', 'mailnesia.com', 'temp-mail.io', 'tempail.com',
      'dispostable.com', 'maildrop.cc', 'fakeinbox.com', 'trashmail.com',
      'getnada.com', 'tempmailo.com', 'spamgourmet.com', 'emailondeck.com'
    ];
    
    const domain = email.split('@')[1]?.toLowerCase();
    return disposableDomains.some(disposableDomain => domain === disposableDomain);
  };

  // Function to check for common typos in email domains
  const hasCommonTypo = (email) => {
    const commonTypos = {
      'gmial.com': 'gmail.com',
      'gamil.com': 'gmail.com',
      'gnail.com': 'gmail.com',
      'gmal.com': 'gmail.com',
      'gmail.co': 'gmail.com',
      'gmaill.com': 'gmail.com',
      'hotmial.com': 'hotmail.com',
      'hotmali.com': 'hotmail.com',
      'hotmai.com': 'hotmail.com',
      'yaho.com': 'yahoo.com',
      'yahooo.com': 'yahoo.com',
      'yhaoo.com': 'yahoo.com',
      'outloo.com': 'outlook.com',
      'outlok.com': 'outlook.com'
    };
    
    const domain = email.split('@')[1]?.toLowerCase();
    return domain ? commonTypos[domain] : null;
  };

  const sendVerificationEmail = async (e) => {
    e.preventDefault();
    
    // Reset message and error states
    setMessage("");
    setError("");
    
    // Validate email format
    if (!validateEmailFormat(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    // Check for disposable email
    if (isDisposableEmail(email)) {
      setError("Please use a business email address, not a temporary email");
      return;
    }
    
    // Check for common typos
    const suggestedDomain = hasCommonTypo(email);
    if (suggestedDomain) {
      const emailName = email.split('@')[0];
      const suggestedEmail = `${emailName}@${suggestedDomain}`;
      setError(`Did you mean ${suggestedEmail}?`);
      return;
    }
    
    // Proceed with submission
    setLoading(true);
    
    try {
      const res = await fetch("/api/send-verification-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, plan }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setMessage("Verification email sent! Check your inbox.");
      } else {
        setError(data.error || "Something went wrong. Try again.");
      }
    } catch (error) {
      setError("Error sending email. Please try again.");
    }
    
    setLoading(false);
  };

  // CSS styles
  const errorInputStyle = error ? {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#ff0000 !important",
    outline: "none",
    boxShadow: "0 0 0 1px #ff0000"
  } : {};
  
  // Styles for the form elements
  const styles = {
    errorText: {
      color: "#ff0000",
      fontSize: "0.875rem",
      textAlign: "left",
      marginTop: "0.25rem"
    },
    successText: {
      color: "#00aa00",
      marginTop: "0.5rem"
    }
  };

  // Add a style tag to ensure our border styles take precedence
  const errorStyleTag = error ? (
    <style jsx>{`
      input.form-control {
        border: 1px solid #ff0000 !important;
        box-shadow: 0 0 0 1px #ff0000 !important;
      }
    `}</style>
  ) : null;

  return (
    <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
      {errorStyleTag}
      <div className="panel w-100 sm:w-350px">
        <form onSubmit={sendVerificationEmail} className="vstack gap-2">
          <input
            className={`form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30 ${error ? "error-input" : ""}`}
            style={errorInputStyle}
            type="email"
            placeholder="Your work email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              // Clear error when user starts typing
              if (error) setError("");
              if (message) setMessage("");
            }}
            required
          />
          {error && <p style={styles.errorText}>{error}</p>}
          <button
            className="btn btn-primary btn-md text-white mt-2"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send verification email"}
          </button>
        </form>
      </div>
      {message && <p style={styles.successText}>{message}</p>}
      <p>
        Having issues?{" "}
        <Link className="uc-link" href="/contact">
          Contact us
        </Link>
      </p>
    </div>
  );
}