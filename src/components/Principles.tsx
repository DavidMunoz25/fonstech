import type { CSSProperties, ReactNode } from "react";
import styles from "./Principles.module.css";

const BRIGHT = ["#2A8FD6", "#2C6EDF", "#C6EFFE"];
const DEEP = ["#2599D6", "#1F66CC", "#9FE1FB"];
const SPARK = ["#3BB4F2", "#2C8BE6", "#E3F7FE"];

const glow = (radius: number, alpha: number): CSSProperties => ({
  filter: `drop-shadow(0 0 ${radius}px rgba(79, 195, 247, ${alpha}))`,
});

function Cube({
  faces,
  colors = BRIGHT,
}: {
  faces: [left: string, right: string, top: string];
  colors?: string[];
}) {
  return faces.map((points, i) => (
    <polygon key={points} points={points} fill={colors[i]} />
  ));
}

function Card({
  title,
  description,
  span,
  children,
}: {
  title: string;
  description: string;
  span: "wide" | "narrow";
  children: ReactNode;
}) {
  return (
    <article className={`fx-reveal ${styles.card} ${styles[span]}`}>
      <div className={styles.cardHead}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      {children}
    </article>
  );
}

// Tres bloques que crecen: cada etapa construye sobre la anterior.
function StagesArt() {
  return (
    <div className={styles.art}>
      <div className={styles.stages}>
        <svg viewBox="0 0 360 180" aria-hidden="true" className={styles.artSvg}>
          <ellipse cx="180" cy="176" rx="170" ry="8" fill="rgba(79, 195, 247, 0.10)" />
          <g className={styles.grow} style={{ animationDelay: "0s" }}>
            <Cube
              faces={[
                "20,116 60,139.1 60,173.1 20,150",
                "60,139.1 100,116 100,150 60,173.1",
                "20,116 60,92.9 100,116 60,139.1",
              ]}
            />
          </g>
          <g className={styles.grow} style={{ animationDelay: "0.08s" }}>
            <Cube
              faces={[
                "140,76 180,99.1 180,173.1 140,150",
                "180,99.1 220,76 220,150 180,173.1",
                "140,76 180,52.9 220,76 180,99.1",
              ]}
            />
          </g>
          <g className={styles.grow} style={{ animationDelay: "0.16s" }}>
            <g style={glow(18, 0.55)}>
              <Cube
                faces={[
                  "260,32 300,55.1 300,173.1 260,150",
                  "300,55.1 340,32 340,150 300,173.1",
                  "260,32 300,8.9 340,32 300,55.1",
                ]}
              />
            </g>
          </g>
        </svg>
        <div aria-hidden="true" className={styles.stageLabels}>
          <span>Etapa 1</span>
          <span>Etapa 2</span>
          <span className={styles.stageCurrent}>Etapa 3</span>
        </div>
      </div>
    </div>
  );
}

const TAILORED_PLATES = [
  { points: "112,70 150,48.1 188,70 150,91.9", active: true },
  { points: "70,94.2 108,72.3 146,94.2 108,116.2" },
  { points: "154,94.2 192,72.3 230,94.2 192,116.2" },
  { points: "28,118.5 66,96.5 104,118.5 66,140.4", active: true },
  { points: "112,118.5 150,96.5 188,118.5 150,140.4", active: true },
  { points: "196,118.5 234,96.5 272,118.5 234,140.4" },
  { points: "70,142.7 108,120.8 146,142.7 108,164.6" },
  { points: "154,142.7 192,120.8 230,142.7 192,164.6", active: true },
  { points: "112,166.9 150,145 188,166.9 150,188.9" },
];

const TAILORED_CUBES: [string, string, string][] = [
  [
    "128,40 150,52.7 150,82.7 128,70",
    "150,52.7 172,40 172,70 150,82.7",
    "128,40 150,27.3 172,40 150,52.7",
  ],
  [
    "44,94.5 66,107.2 66,131.2 44,118.5",
    "66,107.2 88,94.5 88,118.5 66,131.2",
    "44,94.5 66,81.8 88,94.5 66,107.2",
  ],
  [
    "128,80.5 150,93.2 150,131.2 128,118.5",
    "150,93.2 172,80.5 172,118.5 150,131.2",
    "128,80.5 150,67.8 172,80.5 150,93.2",
  ],
  [
    "170,118.7 192,131.4 192,155.4 170,142.7",
    "192,131.4 214,118.7 214,142.7 192,155.4",
    "170,118.7 192,106 214,118.7 192,131.4",
  ],
];

// Solo se construyen las piezas necesarias; las punteadas quedan sin pagar.
function TailoredArt() {
  return (
    <div className={styles.art}>
      <svg
        viewBox="22 -12 256 200"
        aria-hidden="true"
        className={styles.artSvg}
        style={{ maxWidth: 300 }}
      >
        {TAILORED_PLATES.map(({ points, active }) =>
          active ? (
            <polygon
              key={points}
              points={points}
              fill="rgba(79, 195, 247, 0.16)"
              stroke="rgba(79, 195, 247, 0.55)"
              strokeWidth="1.3"
            />
          ) : (
            <polygon
              key={points}
              points={points}
              fill="rgba(143, 211, 245, 0.04)"
              stroke="rgba(143, 211, 245, 0.30)"
              strokeWidth="1.3"
              strokeDasharray="4 5"
            />
          ),
        )}
        {TAILORED_CUBES.map((faces, i) => (
          <g
            key={faces[0]}
            className={styles.grow}
            style={{ animationDelay: `${(i * 0.07).toFixed(2)}s` }}
          >
            <g style={glow(12, 0.45)}>
              <Cube faces={faces} />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}

function IterationArt() {
  return (
    <div className={styles.art}>
      <svg
        viewBox="0 0 160 160"
        aria-hidden="true"
        className={styles.artSvg}
        style={{ maxWidth: 190 }}
      >
        <circle
          cx="80"
          cy="80"
          r="58"
          fill="none"
          stroke="rgba(79, 195, 247, 0.10)"
          strokeWidth="14"
        />
        <g className={styles.spin}>
          <path
            d="M90.1 22.9 A58 58 0 0 1 99.8 134.5"
            fill="none"
            stroke="#4FC3F7"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <polygon points="91.4,137.6 102.2,141.1 97.4,127.9" fill="#4FC3F7" />
          <path
            d="M69.9 137.1 A58 58 0 0 1 60.2 25.5"
            fill="none"
            stroke="#2C6EDF"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <polygon points="68.6,22.4 57.8,18.9 62.6,32.1" fill="#2C6EDF" />
        </g>
        <g style={glow(12, 0.5)}>
          <Cube
            faces={[
              "60,64 80,75.5 80,97.5 60,86",
              "80,75.5 100,64 100,86 80,97.5",
              "60,64 80,52.5 100,64 80,75.5",
            ]}
          />
        </g>
      </svg>
    </div>
  );
}

const SUPPORT_CUBE: [string, string, string] = [
  "9,13 24,21.7 24,36.7 9,28",
  "24,21.7 39,13 39,28 24,36.7",
  "9,13 24,4.3 39,13 24,21.7",
];

function SupportStage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.supportStage}>
      <span className={styles.supportIcon}>
        <svg
          viewBox="0 0 48 48"
          width="88%"
          height="88%"
          aria-hidden="true"
          className={styles.artSvg}
        >
          {children}
        </svg>
      </span>
      <span className={styles.supportTitle}>{title}</span>
      <span className={styles.supportDescription}>{description}</span>
    </div>
  );
}

function SupportArt() {
  return (
    <div className={styles.supportArt}>
      <div className={styles.supportTrack}>
        <span aria-hidden="true" className={styles.supportLine} />
        <SupportStage title="Entrega" description="Tu software en operación">
          <g style={glow(7, 0.75)}>
            <Cube faces={SUPPORT_CUBE} />
          </g>
        </SupportStage>
        <SupportStage title="Soporte" description="Atendemos fallas y dudas">
          <ellipse
            className={styles.ring}
            cx="24"
            cy="35"
            rx="22"
            ry="8"
            fill="none"
            stroke="#4FC3F7"
            strokeWidth="1.6"
          />
          <Cube faces={SUPPORT_CUBE} colors={DEEP} />
        </SupportStage>
        <SupportStage title="Mejoras" description="Nuevas funciones por etapa">
          <Cube faces={SUPPORT_CUBE} colors={DEEP} />
          <g className={styles.float}>
            <g style={glow(6, 0.8)}>
              <Cube
                colors={SPARK}
                faces={[
                  "33,-5 39,-1.5 39,4.5 33,1",
                  "39,-1.5 45,-5 45,1 39,4.5",
                  "33,-5 39,-8.5 45,-5 39,-1.5",
                ]}
              />
            </g>
          </g>
        </SupportStage>
      </div>
    </div>
  );
}

export function Principles() {
  return (
    <section id="principios" className={styles.section}>
      <div className={styles.inner}>
        <div className={`fx-reveal ${styles.intro}`}>
          <h2 className={styles.title}>
            Cómo
            <br />
            trabajamos.
          </h2>
          <p className={styles.lede}>
            Un modelo pensado para que inviertas con claridad y veas avances desde
            la primera etapa.
          </p>
        </div>
        <div className={styles.bento}>
          <Card
            span="wide"
            title="Inversión por etapas"
            description="Empezamos con lo esencial y hacemos crecer tu software al ritmo de tu negocio."
          >
            <StagesArt />
          </Card>
          <Card
            span="narrow"
            title="Pensado para pymes y startups"
            description="Soluciones a la medida, sin pagar por funciones que no necesitas."
          >
            <TailoredArt />
          </Card>
          <Card
            span="narrow"
            title="Iteramos contigo"
            description="Revisamos cada entrega contigo y ajustamos de ser necesario hasta que resuelva lo que tu negocio necesita."
          >
            <IterationArt />
          </Card>
          <Card
            span="wide"
            title="Acompañamiento continuo"
            description="Después de entregar seguimos contigo con mantenimiento y mejoras."
          >
            <SupportArt />
          </Card>
        </div>
      </div>
    </section>
  );
}
