import styles from "./Process.module.css";

const STEPS = [
  {
    title: "Diagnóstico",
    description: "Entendemos tu negocio y lo que necesitas resolver.",
  },
  {
    title: "Propuesta",
    description:
      "Definimos alcance, etapas y costo. Desde el inicio sabes qué recibes y cuánto inviertes.",
  },
  {
    title: "Desarrollo",
    description:
      "Construimos por etapas, revisamos avances contigo e iteramos de ser necesario.",
  },
  {
    title: "Mantenimiento",
    description: "Después de la entrega seguimos contigo con soporte y mejoras.",
  },
];

export function Process() {
  return (
    <section id="proceso">
      <div className={styles.inner}>
        <div className={`fx-reveal ${styles.intro}`}>
          <h2 className={styles.title}>Bloque por bloque.</h2>
          <p className={styles.lede}>
            Como en nuestro logo, cada pieza encaja antes de pasar a la siguiente.
            Avanzamos por etapas para que inviertas con control.
          </p>
        </div>
        <ol className={styles.steps}>
          {STEPS.map(({ title, description }, i) => (
            <li key={title} className={`fx-reveal ${styles.step}`}>
              <span aria-hidden="true" className={styles.stepNumber}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepDescription}>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
