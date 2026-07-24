import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thaylor Jobs | Marketing para beleza",
  description: "Aprenda a se posicionar, viralizar e vender todos os dias.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
