import PreorderButton from "../components/PreorderButton";
import SectionHeader from "../components/SectionHeader";
import PressLogos from "../components/PressLogos";
import { IconStarburst, IconTrend } from "../components/Doodles";
import { useReveal } from "../hooks/useReveal";
import { AUTHOR_NAME, AUTHOR_WEBSITE } from "../data/site";
import styles from "./Author.module.css";

export default function Author() {
  const introRef = useReveal<HTMLDivElement>();
  const bodyRef = useReveal<HTMLDivElement>();
  const pressRef = useReveal<HTMLDivElement>();

  return (
    <>
      <section className="container">
        <div ref={introRef} className={`reveal ${styles.intro}`}>
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
            <h1 className={styles.name}>{AUTHOR_NAME}</h1>
            <p className={styles.role}>
              Associate Professor, University of Southampton · PhD, King's College London
            </p>
            <a
              href={AUTHOR_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              turnbulldugarte.com ↗
            </a>
          </div>
        </div>
      </section>

      <section className={`section bg-ink ${styles.pullQuoteSection}`}>
        <div className="container">
          <p className={styles.pullQuote}>
            “For LGBTQ+ voters the personal is very
            <br />
            much political!”
          </p>
        </div>
      </section>

      <section className="container section">
        <div ref={bodyRef} className={`reveal ${styles.body}`}>
          <div className={styles.bodyMain}>
            <SectionHeader eyebrow="Research focus" title="Electoral behaviour, up close" />
            <p>
              Stuart is an award-winning political scientist working on electoral behaviour
              and identity politics, with a particular focus on the European context. The
              Rainbow Vote grows directly out of that research: original surveys of more than
              25,000 respondents, including 4,000+ LGBTQ+ individuals, combined with data
              from the British Election Study and the European Social Survey, and unique
              survey and conjoint experiments designed to trace how identity and political
              context shape electoral choices.
            </p>
            <p>
              That combination — large-scale comparative data and experiments built
              specifically to test how LGBTQ+ identity interacts with political choice — is
              what lets the book move past treating LGBTQ+ voters as a demographic footnote,
              and instead place them at the centre of political behaviour research.
            </p>
          </div>

          <aside className={styles.sidebar}>
            <IconTrend className={styles.sidebarIcon} />
            <h3 className={styles.sidebarTitle}>Why this book</h3>
            <p className={styles.sidebarText}>
              LGBTQ+ voters are a large and growing electorate with distinctive preferences,
              participation patterns, and voting behaviour — and existing research has largely
              missed it. The Rainbow Vote is Stuart's attempt to correct that.
            </p>
          </aside>
        </div>
      </section>

      <section className={`section bg-cream`}>
        <div ref={pressRef} className={`container reveal ${styles.pressSection}`}>
          <span className={`eyebrow ${styles.pressEyebrow}`}>
            {AUTHOR_NAME} has been featured in
          </span>
          <PressLogos />
        </div>
      </section>

      <section className={`section bg-yellow ${styles.ctaSection}`}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Read the book.</h2>
          <PreorderButton variant="invert" />
        </div>
      </section>
    </>
  );
}
