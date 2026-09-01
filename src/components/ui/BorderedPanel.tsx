import type { ReactNode } from "react";
import styles from "./bordered-panel.module.css";

type BorderedPanelProps = {
  children: ReactNode;
  compact?: boolean;
};

export function BorderedPanel({ children, compact = false }: BorderedPanelProps) {
  return (
    <div className={`${styles.panel} ${compact ? styles.compact : ""}`}>
      {children}
    </div>
  );
}
