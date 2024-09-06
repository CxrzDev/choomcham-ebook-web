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
      <div className="p-5">{children}</div>
      {/* <Footer></Footer> */}
    </>

  )
}
