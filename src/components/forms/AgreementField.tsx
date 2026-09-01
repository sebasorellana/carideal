import Link from "next/link";
import { CheckIcon } from "@/components/icons/CheckIcon";
import styles from "./form-controls.module.css";

type AgreementFieldProps = {
  href?: string;
  id: string;
  linkLabel?: string;
  prefix?: string;
};

export function AgreementField({
  href = "/terms-and-conditions",
  id,
  linkLabel = "Términos y condiciones",
  prefix = "Acepto",
}: AgreementFieldProps) {
  return (
    <div className={styles.agreement}>
      <input
        className={styles.checkboxInput}
        id={id}
        type="checkbox"
        defaultChecked
      />
      <label className={styles.checkboxLabel} htmlFor={id}>
        <span className={styles.checkbox} aria-hidden="true">
          <CheckIcon />
        </span>
        <span>{prefix}</span>
      </label>
      <Link className={styles.termsLink} href={href}>
        {linkLabel}
      </Link>
    </div>
  );
}
