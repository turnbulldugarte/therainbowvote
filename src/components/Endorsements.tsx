import { useReveal } from "../hooks/useReveal";
import styles from "./Endorsements.module.css";

const endorsements = [
  {
    quote:
      "Turnbull-Dugarte has written an engaging and illuminating book about the LGBTQ+ voters in Western Europe, with consequences for politics far beyond Western Europe's borders. It is sure to be read and cited by political scientists for years to come.",
    name: "Melissa Michelson (USA)",
    roleLead: "coauthor of ",
    book: "Listen, We Need to Talk: How to Change Attitudes about LGBT Rights",
    photo: "/media/michelson.webp",
  },
  {
    quote:
      "The Rainbow Vote represents a significant scholarly contribution on several fronts, offering new concepts, new data, and new interpretations. It brings together multiple strands of literature and shows how existing models change once queer identities are taken seriously. Vivid examples help convey complex theoretical points.",
    name: "Donald Haider-Markel (USA)",
    roleLead: "coauthor of ",
    book: "The Remarkable Rise of Transgender Rights",
    photo: "/media/haider-markel.webp",
  },
];

export default function Endorsements() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${styles.grid}`}>
      {endorsements.map((e) => (
        <figure key={e.name} className={styles.card} tabIndex={0}>
          <blockquote className={styles.quote}>
            <span className={styles.mark} aria-hidden="true">“</span>
            {e.quote}
          </blockquote>
          <figcaption className={styles.caption}>
            <img src={e.photo} alt="" className={styles.photo} loading="lazy" width={72} height={72} />
            <div>
              <span className={styles.name}>{e.name}</span>
              <span className={styles.role}>
                {e.roleLead}
                <em>{e.book}</em>
              </span>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
