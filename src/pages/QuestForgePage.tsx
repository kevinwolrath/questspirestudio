import { Link } from "react-router";
import { featureAreas } from "../content/features";
import { Container } from "../components/Container";
import { ProductArtwork } from "../components/ProductFeature";
import { products } from "../content/products";
import { PageMeta } from "../components/PageMeta";

export function QuestForgePage() {
  return (
    <article className="page">
      <PageMeta
        title="QuestForge — Questspire Studio"
        description="QuestForge keeps characters, campaigns and adventures close at hand."
      />
      <Container>
        <p className="kicker">Tabletop companion</p>
        <h1>QuestForge</h1>
        <p className="lede">
          QuestForge is a companion app for tabletop stories. It keeps characters, campaigns and
          adventures close at hand. It is not a game you play in the browser.
        </p>
        <p className="measure">
          Public store listings will be linked from this page when they are available.
        </p>

        <h2>What it helps with</h2>
        <ul className="feature-list">
          {featureAreas.map((feature) => (
            <li key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.summary}</p>
            </li>
          ))}
        </ul>

        <h2>A look at the app</h2>
        <ProductArtwork product={products[0]} />

        <p className="measure">
          <Link to="/privacy">QuestForge Privacy Policy</Link>
        </p>
      </Container>
    </article>
  );
}
