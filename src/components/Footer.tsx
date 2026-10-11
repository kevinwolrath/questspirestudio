import { Link } from "react-router";
import { LogoMark } from "./LogoMark";

const copyrightYear = new Date().getFullYear();

export function Footer() {

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <Link className="brand" to="/">
          <LogoMark />
          <span className="wordmark">Questspire Studio</span>
        </Link>
        <nav aria-label="Footer">
          <Link to="/privacy">QuestForge Privacy Policy</Link>
        </nav>
        <p className="site-footer__meta">© {copyrightYear} Questspire Studio</p>
      </div>
    </footer>
  );
}
