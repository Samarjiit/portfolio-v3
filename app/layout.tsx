import './globals.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Syne } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

const syne = Syne({
  subsets: ['latin'],
  display: 'block',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Samarjit Mahi — FullStack Engineer',
  description: 'Currently pursuing MCA from Manipal Institute of Technology',
  applicationName: 'samarjit mahi',
  keywords: [
    'freelance',
    'developer',
    'freelance developer',
    'frontend',
    'react',
    'frontend developer',
    'frontend engineer',
    'creative',
    'creative developer',
    'creative engineer',
    'tech',
    'nigeria',
    'software',
    'software developer',
    'portfolio',
    'frontend developer portfolio',
    'creative developer portfolio',
  ],
  colorScheme: 'dark',
  openGraph: {
    title: 'Samarjit Mahi — FullStack Engineer',
    description: 'Currently pursuing MCA from Manipal Institute of Technology.',
    url: 'https://samarmahi.netlify.app//',
    siteName: 'https://samarmahi.netlify.app/',
    images: [
      {
        url: 'https://ibb.co/PFgcMZt',
        width: 1200,
        height: 630,
        alt: 'Samarjit Mahi — FullStack Engineer',
      },
    ],
    locale: 'en-ind',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samarjit Mahi — FullStack Engineer',
    description:
      'Frontend Engineer and Product Designer, currently at Crown Branding Agency. Focused on interfaces and experiences, working remotely from Lagos, Nigeria.',
    creator: 'victorwill__',
    creatorId: '1243720976552144897',
    images: ['https://ibb.co/PFgcMZt'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
