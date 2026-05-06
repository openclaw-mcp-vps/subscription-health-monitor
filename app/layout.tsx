import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subscription Health Monitor – Track SaaS Costs & Usage",
  description: "Monitor health metrics across all your SaaS subscriptions. Identify underused tools and cut costs automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7e041ce5-d923-4015-95c2-af684c6d1367"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
