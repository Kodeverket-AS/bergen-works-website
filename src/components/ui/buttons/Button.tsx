import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-moss-600 text-[var(--color-light-text)] font-semibold hover:bg-[#1C2B14] cursor-pointer",
  secondary:
    "bg-white text-[var(--color-dark-text)] font-semibold hover:bg-gray-300 cursor-pointer",
};

type ButtonProps = {
  children: React.ReactNode;
  variant: Variant;
  href?: string;
  className: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  href,
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const base = "inline-block px-6 py-3 text-center transition duration-300";
  const styles = variantStyles[variant];
  const combined = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined} tabIndex={0}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
