import { getTranslations, setRequestLocale } from 'next-intl/server'
import { GoogleTagManager } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Inter, Raleway } from 'next/font/google'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

import { routing } from '@/i18n/routing'
import { cn } from '@/utils/cn'

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const params = await props.params

  const { locale } = params

  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    metadataBase: new URL('https://dellub.com'),
    alternates: {
      canonical: '/',
      languages: {
        pt: '/pt',
        en: '/en',
      },
    },
    openGraph: {
      images: '/opengraph-image.png',
    },
    title: t('title'),
    description: t('description'),
  }
}

export default async function RootLayout(props: Props) {
  const params = await props.params

  const { locale } = params

  const { children } = props

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'en' | 'pt')) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <html lang={locale} className="scroll-smooth">
      <GoogleTagManager gtmId="GTM-NDMKWNP4" />
      <body className={cn(inter.variable, raleway.variable, 'antialiased')}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
