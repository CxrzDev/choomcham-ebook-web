import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { Asterisk, AudioWaveform, Award, Check, MessageCircleX, Sparkles } from "lucide-react";
import Link from "next/link";
import Lession from "./Lessons";
import Video from "@/app/components/VideoPlayer";
import CountDown from "@/app/components/CountDonw";
import Question from "./Questions";
import Review from "./Review";
import Promote from "./Promote";
import Quote from "./Quote";
import Quote1 from "./Quote1";


export default function Page() {
    return (
        <>
            <div className="w-full bg-1    relative flex flex-col items-center justify-center min-h-[100vh] text-white py-5 text-center">
                {/* <div className="blob-yellow  w-[50vw] md:w-[25vw] lg:w-[25vw] h-[50vw] md:h-[25vw] lg:h-[25vw] absolute -left-[10vw] -top-[10vw]"></div>
                <div className="blob-pink  w-[30vw] h-[30vw] absolute  -right-10 lg:-top-[15rem] -top-[10vw] "></div>
                <div className="blob-green  w-[25vw] h-[25vw] absolute  -right-[15vw] -top-[5vw]"></div>
                <img src="/icon.svg" className=" colored-icon absolute z-0 w-[500px] left-[-15rem] bottom-[-10rem]" alt="" />
               
                <img src="/icon.svg" className="absolute z-0 w-[500px] right-[-20rem] bottom-10 " alt="" /> */}
                <div className="w-2/3 relative ">

                    <p className="lg:text-[56px] md:text-[56px] text-[6vw] font-bold">เล่าเรื่อง 3 นาทีให้มียอดขาย</p>
                    <p className="lg:text-[42px] md:text-[42px] text-[4vw]">เพิ่มยอดขายและผู้ติดตาม <span className="text-[--yellow] font-bold">10 เท่าใน 8 ชั่วโมง </span>โดยไม่ต้องมีพื้นฐาน</p>
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
            <Quote1 />


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
                    หากคุณเป็นคนที่เชื่อในผลลัพธ์ที่จับต้องได้จริง<br />
                    <div className=" font-normal">นี่คือตัวอย่างนักเรียนบางส่วนของเรา</div>
                </div>
            </section>
            <div className="bg-zinc-switch ">

                <Review />
            </div>

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

                    <section className="sm:p-5 sm:px-10 flex justify-center" id="allLesson">
                        <Card className="sm:p-5 p-1 w-full bg-[#E3E3E3] sm:rounded-[3rem] rounded-none">
                            <CardBody className="flex sm:flex-row flex-wrap justify-between ssm:p-0">
                                <div className="p-2 grid  justify-items-center gap-10 sm:w-[30%] lg:w-[40%] md:w-full">

                                    <div className="sm:text-[38px] text-3xl font-bold pt-10 text-center">8 ชั่วโมง
                                        เรียนอะไรบ้าง?
                                    </div>
                                    <div className=" lg:w-64 lg:h-64 w-36 h-36 bg-[--green] rounded-full overflow-hidden flex justify-center items-center">
                                        <AudioWaveform className="text-white sm:size-[56px] size-4  rounded-full w-10 h-10 p-2"></AudioWaveform>
                                        {/* <Image src="/images/3ms/topsecretstamp.png" className="z-0"></Image> */}
                                    </div>
                                    <div className="text-zinc-700 indent-5 text-center text-[20px] h-full flex flex-col items-center justify-center">
                                        <div className=" w-[80%] ">
                                            แค่ 8 ชั่วโมง ฟังดูสั้นนิดเดียวก็จริง
                                            แต่ขอรับประกันเลยว่าคุณจะได้เจอ
                                            สิ่งที่แม้แต่คุณเองก็ยังไม่รู้ว่าตัวเองยังไม่รู้
                                            เพราะนี่คือหลักสูตรคอนเทนต์ที่ชัดเจน เข้าใจง่าย
                                            แต่ลึก ตรงประเด็น และรายละเอียดอัดแน่นที่สุด

                                        </div>
                                        <div className="sm:text-[36px] text-3xl font-bold pt-10">คุณจะตาสว่างขึ้นทุกครั้งที่เรียน!
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:w-[60%] lg:w-[60%] md:w-full p-3">

                                    <Card className="border-none rounded-[2.5rem] p-3 h-full sm:flex lg:flex md:flex hidden">
                                        <CardBody className="sm:p-1 p-0">
                                            <Lession></Lession>

                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="sm:hidden flex">
                                    <Lession></Lession>
                                </div>
                            </CardBody>
                        </Card>
                    </section>


                    <section className="sm:p-5 sm:px-10 flex justify-center" id="instructor">
                        <Card className="p-5 w-full bg-transparent border-2 border-white rounded-[2rem]">
                            <div className="bg-[--dark-blue] w-36 h-36 rounded-full absolute left-[-100px] bottom-[-10px] -z-0"></div>
                            <div className="bg-[--green] w-36 h-36 rounded-full absolute left-[-10px] bottom-[-100px] -z-0"></div>
                            <div className="bg-[--pink] w-36 h-36 rounded-full absolute right-[-100px] top-[-10px] -z-0"></div>
                            <div className="bg-[--yellow] w-36 h-36 rounded-full absolute right-[-10px] top-[-100px] -z-0"></div>
                            <div>
                                <div className="sm:text-[36px] text-[6vw] font-bold text-[--dark-blue] relative z-1">สอนโดย <q >อีฟ ภัทรัดจารินท์​ สุวัชรานนท์</q></div>
                                {/* <div className="sm:text-[36px] text-[4vw] text-yellow-500">&quot;อีฟ ภัทรัดจารินท์​ สุวัชรานนท์&quot;</div> */}
                                <div className="text-lg  w-[80%] indent-4 relative z-1">การเห็นโปรเจคดีๆ มีคุณค่าต่อสังคมถูกเมิน เป็นเรื่องเดียวที่อีฟทนไม่ได้เลย ชุ่มฉ่ำา Branding จึงทําหน้าที่ยืนเคียงข้าง ช่วยเหลือเจ้าของธุรกิจที่มีเจตนาดีไม่ให้สูญเปล่า โดยเอาพรสวรรค์และชั่วโมงบินในการปั้นคนออกมาแบ่งปัน และถ้าคุณรู้ว่าตัวคุณเองมีของดี มาเรียนรู้การสร้างแบรนด์กันค่ะ เพื่อที่คุณจะได้แบ่งปันคุณค่าดีๆ ต่อสังคม ทิ้ง เป็นสัญลักษณ์ไว้บนโลกใบนี้ก่อนตาย</div>
                            </div>

                            <CardBody className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between flex-1 items-center">


                                <div className="text-zinc-700 sm:w-[80%] w-full">
                                    <ul className="grid grid-cols-1 gap-4 list-none">
                                        <li className="bg-white p-2 rounded-xl items-start">
                                            <Asterisk className="text-[--green]" />
                                            <span className="">
                                                สร้างแบรนด์ขายรองเท้าตั้งแต่อายุ 17 ยอดขายหลักแสน/เดือน ด้วยงบ 0 บาท
                                            </span>
                                        </li>
                                        <li className="bg-white p-2 rounded-xl items-start">
                                            <Asterisk className="text-[--green]" />
                                            <span className="">
                                                ผู้ร่วมก่อตั้งเพจ &quot;เกลานิสัย อันตราย&quot; ที่สร้างตัวตนให้กับบุคคลที่เป็นที่รู้จักในวงกว้าง <br />
                                                เช่น ดร.ชัชชาติ, ครูเงาะ, นายณภัทร ฯลฯ
                                            </span>
                                        </li>
                                        <li className="bg-white p-2 rounded-xl items-start">
                                            <Asterisk className="text-[--green]" />
                                            <span className="">
                                                เจ้าของเพจ Eve pattars บทความคนแชร์กว่า 1 แสน
                                            </span>
                                        </li>
                                        <li className="bg-white p-2 rounded-xl items-start">
                                            <Asterisk className="text-[--green]" />
                                            <span className="">
                                                ที่ปรึกษาเรื่องแบรนด์ให้เจ้าของธุรกิจระดับ 10-1,000 ล้าน/ปี
                                            </span>
                                        </li>
                                    </ul>

                                </div>


                                <div className="sm:w-[40%] md:w-full flex justify-center w-full p-2">


                                    <div className=" sm:w-80 md:w-64 w-[50%] aspect-square overflow-clip rounded-full">
                                        <Image className="z-0" src="/images/kruEve_image.jpg"></Image>
                                    </div>

                                </div>
                            </CardBody>

                        </Card>
                    </section>

                    <Quote />

                    <section className="mb-10 px-5">
                        <div className="sm:text-[38px] text-center text-[8vw] px-5 py-2 font-bold  gap-2"><span>โปรพิเศษ</span><span className="sm:text-[42px] text-[9vw] text-[--pink] font-bold underline decoration-wavy">สำหรับ 20 ท่านแรก</span><span>ที่สมัครตอนนี้</span></div>
                        <div className="sm:text-[3vw] text-[6vw] text-center w-full px-5  py-2 flex justify-center "><CountDown className="flex w-full justify-center"></CountDown></div>
                        <div className="lg:grid lg:grid-cols-3 md:flex flex flex-wrap gap-2">
                            <div className="bg-[--dark-blue] w-full  md:w-full  rounded-[3rem] text-white">
                                <div className="p-10 grid">
                                    <div className="text-3xl font-bold">เล่าเรื่อง 3 นาทีให้มียอดขาย <br /> (Online)</div>
                                    <div className=" overflow-auto ssm:text-sm min-h-[400px]">
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
                                        <div className="text-md text-end line-through">ราคาปกติ 65,000</div>
                                        <div className="text-xl text-end">฿19,999</div>
                                        <div className="text-sm text-end">ทบทวนซ้ำได้ไม่จำกัดจำนวนครั้ง**</div>
                                        <Button className="w-full text-xl font-bold mt-4 bg-[--pink] text-white">
                                            ซื้อคอร์ส
                                        </Button>
                                        <div className="text-sm text-end"> ออกใบกำกับภาษี ขอลดหย่อนได้ 200%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[--pink] w-full  md:w-full rounded-[3rem] text-white">
                                <div className="p-10 grid">
                                    <div className="text-3xl font-bold">เล่าเรื่อง 3 นาทีให้มียอดขาย <br /> (สำหรับองค์กร)</div>
                                    <div className=" overflow-auto ssm:text-sm min-h-[400px]">
                                        <ul>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />เพิ่มยอดขายและผู้ติดตาม 10 เท่า ใน 8 ชั่วโมง</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ประหยัดงบ เร็วและปลอดภัยกว่าทดลองเอง 100 เท่า</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ได้ที่ยืนที่โดดเด่นกว่าใครในตลาด</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ได้เทคนิคการสื่อสารกับทีมสื่อให้เห็นภาพตรงกัน</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />รู้ขั้นตอนการทำคอนเทนต์จาก 0</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ได้วิธีสร้างยอดขายจากเรื่องเล่าให้ต่างจากคู่แข่ง</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />แผนที่เล่าเรื่องขายดีใน 30 วัน</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ออกแบบกิจกรรมให้เข้ากับแต่ละสินค้าให้ขายได้</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />รูปแบบการสอน Active learning 2 วันเต็ม</div>


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
                                        <div className="text-xl text-end">฿  250,000</div>
                                        <div className="text-sm text-end">ทบทวนซ้ำได้ไม่จำกัดจำนวนครั้ง**</div>
                                        <Button className="w-full text-xl font-bold mt-4 bg-[--yellow] text-white">
                                            ซื้อคอร์ส
                                        </Button>
                                        <div className="text-sm text-end text-[--pink]">.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[--pink] w-full  md:w-full rounded-[3rem] text-white">
                                <div className="p-10 grid">
                                    <div className="text-3xl font-bold">เรียนสด 2 วัน Exclusive Group for CEO</div>
                                    <div className=" overflow-auto ssm:text-sm min-h-[400px]">
                                        <ul>

                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ชัดในคาแรกเตอร์คนจดจำ</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />เรื่องเล่าประจำแบรนด์ที่ฟังแล้วมีมูลค่า</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />สกิลพูดหน้ากล้องให้คนสนใจ</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />ได้คลิป Video พรีเซนต์สินค้าป้ายยาใน 1 นาที</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />สร้าง Connection เพื่อนนักธุรกิจตัวจริงในวงการ</div>
                                            <div className="flex items-center gap-2 p-1"><Sparkles className="fill-[--yellow] text-[--yellow] " />คัดพิเศษเพียง 8 คน/รุ่นเท่านั้น ต้องผ่านสัมภาษณ์</div>

                                        </ul>
                                        <div className="py-2">
                                        </div>
                                    </div>
                                    <div className="min-h-[150px] flex justify-end flex-col items-end ">
                                        <div className="text-md text-end line-through">ราคาปกติ 150,000 บาท</div>
                                        <div className="text-xl text-end">ราคาพิเศษ 49,999</div>
                                        <div className="text-sm text-end">ทบทวนซ้ำได้ไม่จำกัดจำนวนครั้ง**</div>
                                        <Button className="w-full text-xl font-bold mt-4 bg-[--yellow] text-white">
                                            ซื้อคอร์ส
                                        </Button>
                                        <div className="text-sm text-end"> ออกใบกำกับภาษี ขอลดหย่อนได้ 200%</div>
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



        </>
    )
}