import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import styles from "./form-controls.module.css";

type PrimaryLinkProps = Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "className"
> & {
  endIcon?: ReactNode;
  shape?: "rounded" | "pill";
};

export function PrimaryLink({
  children,
  endIcon,
  shape = "rounded",
  ...linkProps
}: PrimaryLinkProps) {
  return (
    <Link
      className={`${styles.primaryButton} ${shape === "pill" ? styles.pill : ""}`}
      {...linkProps}
    >
      {children}
      {endIcon && (
        <span className={styles.endIcon} aria-hidden="true">
          {endIcon}
        </span>
      )}
    </Link>
  );
}
