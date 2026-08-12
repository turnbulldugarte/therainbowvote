import { Link } from "react-router-dom";
import { AUTHOR_NAME } from "../data/site";
import { IconStarburst } from "./Doodles";
import { useReveal } from "../hooks/useReveal";
import styles from "./AuthorTeaser.module.css";

export default function AuthorTeaser() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${styles.wrap}`}>
      <div className={styles.monogram}>
        <img
          src="/media/author-portrait.webp"
          alt={`Portrait of ${AUTHOR_NAME}`}
          className={styles.portrait}
          width={634}
          height={640}
        />
        <IconStarburst className={styles.star} />
      </div>
      <div>
        <span className={`eyebrow ${styles.eyebrow}`}>About the author</span>
        <h2 className={styles.name}>{AUTHOR_NAME}</h2>
        <p className={styles.bio}>
          An award-winning political scientist and Associate Professor at the University of
          Southampton. His research on LGBTQ+ electoral behaviour has featured in the BBC,
          the Economist, the Financial Times, the Guardian, and Pink News.
        </p>
        <Link to="/author" className="btn btn-ghost">
          More about the author →
        </Link>
      </div>
    </div>
  );
}
