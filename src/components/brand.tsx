import type { SVGProps } from "react";
import { SUBTITLE_PATH, WORDMARK_PATH } from "./brandPaths";

type Face = { points: string; fill: string };

// Caras del isotipo, agrupadas por las tres piezas que se ensamblan en el hero.
export const STEM_FACES: Face[] = [
  { points: "220,640 251.7,621.7 313,657.3 281.7,675.3", fill: "#2297D5" },
  { points: "160,605 220,640 220,781.3 160,746.7", fill: "url(#gL1)" },
  { points: "220,640 281.7,675.3 281.7,818.3 220,781.3", fill: "url(#gL2)" },
  { points: "281.7,675.3 311.7,658 311.7,801 281.7,818.3", fill: "url(#gSFr)" },
];

export const SLAB_FACES: Face[] = [
  {
    points: "160,533.3 311.7,445 436,515 375,551 311.7,515 220,568.3",
    fill: "url(#gST)",
  },
  { points: "160,533.3 220,568.3 220,640 160,605", fill: "url(#gSL)" },
  { points: "220,568.3 311.7,515 311.7,586.7 220,640", fill: "url(#gNW)" },
  { points: "311.7,515 375,551 375,622.7 311.7,586.7", fill: "url(#gSI)" },
  { points: "375,551 436,515 436,586.7 375,622.7", fill: "url(#gSF)" },
];

export const ARM_FACES: Face[] = [
  { points: "251.7,586.7 311.7,550 436,623.3 375,657.7", fill: "url(#gAT)" },
  { points: "251.7,586.7 375,657.7 375,728.3 251.7,657.3", fill: "url(#gAL)" },
  { points: "375,657.7 436,623.3 436,694 375,728.3", fill: "url(#gAF)" },
];

const ALL_FACES = [...STEM_FACES, ...SLAB_FACES, ...ARM_FACES];

const FACE_GRADIENTS = [
  { id: "gST", x1: 311, y1: 445, x2: 380, y2: 560, from: "#C6EFFE", to: "#A2E3FC" },
  { id: "gSL", x1: 160, y1: 533, x2: 220, y2: 640, from: "#B0E9FC", to: "#7DD0F6" },
  { id: "gNW", x1: 220, y1: 570, x2: 311, y2: 590, from: "#9FE1FB", to: "#8CD5F5" },
  { id: "gSI", x1: 312, y1: 520, x2: 375, y2: 560, from: "#B8EAFC", to: "#92DBF9" },
  { id: "gSF", x1: 375, y1: 551, x2: 436, y2: 587, from: "#82D3F7", to: "#62BCF1" },
  { id: "gAT", x1: 300, y1: 560, x2: 400, y2: 650, from: "#58CEFC", to: "#27AFEF" },
  { id: "gAL", x1: 252, y1: 590, x2: 375, y2: 728, from: "#2699D6", to: "#1371A6" },
  { id: "gAF", x1: 375, y1: 660, x2: 436, y2: 694, from: "#2BAAE5", to: "#1C92D0" },
  { id: "gL1", x1: 160, y1: 605, x2: 220, y2: 780, from: "#349DDE", to: "#1878BB" },
  { id: "gL2", x1: 220, y1: 645, x2: 282, y2: 818, from: "#2D7ADE", to: "#1E55AE" },
  { id: "gSFr", x1: 282, y1: 675, x2: 312, y2: 815, from: "#3982E6", to: "#1F66CC" },
];

export function Faces({ faces }: { faces: Face[] }) {
  return faces.map((face) => <polygon key={face.points} {...face} />);
}

// Definiciones compartidas: isotipo, wordmark y degradados calcados del branding.
export function BrandDefs() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        {FACE_GRADIENTS.map(({ id, from, to, ...coords }) => (
          <linearGradient key={id} id={id} gradientUnits="userSpaceOnUse" {...coords}>
            <stop offset="0" stopColor={from} />
            <stop offset="1" stopColor={to} />
          </linearGradient>
        ))}
        <linearGradient id="gShine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="gGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#4FC3F7" stopOpacity="0.45" />
          <stop offset="1" stopColor="#4FC3F7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gFoot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1A4A74" />
          <stop offset="1" stopColor="#0A2034" />
        </linearGradient>
        <clipPath id="cMark">
          {ALL_FACES.map(({ points }) => (
            <polygon key={points} points={points} />
          ))}
        </clipPath>
        <symbol id="fsMark" viewBox="156 441 284 382">
          <Faces faces={ALL_FACES} />
        </symbol>
        <symbol id="fsWord" viewBox="58.0 -720.0 6569.9 720.0">
          <path d={WORDMARK_PATH} />
        </symbol>
        <symbol id="fsSub" viewBox="690 731 429 34">
          <path d={SUBTITLE_PATH} fillRule="evenodd" />
        </symbol>
      </defs>
    </svg>
  );
}

export function MarkIcon({ width, height }: { width: number; height: number }) {
  return (
    <svg viewBox="0 0 284 382" width={width} height={height} aria-hidden="true">
      <use href="#fsMark" width="284" height="382" />
    </svg>
  );
}

export function Wordmark({
  fill = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 640 70.1" {...props}>
      <use href="#fsWord" width="640" height="70.1" fill={fill} />
    </svg>
  );
}
