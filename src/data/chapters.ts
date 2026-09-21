export type ChapterMotif =
  | "trend"
  | "gender"
  | "family"
  | "heart"
  | "megaphone"
  | "donut"
  | "bar"
  | "search";

export interface Chapter {
  number: number | "conclusion";
  label: string;
  title: string;
  hook: string;
  description: string;
  theme: string;
  motif: ChapterMotif;
  accent: "pink" | "purple" | "blue" | "green" | "red" | "orange";
  size: "lg" | "md" | "sm";
}

export const chapters: Chapter[] = [
  {
    number: 1,
    label: "Chapter One",
    title: "Why the Rainbow Vote Matters",
    hook: "A constituency too big to keep calling niche.",
    description:
      "Sets out why LGBTQ+ voters matter electorally. The rainbow electorate is large, growing, geographically consequential, and politically visible enough to shape campaigns, representation, and policy outcomes across contemporary democracies.",
    theme: "How large does an electorate have to be before it stops being treated as a footnote?",
    motif: "trend",
    accent: "purple",
    size: "lg",
  },
  {
    number: 2,
    label: "Chapter Two",
    title: "Born to Vote This Way?",
    hook: "How LGBTQ+ identities shape our politics.",
    description:
      "Develops the book's core theory: identifying as LGBTQ+ produces distinctive political outlooks through socialisation, acculturation, and partisan updating — durable political distinctiveness rooted in lived experiences of marginalisation and group consciousness.",
    theme: "Identity as a political education, not just a demographic box.",
    motif: "gender",
    accent: "pink",
    size: "sm",
  },
  {
    number: 3,
    title: "Falling Far from the Tree?",
    label: "Chapter Three",
    hook: "When coming out means breaking from the family line.",
    description:
      "Using British evidence, shows that LGBTQ+ identities can disrupt the intergenerational transmission of politics. Rainbow voters from right-leaning homes are especially likely to break with their parents' partisanship, while those from left-leaning homes often consolidate it.",
    theme: "Who inherits their parents' politics — and who rewrites them?",
    motif: "family",
    accent: "blue",
    size: "md",
  },
  {
    number: 4,
    label: "Chapter Four",
    title: "Political Friends with Benefits",
    hook: "Politics doesn't stay in the ballot box — it follows you home.",
    description:
      "Using evidence from Britain and Spain, shows that politics spills over more strongly into the social lives of LGBTQ+ voters, who are more affectively polarised and more likely to sort potential friends and partners politically.",
    theme: "Would you date across the aisle? Rainbow voters increasingly say no.",
    motif: "heart",
    accent: "red",
    size: "sm",
  },
  {
    number: 5,
    label: "Chapter Five",
    title: "Voting as if Their Rights Depended on It?",
    hook: "Higher stakes, higher turnout.",
    description:
      "Demonstrates that LGBTQ+ citizens are more politically engaged than others — more interested in politics, more likely to participate, and especially mobilised when LGBTQ+ rights are salient and contested in electoral campaigns.",
    theme: "What happens to turnout when your rights are literally on the ballot?",
    motif: "megaphone",
    accent: "orange",
    size: "md",
  },
  {
    number: 6,
    label: "Chapter Six",
    title: "Who Wins the Rainbow Vote?",
    hook: "Mapping which parties actually earn LGBTQ+ support.",
    description:
      "Maps which parties in Western Europe appeal to LGBTQ+ voters and shows that rainbow voters overwhelmingly reward pro-LGBTQ+ parties — systematically more supportive of progressive, rights-affirming parties across countries and party systems.",
    theme: "Across borders and party systems, one pattern holds.",
    motif: "donut",
    accent: "green",
    size: "sm",
  },
  {
    number: 7,
    label: "Chapter Seven",
    title: "How to Win (and Lose) the Rainbow Vote",
    hook: "Rainbow voters are not electorally captive — and the evidence proves it.",
    description:
      "Experimental and real-world evidence from Britain shows that parties can win LGBTQ+ support by advancing LGBTQ+ rights, and lose it when they retreat from those commitments.",
    theme: "Support can be earned. It can also be withdrawn.",
    motif: "bar",
    accent: "purple",
    size: "lg",
  },
  {
    number: "conclusion",
    label: "Conclusion",
    title: "Not Like Everybody Else",
    hook: "Distinct, not marginal.",
    description:
      "Draws the book's main lesson together: LGBTQ+ citizens are politically distinct, not marginal. Sets out the implications for democratic representation, party strategy, political behaviour, and the future of rainbow voting in Europe and beyond.",
    theme: "The rainbow electorate isn't a subplot in democratic politics — it's part of the main story.",
    motif: "search",
    accent: "pink",
    size: "md",
  },
];
