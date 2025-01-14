import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that the incoming `locale` is valid
  if (!locale || !routing.locales.includes(locale as 'pt' | 'en')) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (
      await (locale === 'pt'
        ? // When using Turbopack, this will enable HMR for `pt`
          import('../../messages/pt.json')
        : import(`../../messages/${locale}.json`))
    ).default,
  }
})
