
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Link from "next/link"

const blogs = [
    { id: '1', title: 'BRANDING การตลาดสุดฉ่ำ!', description: 'BRANDING การตลาดสุดฉ่ำ!',catergory:"Business",imageURL:"/images/cover6.png" },

]
const videos = [
    { id: '1', src: 'https://www.youtube.com/embed/dcVFxqyxACI?si=A6HAhtVsSUap2dtz', description: 'name' },
    { id: '2', src: 'https://www.youtube.com/embed/c6Xxcyflb3o?si=db6h-ZqKwgDGcc7', description: 'name' },
    { id: '3', src: 'https://www.youtube.com/embed/apSobqg8BKQ?si=lt2L_MmNOwLF1uxm', description: 'name' },
]


function Blog() {
    return (
        <>

            <div className="work sm:p-32 p-10 text-white">

                <div>ชุ่มฉ่ำ แบรนดิ้ง</div>
                {/* top */}
                <div className="mb-10">
                    <h1 className="text-3xl sm:text-5xl thai pb-5">Blog</h1>
                    <div className="text-md thai py-3 px-3 w-80 text-center bg-[#D33666] rounded-full">BLOG ความรู้ BRANDING การตลาดสุดฉ่ำ</div>
                    <br />

                </div>



            </div>

            <h3 className="text-4xl p-10 text-center grid justify-items-center bg-[--light-blue]">
                Blog ที่น่าสนใจ
                <div className="rounded-full h-1 w-48 bg-[#D33666]"></div>
            </h3>


            <div className="px-10 py-20 bg-[--light-blue]">
                <h4 className="py-10 px-5 text-xl font-bold">ACITIVITY & EVENT</h4>
                <div className="grid sm:grid-cols-3 gap-10 ">
                    {blogs.map((blog) => {
                        return (
                            <Link href={`/articles/${blog.id}`}>
                                <Card className="py-4 group">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <p className="text-tiny uppercase font-bold ring-1 ring-zinc-400 px-2 rounded-full">{blog.catergory}</p>
                                
                                        <h4 className="font-bold text-large py-2">{blog.title}</h4>
                                    </CardHeader>
                                    <CardBody className="overflow-hidden py-2">
                                        <div className="w-full bg-black overflow-hidden rounded-xl relative">
                                                <div className="text-center  text-xl font-bold absolute z-10 w-full group-hover:top-[45%] top-[50%] duration-150 opacity-0 group-hover:opacity-95 left-[25%]"><div className=" w-1/2 drop-shadow-md  text-white">Read more</div></div>
                                            <Image
                                                alt="Card background"
                                                className="object-cover rounded-xl duration-150 group-hover:scale-110 scale-105 relative z-0 group-hover:blur-sm"
                                                src={blog.imageURL}
                                            />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </div>


            <h3 className="text-4xl p-10 text-center grid justify-items-center ">
                วีดีโอความรู้สุดฉ่ำ
                <div className="rounded-full h-1 w-48 bg-[#D33666]"></div>
            </h3>
            <div className="px-10 py-20">
                <h4 className="py-5 px-5 text-xl font-bold">ChoomCham Branding Videos</h4>

                <div className="grid sm:grid-cols-3 gap-10">

                    {videos.map((video) => <>
                        <div className="card sm:w-96 overflow-hidden shadow-xl ">
                            <figure className="h-48"><iframe width="560" src={video.src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="object-cover h-full"></iframe></figure>
                        </div></>)}
                </div>
            </div>
        </>
    )
}





export default Blog