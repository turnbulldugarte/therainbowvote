import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";
import styles from "./SectionHeader.module.css";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  /** Skip the prose-measure max-width and fill the full container width. */
  wide?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Tag = "h2",
  wide = false,
}: Props) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${styles.wrap} ${align === "center" ? styles.center : ""} ${wide ? styles.wide : ""}`}
    >
      {eyebrow && <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>}
      <Tag className={styles.title}>{title}</Tag>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
