
'use client'
import Footer from '@/app/components/footer';
import NavigationBar from '@/app/components/navbar';
import { motion, useAnimationControls } from 'framer-motion';
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useEffect } from 'react';


function Consult() {

    const controls = useAnimationControls()

    useEffect(() => {
        controls.start(custom => ({

            y: 20,
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: custom
            }
        }))
    }, [])
    return <>

        <div className="fixed z-50 w-full">
            <NavigationBar current="0" />
        </div>

        <section className="p-10 relative bg-[beige]">

            <div className="text-center flex items-center flex-col justify-center ">
                <div className="flex justify-center p-10">
                    <Image width="80" height="80" src="/icon.svg" alt={''} className=' w-50 h-50'></Image>
                </div>

                <div className="sm:text-[42px] text-[24px] font-bold sm:w-1/3 w-1/2  rounded-md text-black/80 ">วิธีการสร้างแบรนด์ให้คนรักอย่างยั่งยืนใน 3-6 เดือน</div>
            </div>

            <motion.div animate={controls} custom={3} className="w-[15vw] h-[15vw] bg-[--pink] absolute p-3 rounded-full -z-0 top-10 left-[1%]" />
            <motion.div animate={controls} custom={1} className="w-[100px] h-[100px] bg-[--dark-blue] absolute p-3 rounded-full -z-0 top-10 right-[2%]" />
            <motion.div animate={controls} custom={2} className="w-[50px] h-[50px] bg-[--green] absolute p-3 rounded-full -z-0 bottom-[10%] right-[18%]" />
            <motion.div animate={controls} custom={2} className="w-[50px] h-[50px] bg-[--yellow] absolute p-3 rounded-full -z-0 bottom-[10%] left-[20%]" />
            <div className="w-full flex items-center justify-center p-10">
                <div className="w-48 h-4 bg-[--dark-blue] rounded-full">.</div>
            </div>
        </section>




        <section className="p-10 ">
            <div className="flex sm:flex-row flex-col-reverse justify-around items-center text-md sm:text-[24px] ">
                <div className="sm:w-1/3">
                    <div className="font-bold text-[32px]">1 วางแผนเริ่มจากฐาน <span className='text-[--green] text-[48px]'>Pyramid</span></div>
                    <div className=''>
                        <div className='flex hover:font-bold duration-150 hover:scale-105 cursor-default gap-3'><div className="w-[20px] h-[20px] bg-[--light-blue]  p-3 rounded-full "></div>Who you are?</div>
                        <div className='flex hover:font-bold duration-150 hover:scale-105 cursor-default gap-3'><div className="w-[20px] h-[20px] bg-[--light-blue]  p-3 rounded-full "></div>Values</div>
                        <div className='flex hover:font-bold duration-150 hover:scale-105 cursor-default gap-3'><div className="w-[20px] h-[20px] bg-[--light-blue]  p-3 rounded-full "></div>Vision & Goals</div>
                        <div className='flex hover:font-bold duration-150 hover:scale-105 cursor-default gap-3'><div className="w-[20px] h-[20px] bg-[--light-blue]  p-3 rounded-full "></div>Personality</div>
                        <div className='flex hover:font-bold duration-150 hover:scale-105 cursor-default gap-3'><div className="w-[20px] h-[20px] bg-[--light-blue]  p-3 rounded-full "></div>Archetype </div>
                        <div className='flex hover:font-bold duration-150 hover:scale-105 cursor-default gap-3'><div className="w-[20px] h-[20px] bg-[--light-blue]  p-3 rounded-full "></div>Position </div>
                        <div className='flex hover:font-bold duration-150 hover:scale-105 cursor-default gap-3'><div className="w-[20px] h-[20px] bg-[--light-blue]  p-3 rounded-full "></div>Point of view </div>
                        <div className='flex hover:font-bold duration-150 hover:scale-105 cursor-default gap-3'><div className="w-[20px] h-[20px] bg-[--light-blue]  p-3 rounded-full "></div>Ideal Client</div>
                    </div>
                </div>
                <div className='sm:w-1/2 rounded-xl sm:p-0 p-5'><Image width="1024" height="1024" src="/images/consultChart.png" alt="" className='rounded-2xl w-full ' /></div>
            </div>
        </section>

        <section className="p-10 bg-[--dark-blue] ">
            <div className="flex sm:flex-row flex-col justify-between items-center gap-5 ">
                <div className=' sm:text-[20px] shadow-md  sm:w-1/4 sm:rounded-none rounded-xl bg-[--light-blue] border-1 border-black  p-5  sm:h-[250px] '>
                    <div className="text-center bg-[--pink] w-10  rounded-full text-white">2</div>
                    <div className="">
                        เริ่มออกแบบ <span className='text-[--pink] sm:text-[32px]'>Graphic Design</span> ให้สอดคล้องกับฐานด้านบน</div>

                </div>
                <div className=' sm:text-[20px] shadow-md  sm:w-1/4 sm:rounded-none rounded-xl bg-[--light-blue] border-1 border-black  p-5  sm:h-[250px] '>
                    <div className="text-center bg-[--yellow] w-10  rounded-full text-white">3</div>
                    <div className="">
                        ออกแบบคอนเทนต์ให้สะกดคนดู <span className='text-[--yellow] sm:text-[32px]'>LIVE ให้ถี่</span> คอนเทนต์สั้นโพสให้ได้ทุกวัน</div>

                </div>
                <div className=' sm:text-[20px] shadow-md  sm:w-1/4 sm:rounded-none rounded-xl bg-[--light-blue] border-1 border-black  p-5  sm:h-[250px] '>
                    <div className="text-center bg-[--dark-blue] w-10  rounded-full text-white">4</div>
                    <div className="">
                        รับ <span className='text-[--dark-blue] sm:text-[32px]'>Feedback</span> ของลูกค้ามาพัฒนาแผนการตลาด บริการ </div>

                </div>
                <div className=' sm:text-[20px] shadow-md  sm:w-1/4 sm:rounded-none rounded-xl bg-[--light-blue] border-1 border-black  p-5  sm:h-[250px] '>
                    <div className="text-center bg-[--green] w-10  rounded-full text-white">5</div>
                    <div className="">
                        <span className='text-[--green] sm:text-[32px]'>พัฒนาความรู้</span>ให้พนักงานเข้าใจแบรนด์แบบฝังลึก</div>

                </div>
            </div>
        </section>



        <section className="p-10 " >
            <div className="flex sm:flex-row flex-col sm:h-[400px] justify-between items-center gap-5 text-md sm:text-[24px] ">

                <div className='bg-white  rounded-3xl border-2 border-black p-2 sm:p-10 sm:w-1/2 w-[90%] h-full relative overflow-clip shadow-xl hover:scale-95 duration-150'>
                    <div className="text-[24px] sm:text-[32px] font-bold text-[--green]">ผลลัพธ์ที่คุณควรจะได้</div>
                    <li className=" sm:w-full list-none flex items-center p-2 gap-3"><div className="p-1 bg-black rounded-full h-1 w-1"></div> เจอลูกค้าที่ใช่ จ่ายง่าย จ่ายคล่อง เพราะเขารักและศรัทธาในตัวคุณ</li>
                    <li className=" sm:w-full list-none flex items-center p-2 gap-3"><div className="p-1 bg-black rounded-full h-1 w-1"></div> คนทั่วประเทศรู้จักแบรนด์ของคุณ</li>
                    <li className=" sm:w-full list-none flex items-center p-2 gap-3"><div className="p-1 bg-black rounded-full h-1 w-1"></div> ลดค่าการตลาด มีงบเหลือๆมาพัฒนาบริการให้ลูกค้าติดใจไม่ไปไหน</li>
                    <li className=" sm:w-full list-none flex items-center p-2 gap-3"><div className="p-1 bg-black rounded-full h-1 w-1"></div> สื่อมาขอสัมภาษณ์เพราะแบรนด์คุณชัดจนเป็นไอดอลของใครหลายคน</li>

                    <div className="bg-[--pink]  rounded-full w-10 h-10  sm:-right-10 sm:p-20 p-72 absolute -z-1"></div>
                    <div className="bg-[--green] rounded-full w-10 h-10 sm:-top-5 sm:-right-10 sm:p-20 p-40 absolute -z-1"></div>
                    <div className="bg-[--yellow] right-20 rounded-full sm:-left-10 sm:p-20 w-10 h-10 p-56 absolute -z-1"></div>
                </div>
                <div className='bg-white  rounded-3xl border-2 border-black p-2 sm:p-10 sm:w-1/2 w-[90%] h-full relative overflow-clip shadow-xl hover:scale-95 duration-150'>
                    <div className="text-[24px] sm:text-[32px] font-bold text-[--green]">ทำไมคน <span className="text-[--yellow] underline">90%</span> ถึงทำไม่ได้?</div>
                    <li className=" sm:w-full list-none flex items-center p-2 gap-3"><div className="p-1 bg-black rounded-full h-1 w-1"></div> เรามองไม่เห็นคิ้วตัวเอง</li>
                    <li className=" sm:w-full list-none flex items-center p-2 gap-3"><div className="p-1 bg-black rounded-full h-1 w-1"></div> การเป็น CEO ทำให้มีสิ่งที่ต้องโฟกัสหลายอย่างมากไป </li>
                    <li className=" sm:w-full list-none flex items-center p-2 gap-3"><div className="p-1 bg-black rounded-full h-1 w-1"></div> ให้ค่ากับสิ่งที่ไม่สำคัญจนลืมโฟกัส 20% ที่ทำให้เกมเปลี่ยน</li>
                    <li className=" sm:w-full list-none flex items-center p-2 gap-3"><div className="p-1 bg-black rounded-full h-1 w-1"></div> ไม่มีความรู้เรื่องการสร้างแบรนด์มาก่อน</li>
                    <li className=" sm:w-full list-none flex items-center p-2 gap-3"><div className="p-1 bg-black rounded-full h-1 w-1"></div> สิ่งที่วางแผนไม่ได้สอดคล้องกับจิตวิญญาณข้างในจริง แผนที่วางออกมาเลยเป็นแค่เปลือก</li>

                    <div className="bg-[--pink]  rounded-full w-10 h-10  sm:-right-10 sm:p-20 p-72 absolute -z-1"></div>
                    <div className="bg-[--green] rounded-full w-10 h-10 sm:-top-5 sm:-right-10 sm:p-20 p-40 absolute -z-1"></div>
                    <div className="bg-[--yellow] right-20 rounded-full sm:-left-10 sm:p-20 w-10 h-10 p-56 absolute -z-1"></div>
                </div>


            </div>
        </section>

        <div className="w-full flex items-center justify-center p-10">
            <div className="w-48 h-4 bg-[--dark-blue] rounded-full">.</div>
        </div>

        <section className="p-10 bg-[--green]">
            <div className="flex sm:flex-row flex-col items-center justify-evenly sm:text-[24px] rounded-2xl bg-[--yellow] relative p-5 text-black/70 text-lg">
                <Image width="200" height="200" alt="" src="/images/sticker21.png " className='absolute -bottom-10 left-10'></Image>
                <div className="sm:w-1/2  text-center">
                    <div className="sm:text-3xl text-xl">ที่ปรึกษาวางแผนสร้างแบรนด์</div>
                    <div className="sm:text-4xl text-2xl text-[--pink] font-bold">จาก 0 จนมีชื่อเสียง</div>
                </div>

                <div className='sm:w-1/2'>
                    <li className="w-[90%] list-none flex items-center p-2 gap-3"><div className="p-1 bg-black rounded-full h-1 w-1"></div> เรามองไม่เห็นคิ้วตัวเอง</li>
                    <li className="w-[90%] list-none flex items-center p-2 gap-3"><div className="p-1 bg-black rounded-full h-1 w-1"></div> การเป็น CEO ทำให้มีสิ่งที่ต้องโฟกัสหลายอย่างมากไป </li>
                    <li className="w-[90%] list-none flex items-center p-2 gap-3"><div className="p-1 bg-black rounded-full h-1 w-1"></div> ให้ค่ากับสิ่งที่ไม่สำคัญจนลืมโฟกัส 20% ที่ทำให้เกมเปลี่ยน</li>
                    <li className="w-[90%] list-none flex items-center p-2 gap-3"><div className="p-1 bg-black rounded-full h-1 w-1"></div> ไม่มีความรู้เรื่องการสร้างแบรนด์มาก่อน</li>
                    <li className="w-[90%] list-none flex items-center p-2 gap-3"><div className="p-1 bg-black rounded-full h-1 w-1"></div> สิ่งที่วางแผนไม่ได้สอดคล้องกับจิตวิญญาณข้างในจริง แผนที่วางออกมาเลยเป็นแค่เปลือก</li>

                </div>
            </div>
        </section>

        <section className="p-10 flex sm:flex-row flex-col-reverse">
            <div className='sm:w-1/2'>
                <div className='sm:text-2xl text-xl'>รายละเอียด</div>
                <li className='sm:text-xl text-lg list-item'>พูดคุยหาทางออกให้แบรนด์ แก้ปัญหาเฉพาะจุดแบบเร่งด่วน</li>
                <li className='sm:text-xl text-lg list-item'>ส่งบันทึกไฟล์เสียงที่คุยให้ทุกครั้งหลังจบงาน</li>
                <li className='sm:text-xl text-lg list-item'>ลูกค้าได้ไฟล์ PDF สรุปแนวทางการสร้างแบรนด์เฉพาะบุคคลภายใน 7 วัน</li>
            </div>

            <div className='py-2 sm:w-1/2 flex flex-wrap gap-5 items-center justify-center'>

                <Card className="sm:w-48 h-[300px] ">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold"> Online 4 ชม.</p>
                        <h4 className="text-white font-medium text-large ">เหมาะกับเจ้าของธุรกิจที่ต้องการให้เข้าร่วมประชุมรายสัปดาห์กำหนดทิศทางแบรนด์</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 sm:w-48 w-[500px] h-full object-cover shadow-inner"
                        src="/images/consult2.jpg"
                    />
                    <CardFooter className="absolute bottom-0 ">
                        <div>

                            <Button className="text-black text-tiny">ราคาเพียง 29,999 บาท</Button>
                        </div>

                    </CardFooter>
                </Card>


                <Card className="sm:w-48 h-[300px] ">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold"> พูดคุย 1 มื้ออาหาร 3 ชม.</p>
                        <h4 className="text-white font-medium text-large ">เข้าได้ 2 คน</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 sm:w-48 w-[500px] h-full object-cover shadow-inner"
                        src="/images/consult1.jpg"
                    />
                    <CardFooter className="absolute bottom-0 ">
                        <div>

                            <Button className="text-black text-tiny">ราคาเพียง 29,900 บาท</Button>
                        </div>

                    </CardFooter>
                </Card>


                <Card className="sm:w-48 h-[300px] ">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold"> ลงพื้นที่เจาะจุดแข็ง 1 วัน</p>
                        <h4 className="text-white font-medium text-large ">ทีมงานเข้าได้ไม่เกิน 4 คน</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 sm:w-48 w-[500px] h-full object-cover shadow-inner"
                        src="/images/consult3.jpg"
                    />
                    <CardFooter className="absolute bottom-0 ">
                        <div>

                            <Button className="text-black text-tiny">ราคาเพียง 49,999 บาท</Button>
                        </div>

                    </CardFooter>
                </Card>
            </div>
        </section>



        <Footer />
    </>
}

export default Consult