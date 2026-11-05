import { Fragment } from "react";
import styles from "./Marquee.module.css";

const ITEMS = [
  { label: "Consultoría" },
  { label: "Software a la medida", accent: true },
  { label: "Software embebido" },
  { label: "Mantenimiento", accent: true },
  { label: "Pymes y startups" },
];

// La lista va duplicada para que el bucle a -50% no tenga corte visible.
const LOOP = [...ITEMS, ...ITEMS];

export function Marquee() {
  return (
    <div aria-hidden="true" className={styles.marquee}>
      <div className={styles.track}>
        {LOOP.map(({ label, accent }, i) => (
          <Fragment key={i}>
            <span className={accent ? styles.accent : styles.label}>{label}</span>
            <svg viewBox="0 0 24 24" className={styles.gem}>
              <polygon points="12,2 22,7.8 12,13.6 2,7.8" fill="#BFEAFB" />
              <polygon points="2,7.8 12,13.6 12,24 2,18.2" fill="#2A8FD6" />
              <polygon points="12,13.6 22,7.8 22,18.2 12,24" fill="#2C6EDF" />
            </svg>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
