import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

import Providers from "@/components/Providers";

import "../client/src/index.css";

export const metadata: Metadata = {
  title: "shapers.ai",
  description: "Volunteer-built AI and software solutions for organizations.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const analyticsEndpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
  const analyticsWebsiteId = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
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
