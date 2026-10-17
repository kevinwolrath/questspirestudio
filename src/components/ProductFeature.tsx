import { useState } from "react";
import { products, type Product } from "../content/products";
import { Button } from "./Button";
import { Container } from "./Container";
import { ArrowIcon } from "./Icons";

export function ProductArtwork({ product }: { product: Product }) {
  const [failed, setFailed] = useState(false);
  return <div className={`game-art game-art--${product.id}`}>
    {!failed ? <img src={product.artwork} srcSet={`${product.artwork.replace(".webp", "-768.webp")} 768w, ${product.artwork} 1536w`} sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1023px) 90vw, 850px" alt={product.artworkAlt} width="1536" height="1024" loading="lazy" onError={() => setFailed(true)}/> :
      <div className="game-art__fallback"><span className="game-art__symbol" aria-hidden="true">{product.id === "questforge" ? "✧" : "✹"}</span><span className="game-art__title">{product.title}</span><span className="game-art__motif">{product.motif}</span></div>}
  </div>;
}

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return <article className={`game-card game-card--${product.id}`} aria-labelledby={`${product.id}-heading`}>
    <ProductArtwork product={product}/>
    <div className="game-card__copy"><div className="game-card__eyebrow"><p className="kicker">{product.category}</p><span className="game-number">0{index + 1}</span></div>
      <h3 id={`${product.id}-heading`}>{product.title}</h3><p>{product.description}</p>
      <ul className="game-tags">{product.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      <Button to={product.to} variant="text">{product.cta}<ArrowIcon/></Button>
    </div>
  </article>;
}

export function ProductFeature() {
  return <section className="games" id="apps" aria-labelledby="games-heading"><Container>
    <div className="section-heading"><div><p className="kicker">From our imagination to yours</p><h2 id="games-heading">Small studio. <em>Big worlds.</em></h2></div><p>Games to get lost in.<br/>Companions to take along.</p></div>
    <div className="games-grid">{products.map((product, index) => <ProductCard key={product.id} product={product} index={index}/>)}</div>
  </Container></section>;
}
