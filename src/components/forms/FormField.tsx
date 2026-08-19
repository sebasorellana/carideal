import type { ComponentPropsWithoutRef } from "react";
import styles from "./form-controls.module.css";

type FormFieldProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "className" | "id" | "size"
> & {
  id: string;
  label: string;
  size?: "regular" | "compact";
};

export function FormField({
  id,
  label,
  size = "regular",
  ...inputProps
}: FormFieldProps) {
  return (
    <div
      className={`${styles.field} ${size === "compact" ? styles.compact : ""}`}
    >
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} id={id} {...inputProps} />
    </div>
  );
}
