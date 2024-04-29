import { setStaticParamsLocale } from "next-international/server";

import { getI18n, getScopedI18n } from "@/locales/server";
import { Switch } from "@/components/switch";

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  console.log('page', locale);
  const t = await getI18n();
  const scopedT = await getScopedI18n('hello');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-stone-50">
      teste
      <Switch />

      <p>{t('hello')}</p>
 
      Both are equivalent:
      <p>{t('hello.world')}</p>
      <p>{scopedT('world')}</p>

      <p>{t('welcome', { name: 'John' })}</p>
      <p>{t('welcome', { name: <strong>John</strong> })}</p>
    </main>
  );
}
