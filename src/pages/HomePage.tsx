import { Hero } from "../components/Hero";
import { PageMeta } from "../components/PageMeta";
import { ProductFeature } from "../components/ProductFeature";
import { Values } from "../components/Values";

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Questspire Studio"
        description="Thoughtful companions for tabletop stories, built for players and Game Masters."
      />
      <Hero />
      <ProductFeature />
      <Values />
    </>
  );
}
