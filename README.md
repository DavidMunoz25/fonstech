# Fonstech

Landing de Fonstech en Next.js (App Router, TypeScript y CSS Modules).

## Desarrollo

```bash
npm install
npm run dev
```

La página queda en http://localhost:3000.

| Comando         | Qué hace                       |
| --------------- | ------------------------------ |
| `npm run dev`   | Servidor de desarrollo         |
| `npm run build` | Compilación de producción      |
| `npm run start` | Sirve la compilación           |
| `npm run lint`  | ESLint                         |

## Estructura

- `src/app/`: layout, página, estilos globales (tokens de diseño) y favicon.
- `src/components/`: una sección por componente, cada una con su `.module.css`.
- `src/lib/site.ts`: correo de contacto y enlaces de navegación.
- `design-reference/`: el mockup original, solo como referencia visual.

## Antes de publicar

Reemplaza `CONTACT_EMAIL` en `src/lib/site.ts`: todavía tiene el marcador
`[CORREO DE CONTACTO]` que venía en el mockup.
