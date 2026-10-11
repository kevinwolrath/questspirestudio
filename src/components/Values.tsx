import type { ReactNode } from "react";
import { BookIcon, HeartIcon, TableIcon } from "./Icons";
import { Container } from "./Container";

const values: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Made for the table",
    text: "A companion meant to sit beside the game, for players and Game Masters.",
    icon: <TableIcon />,
  },
  {
    title: "Your stories, organised",
    text: "Characters, campaigns and notes kept in one place.",
    icon: <BookIcon />,
  },
  {
    title: "Built with care",
    text: "An independent studio making companions for tabletop stories.",
    icon: <HeartIcon />,
  },
];

export function Values() {
  return (
    <section className="values" aria-labelledby="values-heading">
      <Container>
        <h2 id="values-heading" className="visually-hidden">
          Studio values
        </h2>
        <ul className="values__grid">
          {values.map((value) => (
            <li key={value.title}>
              <div className="values__icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </li>
          ))}
        </ul>
      </Container>
      <div className="values__trees" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="xMidYMax meet">
          <path
            fill="#3e3428"
            d="M0 120V78l48 8 36-46 34 40 28-8 40-48 38 46 52 2 42-52 40 48 36-22 48-46 36 42 48-8 52-36 44 28 48-8 56-42 42 36 44-16 70-28 36 40 48-18 52-36 40 28 60-22 48 14 22 20V120Z"
            opacity="0.28"
          />
        </svg>
      </div>
    </section>
  );
}
