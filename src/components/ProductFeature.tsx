import { ArrowIcon, BookIcon, CharacterIcon, CompassIcon } from "./Icons";
import { Button } from "./Button";
import { Container } from "./Container";
import { FeatureSheets } from "./FeatureSheets";

const benefits = [
  { title: "Character sheets", icon: <CharacterIcon /> },
  { title: "Campaign reference", icon: <BookIcon /> },
  { title: "Adventure tracking", icon: <CompassIcon /> },
];

export function ProductFeature() {
  return (
    <section className="product" id="apps" aria-labelledby="questforge-heading">
      <Container className="product__grid">
        <div>
          <p className="kicker">Tabletop companion</p>
          <h2 id="questforge-heading">
            Meet <span className="product__name">QuestForge</span>
          </h2>
          <p className="lede">Keep your characters, campaigns and adventures close at hand.</p>
          <ul className="benefits">
            {benefits.map((benefit) => (
              <li key={benefit.title}>
                <span className="benefits__icon">{benefit.icon}</span>
                <span>{benefit.title}</span>
              </li>
            ))}
          </ul>
          <Button to="/questforge">
            Discover QuestForge
            <ArrowIcon />
          </Button>
        </div>
        <FeatureSheets />
      </Container>
    </section>
  );
}
