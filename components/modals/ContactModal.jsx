"use client";

import { closeContactModal } from "@/utlis/toggleContactModal";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import TurnstileWidget from "@/components/TurnstileWidget";

const turnstileEnabled = !!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactModal() {
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);
  const dateInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    message: "",
  });
  const [dateInputFocused, setDateInputFocused] = useState(false);
  const [status, setStatus] = useState("");
  const [turnstileToken, setTurnstileToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dateOfBirth") {
      const digitsOnly = value.replace(/[^\d]/g, "");

      let formattedDate = "";
      if (digitsOnly.length > 0) {
        formattedDate = digitsOnly.substring(0, 2);
        if (digitsOnly.length >= 2) {
          formattedDate += "/";
        }

        if (digitsOnly.length > 2) {
          formattedDate += digitsOnly.substring(2, 4);
          if (digitsOnly.length >= 4) {
            formattedDate += "/";
          }
        }

        if (digitsOnly.length > 4) {
          formattedDate += digitsOnly.substring(4, 8);
        }
      }

      setFormData({ ...formData, dateOfBirth: formattedDate });

      setTimeout(() => {
        if (dateInputRef.current) {
          const cursorPos = calculateCursorPosition(digitsOnly.length);
          dateInputRef.current.setSelectionRange(cursorPos, cursorPos);
        }
      }, 0);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const calculateCursorPosition = (digitsLength) => {
    if (digitsLength < 2) return digitsLength;
    if (digitsLength === 2) return 3;
    if (digitsLength < 4) return digitsLength + 1;
    if (digitsLength === 4) return 6;
    return digitsLength + 2;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && formData.dateOfBirth) {
      const { dateOfBirth } = formData;
      const cursorPosition = e.target.selectionStart;

      if (cursorPosition > 0 && dateOfBirth.charAt(cursorPosition - 1) === "/") {
        e.preventDefault();
        const newPos = cursorPosition - 1;
        e.target.setSelectionRange(newPos, newPos);

        const newValue =
          dateOfBirth.substring(0, cursorPosition - 2) +
          dateOfBirth.substring(cursorPosition);

        const digitsOnly = newValue.replace(/[^\d]/g, "");

        let formattedDate = "";
        if (digitsOnly.length > 0) {
          formattedDate = digitsOnly.substring(0, 2);
          if (digitsOnly.length >= 2) formattedDate += "/";
          if (digitsOnly.length > 2) {
            formattedDate += digitsOnly.substring(2, 4);
            if (digitsOnly.length >= 4) formattedDate += "/";
          }
          if (digitsOnly.length > 4) {
            formattedDate += digitsOnly.substring(4, 8);
          }
        }

        setFormData({ ...formData, dateOfBirth: formattedDate });

        setTimeout(() => {
          if (dateInputRef.current) {
            const newCursorPos = calculateBackspacePosition(digitsOnly.length);
            dateInputRef.current.setSelectionRange(newCursorPos, newCursorPos);
          }
        }, 0);
      }
    }

    if (e.key === "/") {
      e.preventDefault();
    }
  };

  const calculateBackspacePosition = (digitsLength) => {
    if (digitsLength < 2) return digitsLength;
    if (digitsLength === 2) return 2;
    if (digitsLength < 4) return digitsLength + 1;
    if (digitsLength === 4) return 5;
    return digitsLength + 2;
  };

  const handleDateFocus = () => setDateInputFocused(true);
  const handleDateBlur = () => setDateInputFocused(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (turnstileEnabled && !turnstileToken) {
      setStatus("Please wait for the security check to complete.");
      return;
    }

    setStatus("Sending...");

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      if (res.ok) {
        setStatus("Thank you! Your free trial request has been received.");
        setFormData({ name: "", dateOfBirth: "", email: "", phone: "", message: "" });
        setTurnstileToken(null);
        setTimeout(() => {
          closeContactModal();
          setStatus("");
        }, 3000);
      } else {
        const data = await res.json();
        setStatus(data.error || "Error sending free trial request. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending free trial request. Please try again.");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        containerRef.current.contains(event.target) &&
        elementRef.current &&
        !elementRef.current.contains(event.target)
      ) {
        closeContactModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    closeContactModal();
  }, [pathname]);

  const gtagReportConversion = () => {
    if (typeof gtag === "undefined") return;
    gtag("event", "conversion", {
      send_to: "AW-17082075995/WIW9CM7-37QbENuWr9E_",
      value: 1.0,
      currency: "GBP",
    });
  };

  return (
    <div
      ref={containerRef}
      id="uc-contact-modal"
      data-uc-modal="overlay: true"
      className="uc-modal"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-modal-dialog lg:max-w-650px bg-secondary text-dark dark:bg-gray-800 dark:text-white rounded-1-5"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90"
          type="button"
          onClick={closeContactModal}
        >
          <i className="unicon-close" />
        </button>
        <div className="panel vstack gap-2 md:gap-4 text-center">
          <div className="panel cstack px-3 md:px-4 py-4 md:py-8 m-0 lg:mx-auto">
            <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
              <h4 className="h5 lg:h4 m-0">Book your free trial class</h4>
              <div className="panel w-100 sm:w-350px md:w-500px mx-auto">
                <form onSubmit={handleSubmit} className="vstack gap-2">
                  <div
                    className="vstack lg:hstack gap-2"
                    style={{ flexDirection: "row" }}
                  >
                    <input
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="text"
                      name="name"
                      placeholder="Full name*"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <input
                      ref={dateInputRef}
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="text"
                      inputMode="numeric"
                      name="dateOfBirth"
                      placeholder={dateInputFocused ? "DD/MM/YYYY" : "Date of birth*"}
                      required
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      onFocus={handleDateFocus}
                      onBlur={handleDateBlur}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                  <div
                    className="vstack lg:hstack gap-2"
                    style={{ flexDirection: "row" }}
                  >
                    <input
                      className="form-control h-48px w-full rtl:text-end bg-white dark:border-white dark:text-dark"
                      type="tel"
                      name="phone"
                      placeholder="Phone number*"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className="vstack lg:hstack gap-2"
                    style={{ flexDirection: "row" }}
                  >
                    <input
                      className="form-control h-48px w-full bg-white dark:border-white dark:text-dark"
                      type="email"
                      name="email"
                      placeholder="Your email*"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <textarea
                    className="form-control min-h-150px w-full bg-white dark:border-white dark:text-dark"
                    name="message"
                    placeholder="Tell us where you heard about us and what you're looking to get out of your free trial*"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />

                  {turnstileEnabled && (
                    <div className="flex justify-center mt-1">
                      <TurnstileWidget
                        onVerify={(token) => setTurnstileToken(token)}
                        onExpire={() => setTurnstileToken(null)}
                        onError={() => {
                          setTurnstileToken(null);
                          setStatus("Security check failed. Please refresh and try again.");
                        }}
                      />
                    </div>
                  )}

                  <button
                    className="btn btn-primary btn-md text-white mt-2"
                    type="submit"
                    disabled={(turnstileEnabled && !turnstileToken) || status === "Sending..."}
                    onClick={gtagReportConversion}
                  >
                    Book free class
                  </button>
                  {status && (
                    <p
                      className="text-center mt-2"
                      style={{
                        color:
                          status === "Thank you! Your free trial request has been received."
                            ? "green"
                            : status === "Sending..."
                            ? "gray"
                            : "red",
                      }}
                    >
                      {status}
                    </p>
                  )}
                  <p className="fs-7 opacity-70 mt-2 text-center">
                    To get the most out of your free trial, tell us what's most important to you.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}