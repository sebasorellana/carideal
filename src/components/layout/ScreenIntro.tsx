import type { ReactNode } from "react";
import styles from "./screen-intro.module.css";

type ScreenIntroProps = {
  accent?: boolean;
  children?: ReactNode;
  title: ReactNode;
  titleId: string;
};

export function ScreenIntro({
  accent = true,
  children,
  title,
  titleId,
}: ScreenIntroProps) {
  return (
    <header
      className={`${styles.intro} ${accent ? "" : styles.withoutAccent} ${children ? "" : styles.withoutSubtitle}`}
    >
      <h1 className={styles.title} id={titleId}>
        {title}
      </h1>
      {accent && <span className={styles.accent} aria-hidden="true" />}
      {children && <p className={styles.subtitle}>{children}</p>}
    </header>
  );
}
