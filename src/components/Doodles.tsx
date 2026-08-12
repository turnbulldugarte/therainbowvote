// Hand-drawn-style SVG marks used throughout the site. Kept intentionally simple and
// slightly irregular (not perfectly geometric) to read as ink, not icon-font glyphs.
// All use currentColor so accent color is set via CSS `color`.

type IconProps = { className?: string; title?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconTrend({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <path {...base} d="M6 34 L6 40 L42 40" />
      <path {...base} d="M8 32 Q18 20 22 24 T34 12" />
      <path {...base} d="M26 11 L35 10.5 L36 19" />
    </svg>
  );
}

export function IconGender({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <circle cx="20" cy="26" r="10" {...base} />
      <path {...base} d="M27 19 L38 8" />
      <path {...base} d="M38 8 L30 8" />
      <path {...base} d="M38 8 L38 16" />
    </svg>
  );
}

export function IconFamily({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <circle cx="15" cy="14" r="6" {...base} />
      <circle cx="33" cy="14" r="6" {...base} />
      <path {...base} d="M4 38 Q4 24 15 24 Q26 24 26 38" />
      <path {...base} d="M22 38 Q22 24 33 24 Q44 24 44 38" />
    </svg>
  );
}

export function IconHeart({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <path
        {...base}
        d="M24 40 C10 30 4 22 6 15 C8 8 17 7 24 15 C31 7 40 8 42 15 C44 22 38 30 24 40 Z"
      />
    </svg>
  );
}

export function IconMegaphone({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <path {...base} d="M6 22 L6 28 L12 29 L12 21 Z" />
      <path {...base} d="M12 21 L34 10 L34 40 L12 29" />
      <path {...base} d="M34 18 Q42 24 34 32" />
      <path {...base} d="M14 29 L18 40 L23 39 L20 29" />
    </svg>
  );
}

export function IconDonut({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <circle cx="24" cy="24" r="17" {...base} />
      <circle cx="24" cy="24" r="8" {...base} />
      <path {...base} d="M24 7 A17 17 0 0 1 39.7 18" />
      <path {...base} d="M24 7 A17 17 0 0 1 39.7 18" strokeWidth="0" />
    </svg>
  );
}

export function IconBar({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <path {...base} d="M6 42 L44 42" />
      <path {...base} d="M12 42 L12 26" />
      <path {...base} d="M22 42 L22 18" />
      <path {...base} d="M32 42 L32 30" />
      <path {...base} d="M42 42 L42 10" />
    </svg>
  );
}

export function IconSearch({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <circle cx="20" cy="20" r="13" {...base} />
      <path {...base} d="M20 7 A13 13 0 0 1 30 26" />
      <path {...base} d="M29.5 29.5 L42 42" />
    </svg>
  );
}

export function IconBallot({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <path {...base} d="M9 20 L39 20 L39 42 L9 42 Z" />
      <path {...base} d="M9 20 L24 8 L39 20" />
      <path {...base} d="M18 30 L24 24 L30 30" />
      <path {...base} d="M24 24 L24 38" />
    </svg>
  );
}

export function IconArrowSquiggle({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 60 40" className={className} role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <path {...base} d="M2 8 Q20 2 28 14 T50 20" />
      <path {...base} d="M41 14 L51 20 L44 28" />
    </svg>
  );
}

export function IconStarburst({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <path {...base} d="M16 2 L16 30" />
      <path {...base} d="M2 16 L30 16" />
      <path {...base} d="M6 6 L26 26" />
      <path {...base} d="M26 6 L6 26" />
    </svg>
  );
}

export function IconCheckbox({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <rect x="4" y="4" width="24" height="24" rx="3" {...base} />
      <path {...base} d="M9 16 L14 21 L24 9" />
    </svg>
  );
}

/** Hand-inked underline; used inside .marker spans. Provide a stable pathLength for the
 * CSS draw-in animation. */
export function MarkerUnderline({ className, color }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 100 14"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      style={color ? { color } : undefined}
    >
      <path d="M2 9 C 20 12, 35 5, 50 8 S 82 11, 98 6" stroke="currentColor" fill="none" pathLength={1} />
    </svg>
  );
}

/** Hand-drawn circle annotation, e.g. around "pre-order" callouts. */
export function CircleMark({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 200 90" className={className} role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <path
        {...base}
        strokeWidth={3.5}
        d="M20 45 C 18 15, 60 6, 100 8 C 150 10, 185 22, 182 46 C 179 72, 130 84, 95 82 C 50 80, 22 68, 22 46"
      />
    </svg>
  );
}

/** The Progress-Pride ballot cube from the cover, redrawn flat as a small recurring mark. */
export function BallotCube({ className }: { className?: string }) {
  const stripes = [
    "#ffffff",
    "#f4a6c1",
    "#5bcffb",
    "#7a4a1e",
    "#111111",
    "#e40303",
    "#ff8c00",
    "#ffed00",
    "#008026",
    "#004dff",
    "#750787",
  ];
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <g transform="rotate(45 30 30)">
        {stripes.map((c, i) => {
          const w = 44 / stripes.length;
          return <rect key={c} x={8 + i * w} y={8} width={w + 0.6} height={44} fill={c} />;
        })}
        <rect x="8" y="8" width="44" height="44" fill="none" stroke="#141414" strokeWidth="2.5" />
      </g>
    </svg>
  );
}
