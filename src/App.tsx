import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Chapters from "./pages/Chapters";
import Author from "./pages/Author";

declare global {
  interface Window {
    goatcounter?: {
      count?: (vars?: { path?: string; title?: string }) => void;
    };
  }
}

let lastGoatCounterPath: string | undefined;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function GoatCounterRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    const path = `${location.pathname}${location.search}${location.hash}`;
    if (lastGoatCounterPath === path) return;
    lastGoatCounterPath = path;

    let cancelled = false;
    const track = () => {
      if (cancelled) return true;
      if (!window.goatcounter?.count) return false;
      window.goatcounter.count({ path, title: document.title });
      return true;
    };

    if (track()) return;

    const timer = window.setInterval(() => {
      if (track()) window.clearInterval(timer);
    }, 100);
    const timeout = window.setTimeout(() => window.clearInterval(timer), 5000);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
      window.clearTimeout(timeout);
    };
  }, [location.hash, location.pathname, location.search]);

  return null;
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <GoatCounterRouteTracker />
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/author" element={<Author />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
