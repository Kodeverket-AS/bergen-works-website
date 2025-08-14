import { type Metadata } from 'next';
import { Space_Grotesk, Montserrat } from 'next/font/google';
import { Header } from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';
import MuiClientThemeProvider from '@/components/layout/MuiClientThemeProvider';
import '@/assets/styles/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.bergen.works';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Bergen Works',
  description: 'Coworking space i hjertet av Bergen.',
  keywords: [
    'Bergen.Works',
    'coworking Bergen',
    'open office',
    'åpent kontorlandskap',
    'moderne arbeidsplass',
    'fleksible arbeidsområder',
    'kontorfellesskap',
    'coworking space',
    'åpent kontor',
    'delt kontor',
    'kreativt arbeidsmiljø',
    'samspill og samarbeid',
    'åpen bedriftskultur',
    'delte kontorlokaler',
    'sosialt arbeidsmiljø',
    'nettverksbygging',
    'lavere kostnader kontor',
    'kontor med fellesskap',
    'felles fasiliteter',
    'fleksible leieavtaler',
    'kontor med møteplasser',
    'inspirasjon og innovasjon',
    'tverrfaglig samarbeid',
    'bedriftsnettsted',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Bergen.Works | Innovation in the heart of the city',
    description:
      'Her har vi drevet med coworking siden 2017. Våre medlemmer er stort sett opptatte av kreativ innovasjon...',
    url: 'https://bergen.works/',
    siteName: 'Bergen.Works',
    images: [
      {
        url: '/bwbygg.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'no_NO',
    type: 'website',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={spaceGrotesk.className}>
      <body className={montserrat.className + ' flex flex-col gap-3 md:gap-6'}>
        <MuiClientThemeProvider>
          <Header />
          {children}
          <Footer />
        </MuiClientThemeProvider>
      </body>
    </html>
  );
}
