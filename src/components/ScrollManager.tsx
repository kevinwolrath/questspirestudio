import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView?.({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
        return;
      }
    }
    window.scrollTo?.({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
