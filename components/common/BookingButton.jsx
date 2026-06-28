"use client";
import { openContactModal } from "@/utlis/toggleContactModal";

export default function BookingButton({ className, children, link = false }) {
  if (link) {
    return (
      <a
        className={className}
        href="#"
        onClick={(e) => { e.preventDefault(); openContactModal(); }}
        style={{ cursor: "pointer" }}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={className} onClick={openContactModal} type="button">
      {children}
    </button>
  );
}
