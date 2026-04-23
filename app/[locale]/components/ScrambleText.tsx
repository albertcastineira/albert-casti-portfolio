"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type ScrambleTextProps = {
  text: string;
  className?: string;
};

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789./$";

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

export default function ScrambleText({
  text,
  className = "",
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const timerRef = useRef<number | null>(null);

  const chars = useMemo(() => Array.from(text), [text]);

  const stopAnimation = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setDisplay(text);
  }, [text]);

  const runAnimation = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }

    let frame = 0;
    const totalFrames = Math.max(chars.length + 4, 10);

    timerRef.current = window.setInterval(() => {
      frame += 1;

      const revealProgress = frame / totalFrames;
      const revealCount = Math.floor(revealProgress * chars.length);

      const next = chars
        .map((char, index) => {
          if (char === " ") {
            return " ";
          }

          if (index < revealCount) {
            return char;
          }

          return randomGlyph();
        })
        .join("");

      setDisplay(next);

      if (frame >= totalFrames) {
        stopAnimation();
      }
    }, 22);
  }, [chars, stopAnimation]);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <span
      className={`scramble-live-text-shell ${className}`.trim()}
      onMouseEnter={runAnimation}
      onFocus={runAnimation}
      onMouseLeave={stopAnimation}
      onBlur={stopAnimation}
      aria-label={text}
    >
      <span className="scramble-live-text-measure" aria-hidden="true">
        {text}
      </span>
      <span className="scramble-live-text-display">{display}</span>
    </span>
  );
}
