import styles from "./Services.module.css";

const SERVICES = [
  {
    title: "Software a la medida",
    description:
      "Sistemas, plataformas web y aplicaciones hechas para cómo trabaja tu negocio, desde la consultoría inicial hasta la entrega.",
  },
  {
    title: "Software embebido",
    description:
      "Firmware y software para dispositivos electrónicos y equipos conectados.",
  },
  {
    title: "Mantenimiento",
    description:
      "Corrección de errores, actualizaciones y mejoras para que tu software siga funcionando y crezca contigo.",
  },
];

export function Services() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.inner}>
        <div className={`fx-reveal ${styles.intro}`}>
          <h2 className={styles.title}>
            Lo que
            <br />
            hacemos.
          </h2>
          <p className={styles.lede}>
            Consultoría y desarrollo de principio a fin. Priorizamos lo que más
            valor genera para tu negocio.
          </p>
        </div>

        <div className={styles.list}>
          {SERVICES.map(({ title, description }) => (
            <article key={title} className={`fx-reveal ${styles.item}`}>
              <h3 className={styles.itemTitle}>{title}</h3>
              <div className={styles.itemBody}>
                <p className={styles.itemDescription}>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
