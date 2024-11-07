import localFont from "next/font/local";
import "../globals.css";
import Navbar from "../../components/Navbar";
import { Providers } from "../Providers";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Teddy Setiady",
  description: "Temukan developer full stack yang berpengalaman di Indonesia",
  icons: {
    icon: "../favicon.ico",
  },
};

export default async function RootLayout({ children, params: { locale } }) {
  const messeage = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-slate-950`}
      >
        <NextIntlClientProvider messages={messeage}>
          <Navbar locale={locale} />
          <Providers>
            <main className="mx-auto h-full min-h-screen w-full min-w-0 px-4 pb-24 pt-4 sm:px-8 sm:pt-12 md:max-w-2xl">
              <div className="flex flex-col gap-5">{children}</div>
            </main>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
