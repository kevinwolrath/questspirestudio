import { Hero } from "../components/Hero";
import { PageMeta } from "../components/PageMeta";
import { ProductFeature } from "../components/ProductFeature";
import { Values } from "../components/Values";

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Questspire Studio"
        description="Independent games and imaginative companions. Explore QuestForge and Dino Duel from Questspire Studio."
      />
      <Hero />
      <ProductFeature />
      <Values />
    </>
  );
}
