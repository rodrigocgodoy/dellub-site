import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Provider } from "./provider";
import { cn } from "@/utils/cn";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});
const raleway = Raleway({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-raleway',
});

export async function generateStaticParams() {
  return ['pt-BR', 'en'];
}

export const metadata: Metadata = {
  metadataBase: new URL('https://dellub.com'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'en': '/en',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
  title: "Dellub - Design e desenvolvimento de produtos digitais",
  description: "Design e desenvolvimento de produtos digitais",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} className="scroll-smooth">
      <body className={cn(inter.variable, raleway.variable, "antialiased")}>
        <Provider locale={locale}>
          {children}
          <Analytics />
          <SpeedInsights />
        </Provider>
      </body>
    </html>
  );
};
