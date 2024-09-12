import Footer from "../components/footer"
import NavigationBar from "../components/navbar"


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
