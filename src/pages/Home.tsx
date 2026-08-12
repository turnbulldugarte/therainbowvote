import { Link } from "react-router-dom";
import VideoHero from "../components/VideoHero";
import PreorderButton from "../components/PreorderButton";
import SectionHeader from "../components/SectionHeader";
import ChapterTeaserCard from "../components/ChapterTeaserCard";
import AuthorTeaser from "../components/AuthorTeaser";
import Endorsements from "../components/Endorsements";
import {
  MarkerUnderline,
  IconBar,
  IconDonut,
  IconSearch,
  IconCheckbox,
} from "../components/Doodles";
import { useReveal } from "../hooks/useReveal";
import { chapters } from "../data/chapters";
import { AMAZON_URL, BOOK_TITLE, SHORT_DESCRIPTION } from "../data/site";
import styles from "./Home.module.css";

const stats = [
  { value: "25,000+", label: "survey respondents across Western Europe", icon: IconBar },
  { value: "4,000+", label: "LGBTQ+ respondents surveyed directly", icon: IconDonut },
  { value: "4", label: "social experiments embedded in the surveys", icon: IconSearch },
  { value: "10", label: "original surveys fielded across Europe", icon: IconCheckbox },
];

export default function Home() {
  const statsRef = useReveal<HTMLDivElement>();
  const heroRef = useReveal<HTMLDivElement>();
  const titleRef = useReveal<HTMLHeadingElement>();

  return (
    <>
      {/* HERO */}
      <section className={`container ${styles.heroSection}`}>
        <h1 ref={titleRef} className={`reveal ${styles.h1}`}>
          <span className="marker">
            The Rainbow Vote
            <MarkerUnderline color="var(--pink)" />
          </span>
        </h1>

        <div className={styles.heroMedia}>
          <VideoHero />
        </div>

        <div ref={heroRef} className={`reveal ${styles.heroText}`}>
          <p className={styles.subtitle}>
            How LGBTQ+ voters think, what they want, and how to win their ballot.
          </p>
          <p className={styles.lede}>
            <em>{BOOK_TITLE}</em> {SHORT_DESCRIPTION}
          </p>
          <div className={styles.ctaRow}>
            <PreorderButton />
            <Link to="/chapters" className="btn btn-ghost">
              Explore the chapters →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={`section bg-ink`}>
        <div ref={statsRef} className={`container reveal ${styles.statsGrid}`}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <s.icon className={styles.statIcon} />
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CHAPTER TEASER */}
      <section className={`section container ${styles.chapterSection}`}>
        <SectionHeader
          eyebrow="Inside the book"
          title="Eight chapters, one argument"
          subtitle="LGBTQ+ voters are not a footnote in political behaviour research — they're a distinctive, engaged, and increasingly powerful electoral force. Here's how the book builds the case."
          wide
        />
        <div className={styles.chapterGrid}>
          {chapters.slice(0, 4).map((c) => (
            <ChapterTeaserCard key={c.title} chapter={c} />
          ))}
        </div>
        <div className={styles.chapterMore}>
          <Link to="/chapters" className="btn btn-invert">
            See all chapters →
          </Link>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className={`section bg-yellow ${styles.midCta}`}>
        <div className={`container ${styles.midCtaInner}`}>
          <h2 className={styles.midCtaTitle}>
            Ready for
            <br />
            pre-order.
          </h2>
          <p className={styles.midCtaBody}>
            The Rainbow Vote is available to pre-order now from Gay's the Word bookshop
            via Bookshop.org, or from Amazon.
          </p>
          <div className={styles.midCtaButtons}>
            <div className={styles.annotatedButton}>
              <span className={styles.annotation}>
                Purchasing here supports local bookstores :)
              </span>
              <PreorderButton variant="invert" />
            </div>
            <PreorderButton
              variant="ghost"
              href={AMAZON_URL}
              destinationName="Amazon"
              label="Pre-order on Amazon"
            />
          </div>
        </div>
      </section>

      {/* AUTHOR TEASER */}
      <section className={`section container`}>
        <AuthorTeaser />
      </section>

      {/* ENDORSEMENTS */}
      <section className={`section bg-cream`}>
        <div className="container">
          <SectionHeader
            eyebrow="Advance praise"
            title="What other researchers are saying"
            align="left"
          />
          <Endorsements />
        </div>
      </section>
    </>
  );
}
