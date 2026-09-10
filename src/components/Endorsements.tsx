import { Fragment } from "react";
import { useReveal } from "../hooks/useReveal";
import styles from "./Endorsements.module.css";

/** Italicises every mention of the book's title within a quote. */
function withItalicTitle(text: string) {
  return text.split(/(The Rainbow Vote)/g).map((part, i) =>
    part === "The Rainbow Vote" ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>
  );
}

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
  {
    quote:
      "Activists, parties, and LGBTQ+ communities have long understood something political science has been surprisingly slow to recognize: that LGBTQ+ voters are a sizeable and consequential electoral force - and their politics hold important lessons about participation, representation, and the stakes citizens attach to democracy. Stuart Turnbull-Dugarte has been at the forefront of bringing these questions into comparative political science, and The Rainbow Vote is the exciting culmination of a remarkable research agenda. Moving political behavior beyond its traditional foci, this ambitious and highly readable book reveals how queer identities shape political socialization, participation, partisanship, and electoral choice across European democracies (and often for the better!). But more than illuminating an overlooked electorate, Turnbull-Dugarte also beautifully demonstrates how studying marginalized voters changes what we know about political behavior itself. An important, field-shaping book.",
    name: "Phillip M. Ayoub",
    roleText: "Professor of Political Science, University College London",
    photo: "/media/ayoub.webp",
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
            {withItalicTitle(e.quote)}
          </blockquote>
          <figcaption className={styles.caption}>
            <img src={e.photo} alt="" className={styles.photo} loading="lazy" width={72} height={72} />
            <div>
              <span className={styles.name}>{e.name}</span>
              {"roleText" in e ? (
                <span className={styles.role}>{e.roleText}</span>
              ) : (
                <span className={styles.role}>
                  {e.roleLead}
                  <em>{e.book}</em>
                </span>
              )}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
