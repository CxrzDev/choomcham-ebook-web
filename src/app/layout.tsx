/* eslint-disable @next/next/no-sync-scripts */
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next"
import CookiePanel from './components/CookiePanel';


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
  keywords: ['Choomcham', 'Choomcham Branding', 'branding', 'courses', 'personal branding','Brand Strategist','Keynote Speaker','Spiritual practitioner','อีฟ ภัทรัดจารินท์​ สุวัชรานนท์', 'marketing', ' brand identity', 'ทำไมต้อง ชุ่มฉ่ำ Branding จะช่วยธุรกิจคุณได้ยังไง?', 'ชุ่มฉ่ำ Branding'],
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
        
          {children}
          <CookiePanel></CookiePanel>
          <SpeedInsights />
        </Providers>
      </body>
      {/* <body className={inter.className}>{children}</body> */}

      {/* <script src='app.js'></script> */}
    </html>

  )
}
