"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import styles from "./page.module.css";

const CELEBRATION_GIF =
  "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif";

const RUN_AWAY_RADIUS = 120;
const CONFETTI_DURATION = 3000;

export default function ValentinePage() {
  const [accepted, setAccepted] = useState(false);
  const [isRunningAway, setIsRunningAway] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 50, y: 50 });
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const lastMoveRef = useRef(0);

  const fireConfetti = useCallback(() => {
    const end = Date.now() + CONFETTI_DURATION;
    const colors = ["#ff69b4", "#ff1493", "#ffb6c1", "#ffc0cb", "#fff"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
      confetti({
        particleCount: 5,
        spread: 100,
        origin: { y: 0.6 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  const handleYes = useCallback(() => {
    setAccepted(true);
    fireConfetti();
  }, [fireConfetti]);

  useEffect(() => {
    if (!noButtonRef.current || accepted) return;

    const handleMouseMove = (e: MouseEvent) => {
      const btn = noButtonRef.current;
      if (!btn) return;
      const now = Date.now();
      if (now - lastMoveRef.current < 80) return;
      lastMoveRef.current = now;

      const rect = btn.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;
      const dx = e.clientX - btnCenterX;
      const dy = e.clientY - btnCenterY;
      const distance = Math.hypot(dx, dy);

      if (distance < RUN_AWAY_RADIUS) {
        if (!isRunningAway) {
          const xPct = (btnCenterX / window.innerWidth) * 100;
          const yPct = (btnCenterY / window.innerHeight) * 100;
          setNoButtonPos({ x: xPct, y: yPct });
          setIsRunningAway(true);
        } else {
          const padding = 12;
          const newX = padding + Math.random() * (100 - 2 * padding);
          const newY = padding + Math.random() * (100 - 2 * padding);
          setNoButtonPos({ x: newX, y: newY });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [accepted, isRunningAway]);

  if (accepted) {
    return (
      <main className={styles.main}>
        <div className={styles.celebration}>
          <h1 className={styles.celebrationTitle}>Yay!! 💕</h1>
          <p className={styles.celebrationSub}>You made my day! 💖</p>
          <div className={styles.gifWrap}>
            <img
              src={CELEBRATION_GIF}
              alt="Celebration"
              className={styles.gif}
            />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.question}>Will you be my Valentine? 💖</h1>
        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.yesButton}
            onClick={handleYes}
            aria-label="Yes"
          >
            Yes
          </button>
          <button
            ref={noButtonRef}
            type="button"
            className={`${styles.noButton} ${isRunningAway ? styles.noButtonRunning : ""}`}
            style={
              isRunningAway
                ? {
                    left: `${noButtonPos.x}%`,
                    top: `${noButtonPos.y}%`,
                    transform: "translate(-50%, -50%)",
                  }
                : undefined
            }
            aria-label="No (runs away)"
          >
            No
          </button>
        </div>
      </div>
    </main>
  );
}
