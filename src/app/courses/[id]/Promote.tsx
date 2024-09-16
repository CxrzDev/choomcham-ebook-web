import { Image } from "@nextui-org/react";
import { Asterisk } from "lucide-react";

export default function Promote() {
    return (
        <>
            <section className="sm:p-5 bg-2 text-white sm:px-10 flex flex-col items-center justify-center skewed-background bg-blue-100 rounded-t-xl relative" id="">

                <div className="sm:w-2/3 w-screen px-10">
                    <div className="sm:text-[42px] text-3xl text-center font-bold py-5"> อย่าเพิ่งโอน! เราอยากให้คุณอ่านก่อน!                    </div>
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
                    <div className="sm:text-[42px] text-3xl font-bold text-center pb-10 relative z-1">คอร์สนี้เหมาะกับใคร?</div>
                    <div className="text-zinc-700 indent-5 grid gap-5">
                        <div className="bg-white/80 pb-5 rounded-[1rem] px-5 glass">
                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                รู้ว่ามีของดี แต่ไม่รู้วิธีเล่าเรื่องให้ได้ใจคน
                            </div>
                            <p className="text-lg  rounded-2xl">การเห็นโปรเจคดีๆ มีคุณค่าต่อสังคมถูกเมิน เป็นเรื่องเดียวที่อีฟทนไม่ได้เลย ชุ่มฉ่ำ Branding จึงทำหน้าที่ยืนเคียงข้าง ช่วยเหลือเจ้าของธุรกิจที่มีเจตนาดีไม่ให้สูญเปล่า โดยเอาพรสวรรค์และชั่วโมงบินในการปั้นคนออกมาแบ่งปัน และถ้าคุณรู้ว่าตัวคุณเองมีของดี
                                มาเรียนรู้การสร้างแบรนด์กันค่ะ เพื่อที่คุณจะได้แบ่งปันคุณค่าดีๆ ต่อสังคม ทิ้งเป็นสัญลักษณ์ไว้บนโลกใบนี้ก่อนตาย</p>
                        </div>

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
                                <div>
                                    <Image className="z-0 aspect-video " height={400} src="/images/3ms/firstbusiness.png"></Image>
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
                                    เรียนจบแล้ว
                                    เอาไปใช้ไม่ได้ผล
                                    ยินดีคืนเงิน 100%
                                    ไม่มีเงื่อนไข

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