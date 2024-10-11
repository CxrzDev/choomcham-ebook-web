/* eslint-disable @next/next/no-sync-scripts */
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next"
import CookiePanel from './components/CookiePanel';
import GoogleAnalytics from './GoogleAnalytics';
import Script from 'next/script';


const cloudSoft = localFont({
  src: [
    {
      path: './fonts/CloudSoft/Cloud-Soft-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CloudSoft/Cloud-Soft-Bold.otf',
      weight: '700',
      style: 'normal',
    },

  ],
})
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ชุ่มฉ่ำ branding ตัวจริงต้องมีที่ยืน',
  description: 'ชุ่มฉ่ำ branding ตัวจริงต้องมีที่ยืน คนดี มีของดี ต้องสร้างแบรนด์เป็น จนมีที่ยืน ผลลัพธ์ของชีวิต ขึ้นอยู่กับการตัดสินใจของคุณในวันนี้ ทำไมต้อง ชุ่มฉ่ำ Branding จะช่วยธุรกิจคุณได้ยังไง? วางจิตให้ชุ่มฉ่ำ เดี๋ยวผลลัพธ์จะฉ่ำเอง',
  authors: [{ name: 'Choomcham branding' }],
  keywords: ['Choomcham', 'Choomcham Branding', 'branding', 'courses', 'personal branding', 'Brand Strategist', 'Keynote Speaker', 'Spiritual practitioner', 'อีฟ ภัทรัดจารินท์​ สุวัชรานนท์', 'marketing', ' brand identity', 'ทำไมต้อง ชุ่มฉ่ำ Branding จะช่วยธุรกิจคุณได้ยังไง?', 'ชุ่มฉ่ำ Branding'],
  publisher: "Vercel",
  robots: { index: true, follow: true },
  icons: "/images/cropped-logo.png",
  openGraph: {

    images: [{
      url: "https://choomcham.vercel.app/images/cover2.png",
    }]
  }
}





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={cloudSoft.className}>
        <Providers>
          <GoogleAnalytics />
          {children}
          <Script
            id="facebook-pixel"
            strategy="lazyOnload"
          >
            {`
         !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '819884986890695');
fbq('track', 'PageView');
        `}
          </Script>
          <noscript><img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=574886846850217&ev=PageView&noscript=1"
          /></noscript>
          <noscript><img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=819884986890695&ev=PageView&noscript=1"
          /></noscript>
          
          <Script type="text/javascript" id="adtechthai" src="https://app.adtechthai.com/js/1.0/adtech-tracker.js" />
          <Script id="adtechthai-script" strategy="lazyOnload">
            {`if( document.readyState === "complete" ||document.readyState === "interactive" ) {
                    // alert("installed!");
            adTechTrackerInit("trFkiewT3cO3JqCb4xtZnrvzPFfV9PVd");
      } else {
            document.addEventListener("DOMContentLoaded", function (event) {
              adTechTrackerInit("trFkiewT3cO3JqCb4xtZnrvzPFfV9PVd");
            }); 
      }`}

          </Script>
          <CookiePanel></CookiePanel>
          <SpeedInsights />
        </Providers>
      </body>
      {/* <body className={inter.className}>{children}</body> */}

      {/* <script src='app.js'></script> */}
    </html>

  )
}
