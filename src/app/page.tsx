// 'use client'

// export const dynamic = 'force-dynamic'

import { motion } from 'framer-motion'
import Footer from './components/footer'
import Navbar from './components/nav'
import NavigationBar from './components/NavigationBarMain'
import { Button, Card, CardBody, CardHeader, Link, divider } from '@nextui-org/react'
import { Image } from '@nextui-org/react'

// import { db } from './firebaseConfig'
// import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react'
import Loading from './components/loading'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { BadgeCheck, Flower, HeartHandshake } from 'lucide-react'
import MyForm from './components/Myform'
import Script from 'next/script'


export default async function Home() {

    // var res = await fetch(`https://choomcham.com/api/course`)
    // var result: any = await res.json()
    // var contents: any = [...result.data];
    var contents: any = [];



    const videos = [
        { id: '1', src: 'https://www.facebook.com/video.php?v=993405428609497', description: 'รับออกแบบทิศทางการสร้าง Brand ให้สอดคล้องคุณค่าชีวิต 5 แบรนด์/เดือน ยอดขายหลายล้านที่คุณทำหล่นหายไป เพราะแบรนด์ไม่ชัด', platform: "facebook", title: "รีวิวจากคุณทราย CEO MADAMFIN" },
        { id: '2', src: 'https://www.facebook.com/choomchambranding/videos/526606112193948/', description: '#คอร์สเปลี่ยนอนาคต ช่วยเพิ่มทั้งยอดวิวและยอดขาย', platform: "facebook", title: "รีวิวจาก Jaymeen นักร้องนักแสดง & เจ้าของ Chubby cheek" },
        { id: '3', src: 'https://www.facebook.com/choomchambranding/videos/215435620461048/', description: 'Creative อายุน้อยร้อยล้านมาเรียนคอร์สเล่าเรื่องใน 3 นาทีให้ได้ใจคนเป็นยังไง ?', platform: "facebook", title: "รีวิวจาก พี่ม่อน Producer อายุน้อยร้อยล้าน" },
    ]

    return <>
        <div className="text-white fixed  z-10 w-full duration-200" id="scroll_nav">
            <Script src="https://www.google.com/recaptcha/api.js" strategy="lazyOnload" />
            <NavigationBar current="" />
        </div>

        <div id="fb-root"></div>
        <Script
            id="fb-sdk"
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v18.0&appId=156838349817980"
            nonce="WQnbcNzF"
        />

        <section className="bg-[--dark-blue] overflow-visible pt-5">
            <div className="relative bg-blue-900 line z-2">
                <div className="absolute sm:bottom-0 bottom-0 sm:left-[3%] left-10">
                    <div >
                        <div className="text-white">
                            <div className="mark">
                                <div className="line"> </div>
                            </div>

                            {/* top */}
                            <div className="mb-10">
                                <div className=" lg:text-5xl md:text-3xl sm:text-2xl text-xl thai sm:max-w-xl max-w-sm small loading-tight">อย่าทำธุรกิจแค่เพื่อยอดขาย <br />จงดึงคุณค่าจากตัวคุณออกมา<br /><div className="underline decoration-[--yellow] text-[--yellow] mt-2">สร้างแบรนด์ให้เป็นตำนาน</div>

                                </div>
                                <br />
                                <div className="text-base sm:text-lg thai w-full sm:max-w-lg">ผลงานสร้างแบรนด์สายคุณค่าระดับประเทศ</div>
                                <br />
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
                <div className=" absolute right-5 sm:right-20 bottom-8 sm:bottom-40 text-white thai sm:text-base text-xs text-right">
                    <div>อีฟ ภัทรัดจารินท์​ สุวัชรานนท์</div>
                    <div>Brand Consultant / Teacher </div>
                </div>
            </div>
        </section>

        <section>

            <div className="bg-[--dark-blue] work">
                <div className="w-full text-center font-bold lg:text-4xl md:text-3xl text-xl lg:text-black text-white pt-10 leading-normal px-4">หากคุณมั่นใจว่าคุณทำสินค้าดีมาตลอด<br /><span className='inline-block my-2'>แต่ยังไม่มีใครเห็น</span> <span className="bg-[--pink] px-2 text-white rounded-md inline-block">คุณมาถูกที่แล้ว</span>
                </div>

                <section className=' flex flex-col gap-10  lg:flex-row lg:items-stretch items-center justify-center py-10 px-4 sm:px-10 '>
                    <Card className=' w-full max-w-[350px] shadow-xl bg-white hover:-translate-y-2 duration-300'>
                        <CardHeader>
                        </CardHeader>
                        <CardBody>
                            <Flower size={48} className="text-[--pink] mb-4" />
                            <div className='text-xl font-bold mb-2'>  Value </div>
                            <div className="text-base text-gray-600">
                                เราช่วยสะท้อนคุณค่าในตัวคุณที่สร้างอิมแพคให้สังคม
                            </div>
                        </CardBody>
                    </Card>
                    <Card className=' w-full max-w-[350px] shadow-xl bg-white hover:-translate-y-2 duration-300'>
                        <CardHeader>
                        </CardHeader>
                        <CardBody>
                            <BadgeCheck size={48} className="text-[--green] mb-4" />
                            <h3 className='text-xl font-bold mb-2'> Identity  </h3>
                            <div className="text-base text-gray-600">
                                เราช่วยค้นหาเอกลักษณ์ที่เป็นธรรมชาติที่สุดของคุณ
                            </div>
                        </CardBody>
                    </Card>
                    <Card className=' w-full max-w-[350px] shadow-xl bg-white hover:-translate-y-2 duration-300'>
                        <CardHeader>
                        </CardHeader>
                        <CardBody>
                            <HeartHandshake size={48} className="text-[--yellow] mb-4" />
                            <h3 className='text-xl font-bold mb-2'> Culture
                            </h3>
                            <div className="text-base text-gray-600">
                                เราช่วยสร้างวัฒนธรรมประจำแบรนด์ให้ธุรกิจคุณแตกต่างอย่างยั่งยืน
                            </div>

                        </CardBody>
                    </Card>
                </section>
            </div>
            <div className="bg-slate-100/40">

                <section className=' flex flex-col gap-10  lg:flex-row lg:items-stretch items-center justify-center py-10 px-4 sm:px-10 '>
                    <Card className='w-full max-w-[350px] shadow-xl bg-white/80 glass hover:scale-105 duration-300'>
                        <CardBody className="flex flex-col justify-between p-0">
                            <Image src="/images/courses/5.jpg" className="w-full h-auto object-cover aspect-video rounded-none"></Image>
                            <div className="p-5">
                                <div className='text-xl font-bold pt-2 pb-1 text-[--dark-blue]'>  Online course </div>
                                <div className="text-base text-gray-600 mb-4 h-[72px] overflow-hidden">
                                    หลักสูตรสร้างคนดังในตำนาน เนื้อหาแน่น ห้ามพลาด เรียนได้ทุกที่ ทุกเวลา
                                </div>
                                <Button className='bg-[--green] text-white mt-2 w-full font-bold shadow-md' radius="full">ดูหลักสูตรเพิ่มเติม</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className='w-full max-w-[350px] shadow-xl bg-white/80 glass hover:scale-105 duration-300'>
                        <CardBody className="p-0">
                            <Image src="/images/courses/4.jpg" className="w-full h-auto object-cover aspect-video rounded-none"></Image>
                            <div className="p-5">
                                <h3 className='text-xl font-bold pt-3 pb-1 text-[--dark-blue]'> On-site Workshop  </h3>
                                <div className="text-base text-gray-600 mb-4 h-[72px] overflow-hidden">
                                    เรียนสด Connection เพื่อนเจ้าของธุรกิจตัวจริงต่างวงการ หรือจัดเวิร์คชอปเจ๋งๆให้องค์กร
                                </div>
                                <Button className='bg-[--green] text-white mt-2 w-full font-bold shadow-md' radius="full">ดูรอบเรียน</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className='w-full max-w-[350px] shadow-xl bg-white/80 glass hover:scale-105 duration-300'>
                        <CardBody className="p-0">
                            <Image src="/images/courses/1.jpg" className="w-full h-auto object-cover aspect-video rounded-none"></Image>
                            <div className="p-5">
                                <h3 className='text-xl font-bold pt-2 pb-1 text-[--dark-blue]'> 1:1 Consult
                                </h3>
                                <div className="text-base text-gray-600 mb-4 h-[72px] overflow-hidden">
                                    ลงพื้นที่ทดสอบแบรนด์ที่มีหน้าร้าน ช่วยดึงจุดเด่นของแบรนด์ออกมาสื่อสารให้ได้ใจคน
                                </div>
                                <Button className='bg-[--green] text-white mt-2 w-full font-bold shadow-md' radius="full">ดูเพิ่มเติม</Button>
                            </div>
                        </CardBody>
                    </Card>
                </section>
            </div>

            {/* REMOVED SALES PAGE E-BOOK SECTION FROM HERE */}

            <section className='p-10 bg-slate-100/40'>
                <div className=''>
                    <div className="text-2xl sm:text-4xl font-bold text-center py-10 text-[--dark-blue]">
                        สร้างแบรนด์แบบชุ่มฉ่ำ คืออะไร?
                    </div>

                    <ul className="flex flex-wrap justify-center items-stretch gap-8">
                        <li className="hover:-translate-y-3 duration-200 rounded-3xl bg-white p-6 shadow-md w-full max-w-[260px] flex flex-col items-center text-center border border-slate-100">
                            <div className="mb-4 h-32 flex items-center"><img src="/images/sticker24.png" alt="" className="w-full h-full object-contain" /></div>
                            <div>
                                <div className='font-bold text-[--green] text-xl mb-2'>1. จิตวิญญาณ</div>
                                <div className="text-base text-gray-600">ถอดตัวตนพิเศษของคุณออกมาวางกลยุทธ์แบรนด์</div>
                            </div>
                        </li>
                        <li className="hover:-translate-y-3 duration-200 rounded-3xl bg-white p-6 shadow-md w-full max-w-[260px] flex flex-col items-center text-center border border-slate-100">
                            <div className="mb-4 h-32 flex items-center"><img src="/images/sticker19.png" alt="" className="w-full h-full object-contain" /></div>
                            <div>
                                <div className="font-bold text-[--green] text-xl mb-2">2. ความสุข</div>
                                <div className="text-base text-gray-600">ใจใสใจสบายทำอะไรก็สำเร็จ</div>
                            </div>
                        </li>
                        <li className="hover:-translate-y-3 duration-200 rounded-3xl bg-white p-6 shadow-md w-full max-w-[260px] flex flex-col items-center text-center border border-slate-100">
                            <div className="mb-4 h-32 flex items-center"><img src="/images/sticker7.png" alt="" className="w-full h-full object-contain" /></div>
                            <div>
                                <div className="font-bold text-[--green] text-xl mb-2">3. ลูกค้า</div>
                                <div className="text-base text-gray-600">เขาคือคนสำคัญที่สุดของคุณนะ เข้าใจเขาลึกมากพอรึยัง?</div>
                            </div>
                        </li>
                        <li className="hover:-translate-y-3 duration-200 rounded-3xl bg-white p-6 shadow-md w-full max-w-[260px] flex flex-col items-center text-center border border-slate-100">
                            <div className="mb-4 h-32 flex items-center"><img src="/images/sticker21.png" alt="" className="w-full h-full object-contain" /></div>
                            <div>
                                <div className="font-bold text-[--green] text-xl mb-2">4. ชื่อเสียง</div>
                                <div className="text-base text-gray-600">ออกแบบคอนเทนต์คุณให้แตกต่างและลูกค้าจดจำ</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="flex lg:flex-row flex-col justify-evenly items-center gap-10 p-10 ">
                    <div className=' lg:p-10 flex flex-col justify-between text-center lg:text-left '>
                        <div>
                            <div className="text-3xl font-bold text-[--yellow] mb-4">Our Students</div>
                            <div className="text-xl sm:text-3xl max-w-xl font-bold text-[--dark-blue] ">
                                ธุรกิจคุณจะมีที่ยืน<br className="hidden sm:block" /> เมื่อคุณตัดสินใจจะเลิกอยู่ตรงกลาง
                            </div>
                        </div>
                        <div className="py-10"><Button className=" bg-[--green] text-white text-lg px-10 font-bold shadow-lg shadow-green-200" radius='full'>สำรวจคอร์สที่เหมาะกับคุณ</Button></div>
                    </div>
                    <div className="flex flex-wrap lg:w-[40%] w-full gap-6 justify-center ">
                        <img className="h-[60px] sm:h-[80px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" src="/images/100_logo.png" alt="โลโก้อายุน้อยร้อยล้าน" />
                        <img className="h-[60px] sm:h-[80px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" src="/images/bdms_logo.jpg" alt="โลโก้คลินิคบีดีเอ็มเอส" />
                        <img className="h-[60px] sm:h-[80px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" src="/images/chubbycheeks_logo.jpg" alt="โลโก้ชุบบี้ชิ๊กส์" />
                        <img className="h-[60px] sm:h-[80px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" src="/images/madamfin_logo.jpg" alt="โลโก้มาดามฟิน" />
                        <img className="h-[60px] sm:h-[80px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" src="/images/ondemand_logo.png" alt="โลโก้ออนดีมานด์" />
                        <img className="h-[60px] sm:h-[80px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" src="/images/sowonclinic_logo.jpg" alt="โลโก้โซวอนคลีนิค" />
                        <img className="h-[60px] sm:h-[80px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" src="/images/winkwhite_logo.jpg" alt="โลโก้วิ้งค์ไวท์" />
                        <img className="h-[60px] sm:h-[80px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" src="/images/klao.png" alt="โลโก้เกลานิสัยอันตราย" />
                    </div>
                </div>
            </section>

            <div className="divider-y"></div>


            <section className=''>
                <div className='py-10 pb-20'>

                    <div className="lg:text-4xl text-2xl font-bold text-center text-[--dark-blue] mb-10">ทำไมต้องชุ่มฉ่ำเท่านั้น ?</div>
                    <div className="flex flex-col items-center justify-center gap-10 px-4">


                        {videos.map((video) => {
                            return (
                                <div className="card lg:card-side bg-white border border-slate-100 shadow-xl w-full max-w-4xl overflow-hidden hover:shadow-2xl transition-shadow duration-300" key={video.id}>
                                    <figure className='bg-black w-full lg:w-[60%] flex items-center justify-center overflow-hidden aspect-video relative group'>

                                        {/* Placeholder or proper embed strategy often better than raw iframe for responsiveness. 
                                            Using iframe with w-full h-full object-cover strategy */}
                                        <div className="w-full h-full min-h-[300px] lg:min-h-[400px]">
                                            <iframe
                                                src={"https://www.facebook.com/plugins/video.php?href=" + video.src + "&show_text=false&width=560"}
                                                className='w-full h-full'
                                                style={{ border: 'none', overflow: 'hidden' }}
                                                allowFullScreen={true}
                                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                            ></iframe>
                                        </div>

                                    </figure>
                                    <div className="card-body lg:w-[40%] flex flex-col justify-center p-8 bg-[--pink]/5 relative">

                                        <div className="absolute top-0 right-0 w-24 h-24 bg-[--pink]/10 rounded-bl-[100px] -z-0"></div>

                                        <div className="card-title text-xl lg:text-2xl font-bold text-[--dark-blue] mb-2 z-10">{video.title}!</div>
                                        <p className="text-[--grey] text-base lg:text-lg mb-6 z-10 leading-relaxed">{video.description}.</p>
                                        <div className="card-actions justify-start z-10">
                                            <a href={video.src} target='_blank' className="btn bg-[--yellow] text-[--dark-blue] border-none px-8 rounded-full font-bold shadow-md hover:bg-[#e0b650]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2"><path d="M8 5v14l11-7z" /></svg>
                                                Watch Original
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </section>

            <section className="py-20 bg-[--green] text-center text-white px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 drop-shadow-md leading-tight">สร้างแบรนด์ให้คนรัก<br />ในแบบที่คุณ…เป็นคุณ</h2>
                    {/* <div className="w-24 h-2 bg-white/30 mx-auto rounded-full mb-6"></div> */}
                    <p className="text-xl sm:text-2xl lg:text-3xl font-light opacity-90">เติบโตเร็วกว่า ยั่งยืนกว่า มีความสุขกว่า</p>
                </div>
            </section>

            <section className='flex justify-center p-10'>
                <div className="w-[90vw] hero min-h-screen bg-slate-200  rounded-[40px] py-4 shadow-xl relative overflow-hidden">
                    <div className='w-48 h-48 bg-[#D33666] rounded-full absolute top-0 -right-32'></div>
                    <div className='w-96 h-96 bg-[#3C4297] rounded-full absolute bottom-0 -left-40'></div>
                    <div className='w-56 h-56 bg-[#17A78A] rounded-full absolute top-0 -left-10'></div>
                    <div className='w-[50rem] h-[50rem] bg-yellow-500 rounded-full absolute -bottom-[15rem] -right-[50px]'></div>

                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left p-5">




                            <div className="text-5xl font-bold " >เงื่อนไขก่อนรับบริการ!</div>
                            <br />
                            <div className="">1.เป็นเจ้าของธุรกิจตัวจริงในวงการนั้นๆ<br />
                                มี PASSION ในธุรกิจนั้น<br />
                                มีเรื่องราวหรือประสบการณ์<br />
                                มี FEEDBACK ที่ดีมากกว่าเสีย<br />


                            </div>
                            <br />
                            <div className="">2.ทีมงานชุ่มฉ่ำสัมภาษณ์คัดกรอง
                            </div>
                            {/* <div className="">3.ธุรกิจคุณมี Feedback ที่ดีมากกว่าเสีย</div> */}
                        </div>
                        <div className="card flex-shrink-2 w-full max-w-xl shadow-2xl bg-white">
                            <div className=" card  bg-white shadow-xl">
                                <div className="card-title text-2xl text-center p-10">ลงทะเบียนพูดคุยกับชุ่มฉ่ำ</div>
                                <MyForm />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>



        <Footer></Footer>
    </>



}
