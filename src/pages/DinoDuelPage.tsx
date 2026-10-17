import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { PageMeta } from "../components/PageMeta";
import { ProductArtwork } from "../components/ProductFeature";
import { products } from "../content/products";

export function DinoDuelPage() {
  const product = products[1];
  return <Container className="game-detail"><PageMeta title="Dino Duel" description={product.description}/><p className="kicker">Card battles · Offline first</p><h1>Dino Duel</h1><p className="lede">{product.description}</p><ProductArtwork product={product}/><h2>A little prehistoric personality.</h2><p className="measure">Colourful dinosaurs meet card battle strategy, built around offline play. Discover a playful new world from Questspire Studio.</p><Button to="/">Back to our worlds</Button></Container>;
}
