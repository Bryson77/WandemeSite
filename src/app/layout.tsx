import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Happy Birthday, Wandeme! 🎉",
  description: "A special celebratory page created with love for Wandeme Ipfi Mamatsharaga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body class="bg-brand-cream text-brand-navy antialiased min-h-screen selection:bg-brand-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}
