"use client";

import { useRef } from "react";
import { CONTACT_EMAIL, NAV_LINKS } from "@/lib/site";
import { MarkIcon, Wordmark } from "./brand";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  // <dialog> nativo: aporta Esc, foco atrapado y devolución del foco al cerrar.
  const menuRef = useRef<HTMLDialogElement>(null);
  const openMenu = () => menuRef.current?.showModal();
  const closeMenu = () => menuRef.current?.close();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.glass}>
          <a
            href="#inicio"
            aria-label="Fonstech, ir al inicio"
            className={styles.brand}
          >
            <MarkIcon width={22} height={30} />
            <Wordmark width="118" height="12.9" aria-hidden="true" />
          </a>
          <div className={styles.actions}>
            <a href="#contacto" className={styles.cta}>
              Hablemos
            </a>
            <button
              type="button"
              aria-label="Menú"
              aria-haspopup="dialog"
              aria-controls="menu"
              onClick={openMenu}
              className={`${styles.pill} ${styles.menuToggle}`}
            >
              <span className={styles.menuLabel}>Menú</span>
              <span aria-hidden="true" className={styles.burger}>
                <span className={styles.burgerLong} />
                <span className={styles.burgerShort} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hermano del header: su backdrop-filter atraparía cualquier hijo con position: fixed. */}
      <dialog id="menu" ref={menuRef} aria-label="Menú" className={styles.menu}>
        <div className={styles.menuBar}>
          <Wordmark width="118" height="12.9" aria-hidden="true" />
          <button
            type="button"
            onClick={closeMenu}
            className={`${styles.pill} ${styles.menuClose}`}
          >
            Cerrar
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>
        <nav aria-label="Menú principal" className={styles.menuNav}>
          {NAV_LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className={styles.menuLink}
              style={{ animationDelay: `${(0.25 + i * 0.07).toFixed(2)}s` }}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className={styles.menuMeta}>
          <span>{CONTACT_EMAIL}</span>
          <span>Software Solutions</span>
        </div>
      </dialog>
    </>
  );
}
