import type { ReactNode } from "react";
import { PrimaryLink } from "@/components/forms/PrimaryLink";
import { CheckIcon } from "@/components/icons/CheckIcon";
import layoutStyles from "@/components/layout/screen-layout.module.css";
import styles from "./success-screen.module.css";

type SuccessScreenProps = {
  actionHref: string;
  actionLabel: string;
  caption?: ReactNode;
  className?: string;
  message: ReactNode;
  title: string;
  titleId: string;
};

export function SuccessScreen({
  actionHref,
  actionLabel,
  caption,
  className,
  message,
  title,
  titleId,
}: SuccessScreenProps) {
  return (
    <main className={`${layoutStyles.page} ${className ?? ""}`}>
      <section
        aria-labelledby={titleId}
        className={`${layoutStyles.content} ${styles.content}`}
      >
        <span aria-hidden="true" className={styles.badge}>
          <CheckIcon />
        </span>

        <h1 className={styles.title} id={titleId}>
          {title}
        </h1>

        <p className={styles.message}>{message}</p>

        {caption && <p className={styles.caption}>{caption}</p>}

        <div className={styles.action}>
          <PrimaryLink href={actionHref} shape="pill">
            {actionLabel}
          </PrimaryLink>
        </div>
      </section>
    </main>
  );
}
