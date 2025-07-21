/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://www.kartikeytripathi.com'),
  title: {
    template: '%s | Kartikey Tripathi',
    default: 'Kartikey Tripthi • Full Stack Developer',
  },
  description:
    'Helping brands thrive in the digital world. Located in The India. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Kartikey',
  generator: 'Kartikey Tripathi',
  applicationName: 'Kartikey Tripathi',
  referrer: 'origin-when-cross-origin',
  keywords: ['Design', 'Develope', 'Freelance'],
  authors: [
    { name: 'Kartikey Tripathi', url: 'https://github.com/kartikeytripathi10' },
  ],
  creator: 'Kartikey Tripathi',
  publisher: 'Kartikey Tripathi',
  twitter: {
    card: 'summary_large_image',
    title: 'Kartikey Tripathi',
    description:
      'Helping brands thrive in the digital world. Located in The India. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Kartikey',
    siteId: '1467726470533754880',
    creator: '@AliBagheri2079',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://kartikey-tripathi-portfolio.vercel.app/',
      alt: 'Portfolio Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
