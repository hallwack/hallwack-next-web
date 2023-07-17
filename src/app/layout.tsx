import { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import LayoutProvider from "@/components/layouts/LayoutProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | hallwack.dev",
    default: "Hallwack",
  },
  description: "Hallwack portofolio",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} font-sans text-zinc-800 bg-zinc-100 antialiased`}
      >
        <LayoutProvider>
          <div className="flex min-h-screen flex-col items-center relative">
            <Navbar />
            <main>{children}</main>
          </div>
        </LayoutProvider>
      </body>
    </html>
  );
}
