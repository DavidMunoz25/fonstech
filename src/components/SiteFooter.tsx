import { CONTACT_EMAIL, CONTACT_HREF, NAV_LINKS } from "@/lib/site";
import { MarkIcon, Wordmark } from "./brand";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.about}>
            <MarkIcon width={34} height={46} />
            <p className={styles.aboutText}>
              Software a la medida, software embebido y mantenimiento para pymes y
              startups.
            </p>
          </div>
          <div className={styles.columns}>
            <nav aria-label="Pie de página" className={styles.column}>
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`${styles.link} ${styles.columnLink}`}
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className={styles.column}>
              <a
                href={CONTACT_HREF}
                className={`${styles.link} ${styles.columnLink}`}
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
        <Wordmark
          fill="url(#gFoot)"
          aria-hidden="true"
          className={styles.wordmark}
        />
        <div className={styles.legal}>
          <span>© 2026 Fonstech — Software Solutions</span>
          <a href="#inicio" className={`${styles.link} ${styles.toTop}`}>
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
