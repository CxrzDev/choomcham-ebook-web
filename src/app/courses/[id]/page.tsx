import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { Asterisk, AudioWaveform, Award, Check, MessageCircleX, Sparkles } from "lucide-react";
import Link from "next/link";
import Lession from "./Lessons";
import Video from "@/app/components/VideoPlayer";
import CountDown from "@/app/components/CountDonw";
import Question from "./Questions";

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
                        <div className="flex ring-1 ring-white/50 rounded-full px-2 py-1 text-[3vw] sm:text-base"><Check className="text-[--yellow]"></Check>พื่อเจ้าของธุรกิจตัวจริงที่มีของดี</div>
                        <div className="flex ring-1 ring-white/50 rounded-full px-2 py-1 text-[3vw] sm:text-base"><Check className="text-[--yellow]"></Check>จากสื่อสารไม่เป็น...ให้ดังระดับประเทศ</div>
                    </div>
                </div>
            </div>

            <div className="flex w-full   justify-center mt-2">
                <div className="flex gap-10 flex-col justify-center items-center sm:w-2/3  w-screen">

                    <section className="p-5 sm:px-10 flex flex-col text-center" id="warning">
                        <div className="font-bold relative text-[4vw] text-white sm:text-[36px] py-2 text-center bg-[--pink] rounded-xl shadow-lg">
                            <div className=" text-[--yellow]">คำเตือน!</div>
                            <div>คุณอาจต้องเรียนซ้ำ</div>
                            <div >เพราะ<span className="bg-[--dark-blue] mx-1 px-1 rounded-md -rotate-45">ความรู้อัดแน่น</span></div>
                            <div>จนเก็บไม่หมดในครั้งเดียว</div>

                            <img src="icon.svg" alt="" />
                        </div>



                    </section>

                    <section className=" flex justify-center text-center" id="warning">
                        <div className="bg-[--pink] w-[20vw] h-2 rounded-full"></div>
                    </section>



                    <section className="p-5 sm:px-10 flex flex-col " id="courseDescription">
                        <div className="font-bold text-[6.5vw] sm:text-[48px] py-2 text-center">
                            และนี่คือผลลัพธ์ของนักเรียนบางส่วน</div>

                        {/* <div className="text-center">
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
                            <div className="text-lg text-zinc-500 ">เจ้าของแบรนด์รองเท้า <a href="https://www.facebook.com/vingrun" className="underline" target="_blank" target="_blank">VING RUNNER SQUAD</a></div>
                            <div className="text-lg indent-2 text-start flex">
                                <q>
                                    เมื่อเริ่มเรียน ผมรู้สึกเหมือนกับนีโอที่ได้เจอกับมอร์เฟียส ที่บอกว่า คุณอยู่ในโลกของ The Matrix และเมื่อได้ลอง หยิบยาเม็ดสีแดงเข้าปาก
                                    จะพบว่าโลกใหม่ของการทำ Content นั้นมันเกินกว่าที่เรารู้จักมาก ในระหว่างคอร์ส
                                    ครูอีฟนั้นเปรียบเสมือนมอร์เฟียสที่หยิบยื่นบทเรียนต่าง ๆ ให้เราได้ทดลองทดสอบด้วยตัวเองอย่างหนักหน่วงจนเรา บรรลุไปถึงแก่นของหลักการนั้น
                                    ด้วยตัวเราเอง
                                </q></div>
                        </div> */}

                        <div className="text-center my-10">
                            <div className="text-[--pink] text-[5.5vw] sm:text-[26px] font-bold">
                                {/* <span className="text-[--yellow]"> &quot; </span> */}
                                Jaymeen เจ้าของ Chubby Cheeks ทำยอดขาย 8 หมื่นกระปุกภายในปีครึ่ง!
                                {/* <span className="text-[--yellow]"> &quot; </span> */}
                            </div>
                            <div className="w-full flex gap-3 justify-center p-2 items-center">
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <Video className="h-[30vw] sm:h-64" src="/images/3ms/chubbycheeks.mp4"></Video>
                                    {/* <video
                                    controls={true}
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/chubbycheeks.mp4"
                                    /> */}
                                    {/* <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/choomchambranding/videos/526606112193948/" className="z-0 h-full aspect-video object-contain"></iframe> */}
                                </div>
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/jaymeen.png"
                                    />
                                </div>
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/chubbycheeks.jpg"
                                    />
                                </div>
                            </div>

                            <div className="text-[--dark-blue]  text-[22px] font-bold">Jaymeen </div>
                            <div className="text-lg text-zinc-500 ">เจ้าของ <a href="https://www.tiktok.com/@chubbycheeks.m" className="underline" target="_blank">Chubby Cheeks</a> </div>
                            <div className="text-lg text-zinc-500 ">นร.คอร์สสด</div>
                            <div className="text-lg indent-2 text-start ">

                                {/* <q> */}
                                Jaymeen เด็กสายศิลป์อาร์ตตัวแม่ แต่ไม่ได้มีสกิลการพูดโน้มน้าวเลย ก่อนเรียนคือพูดงงๆ ตดๆ
                                คลิปสวยมากแต่เล่าเรื่องไม่เป็น ได้ยอดวิวหลักร้อย เรียนจบ 1 เดือน คลิปได้ 5 ล้านวิวเรียบร้อย
                                <span className="font-bold"> ล่าสุดได้ยอดขายเดือนละล้าน!</span>
                                {/* </q> */}
                            </div>
                        </div>


                        <div className="text-center my-10">
                            <div className="text-[--pink] text-[5.5vw] sm:text-[26px] font-bold">
                                {/* <span className="text-[--yellow]"> &quot; </span> */}
                                อายุน้อยร้อยล้าน จากรายการยอดเข้าถึงขึ้นลง สู่ Reach 10 ล้าน!
                                {/* <span className="text-[--yellow]"> &quot; </span> */}
                            </div>
                            <div className="w-full flex gap-3 justify-center p-2 items-center">
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <Video className="h-full object-cover" src="/images/3ms/100millionaire.mp4"></Video>
                                    {/* <video
                                    controls={true}
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/chubbycheeks.mp4"
                                    /> */}
                                    {/* <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/choomchambranding/videos/526606112193948/" className="z-0 h-full aspect-video object-contain"></iframe> */}
                                </div>
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/100millionaire.png"
                                    />
                                </div>
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/100millionaire.jpg"
                                    />
                                </div>
                            </div>

                            <div className="text-[--dark-blue]  text-[22px] font-bold">พี่ก้อง อายุน้อยร้อยล้าน </div>
                            <div className="text-lg text-zinc-500 ">ผู้ก่อตั้งบริษัทสื่อ Mushroom Group
                                <a href="https://www.facebook.com/Ryounoi100lan" className="underline" target="_blank"> อายุน้อยร้อยล้าน</a> </div>
                            <div className="text-lg text-zinc-500 ">นร.คลาส In-house training
                            </div>
                            <div className="text-lg indent-2 text-start flex">
                                <q>
                                    ตัวผมเองก็นิสัยไม่ค่อยดี ตอนนั้นคิดว่า &quot; จริงเหรอวะ เด็กอายุแค่ 20 กว่าจะมาสอนอะไรเรา&quot;  เขาฟลุ๊คหรือเปล่า มันทำได้จริงเหรอ พอตั้งใจเรียน ผมว่ามันเปลี่ยนแปลงวิธีการทำงานของผม อยากเปลี่ยนแปลงต้องเปิดใจ มันคิดกระแทกผมมากเลยนะ
                                </q></div>
                        </div>


                        <div className="text-center my-10">

                            <div className="w-full flex gap-3 justify-center p-2 items-center">
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <Video className="h-full object-cover" src="/images/3ms/pmon.mp4"></Video>

                                </div>
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/100.png"
                                    />
                                </div>
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/100millionaire.jpg"
                                    />
                                </div>
                            </div>

                            <div className="text-[--dark-blue]  text-[22px] font-bold">พี่ม่อน </div>
                            <div className="text-lg text-zinc-500 ">Producer
                                <a href="https://www.facebook.com/Ryounoi100lan" className="underline" target="_blank"> อายุน้อยร้อยล้าน</a> </div>
                            <div className="text-lg text-zinc-500 ">นร.คลาส In-house training
                            </div>
                            {/* <div className="text-lg indent-2 text-start flex">
                                <q>
                                    ตัวผมเองก็นิสัยไม่ค่อยดี ตอนนั้นคิดว่า &quot; จริงเหรอวะ เด็กอายุแค่ 20 กว่าจะมาสอนอะไรเรา&quot;  เขาฟลุ๊คหรือเปล่า มันทำได้จริงเหรอ พอตั้งใจเรียน ผมว่ามันเปลี่ยนแปลงวิธีการทำงานของผม อยากเปลี่ยนแปลงต้องเปิดใจ มันคิดกระแทกผมมากเลยนะ
                                </q></div> */}
                        </div>


                        <div className="text-center my-10">

                            <div className="w-full flex gap-3 justify-center p-2 items-center">
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    {/* <Video className="h-full object-cover" src="/images/3ms/pmon.mp4"></Video> */}
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/theiconleft.png"
                                    />

                                </div>
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/paul.jpg"
                                    />
                                </div>
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-white">
                                    <img
                                        className="z-0 h-full aspect-video object-scale-down"

                                        src="/images/3ms/theicon.png"
                                    />
                                </div>
                            </div>

                            <div className="text-[--dark-blue]  text-[22px] font-bold">พี่พอล
                            </div>
                            <div className="text-lg text-zinc-500 ">เจ้าของอาณาจักร
                                <a href="https://www.facebook.com/iConGroup.official/" className="underline" target="_blank"> The iCon Group
                                </a> </div>
                            <div className="text-lg text-zinc-500 ">นร.คอร์สสด
                            </div>
                            <div className="text-lg indent-2 justify-center flex text-center">
                                {/* <q> */}
                                ยอดวิว 2.3 ล้าน ได้ผู้ติดตามเพิ่ม 4 หมื่น ชั่วข้ามคืน
                                {/* </q> */}
                            </div>
                        </div>


                        <div className="text-center my-10">

                            <div className="w-full flex gap-3 justify-center p-2 items-center">
                                {/* <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <Video className="h-full object-cover" src="/images/3ms/pmon.mp4"></Video>

                                </div> */}
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/taa.webp"
                                    />
                                </div>
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/chapaakyoon.jpg"
                                    />
                                </div>
                            </div>

                            <div className="text-[--dark-blue]  text-[22px] font-bold">คุณตา แก้วรุ้ง
                            </div>
                            <div className="text-lg text-zinc-500 ">เจ้าของ Brand T-Zaa ชาปากยูน
                                <div className="text-lg text-zinc-500 ">นร.คอร์สสด

                                </div>
                                <div className="text-lg indent-2 text-start flex">
                                    <q>
                                        พี่รับโทรศัพท์ไม่ไหว ลูกค้าโทรมากระหน่ำมากขอซื้อเฟรนไชส์..พีคสุด..จนเราต้องเปลี่ยนเบอร์หนี จากขายแฟรนไชส์ได้เดือนละ 2-3 สาขา (สาขาละ 150k) พอคลิปสั้นออกไป กลายเป็นว่าทำยอดได้ 5 สาขา/เดือน
                                    </q>
                                </div>
                            </div>
                        </div>


                        <div className="text-center my-10">
                            <div className="text-[--pink] text-[5.5vw] sm:text-[26px] font-bold">
                                {/* <span className="text-[--yellow]"> &quot; </span> */}
                                {/* อายุน้อยร้อยล้าน จากรายการยอดเข้าถึงขึ้นลง สู่ Reach 10 ล้าน! */}
                                {/* <span className="text-[--yellow]"> &quot; </span> */}
                            </div>
                            <div className="w-full flex gap-3 justify-center p-2 items-center">
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <Video className="h-full object-cover" src="/images/3ms/6th.mp4"></Video>

                                </div>
                                {/* <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/100millionaire.png"
                                    />
                                </div>
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/100millionaire.jpg"
                                    />
                                </div> */}
                            </div>

                            <div className="text-[--dark-blue]  text-[22px] font-bold">คุณจิ๊บ</div>
                            <div className="text-lg text-zinc-500 ">เซลล์ขายยา และเจ้าของธุรกิจนวดหน้า
                                {/* <a href="https://www.facebook.com/Ryounoi100lan" className="underline" target="_blank"> อายุน้อยร้อยล้าน</a> </div> */}
                                <div className="text-lg text-zinc-500 ">นร.คอร์ส Online และ นร.คอร์สสด</div>
                                <div className="text-lg indent-2 text-start flex justify-center">
                                    <q>
                                        ยอดขายฉ่ำทั้งงานประจำและอาชีพเสริม แต่ไม่เหนื่อยกับการทำงานเลยเพราะเราใช้วิธีการขายแบบไม่ได้ขาย
                                    </q></div>
                            </div>
                        </div>

                        <div className="text-center my-10">
                            <div className="text-[--pink] text-[5.5vw] sm:text-[26px] font-bold">
                                {/* <span className="text-[--yellow]"> &quot; </span> */}
                                {/* Youtuber ที่เริ่มจาก 0 สู่ 1,000,000 ผู้ติดตาม */}
                                {/* <span className="text-[--yellow]"> &quot; </span> */}
                            </div>
                            <div className="w-full flex gap-3 justify-center p-2 items-center">
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full  object-scale-down"

                                        src="/images/3ms/amzaing.png"
                                    />

                                </div>
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/eifel.png"
                                    />
                                </div>
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/amazing_logo.jpg"
                                    />
                                </div>
                            </div>

                            <div className="text-[--dark-blue]  text-[22px] font-bold">คุณไอเฟล
                            </div>
                            <div className="text-lg text-zinc-500 ">เจ้าของช่องยูทูป

                                <a href="https://www.youtube.com/@amazingstorytelling" className="underline" target="_blank"> Amazing Storytelling</a>

                                {/* <a href="https://www.facebook.com/Ryounoi100lan" className="underline" target="_blank"> อายุน้อยร้อยล้าน</a> </div> */}
                                <div className="text-lg text-zinc-500 ">นร.คอร์ส Online และ นร.คอร์สสด</div>
                                <div className="text-lg indent-2 text-start flex justify-center">
                                    {/* <q> */}
                                    Youtuber ที่เริ่มจาก 0 สู่ 1,000,000 ผู้ติดตาม

                                    {/* </q> */}
                                </div>
                            </div>
                        </div>

                        <div className="text-center my-10">
                            <div className="text-[--pink] text-[5.5vw] sm:text-[26px] font-bold">
                                {/* <span className="text-[--yellow]"> &quot; </span> */}
                                {/* Youtuber ที่เริ่มจาก 0 สู่ 1,000,000 ผู้ติดตาม */}
                                {/* <span className="text-[--yellow]"> &quot; </span> */}
                            </div>
                            <div className="w-full flex gap-3 justify-center p-2 items-center">
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <Video className="h-full object-cover" src="/images/3ms/new.mp4"></Video>

                                </div>
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/knight.jpg"
                                    />
                                </div>
                                <div className="h-[30vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black justify-center items-center flex relative">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/cheffycar.jpg"
                                    />
                                </div>
                            </div>

                            <div className="text-[--dark-blue]  text-[22px] font-bold">คุณไนต์
                            </div>
                            <div className="text-lg text-zinc-500 ">เจ้าของช่องยูทูป
                                <a href="https://www.youtube.com/@CheffyCar/videos" className="underline" target="_blank">Cheffy Car </a>

                                {/* <a href="https://www.facebook.com/Ryounoi100lan" className="underline" target="_blank"> อายุน้อยร้อยล้าน</a> </div> */}
                                <div className="text-lg text-zinc-500 ">นร.คอร์สสด
                                </div>
                                <div className="text-lg indent-2 text-start flex justify-center">
                                    <q>
                                        ลูกค้าโอนเงินหลักแสนกลางอากาศ ยอดขายเพิ่ม 2 เท่าตั้งแต่เปิดตัว

                                    </q>
                                </div>
                            </div>
                        </div>


                        {/* <div className="text-center my-10">
                            <div className="text-[--pink] text-[5.5vw] sm:text-[26px] font-bold"><span className="text-[--yellow]"> &quot; </span>ผมไม่เคยนึกมาก่อนว่าเรื่องที่เล่า ถ้ามันจะทรงพลังถึงขนาดไปเปลี่ยนแปลงชีวิตใครได้!<span className="text-[--yellow]"> &quot; </span></div>
                            <div className="w-full flex justify-center p-2">
                                <div className="h-[40vw] sm:h-64 aspect-square overflow-hidden rounded-xl bg-black">
                                    <img
                                        className="z-0 h-full aspect-video object-cover"

                                        src="/images/3ms/pmeng.jpg"
                                    />
                                </div>
                            </div>

                            <div className="text-[--dark-blue]  text-[22px] font-bold">คุณแมงปอ </div>
                            <div className="text-lg text-zinc-500 ">เจ้าของเพจดัง <a href="https://www.facebook.com/brotherMP" className="underline" target="_blank">พี่แมง ป.</a></div>
                            <div className="text-lg indent-2 text-start flex">
                                <q>
                                    ผมไม่เคยนึกมาก่อนว่าเรื่องที่เล่า ถ้ามันจะทรงพลังถึงขนาดไปเปลี่ยนแปลงชีวิตใครได้ มันจะต้องมีกลยุทธ์ มีการวางแผน
                                    มีการตั้งเป้า เป็นวิทยาศาสตร์อย่างหนึ่งที่ผมเพิ่งจะเรียนรู้
                                </q></div>
                        </div> */}




                    </section>

                    <section className="sm:p-5 sm:px-10 flex justify-center " id="whatwilllearn">
                        <Card className="sm:p-5 w-full rounded-[3rem] bg-[--dark-blue] ">
                            <CardBody>
                                <div className="sm:text-[42px] text-2xl font-bold text-[--yellow] text-center">ทุกปัญหาเหล่านี้จะหมดไป
                                    เมื่อคุณรู้ความลับในคอร์สนี้
                                </div>
                                <div className="text-zinc-700 ">
                                    <ul className="text-white sm:text-[22px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-md justify-center items-center">
                                        <li className="p-5 flex "><MessageCircleX className="w-14 "></MessageCircleX>ขายไปไม่มีใครซื้อ
                                        </li>
                                        <li className="p-5 flex "><MessageCircleX className="w-14 "></MessageCircleX>เล่าไปไม่มีใครเชื่อ</li>
                                        <li className="p-5 flex "><MessageCircleX className="w-14 "></MessageCircleX>ทำไปไม่มีใครดู</li>
                                        <li className="p-5 flex "><MessageCircleX className="w-14 "></MessageCircleX>พูดไปไม่มีใครฟัง</li>
                                        <li className="p-5 flex "><MessageCircleX className="w-14 "></MessageCircleX>เขียนไปไม่มีใครอ่าน</li>
                                        <li className="p-5 flex "><MessageCircleX className="w-14 "></MessageCircleX>จับจุดไม่ได้สักที</li>

                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </section>

                    <section className="sm:p-5 sm:px-10 flex flex-col items-center justify-center  " id="">
                        <div className="sm:text-[42px] text-3xl font-bold py-5">⚠️ อย่าเสียเงินมาเรียน ถ้าคุณยังไม่เข้าใจ ⚠️</div>
                        <div className="">
                            <div className="text-lg font-bold">  <Asterisk className="text-[--green]" />ชีวิตจริงพูดเก่ง แต่ออนไลน์ดันไม่ปัง</div>
                            <div className="">การสื่อสารแบบตัวต่อตัวมักจะได้รับ Feedback ทันที
                                ทำให้ผู้พูดสามารถปรับตัวได้ แต่ในโลกออนไลน์ Feedback อาจล่าช้าหรือไม่ชัดเจน
                                แม้ว่าจะพูดเก่ง แต่การสื่อสารผ่านข้อความหรือสื่อออนไลน์อาจต้องการทักษะที่แตกต่างไป
                                เช่น การเขียนให้กระชับ การใช้ภาษาให้น่าสนใจ
                            </div>
                        </div>
                        <div className="flex items-center justify-around lg:flex-row md:flex-col-reverse flex-col-reverse  gap-2">
                            <q className="font-bold lg:text-3xl md:text-lg text-lg text-[--green] lg:w-[40%] md:w-[50%] w-[90%] text-center">
                                มาเห็นแอดของชุ่มฉ่ำ ลองเรียนดู โอ้โห คอร์สเรียบเรียง มีสูตรชัดเจนดีมาก จนผมกลับไปฟังตัวเองรู้เลย มันผิดพลาดยังไง
                            </q>
                            <div>
                                <Image className="z-0 h-[400px]" src="/images/3ms/mod.png"></Image>
                            </div>
                        </div>
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
                            <div className="lg:grid grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col-reverse flex-col-reverse  gap-2">
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
                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                เรียนมาหลายที่แล้ว ยังไม่เจอที่ถูกใจ


                            </div>
                            <p className="text-lg">กว่า 10 ปีอีฟหมดเงินไปหลายบาทเพื่อทดลอง หลายๆ ครั้งอีฟสงสัยว่าทำไมหลังเรียนจบแล้วเหมือนไม่ได้อะไรกลับมาเลยไม่ว่าจ่ายแพงหรือถูก บางที่เนื้อหาก็ยากไป บางที่ก็มีแต่ทฤษฎีอย่างเดียวไม่มีสเต็ปที่ทำตามได้
                                หรือบางที่ก็ได้แค่แรงบันดาลใจ อีฟไม่มีทางกล้าที่จะบอกต่อใคร หากไม่ผ่านการทดลองด้วยตัวเองจนมั่นใจว่าจะช่วยให้เจ้าของธุรกิจสร้างยอดขายได้จริง
                            </p>
                            <div className="flex items-center justify-around lg:flex-row md:flex-col-reverse flex-col-reverse  gap-2">
                                <q className="font-bold lg:text-3xl md:text-lg text-lg text-[--green] lg:w-[40%] md:w-[50%] w-[90%] text-center">
                                    กลัวเฟลเหมือนคอร์สอื่น แต่พอได้เรียน 20% ก็รู้สึกคุ้มกับที่จ่ายแล้ว

                                </q>
                                <div>
                                    <Image className="z-0 h-[400px]" height={400} src="/images/3ms/student.png"></Image>
                                </div>
                            </div>


                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                ทำธุรกิจมานาน แต่ทีมไม่โตสักที

                            </div>
                            <p className="text-lg">สำหรับคนที่เชี่ยวชาญ Social Media อยู่แล้ว
                                คุณจะเข้าใจอย่างลึกซึ้งยิ่งขึ้น และได้วิธีคิด Content
                                ที่เป็นระบบมากขึ้น เหมาะสำหรับการส่งต่อเคล็ดลับให้กับทีมของคุณ เป็นพลังให้ธุรกิจเติบโตอย่างก้าวกระโดด
                            </p>

                            <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col-reverse flex-col-reverse  gap-2">
                                <q className="font-bold lg:text-3xl md:text-lg text-lg text-[--green]  text-center">
                                    ทีมงานเรียนจบ
                                    พูดเป็นภาษาเดียวกัน
                                    บรีฟงานง่ายขึ้น 300%


                                </q>
                                <div>
                                    <Image className="z-0 " height={400} src="/images/3ms/james.png"></Image>
                                </div>
                            </div>


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

                            <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col-reverse flex-col-reverse  gap-2">
                                <q className="font-bold lg:text-3xl md:text-lg text-lg text-[--green]  text-center">
                                    ไม่มีหลักสูตรที่ไหน
                                    สอนภาษาเด็กแบบนี้
                                </q>
                                <div>
                                    <Image className="z-0 h-[400px]" height={400} src="/images/3ms/gift.png"></Image>
                                </div>
                            </div>


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

                            <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col-reverse flex-col-reverse  gap-2">
                                <q className="font-bold lg:text-3xl md:text-lg text-lg text-[--green]  text-center">
                                    มี Template ให้สำหรับมือใหม่
                                    เอาไปใช้งานจริงได้ทันที

                                </q>
                                <div>
                                    <Image className="z-0 h-[400px]" height={400} src="/images/3ms/scare.png"></Image>
                                </div>
                            </div>


                            <div className="text-xl mt-5 font-bold ">
                                <Asterisk className="text-[--green]"></Asterisk>
                                ไม่มั่นใจ ว่าจะได้ผลกับธุรกิจตัวเอง

                            </div>
                            <p className="text-lg">หากพบว่าสิ่งที่เรียนไปไม่ได้ผลกับคุณ เรายินดีคืนเงิน 100% โดยไม่มีเงื่อนไข

                            </p>

                            <div className="lg:grid lg:grid-cols-2 flex items-center justify-around lg:flex-row md:flex-col-reverse flex-col-reverse  gap-2">
                                <q className="font-bold lg:text-3xl md:text-lg text-lg text-[--green]  text-center">
                                    😳😳😳😳😳

                                </q>
                                <div>
                                    <Image className="z-0 h-[400px]" height={400} src="/images/3ms/laanroi.png"></Image>
                                </div>
                            </div>

                        </div>

                    </section>
                    <section className="sm:p-5 sm:px-10 flex justify-center" id="allLesson">
                        <Card className="sm:p-5 p-1 w-full bg-[#E3E3E3] sm:rounded-[3rem] rounded-none">
                            <CardBody className="flex sm:flex-row flex-wrap justify-between ssm:p-0">
                                <div className="p-2 grid  justify-items-center gap-10 sm:w-[30%] lg:w-[40%] md:w-full">
                                    {/* <div className="sm:text-[48px] font-bold">All Lessons</div> */}
                                    <div className="sm:text-[42px] text-3xl font-bold">All Lessons</div>
                                    <div className=" sm:w-64 sm:h-64 w-48 h-48 rounded-xl overflow-hidden flex justify-center items-center">
                                        {/* <AudioWaveform className="text-white sm:size-[56px] size-4"></AudioWaveform> */}
                                        <Image src="/images/3ms/topsecretstamp.png"></Image>
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
                                <div className="sm:text-[42px] text-[8vw] font-bold text-[--dark-blue]">สอนโดย <q className="text-[--yellow]">อีฟ ภัทรัดจารินท์​ สุวัชรานนท์</q></div>
                                {/* <div className="sm:text-[36px] text-[4vw] text-yellow-500">&quot;อีฟ ภัทรัดจารินท์​ สุวัชรานนท์&quot;</div> */}
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
                        <div className="sm:text-[38px]  text-[8vw] px-5 py-2 font-bold  gap-2"><span>โปรพิเศษ</span><span className="sm:text-[42px] text-[9vw] text-[--pink] font-bold underline decoration-wavy">สำหรับ 20 ท่านแรก</span><span>ที่สมัครตอนนี้</span></div>
                        <div className="sm:text-[3vw] text-[6vw] px-5  py-2 flex justify-center"><CountDown className=""></CountDown></div>
                        <div className=" lg:grid grid-cols-2 justify-center md:flex flex gap-2 lg:flex-row md:flex-col flex-col ">
                            <div className="bg-[--dark-blue] w-full  md:w-full  rounded-[3rem] text-white">
                                <div className="p-10">
                                    <div className="text-3xl font-bold">เล่าเรื่อง 3 นาทีให้มียอดขาย <br /> (Online)</div>
                                    <div className=" overflow-auto ssm:text-sm">
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
                                    <div className="text-md text-end line-through">ราคาปกติ 65,000</div>
                                    <div className="text-xl text-end">฿19,999</div>
                                    <div className="text-sm text-end">ทบทวนซ้ำได้ไม่จำกัดจำนวนครั้ง**</div>
                                    <Button className="w-full text-xl font-bold mt-4 bg-[--pink] text-white">
                                        ออกใบกำกับภาษี ขอลดหย่อนได้ 200%
                                    </Button>
                                </div>
                            </div>
                            <div className="bg-[--pink] w-full  md:w-full rounded-[3rem] text-white">
                                <div className="p-10">
                                    <div className="text-3xl font-bold">เล่าเรื่อง 3 นาทีให้มียอดขาย <br /> (สำหรับองค์กร)</div>
                                    <div className=" overflow-auto ssm:text-sm">
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
                                    <div className="text-xl text-end">฿  250,000</div>
                                    <div className="text-sm text-end">ทบทวนซ้ำได้ไม่จำกัดจำนวนครั้ง**</div>
                                    <Button className="w-full text-xl font-bold mt-4 bg-[--yellow] text-white">
                                        ซื้อคอร์ส
                                    </Button>
                                </div>
                            </div>
                            <div className="bg-[--pink] w-full  md:w-full rounded-[3rem] text-white">
                                <div className="p-10">
                                    <div className="text-3xl font-bold">เรียนสด 2 วัน Exclusive Group for CEO</div>
                                    <div className=" overflow-auto ssm:text-sm">
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
                                    <div className="text-md text-end line-through">ราคาปกติ 150,000 บาท</div>
                                    <div className="text-xl text-end">ราคาพิเศษ 49,999</div>
                                    <div className="text-sm text-end">ทบทวนซ้ำได้ไม่จำกัดจำนวนครั้ง**</div>
                                    <Button className="w-full text-xl font-bold mt-4 bg-[--yellow] text-white">
                                        ออกใบกำกับภาษี ขอลดหย่อนได้ 200%
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="sm:p-5 sm:px-10 grid grid-cols-2 justify-center" id="freqQA">
                        <div className="sm:text-[42px] text-3xl font-bold">
                            คำถามที่พบบ่อย?
                            <div>
                                <Image src="/images/sticker19.png" className="h-48"></Image>
                            </div>
                        </div>
                        <Question />
                    </section>

                </div>
            </div>



        </>
    )
}