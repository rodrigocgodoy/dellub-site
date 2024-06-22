import { getI18n } from "@/locales/server";
import Image from "next/image";
import { Button } from "../components/button";

export async function Hero() {
  const t = await getI18n();

  return (
    <section className="bg-[url('/images/bg-hero.webp')] bg-cover bg-no-repeat">
      <div className="container flex flex-col pt-[12.375rem] pb-[3.75rem]">
        <h1 className="font-title text-white text-[4.75rem] leading-[5.938rem] font-semibold max-w-[22ch] w-full">
          {t('home.hero.title')}
        </h1>
        <div className="flex justify-end gap-7 mt-[5.813rem]">
          <Image src="/images/img-hero.webp" alt="Imagem ilustrativa" width={111} height={100} className="object-contain h-fit" />
          <div className="flex flex-col justify-start w-fit">
            <span className="font-text font-bold text-2xl text-white leading-7">
              {t('home.hero.content.text')}
            </span>
            <span className="max-w-[38ch] w-full mt-3 mb-[3.688rem] font-text text-lg text-white leading-[1.375rem]">
              {t('home.hero.content.paragraph')}
            </span>
            <Button />
          </div>
        </div>
        <div className="group flex gap-[0.313rem] items-center">
          <Image src="/icons/icon-mouse-scroll.svg" alt="Ícone ilustrativo Mouse Scroll" width={37} height={37} className="group-hover:animate-bounce" />
          <span className="font-text text-sm text-gray-100">
            Role e sinta a experiência
          </span>
        </div>
      </div>
    </section>
  );
};