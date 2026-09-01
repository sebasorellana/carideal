import styles from "./desktop-notice.module.css";

export function DesktopNotice() {
  return (
    <div className={styles.notice}>
      <p className={styles.message}>
        Diseño y desarrollo de la webapp para escritorio aún pendiente.
      </p>
    </div>
  );
}
