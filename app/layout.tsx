import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Know Your Agent – Die offene Agenten-Enzyklopädie",
    template: "%s | Know Your Agent",
  },
  description:
    "Agenten nach Branche und Disziplin vergleichen: Wertbeitrag, Investition, Dreijahreskosten, Governance, Reifegrad und Betriebsaufwand.",
  openGraph: {
    title: "Know Your Agent",
    description:
      "Die offene Enzyklopädie für KI-Agenten, Regelagenten, kognitive Bots und hybride Systeme.",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/know-your-agent-social.png",
        width: 1735,
        height: 907,
        alt: "Abstrakte Landkarte verbundener Agentenprofile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Know Your Agent",
    description:
      "Die offene Enzyklopädie für verantwortbare Agentensysteme.",
    images: ["/know-your-agent-social.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <a className="skip-link" href="#main-content">
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
