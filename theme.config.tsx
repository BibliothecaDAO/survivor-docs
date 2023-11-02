import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span style={{ color: "#32CD32" }}>Loot Survivor 💀</span>,
  project: {
    link: "https://github.com/BibliothecaDAO/loot-survivor",
  },
  chat: {
    link: "https://discord.gg/realmsworld",
  },
  docsRepositoryBase: "https://github.com/BibliothecaDAO/survivor-docs",
  footer: {
    text: "Loot Survivor Docs",
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },
};

export default config;
