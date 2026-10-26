"use client";

import { useSyncExternalStore } from "react";

// January 1, 2022. Keep the start date here to change it in one place.
export const EXPERIENCE_START_DATE = "2022-01-01";

export function getExperienceYears(now = new Date()) {
  const start = new Date(`${EXPERIENCE_START_DATE}T00:00:00Z`);
  const anniversaryPending =
    now.getUTCMonth() < start.getUTCMonth() ||
    (now.getUTCMonth() === start.getUTCMonth() &&
      now.getUTCDate() < start.getUTCDate());

  return Math.max(0, now.getUTCFullYear() - start.getUTCFullYear() - Number(anniversaryPending));
}

function subscribe(onChange: () => void) {
  // Also refresh long-lived tabs and tabs returning from sleep.
  const timer = window.setInterval(onChange, 60_000);
  window.addEventListener("focus", onChange);
  document.addEventListener("visibilitychange", onChange);
  return () => {
    window.clearInterval(timer);
    window.removeEventListener("focus", onChange);
    document.removeEventListener("visibilitychange", onChange);
  };
}

function getServerSnapshot() {
  return null;
}

export default function ExperienceDescription({
  template,
  fallback,
}: {
  template: string;
  fallback: string;
}) {
  const years = useSyncExternalStore(subscribe, getExperienceYears, getServerSnapshot);
  // The static HTML stays accurate even before hydration or without JavaScript.
  return years === null ? fallback : template.replace("{years}", String(years));
}
