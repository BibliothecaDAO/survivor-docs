import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span style={{ color: "#32CD32" }}>Loot Survivor 💀</span>,
  project: {
    link: "https://github.com/BibliothecaDAO/survivor-docs",
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
