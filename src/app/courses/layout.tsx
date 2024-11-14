
import Script from 'next/script';
import Footer from "../components/footer"
import NavigationBar from "../components/navbar"

import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'คอร์สเรียน Branding และ Storytelling – ชุ่มฉ่ำ',
  description: 'สำรวจคอร์สเรียนจากชุ่มฉ่ำ: เรียนรู้การสร้างแบรนด์และเทคนิคการเล่าเรื่องใน 3 นาที เสริมสร้างแบรนด์ส่วนตัวและพัฒนาทักษะการสื่อสารผ่านคอร์สคุณภาพจากผู้เชี่ยวชาญ',
  keywords: ['คอร์สชุ่มฉ่ำ', 'คอร์ส branding', 'คอร์ส storytelling', 'เทคนิคการสร้างแบรนด์', 'การพัฒนาแบรนด์ส่วนตัว', 'branding สำหรับธุรกิจ', 'เล่าเรื่องใน 3 นาที', 'บริการชุ่มฉ่ำ', 'บทความชุ่มฉ่ำ'],
  authors: [{ name: 'ชุ่มฉ่ำ' }],
  publisher: "Choomcham branding",
  robots: { index: true, follow: true },
  openGraph: {
    images: [{
      url: "https://choomcham.vercel.app/images/courses-cover.png",
      alt: 'คอร์สเรียน Branding และ Storytelling โดย ชุ่มฉ่ำ',
    }]
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>

      

      <NavigationBar current={""} />
      <div className="bg-[#EFEFEF]">
        {children}
      </div>
      <Footer></Footer>
    </>

  )
}
