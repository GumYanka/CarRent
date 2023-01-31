import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from "../../local/en.json";
import Layout from "../hocs/layout";

export default function App({ Component, pageProps }: AppProps) {
  const [messages, setCurrentMessages] = useState(en);
  const { locale = "en", defaultLocale } = useRouter();

  useEffect(() => {
    const fetchMessages = async () => {
      setCurrentMessages((await import(`../../local/${locale}.json`)).default);
    };
    fetchMessages();
  }, [locale]);

  return (
    <>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </>
  );
}
