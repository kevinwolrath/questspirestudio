import { Container } from "../components/Container";
import { PageMeta } from "../components/PageMeta";

export function AboutPage() {
  return (
    <article className="page">
      <PageMeta
        title="About — Questspire Studio"
        description="Questspire Studio creates companions for tabletop adventures."
      />
      <Container>
        <p className="kicker">The studio</p>
        <h1>About the studio</h1>
        <p className="lede">
          Questspire Studio makes companions for tabletop adventures. QuestForge is the studio’s
          app for keeping characters, campaigns and notes close at hand, so more of the evening can
          stay with the story.
        </p>
        <p className="measure">
          This is an independent studio. The site is a home for the work and for the QuestForge
          privacy policy.
        </p>
      </Container>
    </article>
  );
}
