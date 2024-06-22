import Image from "next/image";
import Link from "next/link";

import { getI18n } from "@/locales/server";

export async function Agency() {
  const t = await getI18n();

  const socials = [
    {
      src: '/icons/icon-behance.svg',
      link: 'https://www.behance.net/agenciadellub',
    },
    {
      src: '/icons/icon-dribbble.svg',
      link: 'https://dribbble.com/agenciadellub',
    },
    {
      src: '/icons/icon-instagram-square.svg',
      link: 'https://instagram.com/agenciadellub',
    },
    {
      src: '/icons/icon-linkedin-square.svg',
      link: 'https://www.linkedin.com/company/agenciadellub',
    },
  ];

  return (
    <section className="flex flex-col gap-14 pt-[6.125rem] pb-28">
      <div className="container flex justify-between">
        <h2 className="font-title font-semibold text-gray-950 text-[2rem] leading-[2.348rem] max-w-[30ch]">
          {t('home.agency.title')}
        </h2>
        <div className="flex flex-col gap-[0.875rem] max-w-[45ch]">
          <p className="font-text text-base leading-[1.38rem] text-gray-700">
            {t('home.agency.paragraph1')}
          </p>
          <p className="font-text text-base leading-[1.38rem] text-gray-700">
            {t('home.agency.paragraph2')}
          </p>
        </div>
      </div>
      <div className="container">
        <Image src="/images/section-agency.png" alt="Imagem Ilustrativa" width={2000} height={100} className="w-full" />
      </div>
      <div className="container flex justify-between items-center">
        <p className="font-text text-base leading-[1.38rem] text-gray-700 max-w-[53ch]">
          {t('home.agency.paragraph3')}
        </p>
        <div className="flex items-center gap-2">
          {socials.map((item) => (
            <Link key={item.link} href={item.link} target="_blank" className="group h-[3.25rem] w-[3.25rem] rounded-full flex items-center justify-center border border-gray-100 duration-500 hover:bg-gray-100 hover:border-gray-200">
              <Image src={item.src} alt="Ícone Ilustrativo Social Network" width={24} height={24} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
