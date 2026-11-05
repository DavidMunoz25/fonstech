import { CONTACT_EMAIL, CONTACT_HREF } from "@/lib/site";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={`fx-reveal ${styles.title}`}>
          ¿Tienes un proyecto en mente?
        </h2>
        <div className={styles.body}>
          <div className={`fx-reveal ${styles.pitch}`}>
            <p className={styles.lede}>
              Cuéntanos qué necesitas. Te enviamos una propuesta con alcance,
              etapas y costo.
            </p>
            <a href={CONTACT_HREF} className={styles.mail}>
              {CONTACT_EMAIL}
            </a>
          </div>
          {/* El reveal va en un contenedor: su fill anularía el transform del hover. */}
          <div className={`fx-reveal ${styles.circleSlot}`}>
            <a href={CONTACT_HREF} className={styles.circle}>
              Escríbenos
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M8 7h9v9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
