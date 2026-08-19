import type { ComponentPropsWithoutRef } from "react";
import styles from "./form-controls.module.css";

type PrimaryButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "className"
> & {
  shape?: "rounded" | "pill";
};

export function PrimaryButton({
  children,
  shape = "rounded",
  type = "button",
  ...buttonProps
}: PrimaryButtonProps) {
  return (
    <button
      className={`${styles.primaryButton} ${shape === "pill" ? styles.pill : ""}`}
      type={type}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
