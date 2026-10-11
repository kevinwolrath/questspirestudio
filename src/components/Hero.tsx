import { ArrowIcon } from "./Icons";
import { Button } from "./Button";
import { Container } from "./Container";
import { HeroArt } from "./HeroArt";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__compass" aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="78" fill="none" stroke="#6e4e22" strokeWidth="2" />
          <circle cx="100" cy="100" r="58" fill="none" stroke="#6e4e22" strokeWidth="1" />
          <path d="M100 18v164M18 100h164M42 42l116 116M158 42 42 158" fill="none" stroke="#6e4e22" strokeWidth="1" />
          <path d="M100 38 112 100 100 86 88 100Z" fill="#6e4e22" />
        </svg>
      </div>
      <Container className="hero__grid">
        <div className="hero__copy">
          <p className="kicker">Tools for your next adventure</p>
          <h1 id="hero-heading">
            Less bookkeeping. <span className="hero__accent">More adventure.</span>
          </h1>
          <p className="lede">
            Thoughtful companions for tabletop stories, built for players and Game Masters.
          </p>
          <div className="hero__actions">
            <Button to="/questforge">
              Explore QuestForge
              <ArrowIcon />
            </Button>
            <Button to="/about" variant="text">
              About the studio
            </Button>
          </div>
        </div>
        <div className="hero__frame">
          <HeroArt />
        </div>
      </Container>
    </section>
  );
}
