import type { ReactNode } from "react";

type IconProps = {
  className?: string;
  children: ReactNode;
};

function Icon({ className, children }: IconProps) {
  return (
    <svg
      className={className ?? "icon"}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <Icon className="icon icon--arrow">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function MenuIcon() {
  return (
    <Icon>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function CloseIcon() {
  return (
    <Icon>
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function CharacterIcon() {
  return (
    <Icon>
      <circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.5 19.5c1.2-3.2 3.4-4.8 6.5-4.8s5.3 1.6 6.5 4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function BookIcon() {
  return (
    <Icon>
      <path
        d="M12 6.5c-1.8-1-3.8-1.4-6.5-1.2v12.2c2.6-.3 4.6.1 6.5 1.2 1.9-1.1 3.9-1.5 6.5-1.2V5.3c-2.7-.2-4.7.2-6.5 1.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 6.5v12.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </Icon>
  );
}

export function CompassIcon() {
  return (
    <Icon>
      <circle cx="12" cy="12" r="7.25" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M14.8 9.2 13.2 13.2 9.2 14.8 10.8 10.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function TableIcon() {
  return (
    <Icon>
      <path
        d="M4 10.5h16M7 10.5V18M17 10.5V18M8.5 7.5h7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="8" cy="6" r="1.2" fill="currentColor" />
      <circle cx="16" cy="6" r="1.2" fill="currentColor" />
    </Icon>
  );
}

export function HeartIcon() {
  return (
    <Icon>
      <path
        d="M12 18.5s-6.2-3.8-6.2-8A3.4 3.4 0 0 1 12 8.2a3.4 3.4 0 0 1 6.2 2.3c0 4.2-6.2 8-6.2 8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
