export type Product = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  artwork: string;
  artworkAlt: string;
  motif: string;
  to: string;
  cta: string;
};

export const products: Product[] = [
  {
    id: "questforge", title: "QuestForge", category: "Your next chapter starts here",
    description: "Less bookkeeping. More adventure. Keep your characters, campaigns and tabletop stories close at hand.",
    tags: ["Tabletop companion", "Offline first"], artwork: "/images/products/questforge.webp",
    artworkAlt: "QuestForge promotional artwork showing a fantasy adventure and tabletop companion screens",
    motif: "Every great story starts with a little imagination.", to: "/questforge", cta: "Explore QuestForge",
  },
  {
    id: "dino-duel", title: "Dino Duel", category: "Small dinos. Big adventures.",
    description: "A colourful, offline-first dinosaur card battle game. A little strategy, a lot of personality, and a prehistoric world of play.",
    tags: ["Card battles", "Offline first"], artwork: "/images/products/dino-duel.webp",
    artworkAlt: "Dino Duel promotional artwork featuring colourful hand-drawn dinosaur cards and battles",
    motif: "Bring your wild side to the table.", to: "/dino-duel", cta: "Meet Dino Duel",
  },
];
