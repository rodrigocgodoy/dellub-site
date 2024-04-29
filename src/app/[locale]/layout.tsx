import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

import "./globals.css";
import { Provider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang={locale}>
      <body className={inter.className}>
        <Provider locale={locale}>
          {children}
          <Analytics />
        </Provider>
      </body>
    </html>
  );
};
