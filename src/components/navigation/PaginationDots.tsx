import styles from "./pagination-dots.module.css";

type PaginationDotsProps = {
  activeIndex: number;
  count: number;
  onChange?: (index: number) => void;
};

export function PaginationDots({
  activeIndex,
  count,
  onChange,
}: PaginationDotsProps) {
  return (
    <nav
      className={styles.dots}
      aria-label={`Diapositiva ${activeIndex + 1} de ${count}`}
    >
      {Array.from({ length: count }, (_, index) => {
        const className = `${styles.dot} ${index === activeIndex ? styles.active : ""}`;

        if (onChange) {
          return (
            <button
              aria-label={`Ir al paso ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`${className} ${styles.button}`}
              key={index}
              onClick={() => onChange(index)}
              type="button"
            />
          );
        }

        return <span className={className} key={index} />;
      })}
    </nav>
  );
}
