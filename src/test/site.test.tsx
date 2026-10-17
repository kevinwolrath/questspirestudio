import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { App } from "../App";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("Questspire Studio site", () => {
  it("does not use the Questfire name or a contact link", () => {
    renderAt("/");
    expect(document.body.textContent ?? "").not.toMatch(/questfire/i);
    expect(screen.queryByRole("link", { name: "Contact" })).toBeNull();
    expect(screen.queryByRole("link", { name: /app store/i })).toBeNull();
    expect(screen.queryByRole("link", { name: /google play/i })).toBeNull();
    expect(document.body.textContent ?? "").not.toMatch(/\biOS\b|Android/);
  });

  it("links the homepage to QuestForge and the studio", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { level: 1, name: /A little magic/ })).toBeTruthy();
    expect(screen.getByRole("link", { name: /Explore QuestForge/ }).getAttribute("href")).toBe(
      "/questforge",
    );
    expect(screen.getByRole("link", { name: /Meet the studio/ }).getAttribute("href")).toBe(
      "/about",
    );
    expect(screen.getByRole("link", { name: "Our Worlds" }).getAttribute("href")).toBe("/#apps");
  });

  it("opens the menu, closes it with Escape, and closes it after a route is chosen", () => {
    renderAt("/");
    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(toggle.getAttribute("aria-controls")).toBe("site-menu");

    fireEvent.click(toggle);
    const openToggle = screen.getByRole("button", { name: "Close menu" });
    expect(openToggle.getAttribute("aria-expanded")).toBe("true");

    fireEvent.keyDown(document, { key: "Escape" });
    const closedToggle = screen.getByRole("button", { name: "Open menu" });
    expect(closedToggle.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(closedToggle);

    fireEvent.click(closedToggle);
    fireEvent.click(screen.getByRole("link", { name: "About" }));
    expect(screen.getByRole("heading", { level: 1, name: "About the studio" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Open menu" }).getAttribute("aria-expanded")).toBe(
      "false",
    );
  });

  it("renders QuestForge, privacy wording, and the not-found page", () => {
    const { unmount } = renderAt("/questforge");
    expect(screen.getByRole("heading", { level: 1, name: "QuestForge" })).toBeTruthy();
    expect(screen.getByRole("img", { name: /QuestForge promotional artwork/ })).toBeTruthy();
    expect(screen.getAllByRole("link", { name: "QuestForge Privacy Policy" }).length).toBeGreaterThan(0);
    unmount();

    renderAt("/privacy");
    expect(document.title).toBe("QuestForge Privacy Policy — Questspire Studio");
    expect(screen.getByRole("heading", { level: 1, name: "QuestForge Privacy Policy" })).toBeTruthy();
    expect(screen.getByText("Last updated: 19 September 2026")).toBeTruthy();
    expect(screen.getByText("Questspire Studio does not sell personal information.")).toBeTruthy();
    expect(document.body.textContent ?? "").not.toMatch(/questfire/i);
  });

  it("provides a Dino Duel route and an artwork fallback", () => {
    renderAt("/dino-duel");
    expect(screen.getByRole("heading", { level: 1, name: "Dino Duel" })).toBeTruthy();
    fireEvent.error(screen.getByRole("img", { name: /Dino Duel promotional artwork/ }));
    expect(screen.queryByRole("img", { name: /Dino Duel promotional artwork/ })).toBeNull();
    expect(screen.getByText("Bring your wild side to the table.")).toBeTruthy();
    expect(screen.getByRole("link", { name: "Back to our worlds" }).getAttribute("href")).toBe("/");
  });

  it("shows a not-found page for unknown URLs", () => {
    renderAt("/missing-page");
    expect(screen.getByRole("heading", { level: 1, name: "Page not found" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Back to the studio" }).getAttribute("href")).toBe("/");
  });
});
