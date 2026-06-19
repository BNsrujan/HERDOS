import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// TODO: Add Cal Sans local font files
// Download Cal Sans .woff2 files and place them in public/fonts/
// Then uncomment and import below:
// import { localFont } from "next/font/local";
import "./globals.css";

// Body font - Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Mono font - JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// TODO: Display font - Cal Sans (requires local font files)
// Uncomment when Cal Sans fonts are added to public/fonts/
/*
const calSans = localFont({
  variable: "--font-display",
  src: [
    {
      path: "../fonts/cal-sans-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/cal-sans-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
*/

export const metadata: Metadata = {
  title: "HERDOS",
  description: "Rugged Premium Design System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      // TODO: Add calSans.variable to className once Cal Sans fonts are available
    >
      <body className="min-h-full flex flex-col font-body text-text-primary">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
