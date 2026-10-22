import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PreorderButton from "./PreorderButton";
import { BallotCube } from "./Doodles";
import styles from "./Nav.module.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/chapters", label: "Chapters" },
  { to: "/author", label: "Author" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <NavLink to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <BallotCube className={styles.brandMark} />
          The Rainbow Vote
        </NavLink>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.desktopCta}>
          <PreorderButton size="sm" label="Pre-order" />
        </div>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          <span className={`${styles.burger} ${open ? styles.burgerOpen : ""}`} aria-hidden="true" />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}
        aria-hidden={!open}
      >
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink
                }
                tabIndex={open ? 0 : -1}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.mobileCta}>
          <PreorderButton />
        </div>
      </div>
    </header>
  );
}
