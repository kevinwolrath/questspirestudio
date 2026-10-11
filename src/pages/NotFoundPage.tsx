import { Link } from "react-router";
import { Container } from "../components/Container";
import { PageMeta } from "../components/PageMeta";

export function NotFoundPage() {
  return (
    <article className="page">
      <PageMeta
        title="Page not found — Questspire Studio"
        description="The page you requested could not be found."
      />
      <Container>
        <h1>Page not found</h1>
        <p className="lede">That page is not part of this site.</p>
        <p>
          <Link className="button button--primary" to="/">
            Back to the studio
          </Link>
        </p>
      </Container>
    </article>
  );
}
