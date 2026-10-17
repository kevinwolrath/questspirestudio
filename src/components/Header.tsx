import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { CloseIcon, MenuIcon } from "./Icons";
import { LogoMark } from "./LogoMark";

export function Header() {
  const location = useLocation();
  const locationKey = `${location.pathname}${location.hash}`;
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === locationKey;
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function handleNavigate() {
    setOpenPath(null);
    document.getElementById("main")?.focus();
  }

  return (
    <header className="site-header">
      <div className="container header__inner">
        <Link className="brand" to="/" onClick={handleNavigate}>
          <LogoMark />
          <span className="wordmark">Questspire Studio</span>
        </Link>
        <button
          ref={buttonRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpenPath(open ? null : locationKey)}
        >
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
        <nav id="site-menu" className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary">
          <ul>
            <li>
              <Link to="/#apps" onClick={handleNavigate}>
                Our Worlds
              </Link>
            </li>
            <li>
              <NavLink to="/about" onClick={handleNavigate}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" onClick={handleNavigate}>
                Privacy
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
