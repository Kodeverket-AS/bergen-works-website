"use client";
import { useRouter } from "next/navigation";
import React from "react";
type Variant = "primary" | "secondary";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-moss-600 text-[var(--text-light)] font-semibold hover:bg-[#1C2B14] cursor-pointer",
  secondary:
    "bg-white text-[var(--text-dark)] font-semibold hover:bg-gray-300 cursor-pointer",
};

type BackButtonProps = {
  children: React.ReactNode;
  variant: Variant;
  className: string;
};

export default function BackButton({
  children,
  variant = "primary",
  className,
}: BackButtonProps) {
  const base = "inline-block px-6 py-3  text-center  transition duration-300";
  const styles = variantStyles[variant];
  const combined = `${base} ${styles} ${className}`;
  const router = useRouter();

  return (
    <button type="button" onClick={router.back} className={combined}>
      {children}
    </button>
  );
}
