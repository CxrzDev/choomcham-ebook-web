import { Card, CardBody, Image } from "@nextui-org/react";
import { Asterisk, AudioWaveform } from "lucide-react";
import Lession from "./Lessons";

export default function Promote() {
    return (
        <>
            <section className="sm:p-5 bg-2 text-white sm:px-10 flex flex-col items-center gap-4 justify-center  bg-blue-100 rounded-t-xl relative" id="">

                <div className="sm:text-[42px] text-3xl text-center font-bold py-5"> อย่าเพิ่งโอน! เราอยากให้คุณอ่านก่อน!</div>
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


                <section className="sm:p-5 sm:px-10 flex justify-center " id="instructor">
                    <Card className="p-5 w-full  border-2 border-white rounded-[2rem] bg-[#f5f5f5]">
                        <div className="bg-[--dark-blue] w-36 h-36 rounded-full absolute left-[-100px] bottom-[-10px] -z-0"></div>
                        <div className="bg-[--green] w-36 h-36 rounded-full absolute left-[-10px] bottom-[-100px] -z-0"></div>
                        <div className="bg-[--pink] w-36 h-36 rounded-full absolute right-[-100px] top-[-10px] -z-0"></div>
                        <div className="bg-[--yellow] w-36 h-36 rounded-full absolute right-[-10px] top-[-100px] -z-0"></div>
                        <div>
                            <div className="sm:text-[36px] text-[6vw] font-bold text-[--dark-blue] relative z-1">สอนโดย <q >อีฟ ภัทรัดจารินท์​ สุวัชรานนท์</q></div>
                            {/* <div className="sm:text-[36px] text-[4vw] text-yellow-500">&quot;อีฟ ภัทรัดจารินท์​ สุวัชรานนท์&quot;</div> */}
                            <div className="text-lg  w-[80%] indent-4 relative z-1">การเห็นโปรเจคดีๆ มีคุณค่าต่อสังคมถูกเมิน เป็นเรื่องเดียวที่อีฟทนไม่ได้เลย ชุ่มฉ่ำา Branding จึงทําหน้าที่ยืนเคียงข้าง ช่วยเหลือเจ้าของธุรกิจที่มีเจตนาดีไม่ให้สูญเปล่า โดยเอาพรสวรรค์และชั่วโมงบินในการปั้นคนออกมาแบ่งปัน และถ้าคุณรู้ว่าตัวคุณเองมีของดี มาเรียนรู้การสร้างแบรนด์กันค่ะ เพื่อที่คุณจะได้แบ่งปันคุณค่าดีๆ ต่อสังคม ทิ้ง เป็นสัญลักษณ์ไว้บนโลกใบนี้ก่อนตาย</div>
                        </div>

                        <CardBody className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between flex-1 items-center ">


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
                <div className="sm:w-2/3 w-screen px-10">

                    <div className="">
                        <div className="text-lg font-bold">  <Asterisk className="text-[--yellow]" />ชีวิตจริงพูดเก่ง แต่ออนไลน์ดันไม่ปัง</div>
                        <div className="indent-2">คนมีของส่วนใหญ่จะเชี่ยวชาญเรื่องที่ตัวเองถนัดอยู่แล้ว ยิ่งให้พูดในชีวิตจริงยิ่งง่าย แต่พอมาโลกออนไลน์กลับทำให้คนสนใจไม่ได้ ไม่ใช่คุณไม่เก่งนะ แต่คุณยังไม่รู้ความลับการสื่อสารโลกออนไลน์หลายอย่าง

                        </div>
                    </div>

                    <div className="flex items-center justify-around lg:flex-row md:flex-col flex-col  gap-2">
                        <q className="font-bold bg-white/80 p-10 glass rounded-[2rem] lg:text-3xl md:text-lg text-lg text-[--green] lg:w-[40%] md:w-[50%] w-[90%] text-center">
                            แม้จะทำอาชีพด้านการพูด
                            ก็ยังต้องมาเรียนใหม่
                            เพราะในโลกออนไลน์
                            ใช้ทักษะการเล่าไม่เหมือนกัน

                        </q>
                        <div>
                            <Image className="z-0 h-[400px]" src="/images/3ms/mod.png"></Image>
                        </div>
                    </div>
                </div>
            </section>


            <section className="p-5 sm:px-10 flex flex-col items-center justify-center  relative" id="whatwilllearn">
                {/* <img src="/icon.svg" className="z-0 absolute w-[600px] top-0 lg:left-[-200px] left-[-300px] opacity-55 " alt="" />
            <img src="/icon.svg" className="z-0 absolute w-[600px] bottom-0 lg:right-[-200px] right-[-100px] opacity-55 " alt="" />
            <div  className="z-0 absolute w-[600px] aspect-square blob-pink  top-[30%] lg:right-[-200px] right-[-100px] opacity-55 "  />
            <div  className="z-0 absolute w-[600px] aspect-square blob-green  top-[60%] lg:left-[-200px] left-[-100px] opacity-55 "  /> */}
                <div className="sm:w-2/3 w-screen px-10">
                    {/* <div className="sm:text-[42px] text-3xl font-bold text-center pb-10 relative z-1">คอร์สนี้เหมาะกับใคร?</div> */}
                    <div className="text-zinc-700 indent-5 grid gap-5">
                        {/* <div className="bg-white/80 pb-5 rounded-[1rem] px-5 glass">
                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                รู้ว่ามีของดี แต่ไม่รู้วิธีเล่าเรื่องให้ได้ใจคน
                            </div>
                            <p className="text-lg  rounded-2xl">การเห็นโปรเจคดีๆ มีคุณค่าต่อสังคมถูกเมิน เป็นเรื่องเดียวที่อีฟทนไม่ได้เลย ชุ่มฉ่ำ Branding จึงทำหน้าที่ยืนเคียงข้าง ช่วยเหลือเจ้าของธุรกิจที่มีเจตนาดีไม่ให้สูญเปล่า โดยเอาพรสวรรค์และชั่วโมงบินในการปั้นคนออกมาแบ่งปัน และถ้าคุณรู้ว่าตัวคุณเองมีของดี
                                มาเรียนรู้การสร้างแบรนด์กันค่ะ เพื่อที่คุณจะได้แบ่งปันคุณค่าดีๆ ต่อสังคม ทิ้งเป็นสัญลักษณ์ไว้บนโลกใบนี้ก่อนตาย</p>
                        </div> */}

                        <div className="bg-white/80 pb-5 rounded-[1rem] px-5 glass">
                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                เพิ่งเริ่มทำธุรกิจของตัวเอง กลัวไม่เข้าใจ
                            </div>
                            <p className="text-lg">เราจัดบรรยากาศให้เหมือนโรงเรียนอนุบาล มีความเป็นกันเอง เล่นสนุกสอดแทรกสาระ ใช้ภาษาเปรียบเทียบให้เข้าใจง่าย ต่อให้ไม่มีความรู้เรื่อง Social Media เลย คุณก็สามารถเข้าใจได้ง่ายๆ
                                รับประกันทันทีที่เรียนจบคุณสามารถนำไปใช้จริงได้เลย</p>

                            <div className="lg:grid grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col flex-col  gap-2">
                                <q className="font-bold lg:text-3xl md:text-lg text-lg text-[--green]  w-[90%] text-center">
                                    สอนด้วยภาษาที่เข้าใจง่าย
                                    ทำได้จริงไอเดียไม่มีวันตัน
                                    ปิดการขายได้สบายๆ
                                    แม้สินค้ามีราคาแพง
                                </q>
                                <div className="grid">
                                    <Image className="z-0  " src="/images/3ms/firstbusiness_slide1.png"></Image>
                                    <Image className="z-0  " src="/images/3ms/firstbusiness_slide2.png"></Image>
                                    <Image className="z-0 " src="/images/3ms/firstbusiness_slide3.png"></Image>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/80 pb-5 rounded-[1rem] px-5 glass">
                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                เรียนมาหลายที่แล้ว ยังไม่เจอที่ถูกใจ
                            </div>
                            <p className="text-lg">กว่า 10 ปี &nbsp;อีฟหมดเงินไปหลายบาทเพื่อทดลอง หลายๆ ครั้งอีฟสงสัยว่าทำไมหลังเรียนจบแล้วเหมือนไม่ได้อะไรกลับมาเลยไม่ว่าจ่ายแพงหรือถูก บางที่เนื้อหาก็ยากไป บางที่ก็มีแต่ทฤษฎีอย่างเดียวไม่มีสเต็ปที่ทำตามได้
                                หรือบางที่ก็ได้แค่แรงบันดาลใจ อีฟไม่มีทางกล้าที่จะบอกต่อใคร หากไม่ผ่านการทดลองด้วยตัวเองจนมั่นใจว่าจะช่วยให้เจ้าของธุรกิจสร้างยอดขายได้จริง
                            </p>
                            <div className="flex items-center justify-around lg:flex-row md:flex-col flex-col  gap-2">
                                <q className="font-bold lg:text-3xl md:text-lg text-lg text-[--green] lg:w-[40%] md:w-[50%] w-[90%] text-center">
                                    กลัวเฟลเหมือนคอร์สอื่น แต่พอได้เรียน 20% ก็รู้สึกคุ้มกับที่จ่ายแล้ว
                                </q>
                                <div>
                                    <Image className="z-0 h-[400px]" height={400} src="/images/3ms/student.png"></Image>
                                </div>
                            </div>
                        </div>


                        <div className="bg-white/80 pb-5 rounded-[1rem] px-5 glass">
                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                ทำธุรกิจมานาน แต่ทีมไม่โตสักที
                            </div>
                            <p className="text-lg">สำหรับคนที่เชี่ยวชาญ Social Media อยู่แล้ว
                                คุณจะเข้าใจอย่างลึกซึ้งยิ่งขึ้น และได้วิธีคิด Content
                                ที่เป็นระบบมากขึ้น เหมาะสำหรับการส่งต่อเคล็ดลับให้กับทีมของคุณ เป็นพลังให้ธุรกิจเติบโตอย่างก้าวกระโดด
                            </p>
                            <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col flex-col  gap-2">
                                <q className="font-bold lg:text-3xl md:text-lg text-lg text-[--green]  text-center py-4">
                                    ทีมงานเรียนจบ
                                    พูดเป็นภาษาเดียวกัน
                                    บรีฟงานง่ายขึ้น 300%
                                </q>
                                <div>
                                    <Image className="z-0 " height={400} src="/images/3ms/james.png"></Image>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/80 pb-5 rounded-[1rem] px-5 glass">
                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                กลัวทฤษฎีเยอะ เรียนแล้วหลับคาจอ
                            </div>
                            <p className="text-lg">อีฟเป็นคนนึงที่ไม่ชอบการเรียนแบบ Passive Learning
                                คือการรับข้อมูลแบบนั่งอยู่เฉยๆ มันเป็นสิ่งที่อึดอัดมาก และอีฟจะไม่ทำสินค้าแบบที่ตัวเองไม่ชอบ
                                เพราะเป็นคนขี้เบื่อ ฉะนั้นอีฟจึงให้ความสำคัญกับ Active Learning เป็นอันดับแรก สอนแบบ
                                Interactive มีส่วนร่วมทั้งหลักสูตร สร้างบริบทให้เกิดความสนุก
                                มีการถามตอบให้คุณได้ทบทวนตัวเองตลอด
                            </p>
                            <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col flex-col  gap-2">
                                <q className="font-bold lg:text-3xl md:text-lg text-lg text-[--green]  text-center py-4">
                                    ไม่มีหลักสูตรที่ไหน
                                    สอนภาษาเด็กแบบนี้
                                </q>
                                <div>
                                    <Image className="z-0 h-[400px]" height={400} src="/images/3ms/gift.png"></Image>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/80 pb-5 rounded-[1rem] px-5 glass">
                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                กลัวถูกหลอก เรียนแล้วเอาไปใช้จริงไม่ได้
                            </div>
                            <p className="text-lg">แน่นอนว่าใครก็ไม่อยากโดนหลอก
                                ทุกคนอยากเรียนกับคนสอนที่เป็นตัวจริง ซึ่งกล้าพูดเลยว่า
                                หลักสูตรนี้เคยปั้นคนจากนักธุรกิจที่เริ่มจาก 0 จนกระทั่งมียอดขายหลักล้าน/เดือน
                                และไม่ได้เพิ่งเริ่มสอน แต่เป็นเนื้อหาหลักสูตรที่สอนมาแล้วกว่า 5 ปี
                                เป็นหลักสูตรที่สอนแก่น ตกผลึกจากประสบการณ์จริง ไม่ได้เอามาจากตำรา
                            </p>
                            <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col flex-col  gap-2">
                                <q className="font-bold lg:text-3xl md:text-lg text-lg text-[--green]  text-center py-4">
                                    มี Template ให้สำหรับมือใหม่
                                    เอาไปใช้งานจริงได้ทันที
                                </q>
                                <div>
                                    <Image className="z-0 h-[400px]" height={400} src="/images/3ms/scare.png"></Image>
                                </div>
                            </div>
                        </div>


                        <div className="bg-white/80 pb-5 rounded-[1rem] px-5 glass">
                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                ไม่มั่นใจ ว่าจะได้ผลกับธุรกิจตัวเอง
                            </div>
                            <p className="text-lg">หากพบว่าสิ่งที่เรียนไปไม่ได้ผลกับคุณ เรายินดีคืนเงิน 100% โดยไม่มีเงื่อนไข
                            </p>
                            <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col flex-col  gap-2">
                                <q className="font-bold lg:text-3xl md:text-lg text-lg text-[--green] py-4 text-center">
                                หากทำแบบฝึกหัดทั้งหมดแล้ว แต่รู้สึกไม่ได้อะไรจากคอร์สเลย ยินดีคืนเงิน 100%

                                </q>
                                <div>
                                    <Image className="z-0 h-[400px]" height={400} src="/images/3ms/laanroi.png"></Image>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}