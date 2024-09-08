import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { Asterisk, AudioWaveform, Award, Check, MessageCircleX, Sparkles } from "lucide-react";
import Link from "next/link";
import Lession from "./Lessons";

export default function Page() {
    return (
        <>
            <div className="w-full bg-[--dark-blue] flex flex-col items-center justify-center min-h-[80vh] text-white py-5 text-center">
                <div className="w-2/3">
                    <p className="lg:text-[56px] md:text-[56px] text-[6vw] font-bold">เล่าเรื่อง 3 นาทีให้มียอดขาย</p>
                    <p className="lg:text-[42px] md:text-[42px] text-[4vw]">เพิ่มยอดขายและผู้ติดตาม <span className="text-[--yellow] font-bold">10 เท่าใน 8 ชั่วโมง </span>โดยไม่ต้องมีพื้นฐาน</p>
                    <div className="text-xl grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                        <div className="flex ring-1 ring-white/50 rounded-full px-2 py-1 text-[3vw] sm:text-base"><Check className="text-[--yellow]"></Check>ตกผลึกจากประสบการณ์สร้างแบรนด์ 15 ปี</div>
                        <div className="flex ring-1 ring-white/50 rounded-full px-2 py-1 text-[3vw] sm:text-base"><Check className="text-[--yellow]"></Check>หลักสูตรที่พัฒนาต่อเนื่องไม่เคยหยุดตลอด 5 ปี</div>
                        <div className="flex ring-1 ring-white/50 rounded-full px-2 py-1 text-[3vw] sm:text-base"><Check className="text-[--yellow]"></Check>เพื่อเจ้าของธุรกิจตัวจริง</div>
                        <div className="flex ring-1 ring-white/50 rounded-full px-2 py-1 text-[3vw] sm:text-base"><Check className="text-[--yellow]"></Check>จากสื่อสารไม่เป็น...ให้ดังระดับประเทศ</div>
                    </div>
                </div>
            </div>

            <div className="flex w-full   justify-center mt-2">
                <div className="flex gap-10 flex-col justify-center items-center sm:w-2/3  w-screen">
                    {/* <section className="p-5 pt-10">
                        <div className="flex gap-10 sm:text-[22px] text-[3vw]">
                            <Link href="#courseDescription" className="duration-150 border-b-3 border-transparent hover:border-[--yellow] font-bold">Course Description</Link>
                            <Link href="#whatwilllearn" className="duration-150 border-b-3 border-transparent hover:border-[--yellow] font-bold">What you&apos;ll learn</Link>
                            <Link href="#allLesson" className="duration-150 border-b-3 border-transparent hover:border-[--yellow] font-bold">All lesson</Link>
                        </div>
                    </section> */}
                    <section className="p-5 sm:px-10 flex flex-col " id="courseDescription">
                        <div className="font-bold text-[6.5vw] sm:text-[48px] py-2 text-center">
                            และนี่คือผลลัพธ์ของนักเรียนบางส่วน</div>

                        <div className="text-center">
                            <div className="text-[--pink] text-[5.5vw] sm:text-[26px] font-bold"><span className="text-[--yellow]"> &quot; </span>โลกใหม่ของการทํา Content นั้นมันเกิน กว่าที่เรารู้จักมาก<span className="text-[--yellow]"> &quot; </span></div>
                            <div className="w-full flex justify-center p-2">
                                <div className="h-[40vw] sm:h-64 aspect-square overflow-hidden rounded-full bg-black">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/ving.png"
                                    />
                                </div>
                            </div>

                            <div className="text-[--dark-blue]  text-[22px] font-bold">คุณเวย์</div>
                            <div className="text-lg text-zinc-500 ">เจ้าของแบรนด์รองเท้า <a href="https://www.facebook.com/vingrun" className="underline" target="_blank">VING RUNNER SQUAD</a></div>
                            <div className="text-lg indent-2 text-start flex">
                                <q>
                                    เมื่อเริ่มเรียน ผมรู้สึกเหมือนกับนีโอที่ได้เจอกับมอร์เฟียส ที่บอกว่า คุณอยู่ในโลกของ The Matrix และเมื่อได้ลอง หยิบยาเม็ดสีแดงเข้าปาก
                                    จะพบว่าโลกใหม่ของการทำ Content นั้นมันเกินกว่าที่เรารู้จักมาก ในระหว่างคอร์ส
                                    ครูอีฟนั้นเปรียบเสมือนมอร์เฟียสที่หยิบยื่นบทเรียนต่าง ๆ ให้เราได้ทดลองทดสอบด้วยตัวเองอย่างหนักหน่วงจนเรา บรรลุไปถึงแก่นของหลักการนั้น
                                    ด้วยตัวเราเอง
                                </q></div>
                        </div>

                        <div className="text-center my-10">
                            <div className="text-[--pink] text-[5.5vw] sm:text-[26px] font-bold"><span className="text-[--yellow]"> &quot; </span>Jaymeen เจ้าของ Chubby Cheeks ทำยอดขาย 8 หมื่นกระปุกภายในปีครึ่ง!<span className="text-[--yellow]"> &quot; </span></div>
                            <div className="w-full flex justify-center p-2">
                                <div className="h-[40vw] sm:h-64 aspect-square overflow-hidden rounded-full bg-black">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/jaymeen.png"
                                    />
                                </div>
                            </div>

                            <div className="text-[--dark-blue]  text-[22px] font-bold">Jaymeen </div>
                            <div className="text-lg text-zinc-500 ">เจ้าของ <a href="https://www.tiktok.com/@chubbycheeks.m" className="underline">Chubby Cheeks</a> </div>
                            <div className="text-lg indent-2 text-start flex">
                                <q>
                                    Jaymeen เด็กสายศิลป์อาร์ตตัวแม่ แต่ไม่ได้มีสกิลการพูดโน้มน้าวเลย ก่อนเรียนคือพูดงงๆ ตดๆ
                                    คลิปสวยมากแต่เล่าเรื่องไม่เป็น ได้ยอดวิวหลักร้อย เรียนจบ 1 เดือน คลิปได้ 5 ล้านวิวเรียบร้อย
                                </q></div>
                        </div>


                        <div className="text-center my-10">
                            <div className="text-[--pink] text-[5.5vw] sm:text-[26px] font-bold"><span className="text-[--yellow]"> &quot; </span>
                                อายุน้อยร้อยล้าน จากรายการยอดเข้าถึงขึ้นลง สู่ Reach 10 ล้าน!<span className="text-[--yellow]"> &quot; </span></div>
                            <div className="w-full flex justify-center p-2">
                                <div className="h-[40vw] sm:h-64 aspect-square overflow-hidden rounded-full bg-black">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/100.png"
                                    />
                                </div>
                            </div>

                            <div className="text-[--dark-blue]  text-[22px] font-bold">พี่ม่อน </div>
                            <div className="text-lg text-zinc-500 ">Producer <a href="https://www.facebook.com/Ryounoi100lan" className="underline">อายุน้อยร้อยล้าน</a> </div>
                            <div className="text-lg indent-2 text-start flex">
                                <q>
                                    อายุน้อยร้อยล้าน จากยอดวิวหลักหมื่น เรียนจบทีมงานเข้าใจภาพเดียวกัน นำไปสร้างคลิปเล่าเรื่องยอดวิวหลักล้านติดต่อกันอย่างต่อเนื่อง
                                    ประสบการณ์มากกว่า 10 ปีของ <a href="https://www.facebook.com/Ryounoi100lan" target="_blank" rel="noopener noreferrer"></a>
                                </q></div>
                        </div>

                        <div className="text-center my-10">
                            <div className="text-[--pink] text-[5.5vw] sm:text-[26px] font-bold"><span className="text-[--yellow]"> &quot; </span>ผมไม่เคยนึกมาก่อนว่าเรื่องที่เล่า ถ้ามันจะทรงพลังถึงขนาดไปเปลี่ยนแปลงชีวิตใครได้!<span className="text-[--yellow]"> &quot; </span></div>
                            <div className="w-full flex justify-center p-2">
                                <div className="h-[40vw] sm:h-64 aspect-square overflow-hidden rounded-full bg-black">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/pmeng.jpg"
                                    />
                                </div>
                            </div>

                            <div className="text-[--dark-blue]  text-[22px] font-bold">คุณแมงปอ </div>
                            <div className="text-lg text-zinc-500 ">เจ้าของเพจดัง <a href="https://www.facebook.com/brotherMP" className="underline">พี่แมง ป.</a></div>
                            <div className="text-lg indent-2 text-start flex">
                                <q>
                                    ผมไม่เคยนึกมาก่อนว่าเรื่องที่เล่า ถ้ามันจะทรงพลังถึงขนาดไปเปลี่ยนแปลงชีวิตใครได้ มันจะต้องมีกลยุทธ์ มีการวางแผน
                                    มีการตั้งเป้า เป็นวิทยาศาสตร์อย่างหนึ่งที่ผมเพิ่งจะเรียนรู้
                                </q></div>
                        </div>




                    </section>
                    <section className="sm:p-5 sm:px-10 flex justify-center" id="whatwilllearn">
                        <Card className="sm:p-5 w-full rounded-[3rem] bg-[--dark-blue] ">
                            <CardBody>
                                <div className="sm:text-[42px] text-2xl font-bold text-[--yellow] text-center">ปัญหาของคนทำคอนเทนต์มือใหม่</div>
                                <div className="text-zinc-700 ">
                                    <ul className="text-white sm:text-[22px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm justify-center items-center">
                                        <li className="p-5 flex "><MessageCircleX className="sm:w-14 "></MessageCircleX>น้ำเยอะ</li>
                                        <li className="p-5 flex "><MessageCircleX className="sm:w-14 "></MessageCircleX>คิดพาดหัวไม่เป็น</li>
                                        <li className="p-5 flex "><MessageCircleX className="sm:w-14 "></MessageCircleX>ไม่รู้จะเริ่มยังไง</li>
                                        <li className="p-5 flex "><MessageCircleX className="sm:w-14 "></MessageCircleX>คลิปติดแบบฟลุคๆ</li>
                                        <li className="p-5 flex "><MessageCircleX className="sm:w-14 "></MessageCircleX>นำเสนอจุดเด่นตัวเองไม่ดี</li>

                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </section>
                    <section className="p-5 sm:px-10 flex flex-col items-center justify-center" id="whatwilllearn">

                        <div className="sm:text-[42px] text-3xl font-bold">คอร์สนี้เหมาะกับใคร?</div>
                        <div className="text-zinc-700 indent-5">
                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                รู้ว่ามีของดี แต่ไม่รู้วิธีเล่าเรื่องให้ได้ใจคน
                            </div>
                            <p className="text-lg">การเห็นโปรเจคดีๆ มีคุณค่าต่อสังคมถูกเมิน เป็นเรื่องเดียวที่อีฟทนไม่ได้เลย ชุ่มฉ่ำ Branding จึงทำหน้าที่ยืนเคียงข้าง ช่วยเหลือเจ้าของธุรกิจที่มีเจตนาดีไม่ให้สูญเปล่า โดยเอาพรสวรรค์และชั่วโมงบินในการปั้นคนออกมาแบ่งปัน และถ้าคุณรู้ว่าตัวคุณเองมีของดี
                                มาเรียนรู้การสร้างแบรนด์กันค่ะ เพื่อที่คุณจะได้แบ่งปันคุณค่าดีๆ ต่อสังคม ทิ้งเป็นสัญลักษณ์ไว้บนโลกใบนี้ก่อนตาย</p>

                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                เพิ่งเริ่มทำธุรกิจของตัวเอง กลัวไม่เข้าใจ

                            </div>
                            <p className="text-lg">เราจัดบรรยากาศให้เหมือนโรงเรียนอนุบาล มีความเป็นกันเอง เล่นสนุกสอดแทรกสาระ ใช้ภาษาเปรียบเทียบให้เข้าใจง่าย ต่อให้ไม่มีความรู้เรื่อง Social Media เลย คุณก็สามารถเข้าใจได้ง่ายๆ
                                รับประกันทันทีที่เรียนจบคุณสามารถนำไปใช้จริงได้เลย</p>

                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                เรียนมาหลายที่แล้ว ยังไม่เจอที่ถูกใจ


                            </div>
                            <p className="text-lg">กว่า 10 ปีอีฟหมดเงินไปหลายบาทเพื่อทดลอง หลายๆ ครั้งอีฟสงสัยว่าทำไมหลังเรียนจบแล้วเหมือนไม่ได้อะไรกลับมาเลยไม่ว่าจ่ายแพงหรือถูก บางที่เนื้อหาก็ยากไป บางที่ก็มีแต่ทฤษฎีอย่างเดียวไม่มีสเต็ปที่ทำตามได้
                                หรือบางที่ก็ได้แค่แรงบันดาลใจ อีฟไม่มีทางกล้าที่จะบอกต่อใคร หากไม่ผ่านการทดลองด้วยตัวเองจนมั่นใจว่าจะช่วยให้เจ้าของธุรกิจสร้างยอดขายได้จริง
                            </p>

                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                ทำธุรกิจมานาน แต่ทีมไม่โตสักที



                            </div>
                            <p className="text-lg">สำหรับคนที่เชี่ยวชาญ Social Media อยู่แล้ว
                                คุณจะเข้าใจอย่างลึกซึ้งยิ่งขึ้น และได้วิธีคิด Content
                                ที่เป็นระบบมากขึ้น เหมาะสำหรับการส่งต่อเคล็ดลับให้กับทีมของคุณ เป็นพลังให้ธุรกิจเติบโตอย่างก้าวกระโดด
                            </p>


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
                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                ไม่มั่นใจ ว่าจะได้ผลกับธุรกิจตัวเอง

                            </div>
                            <p className="text-lg">หากพบว่าสิ่งที่เรียนไปไม่ได้ผลกับคุณ เรายินดีคืนเงิน 100% โดยไม่มีเงื่อนไข

                            </p>
                        </div>

                    </section>
                    <section className="sm:p-5 sm:px-10 flex justify-center" id="allLesson">
                        <Card className="sm:p-5 p-1 w-full bg-[#E3E3E3] sm:rounded-[3rem] rounded-none">
                            <CardBody className="flex sm:flex-row flex-wrap justify-between ssm:p-0">
                                <div className="p-2 grid  justify-items-center gap-10 sm:w-[30%] lg:w-[40%] md:w-full">
                                    <div className="sm:text-[48px] font-bold">All Lessons</div>
                                    <div className="bg-[--green] sm:w-36 sm:h-36 w-16 h-16 rounded-full overflow-hidden flex justify-center items-center">
                                        <AudioWaveform  className="text-white sm:size-[56px] size-4"></AudioWaveform>
                                    </div>
                                    <div className="text-zinc-700 indent-5 text-center text-[20px]  flex justify-center">
                                        <div className=" w-[80%] ">
                                            8 ชั่วโมงต่อจากนี้
                                            คุณจะเข้าใจแก่นแท้ของการเล่าเรื่อง
                                            ที่ไม่มีวันตกกระแส
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
                                <div className="sm:text-[42px] text-[8vw] font-bold text-[--dark-blue]">คนสอนเป็นใคร?</div>
                                <div className="sm:text-[36px] text-[4vw] text-[--yellow]">&quot;อีฟ ภัทรัดจารินท์​ สุวัชรานนท์&quot;</div>
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

                    <section className="mb-10 px-5">
                        <div className="sm:text-[38px] text-[8vw] px-5">หากคุณต้องการที่จะ...</div>

                        <div className=" flex gap-2 lg:flex-row md:flex-col flex-col">
                            <div className="bg-[--dark-blue] w-full lg:w-1/2 md:w-full  rounded-[3rem] text-white">
                                <div className="p-10">
                                    <div className="text-3xl font-bold">เล่าเรื่อง 3 นาทีให้มียอดขาย </div>
                                    <div className=" overflow-auto ssm:text-sm">
                                        <ul>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />เพิ่มยอดขายและผู้ติดตาม 10 เท่า ใน 8 ชั่วโมง</li>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />ประหยัดงบ เร็วและปลอดภัยกว่าทดลองเอง 100 เท่า</li>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />ได้รู้ถึงตัวตนที่ชัดเจน (ที่มากกว่าแค่เรื่องธุรกิจ)</li>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />ได้ที่ยืนที่โดดเด่นกว่าใครในตลาด</li>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />ได้เทคนิคการสื่อสารกับทีมสื่อให้เห็นภาพตรงกัน</li>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />รู้ขั้นตอนการทำคอนเทนต์จาก 0</li>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />ได้วิธีสร้างยอดขายจากเรื่องเล่าให้ต่างจากคู่แข่ง</li>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />แผนที่เล่าเรื่องขายดีใน 30 วัน</li>
                                        </ul>
                                        <div className="py-2">
                                        </div>
                                    </div>
                                    <div className="text-xl text-end">฿ 14,990</div>
                                    <div className="text-sm text-end">ทบทวนซ้ำได้ไม่จำกัดจำนวนครั้ง**</div>
                                    <Button className="w-full text-xl font-bold mt-4 bg-[--pink] text-white">
                                        ซื้อคอร์ส
                                    </Button>
                                </div>
                            </div>
                            <div className="bg-[--pink] w-full lg:w-1/2 md:w-full rounded-[3rem] text-white">
                                <div className="p-10">
                                    <div className="text-3xl font-bold">เล่าเรื่อง 3 นาทีให้มียอดขาย <br /> (สำหรับองค์กร)</div>
                                    <div className=" overflow-auto ssm:text-sm">
                                        <ul>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />เพิ่มยอดขายและผู้ติดตาม 10 เท่า ใน 8 ชั่วโมง</li>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />ประหยัดงบ เร็วและปลอดภัยกว่าทดลองเอง 100 เท่า</li>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />ได้รู้ถึงตัวตนที่ชัดเจน (ที่มากกว่าแค่เรื่องธุรกิจ)</li>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />ได้ที่ยืนที่โดดเด่นกว่าใครในตลาด</li>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />ได้เทคนิคการสื่อสารกับทีมสื่อให้เห็นภาพตรงกัน</li>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />รู้ขั้นตอนการทำคอนเทนต์จาก 0</li>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />ได้วิธีสร้างยอดขายจากเรื่องเล่าให้ต่างจากคู่แข่ง</li>
                                            <li className="flex items-center gap-2 p-2"><Sparkles className="fill-[--yellow] text-[--yellow]" />แผนที่เล่าเรื่องขายดีใน 30 วัน</li>
                                        </ul>
                                        <div className="py-2">
                                        </div>
                                    </div>
                                    <div className="text-xl text-end">฿  250,000</div>
                                    <div className="text-sm text-end">ทบทวนซ้ำได้ไม่จำกัดจำนวนครั้ง**</div>
                                    <Button className="w-full text-xl font-bold mt-4 bg-[--yellow] text-white">
                                        ซื้อคอร์ส
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>



        </>
    )
}