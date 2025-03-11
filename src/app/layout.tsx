import Footer from '@/components/Footer';
import './globals.css';
import Header from '@/components/Header'; // Update the path based on where your Header component is stored
import {Inter, Lobster, Playball} from 'next/font/google'
// import "@fontsource/inter";
 

export const metadata = {
  title: 'InfoKalash | Modern Data Engineering & Low-Code Solutions for Enterprises',
  description: 'InfoKalash specializes in scalable data architectures, intelligent automation, and low-code platforms, helping enterprises navigate complex data ecosystems and drive digital transformation.',
};

const inter = Inter({
  subsets: ['latin'],
 
  variable: '--font-inter',
})

const playball = Playball({
  subsets: ['latin'],
  variable: '--font-playball',
  weight: '400'
});

const lobster = Lobster({
  subsets: ['latin'],
  variable: '--font-lobster',
  weight: '400'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lobster.variable} ${playball.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WWC3HDS8');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body >
       
          {/* Include the GTM noscript tag here */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WWC3HDS8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
