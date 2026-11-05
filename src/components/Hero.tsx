import { Fragment } from "react";
import { ARM_FACES, Faces, SLAB_FACES, STEM_FACES, Wordmark } from "./brand";
import styles from "./Hero.module.css";
import { TiltSection } from "./TiltSection";

const TITLE_WORDS = [
  { text: "Software" },
  { text: "a", accent: true },
  { text: "la", accent: true },
  { text: "medida", accent: true },
  { text: "de" },
  { text: "tu" },
  { text: "negocio." },
];

export function Hero() {
  return (
    <TiltSection id="inicio" className={styles.section}>
      <div aria-hidden="true" className={styles.pattern} />

      <div className={styles.inner}>
        {/* Mensaje + CTA: visibles desde el primer instante */}
        <div className={styles.copy}>
          <h1 className={styles.title}>
            {TITLE_WORDS.map(({ text, accent }, i) => (
              <Fragment key={text}>
                <span className={styles.word}>
                  <span
                    className={
                      accent
                        ? `${styles.wordInner} ${styles.accent}`
                        : styles.wordInner
                    }
                    style={{ animationDelay: `${(0.1 + i * 0.07).toFixed(2)}s` }}
                  >
                    {text}
                  </span>
                </span>{" "}
              </Fragment>
            ))}
          </h1>
          <p
            className={`fx-in ${styles.sub}`}
            style={{ animationDelay: "0.3s" }}
          >
            Para <span className={styles.subStrong}>pymes y startups</span>.
            Empezamos por lo esencial e iteramos contigo.
          </p>
          <div
            className={`fx-in ${styles.actions}`}
            style={{ animationDelay: "0.35s" }}
          >
            <a href="#contacto" className={styles.primary}>
              Cotiza tu proyecto
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#servicios" className={styles.ghost}>
              Ver servicios
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Logo animado (arriba en móvil, a la derecha en escritorio) */}
        <div className={styles.logoColumn}>
          <div className={styles.mark}>
            <div aria-hidden="true" className={styles.halo} />
            <div className={styles.tilt}>
              <div className={styles.logo}>
                <svg
                  viewBox="150 430 296 420"
                  role="img"
                  aria-label="Isotipo de Fonstech"
                  className={styles.logoSvg}
                >
                  <ellipse
                    className={styles.ground}
                    cx="238"
                    cy="834"
                    rx="105"
                    ry="11"
                    fill="url(#gGlow)"
                  />
                  <g className={styles.stem}>
                    <Faces faces={STEM_FACES} />
                  </g>
                  <g className={styles.slab}>
                    <Faces faces={SLAB_FACES} />
                  </g>
                  <g className={styles.arm}>
                    <Faces faces={ARM_FACES} />
                  </g>
                  <g clipPath="url(#cMark)" aria-hidden="true">
                    <rect
                      className={styles.shine}
                      x="110"
                      y="420"
                      width="64"
                      height="440"
                      fill="url(#gShine)"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.lockup}>
            <Wordmark
              role="img"
              aria-label="Fonstech"
              className={styles.wordmark}
            />
            <svg
              viewBox="0 0 429 34"
              role="img"
              aria-label="Software Solutions"
              className={styles.tagline}
            >
              <use href="#fsSub" width="429" height="34" fill="#3BA7E8" />
            </svg>
          </div>
        </div>
      </div>
    </TiltSection>
  );
}
