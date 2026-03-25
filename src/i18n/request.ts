import {getRequestConfig} from 'next-intl/server';
import {defaultLocale, locales} from './locales';

export default getRequestConfig(async ({locale}) => {
  const localeValue = locale ?? defaultLocale;
  const resolvedLocale = locales.includes(localeValue as typeof locales[number])
    ? localeValue
    : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  };
});
