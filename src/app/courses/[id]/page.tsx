import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { Asterisk, AudioWaveform, Award, Check, CircleCheckBig, MessageCircleX, Sparkles, Wheat } from "lucide-react";
import Link from "next/link";
import Lession from "./Lessons";
import Video from "@/app/components/VideoPlayer";
import CountDown from "@/app/components/CountDonw";
import Question from "./Questions";
import Review from "./Review";
import Promote from "./Promote";
import Quote from "./Quote";
import Quote1 from "./Quote1";
import { Metadata } from "next";
import Script from 'next/script'


export const metadata: Metadata = {
    title: 'ชุ่มฉ่ำ branding | เล่าเรื่อง 3 นาทีให้มียอดขาย',
    description: 'เพิ่มยอดขายและผู้ติดตาม 10 เท่าใน 8 ชั่วโมง โดยไม่ต้องมีพื้นฐาน  ถ้าคุณรู้...ว่าตัวเองมีของดี ถ้าคุณรู้...ว่าตัวเองคือตัวจริง มันจะเจ็บปวดแค่ไหน? ถ้าสุดท้ายคุณเป็นได้แค่...คนเก่งที่ไม่มีใครรู้จัก',
    authors: [{ name: 'Choomcham branding' }],
    keywords: ['Choomcham', 'Choomcham Branding', 'branding', 'courses', 'personal branding', 'Brand Strategist', 'Keynote Speaker', 'Spiritual practitioner', 'อีฟ ภัทรัดจารินท์​ สุวัชรานนท์', 'marketing', ' brand identity', 'ทำไมต้อง ชุ่มฉ่ำ Branding จะช่วยธุรกิจคุณได้ยังไง?', 'ชุ่มฉ่ำ',
        "เล่าเรื่อง 3 นาที", "เพิ่มยอดขาย"
    ],
    publisher: "Vercel",
    robots: { index: true, follow: true },
    icons: "/images/cropped-logo.png",
    openGraph: {

        images: [{
            url: "https://choomcham.vercel.app/images/cover5.png",
        }]
    }
}


export default function Page() {
    return (
        <>

            <Quote1 />
            <div className="w-full lg:h-[50vh]  grid items-center px-5 py-5 gap-5">

                <div className="text-[42px] text-[--dark-blue]">ธุรกิจของคุณมี 1 อาการต่อไปนี้หรือไม่?</div>
                <ul className="grid lg:grid-cols-5 md:grid-cols-3">
                    <li className="p-3 rounded-xl bg-white m-2 "><CircleCheckBig /> ตั้งใจดีอยากช่วยสังคม แต่สื่อสารไปไม่มีใครสน</li>
                    <li className="p-3 rounded-xl bg-white m-2 "><CircleCheckBig />คุณภาพดีกว่าหรือใกล้เคียงคู่แข่ง แต่ยอดขายสู้ไม่ได้</li>
                    <li className="p-3 rounded-xl bg-white m-2 "><CircleCheckBig />ออฟไลน์ขายดี แต่ออนไลน์ดันไม่ปัง</li>
                    <li className="p-3 rounded-xl bg-white m-2 "><CircleCheckBig />ทำธุรกิจมานาน แต่ยอดไม่โตสักที</li>
                    <li className="p-3 rounded-xl bg-white m-2 "><CircleCheckBig />รู้ว่าต้องพูดอะไร แต่ถ่ายทอดออกมาไม่ได้ดั่งใจ</li>

                </ul>

                <div>
                    <div className="text-xl bg-[--green] w-fit text-white px-2">ถ้าคำตอบคือใช่ คุณคือตัวจริง</div>
                    <div className="text-2xl text-[--pink]">นี่เป็นคอร์สที่สร้างมาเพื่อตัวจริงอย่างคุณ</div>
                </div>
            </div>
            <div className="w-full  work  relative flex flex-col items-center justify-center min-h-[100vh] text-white lg:text-black py-5 text-center">
                {/* <div className="blob-yellow  w-[50vw] md:w-[25vw] lg:w-[25vw] h-[50vw] md:h-[25vw] lg:h-[25vw] absolute -left-[10vw] -top-[10vw]"></div>
                <div className="blob-pink  w-[30vw] h-[30vw] absolute  -right-10 lg:-top-[15rem] -top-[10vw] "></div>
                <div className="blob-green  w-[25vw] h-[25vw] absolute  -right-[15vw] -top-[5vw]"></div>
                <img src="/icon.svg" className=" colored-icon absolute z-0 w-[500px] left-[-15rem] bottom-[-10rem]" alt="" />
               
                <img src="/icon.svg" className="absolute z-0 w-[500px] right-[-20rem] bottom-10 " alt="" /> */}
                <div className="w-2/3 relative ">

                    <h1 className="lg:text-[56px] md:text-[56px] text-[6vw] font-bold">เล่าเรื่อง 3 นาทีให้มียอดขาย</h1>
                    <h2 className="lg:text-[42px] md:text-[42px] text-[4vw]">เพิ่มยอดขายและผู้ติดตาม <span className="text-[--yellow] font-bold">10 เท่าใน 8 ชั่วโมง </span>โดยไม่ต้องมีพื้นฐาน</h2>
                    <div className="text-xl grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                        <div className="flex ring-1 ring-white/50 rounded-full px-2 py-1 text-[3vw] sm:text-base"><Check className="text-[--yellow]"></Check>ตกผลึกจากประสบการณ์สร้างแบรนด์ 15 ปี</div>
                        <div className="flex ring-1 ring-white/50 rounded-full px-2 py-1 text-[3vw] sm:text-base"><Check className="text-[--yellow]"></Check>หลักสูตรที่พัฒนาต่อเนื่องไม่เคยหยุดตลอด 5 ปี</div>
                        <div className="flex ring-1 ring-white/50 rounded-full px-2 py-1 text-[3vw] sm:text-base"><Check className="text-[--yellow]"></Check>พื่อเจ้าของธุรกิจตัวจริงที่มีของดี</div>
                        <div className="flex ring-1 ring-white/50 rounded-full px-2 py-1 text-[3vw] sm:text-base"><Check className="text-[--yellow]"></Check>จากสื่อสารไม่เป็น...ให้ดังระดับประเทศ</div>
                    </div>
                </div>

                <div className="lg:text-lg md:text-[2vw] max-w-[80%] text-[3vw] sm:text-md mt-10 rounded-[2rem] bg-white/80 glass p-5 ">
                    <div className="text-md font-bold text-[--pink]">คำเตือน!</div>
                    <div className="font-normal grid justify-items-center justify-center w-full  text-black">
                        <div className="w-[70%]">คอร์สนี้ไม่เหมาะกับคนที่
                            อยากใช้เวลาหลายปี จ่ายเงินหลักล้าน และทุ่มเทกำลังใจมากมาย
                            ในการทดลองด้วยตัวเอง
                        </div>
                    </div>


                </div>

            </div>



            {/* <section className="p-5 relative sm:px-10  flex flex-col text-center justify-center items-center h-[500px] glass skewed-background" id="warning">
               <img src="/icon.svg" className="z-0 absolute w-[600px] bottom-0 lg:right-[-200px] right-[-100px] opacity-55 colored-icon" alt="" /> 
                <div className="font-bold relative text-[5vw]  sm:text-[36px] py-2 text-center lg:w-1/2 w-full">
                    <div className="text-md text-[--pink]">คำเตือน!</div>
                    <div className="font-normal text-[--dark-blue]">
                        <div>คอร์สนี้ไม่เหมาะกับคนที่
                            อยากใช้เวลาหลายปี จ่ายเงินหลักล้าน และทุ่มเทกำลังใจมากมาย
                            ในการทดลองด้วยตัวเอง
                        </div>
                    </div>


                </div>



            </section> */}

            <section className="flex flex-col lg:flex-row items-center  justify-between  p-8 lg:p-16">

                <div className="font-bold text-[4.5vw] sm:text-[36px] pt-2 w-full text-[--pink] text-center">
                    <div className="font-normal">แน่นอนว่าคุณเป็นคนที่เชื่อใน</div>
                    <div className="sm:text-[42px] text-[30px]">ผลลัพธ์ที่จับต้องได้จริง</div>
                    <div className=" font-normal">นี่คือตัวอย่างนักเรียนบางส่วนของเรา</div>
                </div>
            </section>
            {/* <div className="bg-zinc-switch "> */}
            <div>
                <Review />
            </div>

            <section className="grid items-center  justify-items-center gap-10  p-8 lg:p-16 my-10">

                <div className="font-bold text-[4.5vw] sm:text-[36px] pt-2 w-full text-[--pink] text-center ">
                    <div className="font-normal">ธุรกิจเหล่านี้มีที่ยืนระดับประเทศด้วยเรื่องเล่าที่ทรงพลัง</div>
                    <div className="sm:text-[42px] text-[30px]">โดดเด่นที่สุดในตลาด</div>

                </div>


                <div className="flex flex-wrap  gap-5 justify-center enable-animation  ">
                    <img className="sm:h-[80px] h-[50px] " src="/images/100_logo.png" alt="โลโก้อายุน้อยร้อยล้าน" />
                    <img className="sm:h-[80px] h-[50px] " src="/images/3ms/theicon.png" alt="โลโก้ดิไอคอน" />
                    <img className="sm:h-[80px] h-[50px] " src="/images/chubbycheeks_logo.jpg" alt="โลโก้ชุบบี้ชิ๊กส์" />
                    <img className="sm:h-[80px] h-[50px] mix-blend-multiply" src="/images/madamfin_logo.jpg" alt="โลโก้มาดามฟิน" />
                    <img className="sm:h-[80px] h-[50px] " src="/images/ondemand_logo.png" alt="โลโก้ออนดีมานด์" />
                    <img className="sm:h-[80px] h-[50px] mix-blend-multiply" src="/images/sowonclinic_logo.jpg" alt="โลโก้โซวอนคลีนิค" />
                    <img className="sm:h-[80px] h-[50px] mix-blend-multiply" src="/images/winkwhite_logo.jpg" alt="โลโก้วิ้งค์ไวท์" />
                    <img className="sm:h-[80px] h-[50px] mix-blend-multiply" src="/images/whitestory.png" alt="โลโก้ white story" />
                    <img className="sm:h-[80px] h-[50px] mix-blend-multiply" src="/images/vingicon.png" alt="โลโก้ ving" />
                    <img className="sm:h-[80px] h-[50px] " src="/images/meticulous.png" alt="โลโก้ Meticulous" />
                    <img className="sm:h-[80px] h-[50px] mix-blend-multiply" src="/images/oxybaby.png" alt="โลโก้ oxybaby" />
                </div>
            </section>



            <section className="grid lg:grid-cols-2 grid-cols-1  items-center gap-10  p-3 lg:p-16  my-10">

                <div className="lg:text-[42px] text-[32px] font-bold text-[--pink] px-2">
                    ทำไมต้องเรียนกับชุ่มฉ่ำ?

                    <div className="text-[--pink] font-bold">
                        <div className="text-[--green] text-xl">ขอรับประกันเลยว่าคุณจะได้เรียน</div>
                        <div className="text-md">[สิ่งที่แม้แต่คุณเองก็ยังไม่รู้ว่าตัวเองยังไม่รู้]</div>
                        <div className="text-3xl text-[--dark-blue]">ตาสว่างขึ้นทุกครั้งที่เรียน!</div>
                    </div>
                </div>

                <div className="bg-[--light-blue] rounded-xl p-3">
                    <ul className="grid lg:grid-cols-2 md:grid-cols-2  p-5 rounded-xl ">
                        <li className="text-black text-[18px] bg-white p-2 rounded-xl m-2 flex gap-2"><Asterisk className="text-[--green]" /> ตกผลึกความรู้จากการทำธุรกิจเองกว่า 15 ปี</li>
                        <li className="text-black text-[18px] bg-white p-2 rounded-xl m-2 flex gap-2"><Asterisk className="text-[--green]" /> พัฒนาหลักสูตรต่อเนื่องไม่เคยหยุดมาตลอด 5 ปี</li>
                        <li className="text-black text-[18px] bg-white p-2 rounded-xl m-2 flex gap-2"><Asterisk className="text-[--green]" /> ผ่านการพิสูจน์จริงมาแล้วนับไม่ถ้วน</li>
                        <li className="text-black text-[18px] bg-white p-2 rounded-xl m-2 flex gap-2"><Asterisk className="text-[--green]" /> ให้ชัดเจนเข้าใจง่ายแต่ลึกซึ้งถึงแก่นที่สุด</li>
                        <li className="text-black text-[18px] bg-white p-2 rounded-xl m-2 flex gap-2"><Asterisk className="text-[--green]" /> เหมือนการผ่าตัดใหญ่ รักษากันที่ต้นเหตุ</li>
                        <li className="text-black text-[18px] bg-white p-2 rounded-xl m-2 flex gap-2"><Asterisk className="text-[--green]" /> ถอนรากถอนโคนปัญหาแบบถาวร</li>
                        <li className="text-black text-[18px] bg-white p-2 rounded-xl m-2 flex gap-2"><Asterisk className="text-[--green]" /> ให้ธุรกิจของคุณจะเติบโตอย่างยั่งยืน</li>
                    </ul>

                </div>
            </section>

            <div className="flex w-full   justify-center mt-2">

                <div className="flex gap-10 flex-col justify-center items-center   w-screen">

                    {/* <section className=" flex justify-center text-center" id="warning">
                        <div className="bg-[--pink] w-[20vw] h-2 rounded-full"></div>
                    </section> */}



                    <section className="sm:p-5 sm:w-2/3 w-screen  shadow-lg sm:px-10 flex flex-col items-center justify-center lg:h-[50vh] h-[80vh] my-10 ring-2 rounded-[3rem] relative  ring-white" id="whatwilllearn">
                        <div className="bg-[--dark-blue] w-36 h-36 rounded-full absolute left-[-100px] bottom-[-10px] -z-0"></div>
                        <div className="bg-[--green] w-36 h-36 rounded-full absolute left-[-10px] bottom-[-100px] -z-0"></div>
                        <div className="bg-[--pink] w-36 h-36 rounded-full absolute right-[-100px] top-[-10px] -z-0"></div>
                        <div className="bg-[--yellow] w-36 h-36 rounded-full absolute right-[-10px] top-[-100px] -z-0"></div>
                        <div className="sm:text-4xl text-2xl font-bold text-[--green] text-center py-5 px-3">ทุกปัญหาเหล่านี้จะหมดไป
                            เมื่อคุณรู้ความลับในคอร์สนี้
                        </div>
                        <div className=" ">
                            <ul className="text-white sm:text-[22px] gap-2 py-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-sm justify-center items-center">
                                <li className="p-3 flex items-center rounded-full bg-[--pink] "><img src="/icon.svg" className="w-10 p-2" />ขายไปไม่มีใครซื้อ</li>
                                <li className="p-3 flex items-center rounded-full bg-[--pink] "><img src="/icon.svg" className="w-10 p-2" />เล่าไปไม่มีใครเชื่อ</li>
                                <li className="p-3 flex items-center rounded-full bg-[--pink] "><img src="/icon.svg" className="w-10 p-2" />ทำไปไม่มีใครดู</li>
                                <li className="p-3 flex items-center rounded-full bg-[--pink] "><img src="/icon.svg" className="w-10 p-2" />พูดไปไม่มีใครฟัง</li>
                                <li className="p-3 flex items-center rounded-full bg-[--pink] "><img src="/icon.svg" className="w-10 p-2" />เขียนไปไม่มีใครอ่าน</li>
                                <li className="p-3 flex items-center rounded-full bg-[--pink] "><img src="/icon.svg" className="w-10 p-2" />จับจุดไม่ได้สักที</li>

                            </ul>
                        </div>

                    </section>

                    <Promote></Promote>



                    <Quote />

                    <section className="mb-10 px-5">
                        <div className="sm:text-[38px] text-center text-[8vw] px-5 py-2 font-bold  gap-2"><span>โปรพิเศษ</span><span className="sm:text-[42px] text-[9vw] text-[--pink] font-bold underline decoration-wavy">สำหรับ 20 ท่านแรก</span><span>ที่สมัครตอนนี้</span></div>
                        {/* <div className="sm:text-[3vw] text-[6vw] text-center w-full px-5  py-2 flex justify-center "><CountDown className="flex w-full justify-center"></CountDown></div> */}
                        <div className="lg:grid lg:grid-cols-3 md:flex flex flex-wrap gap-2">
                            <div className="bg-[--dark-blue] w-full  md:w-full  rounded-[3rem] text-white">
                                <div className="p-10 grid">
                                    <div className="text-3xl font-bold">เล่าเรื่อง 3 นาทีให้มียอดขาย <br />
                                        <div className="text-lg">ราคาพิเศษสำหรับตัวจริงอย่างคุณ</div>
                                        <CountDown className="flex w-full justify-center py-5"></CountDown>
                                    </div>
                                    <div className=" overflow-auto ssm:text-sm min-h-[400px]">
                                        <div>คอร์สออนไลน์ (8 ชั่วโมง)
                                            เรียนสบายๆ ให้ดังระดับประเทศ
                                        </div>
                                        <ul>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />เพิ่มยอดขายและผู้ติดตาม 10 เท่า ใน 8 ชั่วโมง</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ประหยัดงบ เร็วและปลอดภัยกว่าทดลองเอง 100 เท่า</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ได้รู้ถึงตัวตนที่ชัดเจน (ที่มากกว่าแค่เรื่องธุรกิจ)</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ได้ที่ยืนที่โดดเด่นกว่าใครในตลาด</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ได้เทคนิคการสื่อสารกับทีมสื่อให้เห็นภาพตรงกัน</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />รู้ขั้นตอนการทำคอนเทนต์จาก 0</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ได้วิธีสร้างยอดขายจากเรื่องเล่าให้ต่างจากคู่แข่ง</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />แผนที่เล่าเรื่องขายดีใน 30 วัน</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />เรียนผ่านเวบไซต์ Teachable เรียนซ้ำได้ไม่จำกัด</div>


                                        </ul>
                                        <div className="py-2">
                                        </div>
                                    </div>

                                    <div className="min-h-[150px] flex justify-end flex-col items-end ">
                                        <div className="text-md text-end line-through">ราคาปกติ 65,000</div>
                                        <div className="text-xl text-end">฿15,999</div>
                                        <div className="text-sm text-end">ทบทวนซ้ำได้ไม่จำกัดจำนวนครั้ง**</div>
                                        <Link className="w-full" href="https://line.me/R/ti/p/@205bxsga?oat_referrer=PROFILE">
                                            <Button className="w-full text-xl font-bold mt-4 bg-[--pink] text-white">
                                                ซื้อคอร์ส
                                            </Button>
                                        </Link>
                                        <div className="text-sm text-end"> ออกใบกำกับภาษี ขอลดหย่อนได้ 200%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[--pink] w-full  md:w-full rounded-[3rem] text-white">
                                <div className="p-10 grid">
                                    <div className="text-3xl font-bold">คอร์สสด 2 วัน (Exclusive Group for CEO)
                                        โค้ชส่วนตัวพร้อม Connection เพื่อนธุรกิจ
                                    </div>
                                    <div className=" overflow-auto ssm:text-sm min-h-[400px]">
                                        <ul>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />Customize ทุกรายละเอียดเพื่อธุรกิจของคุณโดยเฉพาะ</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />โค้ชสะท้อนคาแรกเตอร์แบรนด์ชัดเป็นธรรมชาติ</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />เรื่องเล่าประจำแบรนด์ที่ฟังแล้วมีมูลค่า</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />สกิลพูดหน้ากล้องให้จับใจคน</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ได้คลิป Video พรีเซนต์สินค้าป้ายยาใน 1 นาที</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />สร้าง Connection เพื่อนนักธุรกิจตัวจริงในวงการ</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />จำกัด 8 คน/รุ่น (ต้องผ่านสัมภาษณ์ทุกคน)</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ฟรี! ปลดล็อกคอร์สออนไลน์เรียนได้ไม่จำกัดจำนวนครั้ง มูลค่า 15,999!</div>



                                        </ul>
                                        <div className="py-2">
                                        </div>
                                    </div>
                                    <div className="min-h-[150px] flex justify-end flex-col items-end ">
                                        <div className="text-md text-end line-through">ราคาปกติ 150,000 บาท</div>
                                        <div className="text-xl text-end">ราคาพิเศษ 59,999</div>
                                        <div className="text-sm text-end">ทบทวนซ้ำได้ไม่จำกัดจำนวนครั้ง**</div>
                                        <Link className="w-full" href="https://line.me/R/ti/p/@205bxsga?oat_referrer=PROFILE">
                                            <Button className="w-full text-xl font-bold mt-4 bg-[--yellow] text-white">
                                                ซื้อคอร์ส
                                            </Button>
                                        </Link>
                                        <div className="text-sm text-end"> ออกใบกำกับภาษี ขอลดหย่อนได้ 200%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[--pink] w-full  md:w-full rounded-[3rem] text-white">
                                <div className="p-10 grid">
                                    <div className="text-3xl font-bold">คอร์สองค์กร (In-house training)<br />
                                        เสกทีมของคุณให้เก่งขึ้นพร้อมกัน 10 เท่า
                                    </div>
                                    <div className=" overflow-auto ssm:text-sm min-h-[400px]">
                                        <ul>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />Customize ทุกรายละเอียดเพื่อทีมของคุณโดยเฉพาะ</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />Workshop เฉพาะทีมของคุณให้สเกลยอดได้ 10 เท่า</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />พูดประโยคเดียว เข้าใจเหมือนกันทั้งทีม สื่อสารภาษาเดียวกัน</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />Automate ความสำเร็จ เก่งขึ้นพร้อมกันทั้งทีม</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />หมดปัญหาบรีฟแล้วเข้าใจไม่ตรงกัน</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ฟรี! ปลดล็อกคอร์สออนไลน์เรียนได้ไม่จำกัดจำนวนครั้ง มูลค่า 15,999!</div>



                                            {/* <li className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />เพิ่มยอดขายและผู้ติดตาม 10 เท่า ใน 8 ชั่วโมง</li>
                                            <li className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ประหยัดงบ เร็วและปลอดภัยกว่าทดลองเอง 100 เท่า</li>
                                            <li className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ได้รู้ถึงตัวตนที่ชัดเจน (ที่มากกว่าแค่เรื่องธุรกิจ)</li>
                                            <li className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ได้ที่ยืนที่โดดเด่นกว่าใครในตลาด</li>
                                            <li className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ได้เทคนิคการสื่อสารกับทีมสื่อให้เห็นภาพตรงกัน</li>
                                            <li className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />รู้ขั้นตอนการทำคอนเทนต์จาก 0</li>
                                            <li className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ได้วิธีสร้างยอดขายจากเรื่องเล่าให้ต่างจากคู่แข่ง</li>
                                            <li className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />แผนที่เล่าเรื่องขายดีใน 30 วัน</li> */}
                                        </ul>
                                        <div className="py-2">
                                        </div>
                                    </div>
                                    <div className="min-h-[150px] flex justify-end flex-col items-end ">
                                        <div className="text-xl text-end">เริ่มต้น ฿  250,000</div>
                                        <div className="text-sm text-end">ทบทวนซ้ำได้ไม่จำกัดจำนวนครั้ง**</div>
                                        <Link className="w-full" href="https://line.me/R/ti/p/@205bxsga?oat_referrer=PROFILE">
                                            <Button className="w-full text-xl font-bold mt-4 bg-[--yellow] text-white">
                                                ซื้อคอร์ส
                                            </Button>
                                        </Link>
                                        <div className="text-sm text-end text-[--pink]">.</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="sm:p-5 sm:px-10 p-2 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-center" id="freqQA">
                        <div className="sm:text-[42px] text-center text-3xl font-bold">
                            คำถามที่พบบ่อย?
                            <div className="flex justify-center">
                                <Image src="/images/sticker19.png" className="h-48 z-0"></Image>
                            </div>
                        </div>
                        <Question />
                    </section>

                </div>
            </div>

            <Script
                id="facebook-pixel"
                strategy="afterInteractive"
            >
                {`
         !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '574886846850217');
fbq('track', 'PageView');
        `}
            </Script>
            <noscript><img height="1" width="1" style={{display:"none"}}
                src="https://www.facebook.com/tr?id=574886846850217&ev=PageView&noscript=1"
            /></noscript>
        </>
    )
}