// "use client"
import Navbar from "../components/nav";
import Footer from '../components/footer';
import Head from "next/head";
import { Button, Image } from "@nextui-org/react";
import { useState } from "react";
import Script from 'next/script';
import NavigationBar from "../components/navbar";
import { motion } from "framer-motion";





// const bussiness = [
//     { id: '0', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
//     { id: '1', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
//     { id: '2', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
//     { id: '3', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
//     { id: '4', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
//     { id: '5', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
//     { id: '6', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
//     { id: '7', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
// ]



function Service() {


    return <>
        {/* bg-[url('https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRRv9ICxXjK-LVFv-lKRId6gB45BFoNCLsZ4dk7bZpYGblPLPG-9aYss0Z0wt2PmWDb')]  */}
        <div className=" w-full sticky top-0 z-30">
            <NavigationBar current="0" />
        </div>

        <section className="bg-[--sky-blue] sm:py-28 pt-20 relative">

        <svg id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150 absolute z-0 left-0  bottom-[-10px] ">
                <path d="M 0,700 L 0,131 C 156.53333333333336,161.93333333333334 313.0666666666667,192.86666666666665 467,178 C 620.9333333333333,163.13333333333335 772.2666666666667,102.46666666666667 934,87 C 1095.7333333333333,71.53333333333333 1267.8666666666668,101.26666666666667 1440,131 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="#3c4297" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0 "></path>
                <path d="M 0,700 L 0,306 C 201.06666666666666,280.26666666666665 402.1333333333333,254.5333333333333 554,271 C 705.8666666666667,287.4666666666667 808.5333333333333,346.1333333333334 948,359 C 1087.4666666666667,371.8666666666666 1263.7333333333333,338.9333333333333 1440,306 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="#3c4297" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1 "></path>
                <path d="M 0,700 L 0,481 C 111.86666666666667,489.66666666666663 223.73333333333335,498.3333333333333 396,491 C 568.2666666666667,483.6666666666667 800.9333333333334,460.33333333333337 985,456 C 1169.0666666666666,451.66666666666663 1304.5333333333333,466.3333333333333 1440,481 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="#3c4297" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2"></path>
            </svg>

            <div className="flex sm:flex-row gap-5 flex-col sm:justify-around items-center text-white">
                <div className="relative">
                    <Image src="/images/kruEve_image5.jpg" className=" z-[-10] rounded-full sm:w-[450px] w-[30vw]" alt="Description" width={800} height={620} />

                    <div className="absolute top-0 z-10 opacity-100">
                        <Image src="/images/sulmanservices/icon 1.png" className="z-[-10]  xl:w-[300px] w-[50px] " alt="Description" width={500} height={500} />
                    </div>
                </div>
                <div className="sm:w-[35%] sm:h-[80%] p-10 rounded-2xl relative ">

                    <p className="text-[--yellow] pl-5 xl:pb-6 font-bold xl:text-5xl text-lg">ชุ่มฉ่ำ Mindful Circle</p>
                    <p className=" pl-5 font-normal xl:text-2xl text-base text-wrap">
                        สังคมกัลยาณมิตรธุรกิจ <br className="xl:hidden" />
                        ไปด้วยกัน ไปได้ไกลฉ่ำ
                    </p>
                    <div className="text-center text-black xl:pt-2 underline underline-offset-8  xl:mt-5 xl:mb-5 ">
                        <p className="xl:leading-[50px]   font-bold xl:text-xl text-sm">ปัญหาของตัวจริงไม่มีที่ยืน</p>
                    </div>
                    <div className=" pl-5 xl:text-xl text-sm mb-5 mt-5" >
                        <div className="flex gap-2 mb-3 mt-3">
                            <span className="text-black font-bold">01</span>
                            <span className="">ไม่มั่นใจในคอนเทนต์ของตัวเอง</span>
                        </div>
                        <div className="flex gap-2 mb-3 mt-3">
                            <span className="text-black font-bold">02</span>
                            <span className="">เครียดง่ายเวลาเจอปัญหายอดตก</span>
                        </div>
                        <div className="flex gap-2 mb-3 mt-3">
                            <span className="text-black font-bold">03</span>
                            <span className="">ไม่มีเพื่อนคุณภาพ อยากหา Connection
                                <br />เพิ่มเติมเพื่อต่อยอด</span>
                        </div>
                        <div className="flex gap-2 mb-3 mt-3">
                            <span className="text-black font-bold">03</span>
                            <span className="">ไม่มีไอเดีย รู้สึกตันๆกับตัวเอง</span>
                        </div>
                    </div>
                    <Button className=" bg-[--yellow] btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-xl xl:w-[200px] w-[120px] xl:text-xl text-xs " ><p className="text-black">สอบถามเพิ่มเติม</p></Button>
                    <div className=" absolute -bottom-5 sm:-right-24 -right-5">
                        <Image src="/images/sticker19.png" className="xl:w-[20vw] w-[30vw]  " alt="Description" width={800} height={620} />
                    </div>
                </div>
            </div>


       

        </section >

        <section className="px-10 py-24 flex  xl:flex-row flex-col gap-10 items-center">
            <div className="flex flex-wrap items-center  justify-center justify-items-end gap-1 w-3/4 ">
                <div className="w-56 h-40 basis-72 bg-black rounded-xl overflow-clip"><img src="https://scontent.furt2-1.fna.fbcdn.net/v/t39.30808-6/306644360_821854525896201_1011233369411570365_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeETeIXCuHx8bg7W-BwNKRworPmFsMDE8tGs-YWwwMTy0ab4FJFeenQHI1EQCNeDo34JU6xHNDFYDI8CIGQI7xg8&_nc_ohc=oMpUl5MCXPgAX-zVOHo&_nc_ht=scontent.furt2-1.fna&oh=00_AfAKNA4stfdYUIlmoBx9XRRQk_sJIQbssVuRrUuQZa9tkg&oe=65FDB10E" alt="" /></div>
                <div className="w-56 h-40 bg-black rounded-xl overflow-clip"><img src="https://scontent.furt2-1.fna.fbcdn.net/v/t39.30808-6/306948908_821854275896226_2800974571083684052_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGAT4dl8FkZSDZvhqVObP8Kggt3oRBo8BuCC3ehEGjwG-fWtMfA_z5AtiuIiuinGLY5An-BCJwCwl4b06JYT1l2&_nc_ohc=QvoOHyNk5DEAX_t8MR5&_nc_ht=scontent.furt2-1.fna&oh=00_AfCNqAy4h62soPn5kbwa5hE9cAkqqp1H7OptVGMA-eXKIw&oe=65FCE095" alt="" /></div>
                <div className="w-56 h-40 bg-black rounded-xl overflow-clip"><img src="https://scontent.furt2-1.fna.fbcdn.net/v/t39.30808-6/394566752_831607092305896_7433676045894544483_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF--qUz8a9d6vdYbRDboCcTCDibquuc148IOJuq65zXjwy2J4kzQy5GxxN6GklbvaJqioUmwVcz2ywIHReubUVb&_nc_ohc=a03c0KtP1yAAX_iBMvG&_nc_ht=scontent.furt2-1.fna&oh=00_AfAlUofvbqh1opa8a13pBclK30aW7NX3UNp0f4OrM1l25Q&oe=65FD1ACB" className="object-fill h-full" alt="" /></div>
                <div className="w-56 h-40 basis-72 bg-black rounded-xl overflow-clip"><img src="https://scontent.furt2-1.fna.fbcdn.net/v/t39.30808-6/394293622_831606998972572_7555265462730581701_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFhwHO2Kg7euQueb3k4rzRkI3wb4qHqTVUjfBvioepNVRkFpMaVe3-pcWkJjqtM6cW0LHbEMFzzNRGb5YBYt4v5&_nc_ohc=fujFfFHxVLoAX_29Ebs&_nc_ht=scontent.furt2-1.fna&oh=00_AfD-FMQUo7uG8AYrEpugJyF9tNaT31QxaHVUj3cPXtY5jg&oe=65FBF219" alt="" /></div>


            </div>
            <div className="flex justify-around py-10 h-auto w-[100%]  relative ">


                <div className="absolute left-[-10px] top-0"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/quote-left.png" alt="quote-left" /></div>

                {/* <button className="btn bg-black w-[200px] h-10 text-white text-center text-lg rounded-3xl"><p>สำหรับงานโปรดักชั่น</p></button> */}
                {/* <button className="btn bg-black w-[200px] h-10 text-white text-center text-lg rounded-3xl"><p>คอร์สออนไลน์ </p></button> */}
                <div className="grid gap-4 p-4">
                    <p className="xl:text-3xl text-lg font-bold sm:w-[30vw] w-[50vw] ">
                        {/* <button className="btn bg-black w-[200px] h-10 text-white text-center text-lg rounded-3xl"><p>หลักสูตรเจ้าของธุรกิจ</p></button> */}
                        ชุ่มฉ่ำ Circle คือ
                    </p>
                    <span className="text-[#070814] xl:text-2xl text-base">
                        กิจกรรม Mini Workshop เจอตัวประจำเดือน <br className="xl:hidden" /> ให้นักธุรกิจตัวจริงมาเจอกัน<br className="xl:hidden" />
                        เพื่อฝึกสติให้ชุ่มฉ่ำจะได้สร้างแบรนด์สำเร็จอย่างมีความสุข <br />
                        ช่วยเหลือแบ่งปันเพื่อนธุรกิจให้สร้างแบรนด์ส่งต่อคุณค่าได้เพิ่มขึ้น
                    </span>

                    <p className="xl:text-xl text-base">
                        ชุ่มฉ่ำอยากให้คุณสร้างแบรนด์ได้สำเร็จอย่างยั่งยืน
                        ระหว่างทางจึงสำคัญไม่แพ้การตั้งเป้าหมาย<br className="lg:hidden" />
                        การสร้างแบรนด์ให้สำเร็จเป็นการเดินทางไกล
                        เพื่อส่งต่อคุณค่าในระยะยาว
                        มีเพื่อนที่ดีจะทำให้คุณไม่หลงทาง
                    </p>
                </div>
                <div className="absolute bottom-0 right-0"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/quote-right.png" alt="quote-right" /></div>

            </div>


        </section >

        <section className="p-8 bg-[--dark-blue] ">


            <div className="flex sm:flex-row flex-col items-center gap-10">

                {/* <div className="">
                    <Image src="/images/kruEve_image3.jpg" className="xl:w-[20vw]  rounded-full w-[200px] " alt="Description" width={800} height={620} />
                </div> */}

                <div className="xl:w-[95vw] w-[80vw] bg-white border-2 border-black rounded-2xl shadow-lg xl:z-0 z-10 relative overflow-hidden">

                    <div className="sm:text-2xl p-10">
                        <div>
                            <p className="font-bold text-3xl text-[--green]">รายละเอียด</p>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">1</p>
                            <span> กิจกรรม Workshop Mindfulness & Branding</span>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">2</p>
                            <span >ตั้งวงพูดคุย สะท้อน ให้เพื่อนช่วยแชร์ไอเดีย คอมเมนต์ให้แบรนด์
                                คุณส่งต่อคุณค่าได้ผลลัพธ์ชัดเจนขึ้น
                            </span>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">3</p>
                            <p>ฝึก Mindfulness สติกับการทำธุรกิจ</p>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">4</p>
                            <span>กิจกรรมระยะเวลา 2-3 ชม. สอบถามตารางการจัดได้ที่ Admin
                                น้องฉ่ำใน LINE : @choomchambranding </span>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">5</p>
                            <p>วันเสาร์ เวลา 14.00-17.00 น.</p>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">6</p>
                            <span>สถานที่ :  ชุ่มฉ่ำ Branding รังสิต คลองสาม</span>
                        </div>

                        <div className="bg-[--pink]  rounded-full w-10 h-10  sm:-right-10 sm:p-20 p-72 absolute -z-1"></div>
                        <div className="bg-[--green] rounded-full w-10 h-10 sm:-top-5 sm:-right-10 sm:p-20 p-40 absolute -z-1"></div>
                        <div className="bg-[--yellow] right-20 rounded-full sm:-left-10 sm:p-20 w-10 h-10 p-56 absolute -z-1"></div>
                    </div>
                </div>



            </div>




        </section>

        <section className="bg-slate-200">
            <div className="relative grid lg:grid-cols-3 grid-cols-1 " >


                <div className="xl:w-[25vw] xl:h-[250px] shadow-xl xl:shadow-none m-2 bg-slate-100 glass rounded-2xl ">
                    <div className="text-xl text-balance text-start pl-10 p-2 xl:pt-10">
                        <p className="font-bold text-2xl text-[--green]">เหมาะกับใครบ้าง? </p>
                        <a>- เจ้าของธุรกิจที่เพิ่งเริ่ม</a><br />
                        <a>- เจ้าของธุรกิจที่ต้องการหา Connection</a><br />
                        <a>- เจ้าของธุรกิจที่สำเร็จแล้วอยากแบ่งปัน</a>
                    </div>

                </div>
                <div className="" >
                    <Image src="/images/sulmanservices/Rectangle 48.svg" className="" alt="Description"  />
                </div>

           

                <div className="xl:w-[25vw] xl:h-[250px] shadow-xl xl:shadow-none m-2 bg-slate-100 rounded-2xl ">
                    <div className="text-xl  text-balance text-start gap-3 pl-10 p-2 xl:pt-10">
                        <p className="font-bold text-2xl  text-[--yellow]">คุณสมบัติผู้เข้าร่วม</p>
                        <div className="flex gap-3" >
                            <p className="font-bold">-</p>
                            <span>ธุรกิจของคุณไม่ขัดกับศีลธรรม</span>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">-</p>
                            <span>รักการเรียนรู้และการพัฒนาตัวเอง </span>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">-</p>
                            <span>พร้อมแบ่งปันสิ่งดีๆให้เพื่อนฉ่ำ</span>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">-</p>
                            <span>เชื่อว่าสติสำคัญในการพัฒนาชีวิต</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>


        <section>
            <div className="bg-gradient-to-tr from-[#F2C762] to-red-400 flex justify-around ">
                <h1 className="font-bold text-white xl:text-3xl p-2"> ค่าเข้าร่วม สอบถามราคาอัพเดทกับ <br className="block md:hidden" /> Admin น้องฉ่ำใน LINE : @choomchambranding </h1>
            </div>
        </section>

        <Footer />
    </>
}

export default Service