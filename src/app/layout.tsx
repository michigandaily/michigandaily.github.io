import type { Metadata, Viewport } from "next";

import { sans, serif } from "./fonts";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://michigandaily.github.io"),
  title: "The Michigan Daily Web Team",
  description:
    "Get to know the people and work of The Michigan Daily Web Team.",
  creator: "The Michigan Daily",
  publisher: "The Michigan Daily",
  icons: [
    { rel: "icon", type: "image/svg+xml", url: "/icons/favicon.svg" },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/icons/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/icons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/icons/favicon-16x16.png",
    },
    { rel: "alternate icon", sizes: "48x48", url: "/icons/favicon.ico" },
    { rel: "mask-icon", url: "/icons/safari-pinned-tab.svg", color: "#000000" },
  ],
  openGraph: {
    type: "website",
    title: "The Michigan Daily Web Team",
    description:
      "Get to know the people and work of The Michigan Daily Web Team.",
    siteName: "The Michigan Daily",
    images: [],
  },
  twitter: {
    site: "@michigandaily",
    creator: "@michigandaily",
    images: [],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
