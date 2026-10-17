import { ArrowIcon } from "./Icons";
import { Button } from "./Button";
import { Container } from "./Container";
import { SpireArt } from "./SpireArt";

export function Hero() {
  return <section className="studio-hero" aria-labelledby="hero-heading">
    <Container className="studio-hero__grid">
      <div className="studio-hero__copy">
        <p className="kicker"><span className="spark">✦</span> Independent minds. Imaginative worlds.</p>
        <h1 id="hero-heading">A little magic.<br/><em>A new adventure.</em></h1>
        <p className="lede">From epic tabletop stories to tiny dinosaur duels. We make games and companions that bring your imagination to life.</p>
        <div className="hero__actions"><a className="button button--primary" href="#apps">Discover our worlds <ArrowIcon/></a><Button to="/about" variant="text">Meet the studio <ArrowIcon/></Button></div>
        <p className="hero-footnote"><span aria-hidden="true">✧</span> Crafted at Questspire Studio. Made for play.</p>
      </div>
      <div className="studio-hero__art"><SpireArt/><span className="art-caption">A spark of imagination goes a long way.</span></div>
    </Container>
    <div className="hero-strip" aria-hidden="true"><span>SMALL STUDIO</span>✦<span>BIG IMAGINATION</span>✦<span>WORLDS WORTH EXPLORING</span>✦<span>PLAY YOUR WAY</span></div>
  </section>;
}
