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
      "The Rainbow Vote shows that LGBTQ+ citizens are a political force, and provides and tests a theory for how they have become one. By doing so, the book not only makes a major contribution to the field of LGBTQ+ scholarship, it also pushes further the literature on social groups and voting more generally. Turnbull-Dugarte has written an instant classic.",
    name: "Ruth Dassonneville",
    roleLead: "Author of ",
    roleEmphasis: "Voters Under Pressure: Group-Based Cross-Pressure and Electoral Volatility",
    photo: "/media/dassonneville.webp",
  },
  {
    quote:
      "At a time when book-length quantitative studies of LGBTQ+ political behavior remain rare, The Rainbow Vote is a welcome and important contribution. Drawing on survey data and experiments with creativity and theoretical insight, it documents the distinctive political attitudes and patterns of participation of sexual and gender minorities—and in doing so, makes a compelling case for sustained attention to these populations by scholars of politics.",
    name: "Patrick J. Egan",
    roleLead: "Professor of Politics and Public Policy, New York University",
    photo: "/media/egan.webp",
  },
  {
    quote:
      "The Rainbow Vote is a fascinating and rigorous analysis of LGBTQ+ voting behavior. Turnbull-Dugarte’s research sheds light on a bloc with growing electoral power that analysts have long treated as an afterthought. Politicians would do well to take notice.",
    name: "Owen Winter",
    roleLead: "Political data scientist, ",
    roleEmphasis: "The Economist",
    photo: "/media/winter.webp",
  },
  {
    quote:
      "Activists, parties, and LGBTQ+ communities have long understood something political science has been surprisingly slow to recognize: that LGBTQ+ voters are a sizeable and consequential electoral force - and their politics hold important lessons about participation, representation, and the stakes citizens attach to democracy. Stuart Turnbull-Dugarte has been at the forefront of bringing these questions into comparative political science, and The Rainbow Vote is the exciting culmination of a remarkable research agenda. Moving political behavior beyond its traditional foci, this ambitious and highly readable book reveals how queer identities shape political socialization, participation, partisanship, and electoral choice across European democracies (and often for the better!). But more than illuminating an overlooked electorate, Turnbull-Dugarte also beautifully demonstrates how studying marginalized voters changes what we know about political behavior itself. An important, field-shaping book.",
    name: "Phillip M. Ayoub",
    roleLead: "Professor of Political Science, University College London",
    photo: "/media/ayoub.webp",
  },
  {
    quote:
      "Turnbull-Dugarte has written an engaging and illuminating book about the LGBTQ+ voters in Western Europe, with consequences for politics far beyond Western Europe’s borders. It is sure to be read and cited by political scientists for years to come.",
    name: "Melissa Michelson",
    roleLead: "Coauthor of ",
    roleEmphasis: "Listen, We Need to Talk: How to Change Attitudes about LGBT Rights",
    photo: "/media/michelson.webp",
  },
  {
    quote:
      "The Rainbow Vote represents a significant scholarly contribution on several fronts, offering new concepts, new data, and new interpretations. It brings together multiple strands of literature and shows how existing models change once queer identities are taken seriously. Vivid examples help convey complex theoretical points.",
    name: "Donald Haider-Markel",
    roleLead: "Coauthor of ",
    roleEmphasis: "The Remarkable Rise of Transgender Rights",
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
            {withItalicTitle(e.quote)}
          </blockquote>
          <figcaption className={styles.caption}>
            <img src={e.photo} alt="" className={styles.photo} loading="lazy" width={72} height={72} />
            <div>
              <span className={styles.name}>{e.name}</span>
              <span className={styles.role}>
                {e.roleLead}
                {e.roleEmphasis && <em>{e.roleEmphasis}</em>}
              </span>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
