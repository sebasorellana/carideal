import type { ReactNode } from "react";
import styles from "./bordered-panel.module.css";

type BorderedPanelProps = {
  children: ReactNode;
};

export function BorderedPanel({ children }: BorderedPanelProps) {
  return <div className={styles.panel}>{children}</div>;
}
