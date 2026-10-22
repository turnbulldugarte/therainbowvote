import { BOOKSHOP_URL } from "../data/site";
import { IconBallot } from "./Doodles";
import styles from "./PreorderButton.module.css";

type Props = {
  variant?: "primary" | "invert" | "ghost";
  size?: "default" | "sm";
  label?: string;
  href?: string;
  destinationName?: string;
  withIcon?: boolean;
  className?: string;
};

export default function PreorderButton({
  variant = "primary",
  size = "default",
  label = "Pre-order from Bookshop.org",
  href = BOOKSHOP_URL,
  destinationName = "Bookshop.org",
  withIcon = true,
  className = "",
}: Props) {
  const variantClass =
    variant === "invert" ? "btn-invert" : variant === "ghost" ? "btn-ghost" : "";
  const sizeClass = size === "sm" ? "btn-sm" : "";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variantClass} ${sizeClass} ${styles.preorder} ${className}`}
      aria-label={`${label} — opens ${destinationName} in a new tab`}
    >
      {withIcon && <IconBallot className={styles.icon} />}
      {label}
    </a>
  );
}
