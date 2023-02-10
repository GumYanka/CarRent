import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { UserProvider } from "../context/user";
import en from "../../local/en.json";
import Layout from "../hocs/layout";
import { ToastContainer } from "react-toastify";
import { CarProvider } from "../context/car";


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
        <UserProvider>
        <CarProvider>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer theme="dark" autoClose={2000} hideProgressBar={false} closeOnClick />
          </Layout>
        </CarProvider>
        </UserProvider>
      </IntlProvider>
    </>
  );
}
