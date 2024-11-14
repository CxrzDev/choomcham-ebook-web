import { ArrowRight, Asterisk, AudioWaveform, Battery, Heart, Lightbulb, Users } from "lucide-react";
import Lession from "./Lessons";
import { Card, CardBody, Image } from "@nextui-org/react";
import Quote from "./Quote";
import Question from "./Questions";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'คอร์สเรียน Branding  – ชุ่มฉ่ำ',
    description: 'สำรวจคอร์สเรียนจากชุ่มฉ่ำ: เรียนรู้การสร้างแบรนด์และเทคนิคการเล่าเรื่องใน 3 นาที เสริมสร้างแบรนด์ส่วนตัวและพัฒนาทักษะการสื่อสารผ่านคอร์สคุณภาพจากผู้เชี่ยวชาญ',
    keywords: ['คอร์สชุ่มฉ่ำ', 'คอร์ส branding', 'คอร์ส storytelling', 'เทคนิคการสร้างแบรนด์', 'การพัฒนาแบรนด์ส่วนตัว', 'branding สำหรับธุรกิจ', 'เล่าเรื่องใน 3 นาที', 'บริการชุ่มฉ่ำ', 'บทความชุ่มฉ่ำ'],
    authors: [{ name: 'ชุ่มฉ่ำ' }],
    publisher: "Choomcham branding",
    robots: { index: true, follow: true },
    openGraph: {
      images: [{
        url: "https://choomcham.vercel.app/images/courses-cover.png",
        alt: 'คอร์สเรียน Branding  โดย ชุ่มฉ่ำ',
      }]
    }
  }
  
export default function Page() {
    
    return <div className="min-h-[100vh]">
        <section className="bg-[--dark-blue] text-white py-16">
            <div className="container mx-auto px-4 flex  items-center justify-center">

                <div className="w-1/2">
                    <ul className="lg:text-[36px] text-lg leading-relaxed  space-y-4 text-center">
                        ไม่มีใครจำคุณได้ ถ้าคุณคือธุรกิจอันดับ 2
                        แต่ถ้าคุณเข้าใจ Branding
                        คุณจะเป็นอันดับ 1 โดยที่ไม่ต้องแข่งกับใครเลย
                        ถึงเวลาเปลี่ยนธุรกิจของคุณให้โดดเด่น
                        กับคอร์สที่จะทำให้คุณเข้าใจ &quot;แบรนดิ้ง&quot; ใน 3 ชั่วโมง

                    </ul>

                </div>
            </div>
        </section>
        <section className="bg-[--dark-blue] work skewed-background text-white py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <p className="text-lg font-light uppercase mb-2 text-[--yellow]">Course</p>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        BRADING
                    </h1>
                </div>
                <div className="md:w-1/2">
                    <ul className="text-lg font-light leading-relaxed space-y-4">
                        <li className="bg-[--yellow] text-[--grey] p-2 rounded-lg">จำเอากับเข้าใจ</li>
                        <li className="bg-[--pink] p-2 rounded-lg">ผลลัพธ์ต่างกันสุดขั้ว</li>
                        <li className="bg-[--green] p-2 rounded-lg">เข้าใจ &quot;แบรนดิ้ง&quot; ใน 3 ชั่วโมง</li>
                        <li className="bg-[--sky-blue] text-[--grey] p-2 rounded-lg">เปลี่ยนจากธุรกิจที่ดีกลายเป็นธุรกิจที่สุดยอด</li>
                        <li className="bg-[--white] text-[--dark-blue] p-2 rounded-lg">ที่อยู่ใกล้จนคิดไม่ถึง</li>
                    </ul>
                    <a href="#" className="inline-block mt-6 text-lg font-semibold bg-[--yellow] text-[white] px-4 py-2 rounded-lg hover:opacity-90 transition-colors duration-300">
                        Learn More &rarr;
                    </a>
                </div>
            </div>
        </section>


        <section className="p-10">

            <div className="text-[36px] px-5 text-[--dark-blue] font-bold lg:w-[1/2]">ถ้าคุณไอเดีย มีเทคนิค หรือต่อให้มีกลยุทธ์ทั้งโลกมากองตรงหน้าก็ไม่มีความหมาย หากคุณไม่เข้าใจว่า…</div>

            <ul className="grid lg:grid-cols-2 md:grid-cols-2  p-5 rounded-xl ">
                <li className="text-black text-[18px] bg-white p-2 rounded-xl m-2 flex gap-2"><Asterisk className="text-[--green]" /> การสร้างแบรนด์สำคัญยังไงกับยอดขายและความสุขของคุณ</li>
                <li className="text-black text-[18px] bg-white p-2 rounded-xl m-2 flex gap-2"><Asterisk className="text-[--green]" /> อะไรทำให้การสร้างแบรนด์ล้มเหลว</li>
                <li className="text-black text-[18px] bg-white p-2 rounded-xl m-2 flex gap-2"><Asterisk className="text-[--green]" /> หัวใจชุ่มฉ่ำช่วยสร้างแบรนด์ให้สำเร็จได้ยังไง</li>
                <li className="text-black text-[18px] bg-white p-2 rounded-xl m-2 flex gap-2"><Asterisk className="text-[--green]" /> ตอนนี้ที่ยืนของแบรนด์คุณอยู่ตรงไหน</li>
                <li className="text-black text-[18px] bg-white p-2 rounded-xl m-2 flex gap-2"><Asterisk className="text-[--green]" /> สร้างที่ยืนอย่างเป็นระบบใน 120 วัน</li>
            </ul>
        </section>

        <section className="bg-[--dark-blue] text-white py-20">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Course Highlights
                </h2>

                {/* Highlight Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        'จำได้กับเข้าใจ ผลลัพธ์ต่างกันสุดขั้ว',
                        'จะมีสักกี่คอร์สที่เริ่มสอนจาก',
                        'จุดจบมาหาจุดเริ่มต้น',
                        'เพื่อค้นพบตัวตนที่แท้จริงทางธุรกิจ'
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white/10 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300 hover:bg-white/20"
                        >
                            {/* Quote Text */}
                            <p className="text-xl md:text-2xl font-semibold mb-4">
                                {item}
                            </p>

                            {/* Learn More Link */}
                            <div className="flex items-center text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="mr-2">Learn more</span>
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>


        <section className="bg-gray-100 py-12 px-6 md:px-12 rounded-lg shadow-lg">
            <div className="container mx-auto">
                {/* Course Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Course Branding
                </h2>

                {/* Course Description */}
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    <div className="lg:w-1/2 md:1/2 w-full">
                        คอร์สชุ่มฉ่ำ Branding: สร้างแบรนด์จาก 0 ให้มีคุณค่าใน 120 วัน แม้สื่อสารไม่เป็น
                        ในคลาสนี้ เราจะแชร์เทคนิคการสร้างแบรนด์จากศูนย์ ด้วยประสบการณ์สร้างแบรนด์
                        <span className="font-semibold">&quot;เกลา นิสัยอันตราย&quot;</span>
                        ที่มีผู้ติดตามมากกว่า 1,000,000 คน โดยใช้เงินเริ่มต้นแค่หลักพัน
                        ทำให้แบรนด์ติดตลาดทั่วประเทศใน 6 เดือน
                    </div>
                </p>

                {/* CTA Button */}
                <div className="mt-6">
                    <a href="https://line.me/R/ti/p/@205bxsga?oat_referrer=PROFILE" className="inline-block bg-[--pink] text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-pink-600 transition duration-300">
                        Join Course
                    </a>
                </div>
            </div>
        </section>


        <section>
            <section className="bg-gradient-to-br from-[--yellow] to-[--pink] py-20 text-[--grey]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                        คลาสนี้เหมาะสำหรับใคร?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start">
                            <div className="mr-4 bg-[--light-blue] p-3 rounded-full">
                                <Users size={24} className="text-[--dark-blue]" />
                            </div>
                            <p className="text-lg">เจ้าของธุรกิจที่อยากดังอย่างมีคุณค่า</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start">
                            <div className="mr-4 bg-[--light-blue] p-3 rounded-full">
                                <Battery size={24} className="text-[--dark-blue]" />
                            </div>
                            <p className="text-lg">เจ้าของธุรกิจที่หมดไฟ เจอทางตัน</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start">
                            <div className="mr-4 bg-[--light-blue] p-3 rounded-full">
                                <Lightbulb size={24} className="text-[--dark-blue]" />
                            </div>
                            <p className="text-lg">บุคคลทั่วไปที่เพิ่งเริ่มสร้างธุรกิจ แต่เริ่มต้นไม่ถูก</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start">
                            <div className="mr-4 bg-[--light-blue] p-3 rounded-full">
                                <Heart size={24} className="text-[--dark-blue]" />
                            </div>
                            <p className="text-lg">ผู้ที่สนใจศาสตร์การสร้างแบรนด์ด้วยหัวใจชุ่มฉ่ำ</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sm:p-5 sm:px-10 flex justify-center" id="allLesson">
                <Card className="sm:p-5 p-1 w-full bg-[#E3E3E3] sm:rounded-[3rem] rounded-none">
                    <CardBody className="flex sm:flex-row flex-wrap justify-between ssm:p-0">
                        <div className="p-2 grid  justify-items-center gap-10 sm:w-[30%] lg:w-[40%] md:w-full">

                            <div className="sm:text-[38px] text-3xl font-bold pt-10 text-center">เพียงแค่ 3 ชั่วโมง

                            </div>
                            <div className=" lg:w-64 lg:h-64 w-36 h-36 bg-[--green] rounded-full overflow-hidden flex justify-center items-center">
                                <AudioWaveform className="text-white sm:size-[56px] size-4  rounded-full w-10 h-10 p-2"></AudioWaveform>
                                {/* <Image src="/images/3ms/topsecretstamp.png" className="z-0"></Image> */}
                            </div>
                            <div className="text-zinc-700 indent-5 text-center text-[20px] h-full flex flex-col items-center justify-center">
                                <div className=" w-[80%] ">
                                    ใน 3 ชั่วโมงนี้ คุณจะเข้าใจการสร้างแบรนด์อย่างแท้จริง ที่คนกว่า  90% ยังเข้าใจผิด


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

        </section>
        <section>
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
                                        เช่น ดร.ชัชชาติ&#0;  ครูเงาะ&#0;  นายณภัทร ฯลฯ
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
                                        ที่ปรึกษาเรื่องแบรนด์ให้เจ้าของธุรกิจระดับ 10-1&#0; 000 ล้าน/ปี
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
        </section>

        <section className="p-5 sm:px-10 grid px-0 py-0 lg:grid-cols-2 md:grid-cols-1 gap-3 items-center justify-center  relative" >
            <div className="bg-white/80 pb-5 lg:rounded-[1rem] px-5 ">
                <div className="text-xl mt-5 font-bold ">
                    <Asterisk className="text-[--green]"></Asterisk>
                    สบายตา สบายใจ ได้ความรู้
                </div>
                <p className="text-lg">เนื้อหาดี ใช้ได้จริง ครูอีฟเป็นตัวอย่างของการทำ Personal Banding

                </p>
                <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col flex-col  gap-2">

                    <div>
                        <Image className="z-0 h-[auto]" height={400} src="/images/branding/review1.png"></Image>
                    </div>
                </div>
            </div>

            <div className="bg-white/80 pb-5 lg:rounded-[1rem] px-5 ">
                <div className="text-xl mt-5 font-bold ">
                    <Asterisk className="text-[--green]"></Asterisk>
                    ไม่มีความรู้ Branding  คอร์สนี้จะทำให้กระจ่าง
                </div>
                <p className="text-lg">จากที่ไม่มีความรู้ Branding แทบจะติดลบ ได้ฟังนี้แล้วบอกได้เลยว่าเปิดโลก

                </p>
                <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col flex-col  gap-2">

                    <div>
                        <Image className="z-0 h-[auto]" height={400} src="/images/branding/review2.png"></Image>
                    </div>
                </div>
            </div>


            <div className="bg-white/80 pb-5 lg:rounded-[1rem] px-5 ">
                <div className="text-xl mt-5 font-bold ">
                    <Asterisk className="text-[--green]"></Asterisk>
                    เข้าใจถึงแก่นของการทำ Branding
                </div>
                <p className="text-lg">จากไม่เคยไม่เคยเข้าใจเหตุผลของการสร้างแบรนด์จริงๆ ได้เข้าใจถึงแก่นของการทำแบรนด์ที่ต้องมี Mission ที่ชัดเจน

                </p>
                <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col flex-col  gap-2">

                    <div>
                        <Image className="z-0 h-[auto]" height={400} src="/images/branding/review3.png"></Image>
                    </div>
                </div>
            </div>
            <div className="bg-white/80 pb-5 lg:rounded-[1rem] px-5 ">
                <div className="text-xl mt-5 font-bold ">
                    <Asterisk className="text-[--green]"></Asterisk>
                    ได้รู้จักตัวเอง รักตัวเอง ได้เข็มทิศนำทาง

                </div>
                <p className="text-lg">จากคนที่รู้สึกเปลี่ยวเหงา เหมือนชีวิตอยู่ในป่าคนเดียว ครูอีฟและทีมงาน“ชุ่มฉ่ำ” ได้มอบเข็มทิศนำทางพารู้จักเพื่อนๆที่จะพร้อมเดินไปด้วยกัน

                </p>
                <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col flex-col  gap-2">

                    <div>
                        <Image className="z-0 h-[auto]" height={400} src="/images/branding/review4.png"></Image>
                    </div>
                </div>
            </div>

            <div className="bg-white/80 pb-5 lg:rounded-[1rem] px-5 ">
                <div className="text-xl mt-5 font-bold ">
                    <Asterisk className="text-[--green]"></Asterisk>
                    ผ่านมา 3 ปีก็ยังชุ่มฉ่ำ

                </div>
                <p className="text-lg">ศิษย์เก่าจากคอร์สออนไลน์ ที่ผ่านมาถึง 3 ปีแล้ว ก็ยังประทับใจในการสอนและเนื้อหาที่ไม่มีที่ไหนให้ได้ขนาดนี้

                </p>
                <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col flex-col  gap-2">

                    <div>
                        <Image className="z-0 h-[auto]" height={400} src="/images/branding/review5.png"></Image>
                    </div>
                </div>
            </div>

            <div className="bg-white/80 pb-5 lg:rounded-[1rem] px-5 ">
                <div className="text-xl mt-5 font-bold ">
                    <Asterisk className="text-[--green]"></Asterisk>
                    How To ที่แท้ทรู


                </div>
                <p className="text-lg">คลาสอื่นอาจสอนแค่ How To  แต่คลาสนี้จะพาคุณเข้าถึง key เข้าถึงแก่นของการทำ Branding ซึมลึกถึงจิตวิญญาณ นี่แหล่ะยิ่งกว่า How To ที่แท้ทรู

                </p>
                <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col flex-col  gap-2">

                    <div>
                        <Image className="z-0 h-[auto]" height={400} src="/images/branding/review6.png"></Image>
                    </div>
                </div>
            </div>

            <div className="bg-white/80 pb-5 lg:rounded-[1rem] px-5 ">
                <div className="text-xl mt-5 font-bold ">
                    <Asterisk className="text-[--green]"></Asterisk>
                    เนื้อหานำไปใช้ได้จริง


                </div>
                <p className="text-lg">เห็นการเปลี่ยนแปลงชัดเจนใน 2 ชั่วโมง เนื้อหานำไปใช้ได้จริง</p>
                <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col flex-col  gap-2">

                    <div>
                        <Image className="z-0 h-[auto]" height={400} src="/images/branding/review7.png"></Image>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-10 flex flex-col gap-10 items-center lg:text-[36px] md:text-[36px] text-lg">
            <div className="">❌ ราคาเต็ม 9,450 บาท ❌</div>
            <div className="">✅ เพียง 1,990 บาท ✅</div>
            <div className="mt-6">
                <a href="https://line.me/R/ti/p/@205bxsga?oat_referrer=PROFILE" className="inline-block bg-[--pink] text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-pink-600 transition duration-300">
                    Join Course
                </a>
            </div>
        </section>

        <section className="my-5">
            <Quote />
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


}