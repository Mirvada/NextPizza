import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import { Header } from "@/components/shared";

export const metadata: Metadata = {
  title: "Next Pizza | Главная "
};

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={nunito.className}
      >
        <Header />
        <main className='min-h-screen'>
          {children}
        </main>
      </body>
    </html>
  );
}
