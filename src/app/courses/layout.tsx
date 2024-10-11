
import Script from 'next/script';
import Footer from "../components/footer"
import NavigationBar from "../components/navbar"

import Head from 'next/head';



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
