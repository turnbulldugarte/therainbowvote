import { BOOKSHOP_URL } from "../data/site";
import { IconBallot } from "./Doodles";
import styles from "./PreorderButton.module.css";

type Props = {
  variant?: "primary" | "invert" | "ghost";
  size?: "default" | "sm";
  label?: string;
  withIcon?: boolean;
  className?: string;
};

export default function PreorderButton({
  variant = "primary",
  size = "default",
  label = "Pre-order from Gay’s the Word",
  withIcon = true,
  className = "",
}: Props) {
  const variantClass =
    variant === "invert" ? "btn-invert" : variant === "ghost" ? "btn-ghost" : "";
  const sizeClass = size === "sm" ? "btn-sm" : "";

  return (
    <a
      href={BOOKSHOP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variantClass} ${sizeClass} ${styles.preorder} ${className}`}
      aria-label={`${label} — opens Bookshop.org in a new tab`}
    >
      {withIcon && <IconBallot className={styles.icon} />}
      {label}
    </a>
  );
}
