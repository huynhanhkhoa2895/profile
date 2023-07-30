import '../globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local';
import {i18n} from "@/i18n-config";

export const metadata: Metadata = {
  title: 'Huỳnh Anh Khoa',
  description: 'Portfolio of Khoa',
}

const grotesk = localFont({
  src: [
    {
      path: '../../public/fonts/Px-Grotesk-Light.woff2',
      weight: '300',
      style: 'light'
    },
    {
      path: '../../public/fonts/Px-Grotesk-Light.woff',
      weight: '300',
      style: 'light'
    }
  ],
  display: 'swap',
  variable: '--grotesk-font'
});

const aeonik = localFont({
  src: [
    {
      path: '../../public/fonts/Aeonik-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Aeonik-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Aeonik-Bold.woff',
      weight: '700',
      style: 'bold'
    },
    {
      path: '../../public/fonts/Aeonik-Bold.woff2',
      weight: '700',
      style: 'bold'
    }
  ],
  display: 'swap',
  variable: '--aeonik-font'
});

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className={`${aeonik.className}`}>{children}</body>
    </html>
  )
}
