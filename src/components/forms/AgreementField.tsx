import { CheckIcon } from "@/components/icons/CheckIcon";
import styles from "./form-controls.module.css";

type AgreementFieldProps = {
  id: string;
};

export function AgreementField({ id }: AgreementFieldProps) {
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
        <span>Acepto</span>
      </label>
      <a className={styles.termsLink} href="#terminos">
        Términos y condiciones
      </a>
    </div>
  );
}
