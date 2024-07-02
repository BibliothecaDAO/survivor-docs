import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <img src={"/logo.svg"} width="200" height="100" />,
  project: {
    link: "https://github.com/ProvableGames/loot-survivor",
  },

  primaryHue: 124,
  primarySaturation: 50,

  chat: {
    link: "https://discord.gg/realmsworld",
  },
  docsRepositoryBase:
    "https://github.com/BibliothecaDAO/survivor-docs/tree/main",
  footer: {
    text: "Loot Survivor Docs",
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  faviconGlyph: "💀",
};

export default config;
