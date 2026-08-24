import type { Metadata } from "next";
import { Courier_Prime, Playfair_Display } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-typewriter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-magazine",
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
    <html lang="en" className={`${courierPrime.variable} ${playfair.variable}`}>
      <body className="bg-white text-zinc-900 font-typewriter antialiased min-h-screen selection:bg-zinc-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}

