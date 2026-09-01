import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./form-controls.module.css";

type FormFieldProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "className" | "id" | "size"
> & {
  hideLabel?: boolean;
  icon?: ReactNode;
  id: string;
  label: string;
  labelSpacing?: "regular" | "tight";
  size?: "regular" | "compact";
};

export function FormField({
  hideLabel = false,
  icon,
  id,
  label,
  labelSpacing = "regular",
  size = "regular",
  ...inputProps
}: FormFieldProps) {
  return (
    <div
      className={`${styles.field} ${size === "compact" ? styles.compact : ""} ${labelSpacing === "tight" ? styles.tightLabel : ""}`}
    >
      <label
        className={`${styles.label} ${hideLabel ? styles.hiddenLabel : ""}`}
        htmlFor={id}
      >
        {label}
        {inputProps.required && (
          <span aria-hidden="true" className={styles.requiredMark}>
            {" "}
            *
          </span>
        )}
      </label>
      <div className={styles.inputWrap}>
        <input
          className={`${styles.input} ${icon ? styles.withIcon : ""}`}
          id={id}
          {...inputProps}
        />
        {icon && (
          <span aria-hidden="true" className={styles.inputIcon}>
            {icon}
          </span>
        )}
      </div>
    </div>
  );
}
