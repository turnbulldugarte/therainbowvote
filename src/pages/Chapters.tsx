import SectionHeader from "../components/SectionHeader";
import PreorderButton from "../components/PreorderButton";
import { CircleMark } from "../components/Doodles";
import { useReveal } from "../hooks/useReveal";
import { chapters, type Chapter } from "../data/chapters";
import {
  IconTrend, IconGender, IconFamily, IconHeart, IconMegaphone, IconDonut, IconBar, IconSearch,
} from "../components/Doodles";
import styles from "./Chapters.module.css";

const motifIcon: Record<Chapter["motif"], typeof IconTrend> = {
  trend: IconTrend,
  gender: IconGender,
  family: IconFamily,
  heart: IconHeart,
  megaphone: IconMegaphone,
  donut: IconDonut,
  bar: IconBar,
  search: IconSearch,
};

// Column spans out of 12, hand-tuned so consecutive rows always sum evenly (no ragged
// gaps) while alternating feature-width and compact modules — the "campaign wall" mosaic.
const spans = [12, 4, 8, 6, 6, 4, 8, 12];

function ChapterModule({ chapter, span }: { chapter: Chapter; span: number }) {
  const ref = useReveal<HTMLElement>();
  const Icon = motifIcon[chapter.motif];
  const feature = span === 12;

  return (
    <article
      ref={ref}
      className={`reveal ${styles.card} ${feature ? styles.feature : ""}`}
      style={{
        ["--span" as string]: span,
        ["--accent" as string]: `var(--${chapter.accent})`,
      }}
    >
      <Icon className={styles.watermark} title="" />
      <div className={styles.head}>
        <span className={styles.number}>
          {chapter.number === "conclusion" ? "" : String(chapter.number).padStart(2, "0")}
        </span>
        <Icon className={styles.icon} title={`${chapter.title} motif`} />
      </div>

      <span className={styles.label}>{chapter.label}</span>
      <h2 className={styles.title}>{chapter.title}</h2>
      <p className={styles.hook}>{chapter.hook}</p>

      <p className={styles.description}>{chapter.description}</p>

      {feature && (
        <div className={styles.theme}>
          <CircleMark className={styles.circle} />
          <span className={styles.themeText}>{chapter.theme}</span>
        </div>
      )}
    </article>
  );
}

export default function Chapters() {
  return (
    <>
      <section className={`container ${styles.overview}`}>
        <div className={styles.hero}>
          <video
            className={styles.heroVideo}
            src="/media/chapter_hero.mp4"
            aria-label="The Rainbow Vote chapter overview animation"
            width={768}
            height={480}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
        <div className={styles.intro}>
          <SectionHeader
            as="h1"
            eyebrow="The full picture"
            title="Chapter overview"
            subtitle="Seven chapters and a conclusion trace how LGBTQ+ identity shapes political outlooks, family and social life, engagement, and party support — and what that means for anyone trying to win the rainbow vote."
          />
        </div>
      </section>

      <section className="container" style={{ paddingBottom: "var(--space-6)" }}>
        <div className={styles.grid}>
          {chapters.map((c, i) => (
            <ChapterModule key={c.title} chapter={c} span={spans[i]} />
          ))}
        </div>
      </section>

      <section className={`section bg-yellow ${styles.ctaSection}`}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Read the full argument.</h2>
          <p className={styles.ctaBody}>
            Pre-order The Rainbow Vote from Bookshop.org.
          </p>
          <PreorderButton variant="invert" />
        </div>
      </section>
    </>
  );
}
