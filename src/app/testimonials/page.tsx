
import Navbar from "../components/nav";
import Footer from '../components/footer';

import NavigationBar from "../components/navbar";
function Work(){
    return(
        <div>
        <div className="fixed w-full">
            <NavigationBar current="1" />
        </div>
        <main className="">
       
        <div className="p-32 sm:p-48 bg-blue-900 work ">
            <div >ชุ่มฉ่ำ แบรนดิ้ง</div>
            {/* top */}
            <div  className="">
                <h1 className="text-3xl sm:text-5xl thai">ผลงานของเรา</h1>
                <br />
            
            </div>
        </div>

        <div  className="py-44">
            <h2 className="text-3xl font-bold text-center py-5">Our clients</h2>
            <div className="grid gap-5 sm:grid-cols-3 sm:grid-row-2 justify-items-center items-center">
                <div  className="overflow-hidden rounded-xl h-14"><img className="h-full object-cover" src="https://www.choomcham.com/assets/images/b2f28f3e.png" alt="" /></div>
                <div  className="overflow-hidden rounded-xl h-14"><img className="h-full object-cover" src="https://www.choomcham.com/assets/images/edda82c3.png" alt="" /></div>
                <div  className="overflow-hidden rounded-xl h-14"><img className="h-full object-cover" src="https://www.choomcham.com/assets/images/c77f2ea0.png" alt="" /></div>
                <div  className="overflow-hidden rounded-xl h-14"><img className="h-full object-cover" src="https://www.choomcham.com/assets/images/d8606cc4.png" alt="" /></div>
                <div  className="overflow-hidden rounded-xl h-14"><img className="h-full object-cover" src="https://www.choomcham.com/assets/images/0ceaa160.png" alt="" /></div>
                <div  className="overflow-hidden rounded-xl h-14"><img className="h-full object-cover" src="https://www.choomcham.com/assets/images/26ca482f.png" alt="" /></div>
            </div>
        </div>

        <div  className=" py-10 px-5 grid sm:grid-cols-2 justify-items-center items-center relative z-[-1]">
            <div className="w-100 relative">
                    <div className="bg-[#F2C762] w-full h-full rounded-xl absolute -translate-x-20 -translate-y-10 -z-30 "> </div>
                <div className=" sm:w-[20vw] sm:h-[20vw] w-48 h-48  rounded-xl overflow-hidden ">
                    <img src="/images/cover.png" alt=""  className="object-cover h-full "/>
                
                </div>
            </div>
            <div className="px-5 sm:pr-24 z-[-1]">
                <h3 className="text-xl font-bold">Title</h3>
                <div className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum tempora ea temporibus iusto ipsam, explicabo quae! Ratione officiis, consectetur, accusamus alias odit ab sunt veritatis iste, hic est possimus.</div>
            </div>
            <div className="bg-[#3C4297] skew-y-2 w-[90vw] h-full rounded-xl absolute -z-40"> </div>
        </div>

        <div className="py-10"></div>

        <div  className=" py-10 px-5 grid  sm:grid-cols-2 justify-items-center items-center relative z-[-1] ">
            <div className="w-100 relative sm:order-2">
                    <div className="bg-[#3C4297] w-full h-full rounded-xl absolute -translate-x-20 -translate-y-10 -z-30 "> </div>
                <div className=" sm:w-[20vw] sm:h-[20vw] w-48 h-48  rounded-xl overflow-hidden ">
                    <img src="/images/cover2.png" alt=""  className="object-cover h-full "/>
                
                </div>
            </div>
            <div className="px-5 sm:pl-24">
                <h3 className="text-xl font-bold">Title</h3>
                <div className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum tempora ea temporibus iusto ipsam, explicabo quae! Ratione officiis, consectetur, accusamus alias odit ab sunt veritatis iste, hic est possimus.</div>
            </div>
            <div className="bg-[#F2C762] skew-y-2 w-[90%] h-full rounded-xl absolute -z-40"> </div>
        </div>


        <div  className="grid sm:grid-cols-3 py-48 gap-5 ">
            
            <div className="grid justify-items-center gap-3 px-5">
                <div className=" sm:w-[20vw] sm:h-[25vw] w-48 h-56  rounded-xl overflow-hidden "><img src="/images/cover.png" alt="" className="object-cover h-full" /></div>
                <div className="text-xl font-bold">Title</div>
                <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum tempora ea temporibus iusto ipsam, explicabo quae! Ratione officiis, consectetur, accusamus alias odit ab sunt veritatis iste, hic est possimus.</div>

            </div>

            <div className="grid justify-items-center gap-3 px-5">
                <div className=" sm:w-[20vw] sm:h-[25vw] w-48 h-56  rounded-xl overflow-hidden "><img src="/images/cover.png" alt="" className="object-cover h-full" /></div>
                <div className="text-xl font-bold">Title</div>
                <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum tempora ea temporibus iusto ipsam, explicabo quae! Ratione officiis, consectetur, accusamus alias odit ab sunt veritatis iste, hic est possimus.</div>

            </div>

            <div className="grid justify-items-center gap-3 px-5">
                <div className=" sm:w-[20vw] sm:h-[25vw] w-48 h-56  rounded-xl overflow-hidden "><img src="/images/cover.png" alt="" className="object-cover h-full" /></div>
                <div className="text-xl font-bold">Title</div>
                <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum tempora ea temporibus iusto ipsam, explicabo quae! Ratione officiis, consectetur, accusamus alias odit ab sunt veritatis iste, hic est possimus.</div>

            </div>
        </div>
    </main>
    <Footer />
    </div>
    )
}

export default Work