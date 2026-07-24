import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  // Fixa a raiz do projeto para o Turbopack não confundir com lockfiles
  // de diretórios pais (ex.: um package-lock.json solto na home).
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
};

export default nextConfig;
