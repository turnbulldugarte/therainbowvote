import type { Chapter } from "../data/chapters";
import {
  IconTrend, IconGender, IconFamily, IconHeart, IconMegaphone, IconDonut, IconBar, IconSearch,
} from "./Doodles";
import styles from "./ChapterTeaserCard.module.css";

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

export default function ChapterTeaserCard({ chapter }: { chapter: Chapter }) {
  const Icon = motifIcon[chapter.motif];
  return (
    <article className={styles.card} style={{ ["--accent" as string]: `var(--${chapter.accent})` }}>
      <div className={styles.top}>
        <span className={styles.number}>
          {chapter.number === "conclusion" ? "—" : String(chapter.number).padStart(2, "0")}
        </span>
        <Icon className={styles.icon} />
      </div>
      <h3 className={styles.title}>{chapter.title}</h3>
      <p className={styles.hook}>{chapter.hook}</p>
    </article>
  );
}
