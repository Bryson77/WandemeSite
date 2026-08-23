import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-brand-cream text-brand-navy antialiased min-h-screen selection:bg-brand-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}
