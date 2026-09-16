import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_12px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}