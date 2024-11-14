import Navbar from "../components/nav";
import Footer from '../components/footer';
import NavigationBar from "../components/navbar";


// layout.tsx or page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'บทความสร้างแบรนด์ | เทคนิคและแนวคิดจาก Choomcham',
    description: 'อ่านบทความจาก Choomcham ที่อัดแน่นด้วยเทคนิคการสร้างแบรนด์และกลยุทธ์การตลาด เรียนรู้การสร้างตัวตนให้แข็งแกร่งและดึงดูดลูกค้า ด้วยความรู้และประสบการณ์จากผู้เชี่ยวชาญ',
    authors: [{ name: 'Choomcham Branding' }],
    keywords: ['Choomcham', 'บทความการสร้างแบรนด์', 'การสร้างแบรนด์', 'การตลาด', 'บทความการตลาด', 'personal branding', 'กลยุทธ์การตลาด', 'การเล่าเรื่อง', 'สร้างตัวตนแบรนด์', 'Choomcham Branding'],
    publisher: "Choomcham Branding",
    robots: { index: true, follow: true },
    icons: "/images/cropped-logo.png",
    openGraph: {
        images: [{
            url: "https://choomcham.com/images/article-cover.png",
            alt: 'บทความสร้างแบรนด์และกลยุทธ์การตลาดโดย Choomcham',
        }]
    }
};

// Now you can import the Blog component here or set up the layout.

function layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }){

    return(
        <>
       <div className=" z-[100] fixed w-full">
         <NavigationBar current="2" />
       </div>
        {children}
        <Footer />
        </>
    )
}

export default layout