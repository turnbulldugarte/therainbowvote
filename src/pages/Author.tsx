import PreorderButton from "../components/PreorderButton";
import SectionHeader from "../components/SectionHeader";
import PressLogos from "../components/PressLogos";
import { IconTrend } from "../components/Doodles";
import { useReveal } from "../hooks/useReveal";
import { AUTHOR_NAME, AUTHOR_WEBSITE } from "../data/site";
import styles from "./Author.module.css";

export default function Author() {
  const introRef = useReveal<HTMLDivElement>();
  const bodyRef = useReveal<HTMLDivElement>();
  const pressRef = useReveal<HTMLDivElement>();
  const labelRef = useReveal<HTMLSpanElement>();

  return (
    <>
      <section className="container">
        <div ref={introRef} className={`reveal ${styles.intro}`}>
          <div className={styles.videoFrame}>
            <video
              src="/media/author_clip.mp4"
              aria-label={`Video portrait of ${AUTHOR_NAME}`}
              className={styles.portrait}
              width={720}
              height={1280}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
          <div>
            <span ref={labelRef} className={`eyebrow ${styles.eyebrow}`}>
              About the author
              <svg
                className={styles.markerCircle}
                viewBox="0 0 200 90"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M20 45 C 18 15, 60 6, 100 8 C 150 10, 185 22, 182 46 C 179 72, 130 84, 95 82 C 50 80, 22 68, 22 46"
                  pathLength={1}
                />
              </svg>
            </span>
            <h1 className={styles.name}>{AUTHOR_NAME}</h1>
            <p className={styles.role}>
              Associate Professor in Political Science, University of Southampton
            </p>
            <div className={styles.bio}>
              <p>
                Born in South Africa, Stuart moved to Scotland with his family and spent
                his teenage years in Fife. At the University of Glasgow, he started out
                studying English Literature, realised it wasn’t quite for him, and
                switched to History and Spanish.
              </p>
              <p>
                His first job after university, an internship on a political campaign,
                sparked a new direction. He studied European Politics part-time at the
                University of Leicester while working as an English language teacher,
                then went on to a PhD in Political Science at King’s College London.
                Today, he’s an Associate Professor in Political Science at the
                University of Southampton.
              </p>
            </div>
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
        <img
          className={styles.mediaCollage}
          src="/media/media-collage.webp"
          alt="A collage of Stuart J. Turnbull-Dugarte’s media appearances"
          width={2400}
          height={1143}
          loading="lazy"
          decoding="async"
        />
        <div ref={bodyRef} className={`reveal ${styles.body}`}>
          <div className={styles.bodyMain}>
            <SectionHeader eyebrow="Research focus" title="Electoral behaviour, up close" />
            <p>
              Stuart is an <strong className={styles.researchEmphasis}>award-winning political scientist</strong> working on electoral behaviour
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
