import { Link } from "react-router-dom";
import PreorderButton from "./PreorderButton";
import { AUTHOR_NAME, AUTHOR_WEBSITE, PUB_DATE_DISPLAY } from "../data/site";
import { BallotCube } from "./Doodles";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} bg-ink`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <BallotCube className={styles.cube} />
          <h2 className={styles.title}>The Rainbow Vote</h2>
          <p className={styles.tagline}>
            How LGBTQ+ voters think, what they want, and how to win their ballot.
            <br />
            By {AUTHOR_NAME}. Publishing {PUB_DATE_DISPLAY}.
          </p>
          <PreorderButton size="sm" variant="invert" />
        </div>

        <nav className={styles.links} aria-label="Footer">
          <span className={styles.colHeading}>Site</span>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chapters">Chapters</Link></li>
            <li><Link to="/author">Author</Link></li>
          </ul>
        </nav>

        <div className={styles.links}>
          <span className={styles.colHeading}>Elsewhere</span>
          <ul>
            <li>
              <a href={AUTHOR_WEBSITE} target="_blank" rel="noopener noreferrer">
                turnbulldugarte.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.legal}`}>
        <p>© {new Date().getFullYear()} {AUTHOR_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
