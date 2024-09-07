
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Link from "next/link"

const blogs = [
    { id: '1', title: 'title', description: 'name' },
    { id: '2', title: 'title', description: 'name' },
    { id: '3', title: 'title', description: 'name' },
    { id: '4', title: 'title', description: 'name' },
    { id: '5', title: 'title', description: 'name' },
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
                <div   className="mb-10">
                    <h1 className="text-3xl sm:text-5xl thai pb-5">Blog</h1>
                    <div className="text-md thai py-3 px-3 w-80 text-center bg-[#D33666] rounded-full">BLOG ความรู้ BRANDING การตลาดสุดฉ่ำ</div>
                    <br />

                </div>



            </div>

            <h3 className="text-4xl p-10 text-center grid justify-items-center ">
                Blog ที่น่าสนใจ
                <div className="rounded-full h-1 w-48 bg-[#D33666]"></div>
            </h3>


            <div className="px-10 py-20">
                <h4 className="py-10 px-5 text-xl font-bold">ACITIVITY & EVENT</h4>
                <div className="grid sm:grid-cols-3 gap-10 ">
                    {blogs.map((blog) => {
                        return (
                            <>
                                <div   className="card sm:w-96 bg-base-100 shadow-xl">
                                    <figure className="rounded-xl overflow-hidden"><img className="rounded-xl" src="https://www.choomcham.com/assets/images/84dfa30d.png" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            BRANDING การตลาดสุดฉ่ำ!
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quod facilis hic eos!</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge p-3 text-slate-400 hover:text-white ring-[#F2C762] cursor-pointer hover:bg-[#F2C762]">Bussiness</div>
                                            <div className="badge p-3 text-slate-400 hover:text-white ring-[#F2C762] cursor-pointer hover:bg-[#F2C762]">Products</div>
                                        </div>
                                        <Link href={"./articles/" + (blog.id).toString()} className="btn">อ่านต่อ</Link>
                                    </div>
                                </div>
                            </>
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
                        <div   className="card sm:w-96 overflow-hidden shadow-xl ">
                            <figure className="h-48"><iframe width="560" src={video.src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="object-cover h-full"></iframe></figure>
                        </div></>)}
                </div>
            </div>
        </>
    )
}





export default Blog