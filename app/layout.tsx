import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import Providers from "@/components/Providers";
import { APP_BACKGROUND } from "@/const";

import "../client/src/index.css";

const displayFont = localFont({
  src: [
    {
      path: "../public/fonts/fraunces.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../public/fonts/fraunces-italic.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-display",
  display: "swap",
});
const bodyFont = localFont({
  src: "../public/fonts/space-grotesk.ttf",
  variable: "--font-body",
  weight: "300 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shapers AI",
  description: "Volunteer-built AI and software solutions for organizations.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Shapers AI",
    description: "Volunteer-built AI and software solutions for organizations.",
    images: [
      {
        url: "/preview-image.png",
        width: 1920,
        height: 1080,
        alt: "Shapers AI preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shapers AI",
    description: "Volunteer-built AI and software solutions for organizations.",
    images: ["/preview-image.png"],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const analyticsEndpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
  const analyticsWebsiteId = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${displayFont.variable} ${bodyFont.variable}`}
        style={{ backgroundColor: APP_BACKGROUND }}
      >
        <Providers>{children}</Providers>
        {process.env.NODE_ENV !== "production" ? (
          <Script
            src="/__manus__/debug-collector.js"
            strategy="afterInteractive"
          />
        ) : null}
        {analyticsEndpoint && analyticsWebsiteId ? (
          <Script
            src={`${analyticsEndpoint}/umami`}
            data-website-id={analyticsWebsiteId}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
