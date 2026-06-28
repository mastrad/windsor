"use client";
import { openContactModal } from "@/utlis/toggleContactModal";

export default function BookingButton({ className, children }) {
  return (
    <button className={className} onClick={openContactModal} type="button">
      {children}
    </button>
  );
}
