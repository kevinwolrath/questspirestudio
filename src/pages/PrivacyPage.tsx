import { privacyPolicy } from "../content/privacyPolicy";
import { Container } from "../components/Container";
import { PageMeta } from "../components/PageMeta";

export function PrivacyPage() {
  return (
    <article className="page policy">
      <PageMeta
        title="QuestForge Privacy Policy — Questspire Studio"
        description="Privacy policy for the QuestForge app, published by Questspire Studio."
      />
      <Container>
        <h1>{privacyPolicy.title}</h1>
        <p>{privacyPolicy.updated}</p>
        <p>{privacyPolicy.intro}</p>
        {privacyPolicy.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </Container>
    </article>
  );
}
