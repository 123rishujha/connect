import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "hi"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    // messages: (await import(`../messages/${locale}.js.on`)).default,
    messages: (await import(`../messages/en.json`)).default,
  };
});
