"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PrimaryLink } from "@/components/forms/PrimaryLink";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { PaginationDots } from "@/components/navigation/PaginationDots";
import styles from "./page.module.css";

const slides = [
  "/images/initial-screen/initial-background.webp",
  "/images/initial-screen/initial-background-2.webp",
  "/images/initial-screen/initial-background-3.webp",
];

const swipeThreshold = 44;

export function InitialScreenCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    function handleTouchStart(event: TouchEvent) {
      if (event.touches.length !== 1) {
        touchStart.current = null;
        return;
      }

      const touch = event.touches[0];
      touchStart.current = { x: touch.clientX, y: touch.clientY };
    }

    function handleTouchEnd(event: TouchEvent) {
      const start = touchStart.current;
      const touch = event.changedTouches[0];
      touchStart.current = null;

      if (!start || !touch) return;

      const distanceX = touch.clientX - start.x;
      const distanceY = touch.clientY - start.y;

      if (
        Math.abs(distanceX) < swipeThreshold ||
        Math.abs(distanceX) <= Math.abs(distanceY)
      ) {
        return;
      }

      setActiveIndex((currentIndex) =>
        distanceX < 0
          ? (currentIndex + 1) % slides.length
          : (currentIndex - 1 + slides.length) % slides.length,
      );
    }

    function handleTouchCancel() {
      touchStart.current = null;
    }

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });
    document.addEventListener("touchcancel", handleTouchCancel, {
      passive: true,
    });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchcancel", handleTouchCancel);
    };
  }, []);

  return (
    <>
      <Image
        alt=""
        className={styles.background}
        height={1592}
        key={activeIndex}
        preload={activeIndex === 0}
        sizes="100vw"
        src={slides[activeIndex]}
        width={1206}
      />

      <footer className={styles.footer}>
        <PrimaryLink
          endIcon={<ArrowRightIcon />}
          href="/create-account"
          shape="pill"
        >
          Comienza este viaje
        </PrimaryLink>
        <div className={styles.pagination}>
          <PaginationDots
            activeIndex={activeIndex}
            count={slides.length}
            onChange={setActiveIndex}
          />
        </div>
      </footer>
    </>
  );
}
