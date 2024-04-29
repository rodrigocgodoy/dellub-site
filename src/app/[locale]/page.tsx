import { setStaticParamsLocale } from "next-international/server";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  return (
    <>
      <Header />
      <main className="flex flex-col items-stretch">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
