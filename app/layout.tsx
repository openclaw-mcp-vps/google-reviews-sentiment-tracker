import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google Reviews Sentiment Tracker",
  description: "Monitor Google My Business reviews and get alerted when sentiment drops or negative themes emerge."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="653086b9-1ccb-4d3f-9b6c-39a571690cde"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
