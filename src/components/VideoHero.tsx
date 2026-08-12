import { useEffect, useRef, useState } from "react";
import styles from "./VideoHero.module.css";

const EPSILON = 0.004;
const LERP = 0.16;

export default function VideoHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const durationRef = useRef(0);
  const inViewRef = useRef(true);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [ready, setReady] = useState(false);
  const [phase, setPhase] = useState<"intro" | "interactive">("intro");
  const [hintVisible, setHintVisible] = useState(true);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  // Reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // Pause everything when the hero scrolls offscreen (perf)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        if (!entry.isIntersecting) {
          videoRef.current?.pause();
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Kick off the brief intro autoplay once metadata is ready (skipped for reduced motion)
  useEffect(() => {
    if (reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => {
      durationRef.current = video.duration || 0;
      setReady(true);
      video.currentTime = 0;
      video.muted = true; // belt-and-suspenders alongside the `muted` attribute — never audible
      const playPromise = video.play();
      playPromise?.catch(() => {
        // Autoplay blocked — fall back straight to interactive scrub mode.
        setPhase("interactive");
      });
    };

    const onEnded = () => {
      setPhase("interactive");
      targetTimeRef.current = video.currentTime;
      currentTimeRef.current = video.currentTime;
    };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEnded);
    };
  }, [reducedMotion]);

  // rAF-driven smoothing loop for cursor/touch scrubbing. Attached from the start (not just
  // once "interactive") so that moving the cursor during the intro immediately interrupts
  // the autoplay and hands control to the visitor — the interaction reads as responsive
  // rather than something you have to wait for.
  useEffect(() => {
    if (reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;

    const tick = () => {
      const diff = targetTimeRef.current - currentTimeRef.current;
      if (Math.abs(diff) > EPSILON && inViewRef.current) {
        currentTimeRef.current += diff * LERP;
        const dur = durationRef.current || video.duration || 0;
        const clamped = Math.min(Math.max(currentTimeRef.current, 0), Math.max(dur - 0.02, 0));
        currentTimeRef.current = clamped;
        try {
          video.currentTime = clamped;
        } catch {
          /* seeking can throw if metadata not ready yet — ignore */
        }
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    };

    const ensureLoop = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
    };

    const el = containerRef.current;

    const setTargetFromClientX = (clientX: number) => {
      const rect = el!.getBoundingClientRect();
      const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
      const dur = durationRef.current || video.duration || 0;
      targetTimeRef.current = ratio * dur;
      ensureLoop();
    };

    const interruptIntroIfNeeded = () => {
      if (phaseRef.current === "intro") {
        video.pause();
        currentTimeRef.current = video.currentTime;
        setPhase("interactive");
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return; // touch is handled below with gesture detection
      setHintVisible(false);
      interruptIntroIfNeeded();
      setTargetFromClientX(e.clientX);
    };

    // Touch: only hijack the gesture once horizontal intent is clear, so visitors can
    // still scroll the page with a touch that starts on the hero.
    let touchStartX = 0;
    let touchStartY = 0;
    let gestureDecided = false;
    let isScrubGesture = false;

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      gestureDecided = false;
      isScrubGesture = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;

      if (!gestureDecided) {
        const dx = touch.clientX - touchStartX;
        const dy = touch.clientY - touchStartY;
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return; // not enough movement yet
        gestureDecided = true;
        isScrubGesture = Math.abs(dx) > Math.abs(dy);
      }

      if (!isScrubGesture) return; // vertical swipe: let the page scroll normally

      setHintVisible(false);
      interruptIntroIfNeeded();
      setTargetFromClientX(touch.clientX);
      e.preventDefault();
    };

    el?.addEventListener("pointermove", onPointerMove);
    el?.addEventListener("touchstart", onTouchStart, { passive: true });
    el?.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      el?.removeEventListener("pointermove", onPointerMove);
      el?.removeEventListener("touchstart", onTouchStart);
      el?.removeEventListener("touchmove", onTouchMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div ref={containerRef} className={styles.hero}>
        <img
          src="/media/hero-poster.webp"
          alt="The Rainbow Vote book cover opens as hand-drawn charts, a Progress Pride ballot cube, and the note “Politics is personal. Data makes it powerful.” rise from its pages."
          className={styles.media}
          width={1920}
          height={1080}
        />
      </div>
    );
  }

  // The video is a decorative, pointer-driven flourish — the same information (title,
  // hook, CTA) exists as real text alongside it, and "move your cursor" isn't an
  // instruction a screen-reader user can act on, so it's hidden from assistive tech
  // rather than given a misleading interactive label.
  return (
    <div ref={containerRef} className={`${styles.hero} ${ready ? styles.ready : ""}`}>
      <video
        ref={videoRef}
        className={styles.media}
        src="/media/hero.mp4"
        poster="/media/hero-poster.webp"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />
      <span
        className={`${styles.hint} ${hintVisible && phase === "interactive" ? styles.hintVisible : ""}`}
        aria-hidden="true"
      >
        move to explore ↔
      </span>
    </div>
  );
}
