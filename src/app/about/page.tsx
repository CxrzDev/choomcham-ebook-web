// 'use client'
// import Navbar from "../components/nav"
import NavigationBar from '../components/navbar';
import Footer from '../components/footer';
import { motion } from "framer-motion"
import { Image } from '@nextui-org/react';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'ชุ่มฉ่ำ branding | เกี่ยวกับเรา',
    description: 'ครูอีฟ ภัทรัดจารินท์ สุวัชรานนท์ นักสร้างแบรนด์รุ่นใหม่สายคุณค่า บัณฑิตคณะศิลปศาสตร์ เอกภาษาศาสตร์ มหาวิทยาลัยธรรมศาสตร์',
    authors: [{ name: 'Choomcham branding' }],
    keywords: ['Choomcham', 'Choomcham Branding', 'branding', 'courses', 'personal branding', 'Brand Strategist', 'Keynote Speaker', 'Spiritual practitioner', 'อีฟ ภัทรัดจารินท์​ สุวัชรานนท์', 'marketing', ' brand identity', 'ทำไมต้อง ชุ่มฉ่ำ Branding จะช่วยธุรกิจคุณได้ยังไง?', 'ชุ่มฉ่ำ',
        "เกลานิสัย อันตราย", "เพิ่มยอดขาย"
    ],
    publisher: "Vercel",
    robots: { index: true, follow: true },
    icons: "/images/cropped-logo.png",
    openGraph: {

        images: [{
            url: "https://choomcham.vercel.app/images/cover6.png",
        }]
    }
}

function About() {
    return (
        <>

            {/* <Navbar /> */}
            <div className="z-20 fixed w-full">
                <NavigationBar current="3" />
            </div>

            <div className="bg-slate-200 ">
                <div className="text-black  w-full h-[80px]   rounded-3xl">
                    .
                </div>
            </div>
            {/* <main className="relative">


                <div>
                    <img draggable='false' src="/images/kruEve_image.jpg" alt="" className="w-96 rounded-2xl sm:mb-0 mb-10" />
                </div>
                <div
                    className=" px-10 sm:absolute top-52 sm:left-2/4">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }} >เกี่ยวกับ ครูอีฟ ชุ่มฉ่ำ แบรนดิ้ง</motion.div>
                   
                    <div
                        className="pb-10 ">
                        <div>
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 100 }} className="text-3xl sm:text-5xl thai py-5">ชุ่มฉ่ำ branding มาจากไหน?</motion.h1>
                            <motion.h2
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 100 }} className="w-full text-xl">ใครเห็นชื่อก็ต้องสะดุด เกิดจากคำพูดติดปากของ คุณอีฟ ภัทรัดจารินท์ สุวัชรานนท์ ผู้ก่อตั้งองค์กรมีญาติคนนึงเขาจะพูดติดปากว่าฉ่ำ คุณอีฟเลยติดเขามาเอะอะก็ฉ่ำ อะไร ๆ ก็ฉ่ำ สวยฉ่ำ ดีฉ่ำ ปังฉ่ำจะทำบริษัทก็เลยเป็น ชุ่มฉ่ำ Branding</motion.h2>
                        </div>
                        <br />

                    </div>
                </div>

                <div className="sm:bx-10 grid gap-5 justify-center px-5">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }}
                         className='text-3xl sm:text-6xl text-center my-10 font-bold'>ผลงานของเรา</motion.h2>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }} className="flex sm:flex-row flex-col gap-3 items-center w-full">
                        <div className="rounded-3xl overflow-hidden">
                            <img src="https://www.choomcham.com/assets/images/ca3c5f78.png" className=" sm:w-[40vw]" alt="" />
                        </div>
                        <div className=' sm:w-1/2'>
                            <div
                                 className="text-xl font-bold">Title</div>
                            <div className="text-md sm:w-5/6 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur a quam dignissimos, expedita et iste voluptatum unde incidunt. Sit minus asperiores assumenda corrupti recusandae architecto, explicabo enim dolorum nihil laboriosam quod quaerat saepe, consectetur atque laudantium repellendus minima officia qui?</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }} className="flex sm:flex-row-reverse flex-col gap-3 items-center ">
                        <div className="rounded-3xl overflow-hidden">
                            <img src="https://www.choomcham.com/assets/images/3f2f09b5.png" className=" sm:w-[40vw]" alt="" />
                        </div>
                        <div className=' sm:w-1/2'>
                            <div className="text-xl font-bold">Title</div>
                            <div className="text-md sm:w-5/6 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur a quam dignissimos, expedita et iste voluptatum unde incidunt. Sit minus asperiores assumenda corrupti recusandae architecto, explicabo enim dolorum nihil laboriosam quod quaerat saepe, consectetur atque laudantium repellendus minima officia qui?</div>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }} className="flex sm:flex-row flex-col gap-3 items-center ">
                        <div className="rounded-3xl overflow-hidden">
                            <img src="https://blog.choomcham.com/wp-content/uploads/2023/01/302153258_811615940253393_7549579098883693459_n-e1673467951770-1536x864.jpg" className=" sm:w-[40vw]" alt="" />
                        </div>
                        <div className=' sm:w-1/2'>
                            <div className="text-xl font-bold">Title</div>
                            <div className="text-md sm:w-5/6 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur a quam dignissimos, expedita et iste voluptatum unde incidunt. Sit minus asperiores assumenda corrupti recusandae architecto, explicabo enim dolorum nihil laboriosam quod quaerat saepe, consectetur atque laudantium repellendus minima officia qui?</div>
                        </div>
                    </motion.div>


                    <div className="flex w-1/2">
                        <img src="https://blog.choomcham.com/wp-content/uploads/2023/01/285933007_755002819248039_7005441046324586670_n-1536x857.jpg" alt="" />
                        <img src="https://blog.choomcham.com/wp-content/uploads/2023/01/129775117_395975328484125_5543274781438096971_n-e1673468247661-1536x864.jpg" alt="" />
                    </div>
                </div>


            </main> */}

            <section className="bg-slate-200">
                <div className="p-10 gap-5 sm:gap-0 sm:flex grid justify-items-center  sm:justify-evenly items-center relative">
                    <div className="bg-[--dark-blue] w-[100px] h-[150px] absolute sm:bottom-0 sm:right-[100px] sm:block hidden rounded-t-full">.</div>
                    <div className="bg-[--green] w-[100px] h-[100px] absolute sm:bottom-0  sm:right-[300px] sm:block hidden rounded-t-full">.</div>
                    <div className="bg-[--yellow] w-[100px] h-[100px] absolute sm:bottom-0  sm:right-[450px] sm:block hidden rounded-t-full">.</div>
                    <div className="bg-[--pink] w-[100px] h-[150px] absolute sm:bottom-0 sm:right-[600px] sm:block hidden rounded-t-full">.</div>
                    <div className="relative p-10">
                        <img src="./icon.svg" className="z-[3] absolute w-[90px] sm:w-[5vw]" alt="choomcham icon - splash water" />
                        <Image draggable='false' src="/images/kruEve_image.jpg" alt="รูปครูอีฟ กำลังยิ้ม" className="w-72 max-w-[auto] rounded-tl-[60px] rounded-br-[60px] sm:mb-0  " />
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-3xl font-bold">ครูอีฟ ภัทรัดจารินท์ สุวัชรานนท์ </h2>
                        <div className=" sm:w-[500px] text-lg sm:text-xl">นักสร้างแบรนด์รุ่นใหม่สายคุณค่า
                            บัณฑิตคณะศิลปศาสตร์ เอกภาษาศาสตร์ มหาวิทยาลัยธรรมศาสตร์
                            อดีตผู้ร่วมก่อตั้งสร้างแบรนด์ “เกลา นิสัยอันตราย” ผู้ติดตามล้านคน
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-orange-100 bg-opacity-50">
                <div className="p-10 grid sm:flex justify-items-center justify-around flex-row-reverse gap-5 items-center">
                    <div className="relative p-10">
                        <img src="./icon.svg" className="z-[3] absolute w-[90px] sm:w-[200px] right-0 bottom-4" alt="choomcham icon - splash water" />
                        {/* <div draggable='false'  className="absolute top-5 right-6 w-72 max-w-[auto] h-96 sm:h-[550px] sm:w-96 rounded-2xl sm:mb-0 bg-black  -rotate-6" >.</div> */}
                        {/* <img draggable='false' src="/images/kruEve_image4.jpg" alt="รูปครูอีฟ กำลังทำมือผิด" className="w-72 max-w-[auto] sm:w-96 rounded-2xl sm:mb-0  -rotate-6" /> */}
                        <div className="outline outline-offset-4 outline-[--yellow] rounded-xl"><img draggable='false' src="/images/kruEve_image4.jpg" alt="รูปครูอีฟ กำลังทำมือผิด" className="w-72 max-w-[auto] sm:w-96 rounded-2xl sm:mb-0  -rotate-6" /></div>
                    </div>
                    <div>

                        <div className="sm:text-4xl text-xl font-bold text-[--pink]">ความเป็นมา</div>
                        <p className="sm:text-xl text-lg w-[calc(45vw - 50px)] sm:w-[calc(50vw-20px)] text-pretty indent-10">
                            พูดไปคงไม่มีใครเชื่อว่าเมื่อก่อนอีฟเป็นเด็กขี้อาย พูดไม่รู้เรื่องคนหนึ่ง ไม่คิดไม่ฝันว่าโตขึ้นมาจะทำอาชีพที่ตรงกันข้ามกับนิสัยตัวเองแบบสุดขั้ว แต่จุดเปลี่ยนมันเกิดขึ้นจากที่หลังจากเรียนจบมา อีฟตั้งใจกับตัวเองว่าจะสละเวลาชีวิต 2 ปีทำอะไรเพื่อคนอื่นบ้าง เลยมาจบที่งานมูลนิธิ ขณะนั้นเป็นผู้หิวกระหายในการทดลองวิชาการสร้างแบรนด์
                        </p>
                        <div className='flex justify-center gap-2 p-4 w-[100%]'>
                            <div className="rounded-full bg-[--pink] text-[--pink] w-5 h-5 text-center">.</div>
                            <div className="rounded-full bg-[--pink] text-[--pink] w-5 h-5 text-center">.</div>
                            <div className="rounded-full bg-[--pink] text-[--pink] w-5 h-5 text-center">.</div>
                        </div>
                        <p className="sm:text-xl text-lg w-[calc(45vw - 50px)] sm:w-[calc(50vw-20px)] text-pretty indent-10">แม้ไม่เคยเรียนด้านนี้โดยตรง แต่ใจชอบเรื่องการค้าขาย การทำคอนเทนต์ สร้างเวบบอร์ดมาตั้งแต่เด็ก และเป็นคนชอบฟังธรรมแต่เด็ก เลยสงสัยว่า จะดีไหมถ้าเราปรับแพคเกจศีลธรรมให้เด็กรุ่นใหม่สนใจ จนในที่สุดก็สร้างแบรนด์ประสบความสำเร็จ และมีเจ้าของธุรกิจหลายคนอยากรู้วิธีทำยังไง เลยเกิดขึ้นมาเป็นคอร์สเล่าเรื่อง 3 นาทีให้ได้ใจคน ที่มีผู้เรียนมากกว่า 1,000 คน สร้างความสำเร็จให้กับเจ้าของธุรกิจ SME หน้าใหม่ได้มีที่ยืนในประเทศ</p>

                    </div>

                </div>
            </section>
            <section className="bg-slate-100">
                <div className="p-10 grid sm:flex justify-items-center justify-around  gap-5 items-center">
                    <div className="relative p-10">
                        <img src="./icon.svg" className="z-[3] absolute w-[90px] sm:w-[150px] right-0 top-4" alt="choomcham icon - splash water" />
                        <div className=" outline outline-offset-4 outline-[--dark-blue] rounded-xl"><img draggable='false' src="/images/kruEve_image3.jpg" alt="รูปครูอีฟ กำลังทำมือผิด" className="w-72 max-w-[auto] sm:w-96 rounded-2xl sm:mb-0  rotate-6" /></div>
                    </div>
                    <div>

                        <div className="sm:text-4xl text-xl font-bold text-[--dark-blue]">ทำไมต้องชื่อชุ่มฉ่ำ?</div>
                        <p className="sm:text-xl text-lg w-[calc(45vw - 50px)] sm:w-[calc(50vw-20px)] text-pretty indent-10">
                            ถ้าตอบตามจริงคือตอนแรกไม่มีความหมายอะไร นอกจากเป็นแค่คำพูดติดปากของเรา แต่เมื่อปลายปี 65 เป็นปีที่อีฟเกือบเลิกทำชุ่มฉ่ำ เพราะไม่มีความสุขกับสิ่งที่ตัวเองทำเลย หาจิตวิญญาณตัวเองไม่เจอว่าทำไปทำไม จนกระทั่งถอยห่างออกจากธุรกิจนี้ ไม่ทำอะไรเลย นอกจากไปปฏิบัติธรรมหรือเข้าหาธรรมชาติเพื่อตกผลึกกับตัวเอง ว่า ที่ผ่านมาเกิดอะไรขึ้น เลยเห็นภาพตัวเองในอดีตว่า เราทำอย่างไม่มีสติ เผลอไปใช้ตัวเลขนำทาง จนเกิดความเครียด กดดัน เพราะเราไม่ได้สร้างแบรนด์ด้วยจิตที่ชุ่มฉ่ำ ผลลัพธ์มันเลยไม่ชัดเจน เราก็เครียดที่ไม่ได้เป็นตัวของตัวเองเท่าที่ควร

                        </p>
                        <div className='flex justify-center gap-2 p-4 w-[100%]'>
                            <div className="rounded-full bg-[--pink] text-[--pink] w-5 h-5 text-center">.</div>
                            <div className="rounded-full bg-[--pink] text-[--pink] w-5 h-5 text-center">.</div>
                            <div className="rounded-full bg-[--pink] text-[--pink] w-5 h-5 text-center">.</div>
                        </div>
                        <p className="sm:text-xl text-lg w-[calc(45vw - 50px)] sm:w-[calc(50vw-20px)] text-pretty indent-10">ตอนนี้ค้นพบแล้วว่า ความหมายของ<b>ชุ่มฉ่ำ</b> มัน<b>คือการที่คุณต้องวางจิตให้ชุ่มฉ่ำ เบิกบานอยู่เสมอ</b> คุณถึงจะมองเห็นตัวเองได้ชัดและสร้างแบรนด์ให้คนมีความสุขตามไปด้วยได้


                            และอยากบอกเจ้าของธุรกิจทุกคนว่า อย่าทำมุ่งหน้าหาแต่เงินจนลืมไปว่าเราทุกคนก็ต้องตาย <b>ทำทุกอย่างให้ดีที่สุดและอย่าลืมดูแลใจของตัวเองให้ฉ่ำตลอดเวลาด้วย เมื่อใจเราฉ่ำ ผลลัพธ์ก็จะฉ่ำตาม</b>
                        </p>

                    </div>

                </div>
            </section>

            <section className="">
                <div className="p-10">
                    <div className="flex gap-5 justify-center">
                        <Image src="/images/kruEve_image2.jpg" alt="krueve" className="w-56 sm:w-96 rounded-full" />
                        <Image src="/images/kruEve_image5.jpg" alt="krueve" className="w-56 sm:w-96 rounded-full" />
                        <Image src="/images/kruEve_image2.jpg" alt="krueve" className="w-56 sm:w-96 rounded-full" />
                    </div>
                    <div className="py-8 sm:flex justify-center gap-5">
                        <div className="ssm:grid gap-3">
                            <div className="text-xl sm:text-3xl font-bold sm:w-[80%]  text-[--pink]">ทักษะพิเศษของชุ่มฉ่ำ</div>
                            <div className="text-md sm:text-xl w-[70vw] sm:w-[35vw] ">
                                อีฟเป็นคนประหลาดที่ไม่ชอบเห็นคนมีของดี แต่ไม่สื่อสารออกมาให้ตรงจุด ทำให้คนเหล่านั้นพลาดโอกาสดีๆในชีวิตไปมากมาย อีฟสามารถสะท้อน Who you are ได้ตรงจุด จับประเด็นได้คล่อง ดึง DNA เจ้าของออกมาสื่อสารได้ไม่มีใครเหมือน โดยคงเสน่ห์ของคนๆนั้นไว้ ไม่ให้ซ้ำใคร เพราะคำว่าแบรนด์คือเอาความแตกต่างของสิ่งนั้นออกมาขยี้ให้คนจดจำได้
                            </div>
                        </div>
                        <div className="py-5"></div>
                        <div className="ssm:grid gap-3 ">
                            <div className="text-xl sm:text-3xl font-bold sm:w-[80%]  text-[--yellow]">ภารกิจของชุ่มฉ่ำ คืออะไร?</div>
                            <div className="text-md sm:text-xl w-[70vw] sm:w-[35vw] ">
                                แรงผลักดันการทำธุรกิจของอีฟตอนนี้คือ อยากช่วยเจ้าของธุรกิจทุกคนหา DNA พิเศษเฉพาะแบรนด์ ช่วยให้แบรนด์ค้นพบ Key message ทองคำเพื่อนำไปสื่อสารต่อ ให้สังคมได้เกิดการตื่นรู้หันมาทำสิ่งดีๆในชีวิตเพิ่มขึ้น อย่าง Nike มี Just do it ช่วยให้คนที่กลัว ไม่กล้า หันมาลงมือทำเพิ่มขึ้น แบรนด์อื่นๆในประเทศไทยก็ควรที่จะมี Message ดีๆเพื่อถ่ายทอดให้คนเกิดการเปลี่ยนแปลงเชิงบวกได้เช่นกัน
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default About