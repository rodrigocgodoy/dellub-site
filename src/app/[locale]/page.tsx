import { setStaticParamsLocale } from 'next-international/server'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Agency } from '@/sections/agency'
import { Hero } from '@/sections/hero'

export default async function Page({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setStaticParamsLocale(locale)

  return (
    <>
      <Header />
      <main className="flex flex-col items-stretch">
        <Hero />
        <Agency />
      </main>
      <Footer />
    </>
  )
}
