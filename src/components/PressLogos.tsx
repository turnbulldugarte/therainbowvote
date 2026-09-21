import { useEffect, useState } from "react";
import { pressLogos } from "../data/press";
import styles from "./PressLogos.module.css";

function Logo({ name, src, tile }: { name: string; src: string; tile?: boolean }) {
  return (
    <li className={`${styles.tile} ${tile ? styles.solid : ""}`}>
      <img src={src} alt={name} className={styles.logo} decoding="async" />
    </li>
  );
}

export default function PressLogos() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  if (reducedMotion) {
    return (
      <ul className={`${styles.track} ${styles.static}`} aria-label="Press outlets">
        {pressLogos.map((p) => (
          <Logo key={p.name} {...p} />
        ))}
      </ul>
    );
  }

  return (
    <div className={styles.marquee}>
      <div className={styles.rail}>
        <ul className={styles.track} aria-label="Press outlets">
          {pressLogos.map((p) => (
            <Logo key={p.name} {...p} />
          ))}
        </ul>
        <ul className={styles.track} aria-hidden="true">
          {pressLogos.map((p) => (
            <Logo key={p.name} {...p} />
          ))}
        </ul>
      </div>
    </div>
  );
}
