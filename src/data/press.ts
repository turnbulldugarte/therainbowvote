export type PressLogo = {
  name: string;
  src: string;
  /** Some outlet marks are wordmarks on transparent backgrounds; others are
   * solid brand-colour tiles. Solid tiles get less inner padding so they read
   * as a colour block rather than a shrunken sticker. */
  tile?: boolean;
};

export const pressLogos: PressLogo[] = [
  { name: "BBC News", src: "/media/press/bbc-news.png", tile: true },
  { name: "The Economist", src: "/media/press/the-economist.png", tile: true },
  { name: "France 24", src: "/media/press/france-24.jpg", tile: true },
  { name: "Channel 4 News", src: "/media/press/channel-4-news.png", tile: true },
  { name: "The Guardian", src: "/media/press/the-guardian.png" },
  { name: "Financial Times", src: "/media/press/financial-times.png" },
  { name: "PinkNews", src: "/media/press/pink-news.png" },
  { name: "El País", src: "/media/press/el-pais.png" },
  { name: "Newtral", src: "/media/press/newtral.png" },
  { name: "The Independent", src: "/media/press/the-independent.png" },
  { name: "ABC News", src: "/media/press/abc-news.png" },
  { name: "ABC News Radio", src: "/media/press/abc-news-radio.jpg" },
  { name: "BBC Radio 5 Live", src: "/media/press/bbc-radio-5-live.png" },
];
