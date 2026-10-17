import { Container } from "../components/Container";
import { PageMeta } from "../components/PageMeta";

export function AboutPage() {
  return (
    <article className="page">
      <PageMeta
        title="About — Questspire Studio"
        description="Independent games and imaginative companions from Questspire Studio."
      />
      <Container>
        <p className="kicker">The studio</p>
        <h1>About the studio</h1>
        <p className="lede">
          We’re an independent studio with a love of imaginative worlds and the adventures we make together. From tabletop stories to dinosaur card battles, we create games and companions that leave room for your imagination.
        </p>
        <p className="measure">
          QuestForge keeps your characters, campaigns and notes close at hand. Dino Duel brings a colourful, playful spirit to offline dinosaur card battles. Two different worlds, one sense of adventure.
        </p>
      </Container>
    </article>
  );
}
