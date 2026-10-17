import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { ScrollManager } from "./components/ScrollManager";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { QuestForgePage } from "./pages/QuestForgePage";

import { DinoDuelPage } from "./pages/DinoDuelPage";

export function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dino-duel" element={<DinoDuelPage />} />
          <Route path="/questforge" element={<QuestForgePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
