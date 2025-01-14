import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export async function Header() {
  const t = useTranslations('Home')

  const nav = [
    {
      title: t('header.nav.home'),
      link: '/',
    },
    {
      title: t('header.nav.solutions'),
      link: '/solutions',
    },
    {
      title: t('header.nav.about'),
      link: '/about',
    },
    {
      title: t('header.nav.blog'),
      link: '/blog',
    },
    {
      title: t('header.nav.contact'),
      link: '/contact',
    },
  ]

  return (
    <header
      id="header"
      className="absolute top-0 left-0 right-0 border-b border-solid border-b-white/10 backdrop-blur-sm"
    >
      <div className="container py-6 flex items-center justify-between">
        <Image src="/brand/logo.svg" alt="Logo Dellub" width={83} height={100} />

        <nav className="flex">
          <ul className="flex items-center gap-9">
            {nav?.map((item) => (
              <li key={item.link} className="overflow-y-hidden h-5">
                <Link
                  href={item.link}
                  className="relative after:absolute after:left-0 after:top-0 after:text-white/50 after:font-text after:block after:duration-500 after:translate-y-full after:content-[attr(data-text)] after:text-sm before:left-0 before:top-0 before:text-white/100 before:font-text before:block before:duration-500 before:relative before:translate-y-0 before:content-[attr(data-text)] before:text-sm hover:after:translate-y-0 hover:before:-translate-y-full"
                  data-text={item.title}
                  replace
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
