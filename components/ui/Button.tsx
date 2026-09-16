import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-white text-black shadow-[0_0_24px_rgba(255,255,255,0.12)] hover:bg-cyan-300 hover:shadow-[0_0_28px_rgba(0,229,255,0.24)]",
    secondary:
      "border border-white/10 bg-white/5 text-white hover:border-cyan-400/40 hover:bg-cyan-400/10",
    ghost:
      "bg-transparent text-zinc-300 hover:bg-white/5 hover:text-white",
  };

  return (
    <button
      type={type}
      className={`inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}