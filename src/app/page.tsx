// 'use client'

export const dynamic = 'force-dynamic'

import { motion } from 'framer-motion'
import Footer from './components/footer'
import Navbar from './components/nav'
import NavigationBar from './components/navbar'
import { Button, Card, CardBody, CardHeader, Link, divider } from '@nextui-org/react'
import { Image } from '@nextui-org/react'

// import { db } from './firebaseConfig'
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react'
import Loading from './components/loading'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { BadgeCheck, Flower, HeartHandshake } from 'lucide-react'
import MyForm from './components/Myform'
import Script from 'next/script'





export default async function Home() {

    var res = await fetch(`https://choomcham.com/api/course`)
    var result: any = await res.json()
    var contents: any = [...result.data];



    const videos = [
        { id: '1', src: 'https://www.facebook.com/video.php?v=993405428609497', description: 'รับออกแบบทิศทางการสร้าง Brand ให้สอดคล้องคุณค่าชีวิต 5 แบรนด์/เดือน ยอดขายหลายล้านที่คุณทำหล่นหายไป เพราะแบรนด์ไม่ชัด', platform: "facebook", title: "รีวิวจากคุณทราย CEO MADAMFIN" },
        { id: '2', src: 'https://www.facebook.com/choomchambranding/videos/526606112193948/', description: '#คอร์สเปลี่ยนอนาคต ช่วยเพิ่มทั้งยอดวิวและยอดขาย', platform: "facebook", title: "รีวิวจาก Jaymeen นักร้องนักแสดง & เจ้าของ Chubby cheek" },
        { id: '3', src: 'https://www.facebook.com/choomchambranding/videos/215435620461048/', description: 'Creative อายุน้อยร้อยล้านมาเรียนคอร์สเล่าเรื่องใน 3 นาทีให้ได้ใจคนเป็นยังไง ?', platform: "facebook", title: "รีวิวจาก พี่ม่อน Producer อายุน้อยร้อยล้าน" },
    ]

    const courses = [
        { id: '1', title: "ที่ปรึกษาวางแผนสร้างแบรนด์จาก 0 ให้มีชื่อเสียง", description: "แบรนด์ไม่ชัด มีของดีแต่คนไม่รู้จัก ช่วยสะท้อนสิ่งที่คุณไม่เห็นเพื่อให้ไปต่อได้ เปิดรับเพียงแค่ 5 แบรนด์/เดือน ไม่ได้รับทุกธุรกิจต้องผ่านการสัมภาษณ์ก่อนเท่านั้น", imageUrl: "https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/394540875_832637978869474_2998277435694377056_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=KKZh2vSZnq0AX_DGuQd&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfAS9pAoTV6U6ajw0gtkLkeEpTCSVEJpMr-vqXtsa_yhbA&oe=65AD89E7", price: "19,999" },
        { id: '2', title: "Keynote Speaker ", description: "บรรยายให้ผู้เข้าร่วมงานเข้าใจเรื่อง Branding หรือ Storytelling แบบง่ายๆ นำไปใช้ในชีวิตได้จริง", imageUrl: "https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.15752-9/413902958_366481376005129_6244924999535793949_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=x9oyjf3_Au0AX_RXaMB&_nc_ht=scontent.fbkk29-6.fna&oh=03_AdR99ysdhDvfov2IjqpNC6BPXHj078v0SOiwytJbVl1mQw&oe=65CF3423", price: " 125,000" },
        { id: '3', title: "ชุ่มฉ่ำ Circle ", description: "ทำธุรกิจคนเดียวเปล่าเปลี่ยวใจ ลองเข้าสังคมเจอเพื่อนกัลยาณมิตรที่ช่วยกันผลักดันให้ถึงเป้าหมายได้ไวขึ้น ", imageUrl: "https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/394736445_831607658972506_7023956463251618192_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=QD9uI_a70GEAX9NZJzL&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfCId5Hhmpz4_TeGAvLU-Swc7ZBHV2-ydzbiojq9kPLGbw&oe=65AD23E2", price: " 2,555" },
        { id: '4', title: "In house Training ", description: "พัฒนาทีมให้เข้าใจการสร้าง Brand ยกระดับ Content ให้ได้ใจลูกค้าเพิ่ม ช่วยให้เจ้าของธุรกิจไม่ต้องเหนื่อย", imageUrl: "https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/394736445_831607658972506_7023956463251618192_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=QD9uI_a70GEAX9NZJzL&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfCId5Hhmpz4_TeGAvLU-Swc7ZBHV2-ydzbiojq9kPLGbw&oe=65AD23E2", price: " 125,000" },
        { id: '5', title: "Online Course  ", description: "คอร์สเข้าใจแบรนด์ตัวเอง คอร์สเล่าเรื่อง 3 นาทีให้มียอดขาย คอร์สสร้างคนดังในตำนาน เนื้อหาแน่น ห้ามพลาด", imageUrl: "https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-6/336890739_1354530558661892_5028428925110047977_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=VIkIn8LBXqoAX-Dvonk&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfDdNl-E1cJuHTaW5_T-_HFkLe88yy_Q3pkbBRcpmWihhg&oe=65ACB443", price: " 555" },
        { id: '6', title: "ชุ่มฉ่ำ Studio   ", description: "ถ่ายภาพโปรไฟล์สำหรับ CEO เพื่อสร้าง Personal Brand ดึงความเป็นตัวคุณออกมาให้มีเสน่ห์ ถ่ายภาพให้ดูมีชีวิตชุ่มฉ่ำ", imageUrl: "https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-6/336890739_1354530558661892_5028428925110047977_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=VIkIn8LBXqoAX-Dvonk&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfDdNl-E1cJuHTaW5_T-_HFkLe88yy_Q3pkbBRcpmWihhg&oe=65ACB443", price: " 19,000" },
    ]



    return <>
        <div className="text-white fixed  z-10 w-full duration-200" id="scroll_nav">
            <Script src="https://www.google.com/recaptcha/api.js" strategy="lazyOnload" />
            <NavigationBar current="" />
        </div>

        <div id="fb-root"></div>
        <Script
            strategy="lazyOnload"
            crossOrigin="anonymous"
            src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v18.0&appId=156838349817980"
            nonce="WQnbcNzF"
        />

        <section className="bg-[--dark-blue] overflow-visible pt-5">
            <div className="relative bg-blue-900 line z-2">
                <div className="absolute sm:bottom-0 bottom-0 sm:left-[3%] left-10">
                    {/* <div initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }}> <h1 className="text-white thai">ตัวจริงต้องมีที่ยืน</h1></div> */}
                    {/* top */}
                    <div >
                        <div className="text-white">
                            <div className="mark">
                                <div className="line"> </div>
                            </div>

                            {/* top */}
                            <div className="mb-10">
                                <div className=" lg:text-[2rem] md:text-[3vw] sm:text-[3vw] text-[20px] thai sm:w-[35vw] small">อย่าทำธุรกิจแค่เพื่อยอดขาย <br />จงดึงคุณค่าจากตัวคุณออกมา<br /><div className="underline decoration-[--yellow] text-[--yellow]">สร้างแบรนด์ให้เป็นตำนาน</div>

                                </div>
                                <br />
                                <div className="text-[14px] sm:text-large thai w-[56vw]">ผลงานสร้างแบรนด์สายคุณค่าระดับประเทศ</div>
                                <br />
                                {/* <Link href="/about"><div className="btn bg-primary rounded-full px-10 py-1 border-0 hover:scale-110 duration-150 text-white">About us</div></Link> */}
                                {/* <Link href="/about"><Button radius='sm' className='w-[300px] '>About Us</Button></Link> */}
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
                <div className=" absolute right-5 sm:right-20 bottom-8 sm:bottom-40 text-white thai sm:text-base text-[12px]">
                    <div>อีฟ ภัทรัดจารินท์​ สุวัชรานนท์</div>
                    <div>Brand Consultant / Teacher </div>
                </div>
            </div>
        </section>

        <section>

            <div className="bg-[--dark-blue] work">
                <div className="w-full text-center font-bold lg:text-[2rem] md:text-[1.5rem] lg:text-black text-white text-xl pt-10 leading-normal  ">หากคุณมั่นใจว่าคุณทำสินค้าดีมาตลอด<br />แต่ยังไม่มีใครเห็น <span className="bg-[--pink] px-2 text-white">คุณมาถูกที่แล้ว</span>
                </div>

                <section className=' flex flex-col gap-10  sm:flex-row sm:items-stretch items-center justify-center py-10 px-4 sm:px-10 '>
                    <Card className=' w-full max-w-[350px] shadow-xl bg-white'>
                        <CardHeader>
                            {/* <div className='h-10 w-10 rounded-full '>
                                <Image className='' width={300} height={300} src="./icon.svg" alt="" />
                            </div> */}
                        </CardHeader>
                        <CardBody>
                            <Flower />
                            <div className='text-xl font-bold'>  Value </div>
                            <div className="text-[18px]">
                                เราช่วยสะท้อนคุณค่าในตัวคุณที่สร้างอิมแพคให้สังคม
                            </div>
                        </CardBody>
                    </Card>
                    <Card className=' w-full max-w-[350px] shadow-xl bg-white'>
                        <CardHeader>
                            {/* <div className='h-10 w-10 rounded-full '>
                                <Image className='' width={300} height={300} src="./icon.svg" alt="" />
                            </div> */}
                        </CardHeader>
                        <CardBody>
                            <BadgeCheck />
                            <h3 className='text-xl font-bold'> Identity  </h3>
                            <div className="text-[18px]">
                                เราช่วยค้นหาเอกลักษณ์ที่เป็นธรรมชาติที่สุดของคุณ
                            </div>
                        </CardBody>
                    </Card>
                    <Card className=' w-full max-w-[350px] shadow-xl bg-white'>
                        <CardHeader>
                            {/* <div className='h-10 w-10 rounded-full '>
                                <Image className='' width={300} height={300} src="./icon.svg" alt="" />
                            </div> */}
                        </CardHeader>
                        <CardBody>
                            <HeartHandshake />
                            <h3 className='text-xl font-bold'> Culture
                            </h3>
                            <div className="text-[18px]">
                                เราช่วยสร้างวัฒนธรรมประจำแบรนด์ให้ธุรกิจคุณแตกต่างอย่างยั่งยืน
                            </div>

                        </CardBody>
                    </Card>
                </section>
            </div>
            <div className="bg-slate-100/40">

                <section className=' flex flex-col gap-10  sm:flex-row sm:items-stretch items-center justify-center py-10 px-4 sm:px-10 '>
                    <Card className='w-full max-w-[350px] shadow-xl bg-white/80 glass'>
                        {/* <CardHeader>
                            <div className='w-10 rounded-full '>
                                <Image className='' width={300} height={300} src="./icon.svg" alt="" />
                            </div>
                        </CardHeader> */}
                        <CardBody className="flex flex-col justify-between">
                            <Image src="/images/courses/5.jpg"></Image>
                            <div className="">
                                <div className='text-xl font-bold pt-2 pb-1'>  Online course </div>
                                <div className="text-[18px]">
                                    หลักสูตรสร้างคนดังในตำนาน เนื้อหาแน่น ห้ามพลาด เรียนได้ทุกที่ ทุกเวลา
                                </div>
                                <Button className='bg-[--green] text-white mt-2 w-full' radius="full">ดูหลักสูตรเพิ่มเติม</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className='w-full max-w-[350px] shadow-xl bg-white/80 glass'>
                        {/* <CardHeader>
                            <div className=' w-10 rounded-full '>
                                <Image className='' width={300} height={300} src="./icon.svg" alt="" />
                            </div>
                        </CardHeader> */}
                        <CardBody>
                            <Image src="/images/courses/4.jpg"></Image>
                            <h3 className='text-xl font-bold pt-3 pb-1'> On-site Workshop  </h3>
                            <div className="text-[18px]">
                                เรียนสด Connection เพื่อนเจ้าของธุรกิจตัวจริงต่างวงการ หรือจัดเวิร์คชอปเจ๋งๆให้องค์กร
                            </div>
                            <Button className='bg-[--green] text-white mt-2' radius="full">ดูรอบเรียน</Button>
                        </CardBody>
                    </Card>
                    <Card className='w-full max-w-[350px] shadow-xl bg-white/80 glass'>
                        {/* <CardHeader>
                            <div className=' w-10 rounded-full '>
                                <Image className='' width={300} height={300} src="./icon.svg" alt="" />
                            </div>
                            
                        </CardHeader> */}
                        <CardBody>
                            <Image src="/images/courses/1.jpg"></Image>
                            <h3 className='text-xl font-bold pt-2 pb-1'> 1:1 Consult
                            </h3>
                            <div className="text-[18px]">
                                ลงพื้นที่ทดสอบแบรนด์ที่มีหน้าร้าน ช่วยดึงจุดเด่นของแบรนด์ออกมาสื่อสารให้ได้ใจคน
                            </div>
                            <Button className='bg-[--green] text-white mt-2' radius="full">ดูเพิ่มเติม</Button>
                        </CardBody>
                    </Card>
                </section>
            </div>

            <section className='p-8 lg:p-16 bg-gradient-to-br from-white to-slate-50'>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <img className="w-64 lg:w-80 drop-shadow-2xl hover:scale-105 transition-transform duration-300" src="/images/sticker6.png" alt="E-Book ตัวจริงต้องมีที่ยืน" />
                    </div>

                    <div className="w-full lg:w-2/3 space-y-6 text-center lg:text-left">
                        <div className="inline-block bg-[--pink] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase shadow-md mb-2">
                            Sales Page E-Book
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-bold text-[--dark-blue] leading-tight">
                            เลิกทำตัวเป็น <span className="text-[--green]">"ของดีที่ไม่มีใครเห็น"</span><br />
                            แล้วเริ่มเป็น <span className="text-[--yellow] bg-black/5 px-2">"เบอร์หนึ่ง"</span> ที่ใครก็แทนไม่ได้
                        </h2>

                        <h3 className="text-xl lg:text-2xl font-bold text-[--pink] italic">
                            "คนเก่งที่ไม่มีที่ยืน... จะถูกแทนที่เสมอ"
                        </h3>

                        <div className="text-lg text-[--grey] leading-relaxed space-y-4">
                            <p>
                                คุณอาจจะเก่งระดับโลก มีสินค้าที่ดีเกินมาตรฐาน หรือมีบริการที่เปลี่ยนชีวิตคนได้
                                แต่... <span className="font-bold text-red-500">นี่คือความจริงที่เจ็บปวด</span>
                            </p>
                            <p>
                                ในโลกธุรกิจ <span className="font-bold">"ความเก่ง"</span> เป็นแค่ตั๋วเข้าประตู
                                แต่ <span className="font-bold bg-[--yellow]/20 px-1">"ที่ยืน"</span> ต่างหากคือตัวตัดสินว่าใครจะรวย
                            </p>
                            <p className="text-base text-slate-500 italic border-l-4 border-[--pink] pl-4">
                                "ถ้าวันนี้คุณยังเหนื่อยกับการหาลูกค้า ยังต้องลดแลกแจกแถม หรือรู้สึกว่าคนอื่นที่ 'เก่งน้อยกว่า' กลับดังกว่าคุณ...
                                ปัญหาไม่ใช่ว่าคุณไม่เก่ง แต่เป็นเพราะคุณ 'ยืนมั่ว' ค่ะ"
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 mt-6 max-w-2xl">
                            <h4 className="text-xl font-bold text-[--dark-blue] mb-3 flex items-center gap-2">
                                <span className="text-2xl">📖</span> E-Book ตัวจริงต้องมีที่ยืน: ประตูสู่ Top of Mind
                            </h4>
                            <ul className="space-y-2 text-left text-sm text-[--grey] mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span><strong className="text-[--dark-blue]">The Displacement Reality:</strong> ทำไมการเป็นคนเก่งที่ "ไร้ตัวตน" ถึงอันตรายกว่าการเป็นคนไม่เก่ง</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span><strong className="text-[--dark-blue]">The Positioning Matrix:</strong> เลิกยืนมั่ว แล้วไปยืนในจุดที่ลูกค้าไม่ต้องถามซ้ำว่า "คุณคือใคร"</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span><strong className="text-[--dark-blue]">Top of Mind Shortcut:</strong> วิธีสร้าง "ลายนิ้วมือทางธุรกิจ" ให้คนจำคุณได้ แม้จะยังไม่ซื้อ</span>
                                </li>
                            </ul>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 border-t pt-4">
                                <div className="text-center sm:text-left">
                                    <div className="text-sm text-slate-400 line-through">ปกติหลักแสน</div>
                                    <div className="text-3xl font-bold text-[--green]">ราคาเพียง 599.-</div>
                                </div>
                                <Button
                                    as={Link}
                                    href="/checkout"
                                    size="lg"
                                    className="bg-[--green] text-white font-bold text-lg px-8 py-6 w-full sm:w-auto shadow-xl hover:scale-105 transition-transform"
                                    radius="full"
                                >
                                    สั่งซื้อและรับแผนที่สู่ Top of Mind ทันที
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='p-10 bg-slate-100/40'>
                <div className=''>
                    <div className="text-2xl sm:text-4xl font-bold text-center py-10 ">
                        สร้างแบรนด์แบบชุ่มฉ่ำ คืออะไร?
                    </div>

                    <ul className="sm:text-2xl text-lg sm:flex grid justify-center items-strech  gap-10">
                        <li className="hover:-translate-y-3 duration-200 rounded-2xl text-center w-[250px]  p-3 grid ">
                            <div><img src="/images/sticker24.png" alt="" /></div>
                            <div>
                                <div className='font-bold text-[--green]'>1. จิตวิญญาณ</div>
                                <div className="text-[18px]">ถอดตัวตนพิเศษของคุณออกมาวางกลยุทธ์แบรนด์</div>
                            </div>
                        </li>
                        <li className="hover:-translate-y-3 duration-200 rounded-2xl text-center w-[250px]  p-3 grid ">
                            <div><img src="/images/sticker19.png" alt="" /></div>
                            <div>
                                <div className="font-bold text-[--green]">2. ความสุข</div>
                                <div className="text-[18px]">ใจใสใจสบายทำอะไรก็สำเร็จ</div>
                            </div>
                        </li>
                        <li className="hover:-translate-y-3 duration-200 rounded-2xl text-center w-[250px]  p-3 grid ">
                            <div><img src="/images/sticker7.png" alt="" /></div>
                            <div>
                                <div className="font-bold text-[--green]">3. ลูกค้า</div>
                                <div className="text-[18px]">เขาคือคนสำคัญที่สุดของคุณนะ เข้าใจเขาลึกมากพอรึยัง?</div>
                            </div>
                        </li>
                        <li className="hover:-translate-y-3 duration-200 rounded-2xl text-center w-[250px]  p-3 grid ">
                            <div><img src="/images/sticker21.png" alt="" /></div>
                            <div>
                                <div className="font-bold text-[--green]">4. ชื่อเสียง</div>
                                <div className="text-[18px]">ออกแบบคอนเทนต์คุณให้แตกต่างและลูกค้าจดจำ</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="flex sm:flex-row flex-col justify-evenly items-center gap-5 p-10 ">
                    <div className=' p-10 flex flex-col justify-between '>
                        <div>
                            <div className="text-3xl font-bold text-[--yellow]">Our Students</div>
                            <div className="text-lg sm:text-2xl w-[95vw] sm:w-auto ">
                                ธุรกิจคุณจะมีที่ยืน เมื่อคุณตัดสินใจจะเลิกอยู่ตรงกลาง
                            </div>
                        </div>
                        <div className="py-10"><Button className=" bg-[--green] text-white text-lg px-10 " radius='full'>สำรวจคอร์สที่เหมาะกับคุณ</Button></div>
                    </div>
                    <div className="flex flex-wrap sm:w-[30%] w-[95vw] gap-5 justify-center ">
                        <img className="sm:h-[80px] h-[50px]" src="/images/100_logo.png" alt="โลโก้อายุน้อยร้อยล้าน" />
                        <img className="sm:h-[80px] h-[50px]" src="/images/bdms_logo.jpg" alt="โลโก้คลินิคบีดีเอ็มเอส" />
                        <img className="sm:h-[80px] h-[50px]" src="/images/chubbycheeks_logo.jpg" alt="โลโก้ชุบบี้ชิ๊กส์" />
                        <img className="sm:h-[80px] h-[50px]" src="/images/madamfin_logo.jpg" alt="โลโก้มาดามฟิน" />
                        <img className="sm:h-[80px] h-[50px]" src="/images/ondemand_logo.png" alt="โลโก้ออนดีมานด์" />
                        <img className="sm:h-[80px] h-[50px]" src="/images/sowonclinic_logo.jpg" alt="โลโก้โซวอนคลีนิค" />
                        <img className="sm:h-[80px] h-[50px]" src="/images/winkwhite_logo.jpg" alt="โลโก้วิ้งค์ไวท์" />
                        <img className="sm:h-[80px] h-[50px]" src="/images/klao.png" alt="โลโก้เกลานิสัยอันตราย" />
                    </div>
                </div>
            </section>

            <div className="divider-y"></div>
            {/* 
            <div className="text-2xl sm:text-4xl font-bold text-center py-10 flex flex-col justify-center items-center">
                Our services
                <div className="rounded-full h-1 w-[100px] bg-[#D33666] "></div>
            </div>

            
            <section className=''>


                <div className=" rounded-3xl bg-slate-100 w-[100%]">
                    <div className="flex flex-wrap justify-center gap-10 py-5 px-4">


                        {
                            (contents.length != 0) ?

                                contents.map((content: any) =>
                                    <div className="card  w-96 sm:w-96 bg-white/50 shadow-xl overflow-hidden  " key={content.id}>
                                        <figure className={"h-[210px] sm:h-[240px] overflow-hidden "}><Image width={390} height={260} src={content.imageUrl || "/images/cover6.png"} fallbackSrc="/images/cover6.png" alt={content.title} className='object-cover z-0' /></figure>
                                        <div className="card-body h-[202px] sm:h-[auto]">
                                            <div className="card-title text-[--green]">
                                                {content.title}
                                                
                                            </div>
                                            <p className="h-[40px] sm:h-[80px] w-[auto] text-ellipsis overflow-hidden">{content.description}</p>
                                            <div className="card-actions justify-between">
                                                <Button href='#' className="bg-[--yellow]" radius='full'>ดูรายละเอียด</Button>
                                               
                                            </div>
                                        </div>
                                    </div>
                                ) :
                                courses.map((content) => {
                                    return <div className="card  w-96 sm:w-96 bg-white/50 shadow-xl overflow-hidden  " key={content.id}>
                                        <figure className={"h-[210px] sm:h-[240px] overflow-hidden "}><Loading /></figure>
                                        <div className="card-body h-[202px] sm:h-[auto]">
                                            <div className="card-title text-[--green]">
                                                กำลังโหลด
                                            </div>
                                            <p className="h-[40px] sm:h-[80px] w-[auto] text-ellipsis overflow-hidden">เนื้อหาเพื่อแสดง</p>
                                            <div className="card-actions justify-between">
                                                <Button href='#' className="bg-[--yellow]" radius='full'></Button>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })

                        }

                    </div>

                </div>
            </section> */}


            <section className=''>
                <div className='p-10'>

                    <div className="sm:text-3xl text-xl font-bold">ทำไมต้องชุ่มฉ่ำเท่านั้น ?</div>
                    <div className="rounded-full h-1 w-[10%] bg-[#D33666]"></div>
                    <div className="py-3 my-3  divide-y">

                        <div className="flex   flex-wrap gap-5 items-center justify-center ">


                            {videos.map((video) => {
                                return (
                                    <div className="card  card-side bg-[--pink] glass shadow-xl w-[90vw] h-[548px] overflow-hidden sm:w-[640px]  sm:h-[380px] flex-col sm:flex-row" key={video.id}>
                                        <figure className='bg-black w-full sm:w-[50%] h-full  flex items-center justify-center overflow-hidden '>
                                            <iframe src={"https://www.facebook.com/plugins/video.php?href=" + video.src + ""} className='sm:h-[400px]' allowFullScreen={true}  ></iframe></figure>
                                        <div className="card-body sm:flex-col flex-row text-white sm:w-[50%] sm:h-[auto] ">
                                            <div>
                                                <div className="card-title sm:text-3xl font-bold text-[--yellow] text-xl sm:w-[auto] overflow-hidden text-ellipsis">{video.title}!</div>
                                                <p className="text-ellipsis sm:w-[auto] h-[120px] text-[14px] sm:text-xl overflow-hidden">{video.description}.</p>
                                            </div>
                                            <div className="card-actions justify-end">
                                                <a href={video.src} target='_blank' className="btn bg-[--yellow] border-none">Watch</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}


                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-[--green] lg:text-[3rem] md:text-[2rem] text-[6vw] flex flex-col justify-center items-center h-[500px] text-white font-bold">
                <div className="lg:text-[4rem] bg-[--pink]">สร้างแบรนด์ให้คนรักในแบบที่คุณ…เป็นคุณ</div>
                เติบโตเร็วกว่า ยั่งยืนกว่า มีความสุขกว่า

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
