import type { ReactNode } from "react";

type GlowProps = {
  children: ReactNode;
  className?: string;
};

export default function Glow({ children, className = "" }: GlowProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-cyan-400/10 blur-3xl"
      />
      {children}
    </div>
  );
}