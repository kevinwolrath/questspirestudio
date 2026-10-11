import type { ReactNode } from "react";
import { Link } from "react-router";

type ButtonProps = {
  children: ReactNode;
  to: string;
  variant?: "primary" | "text";
};

export function Button({ children, to, variant = "primary" }: ButtonProps) {
  return (
    <Link className={`button button--${variant}`} to={to}>
      {children}
    </Link>
  );
}
