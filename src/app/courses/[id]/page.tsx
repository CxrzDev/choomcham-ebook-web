import { Card, CardBody, Image } from "@nextui-org/react";
import { Asterisk, AudioWaveform, Award } from "lucide-react";
import Link from "next/link";
import Lession from "./Lessons";

export default function Page() {
    return (
        <>
            <div className="w-full  flex justify-center  sm:h-[120vh]">

                <div className="bg-gray-50 rounded-xl shadow-lg p-6 w-[95vw] h-[90vh] m-5 relative">
                    <div className="text-center pt-20">
                        <p className="text-green-500 text-sm font-medium">Bussiness</p>
                        <h2 className="sm:text-[64px] text-[34px] font-bold text-gray-900 mt-2">
                            เล่าเรื่อง 3 นาทีให้มียอดขาย
                        </h2>
                        <div className="flex justify-center items-center text-gray-600  text-xl">

                            <span >
                                เพิ่มยอดขายและผู้ติดตาม 10 เท่าใน 8 ชั่วโมง
                                โดยไม่ต้องสร้างภาพ
                            </span>
                        </div>
                    </div>
                    <div className="absolute left-0 sm:bottom-[-150px] sm:p-0 p-10 flex justify-center w-full">
                        <div className="mt-4  ">
                            <img
                                src="/images/3ms.png" // Replace this with the actual image URL
                                alt="person"
                                className="w-[854px] h-auto rounded-xl shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full  justify-center">
                <div className="flex gap-10 flex-col justify-center items-center sm:w-2/3">
                    <section className="p-5 px-10">
                        <div className="flex gap-10 sm:text-[22px]">
                            <Link href="#courseDescription" className="duration-150 border-b-3 border-transparent hover:border-[--yellow] font-bold">Course Description</Link>
                            <Link href="#whatwilllearn" className="duration-150 border-b-3 border-transparent hover:border-[--yellow] font-bold">What you'll learn</Link>
                            <Link href="#allLesson" className="duration-150 border-b-3 border-transparent hover:border-[--yellow] font-bold">All lesson</Link>
                        </div>
                    </section>
                    <section className="p-5 px-10 flex justify-center" id="courseDescription">
                        <Card className="p-5 w-full">
                            <CardBody>
                                <div className="text-2xl font-bold">Course Description</div>
                                <div className="text-zinc-700 indent-5">
                                    <ul className="text-[16px] px-5 py-2">
                                        <li className="flex"><Award></Award>ตกผลึกจากประสบการณ์สร้างแบรนด์ 15 ปี</li>
                                        <li className="flex"><Award></Award>หลักสูตรที่พัฒนาต่อเนื่องไม่เคยหยุดตลอด 5 ปี</li>
                                        <li className="flex"><Award></Award>เพื่อเจ้าของธุรกิจตัวจริง</li>
                                        <li className="flex"><Award></Award>จากสื่อสารไม่เป็น...ให้ดังระดับประเทศ</li>
                                    </ul>

                                    <div className="text-lg font-bold">และนี่คือผลลัพธ์ของนักเรียนบางส่วน</div>
                                    <div className="text-lg font-bold">คอร์สนี้เหมาะกับใคร?</div>

                                </div>
                            </CardBody>
                        </Card>
                    </section>
                    <section className="p-5 px-10 flex justify-center" id="whatwilllearn">
                        <Card className="p-5 w-full">
                            <CardBody>
                                <div className="text-2xl font-bold">ปัญหาของคนทำคอนเทนต์มือใหม่</div>
                                <div className="text-zinc-700 indent-5">
                                    <ul>
                                        <li>น้ำเยอะ</li>
                                        <li>คิดพาดหัวไม่เป็น</li>
                                        <li>ไม่รู้จะเริ่มยังไง</li>
                                        <li>คลิปติดแบบฟลุคๆ</li>
                                        <li>นำเสนอจุดเด่นตัวเองไม่ดี</li>

                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </section>
                    <section className="p-5 px-10 flex justify-center" id="allLesson">
                        <Card className="p-5 w-full bg-[#E3E3E3] rounded-[3rem]">
                            <CardBody className="flex sm:flex-row flex-wrap justify-between">
                                <div className="p-2 grid gap-10 sm:w-[40%]">
                                    <div className="sm:text-[48px] font-bold">All Lessons</div>
                                    <div className="bg-[--green] w-36 h-36 rounded-full overflow-hidden flex justify-center items-center">
                                        <AudioWaveform size={56} className="text-white"></AudioWaveform>
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
                                    <Card className="border-none rounded-[2.5rem] p-3 h-full">
                                        <CardBody >
                                            <Lession></Lession>

                                        </CardBody>
                                    </Card>
                                </div>
                            </CardBody>
                        </Card>
                    </section>


                    <section className="p-5 px-10 flex justify-center" id="instructor">
                        <Card className="p-5 w-full bg-transparent border-2 border-white rounded-[2rem]">
                            <div className="bg-[--dark-blue] w-36 h-36 rounded-full absolute left-[-100px] bottom-[-10px] -z-0"></div>
                            <div className="bg-[--green] w-36 h-36 rounded-full absolute left-[-10px] bottom-[-100px] -z-0"></div>
                            <div className="bg-[--pink] w-36 h-36 rounded-full absolute right-[-100px] top-[-10px] -z-0"></div>
                            <div className="bg-[--yellow] w-36 h-36 rounded-full absolute right-[-10px] top-[-100px] -z-0"></div>
                            <CardBody className="flex flex-row justify-between flex-1 items-center">
                                <div className="">
                                    <div className="text-[42px] font-bold text-[--dark-blue]">คนสอนเป็นใคร?</div>
                                    <div className="text-[36px] text-[--yellow]">"อีฟ ภัทรัดจารินท์​ สุวัชรานนท์"</div>
                                    <div className="text-zinc-700 w-[80%]">
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
                                                    ผู้ร่วมก่อตั้งเพจ "เกลานิสัย อันตราย" ที่สร้างตัวตนให้กับบุคคลที่เป็นที่รู้จักในวงกว้าง <br />
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
                                </div>

                                <div className="w-[40%]">

                                    <div className=" relative">
                                        <div className=" w-80 h-80 overflow-clip rounded-full">
                                            <Image src="/images/kruEve_image.jpg"></Image>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>

                        </Card>
                    </section>

                    <section>
                        <div className="text-[38px] ">หากคุณต้องการที่จะ...</div>
                    </section>
                </div>
            </div>


           
        </>
    )
}