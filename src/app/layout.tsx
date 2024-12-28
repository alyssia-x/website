import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Alyssia Jovellanos",
  description: 'Independent AI researcher, Olympic archery athlete, and space biology enthusiast.',
  openGraph: {
    title: 'Alyssia Jovellanos',
    description: 'Independent AI researcher, Olympic archery athlete, and space biology enthusiast.',
    url: 'https://alyssiajovellanos.com',
    siteName: 'Alyssia Jovellanos',
    images: [
      {
        url: '/images/blog/aly-headshot.png',
        width: 800,
        height: 800,
        alt: 'Alyssia Jovellanos',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alyssia Jovellanos',
    description: 'Independent AI researcher, Olympic archery athlete, and space biology enthusiast.',
    creator: '@alyssiajovella',
    images: ['/images/blog/aly-headshot.png'],
  },
  metadataBase: new URL('https://alyssiajovellanos.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
