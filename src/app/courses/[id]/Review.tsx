
import Video from "@/app/components/VideoPlayer";
import { Button, Image } from "@nextui-org/react";

export default function Review() {

    const students = [
        {
            id: 1,
            title: "Jaymeen เจ้าของ Chubby Cheeks ทำยอดขาย 8 หมื่นกระปุกภายในปีครึ่ง!",
            description: " Jaymeen เด็กสายศิลป์อาร์ตตัวแม่ แต่ไม่ได้มีสกิลการพูดโน้มน้าวเลย ก่อนเรียนคือพูดงงๆ ตดๆ คลิปสวยมากแต่เล่าเรื่องไม่เป็น ได้ยอดวิวหลักร้อย เรียนจบ 1 เดือน คลิปได้ 5 ล้านวิวเรียบร้อย ล่าสุดได้ยอดขายเดือนละล้าน!",
            profile: "/images/3ms/jaymeen.png",
            name: "Jaymeen",
            role: <>เจ้าของ <a href="https://www.tiktok.com/@chubbycheeks.m" className="underline" target="_blank">Chubby Cheeks</a></>,
            course: "นักเรียนคอร์สสด",
            video: <Video className="rounded-xl" src={"/images/3ms/jaymeen1.mp4"}></Video>,
            src: "/images/3ms/jaymeen1.mp4"

        },
        {
            id: 2,
            title: "อายุน้อยร้อยล้าน จากรายการยอดเข้าถึงขึ้นลง สู่ Reach 10 ล้าน!",
            description: <div> ตัวผมเองก็นิสัยไม่ค่อยดี ตอนนั้นคิดว่า &quot;จริงเหรอวะ เด็กอายุแค่ 20 กว่าจะมาสอนอะไรเรา&quot; เขาฟลุ๊คหรือเปล่า มันทำได้จริงเหรอ พอตั้งใจเรียน ผมว่ามันเปลี่ยนแปลงวิธีการทำงานของผม อยากเปลี่ยนแปลงต้องเปิดใจ มันคิดกระแทกผมมากเลยนะ</div>,
            profile: "/images/3ms/100millionaire.png",
            name: "พี่ก้อง อายุน้อยร้อยล้าน",
            role: <>ผู้ก่อตั้งบริษัทสื่อ  <a href="https://www.facebook.com/Ryounoi100lan" className="underline" target="_blank">Mushroom Group</a></>,
            course: "นร.คลาส In-house training",
            video: <Video className="rounded-xl" src={"/images/3ms/100mill1.mp4"}></Video>,
            src: "/images/3ms/100mill1.mp4"

        },
        {
            id: 3,
            title: "รีวิวจาก พี่ม่อน Producer อายุน้อยร้อยล้าน!",
            description: "Creative อายุน้อยร้อยล้านมาเรียนคอร์สเล่าเรื่องใน 3 นาทีให้ได้ใจคนเป็นยังไง ?.",
            profile: "/images/3ms/100.png",
            name: "พี่ม่อน",
            role: <>Producer  <a href="https://www.facebook.com/Ryounoi100lan" className="underline" target="_blank">อายุน้อยร้อยล้าน</a></>,
            course: "นร.คลาส In-house training",
            video: <Video className="rounded-xl" src={"/images/3ms/100mill.mp4"}></Video>,
            src: "/images/3ms/100mill.mp4"

        },
        {
            id: 4,
            title: "",
            description: "ยอดวิว 2.3 ล้าน ได้ผู้ติดตามเพิ่ม 4 หมื่น ชั่วข้ามคืน",
            profile: "/images/3ms/paul.jpg",
            name: "พี่พอล",
            role: <>เจ้าของอาณาจักร  <a href="https://www.facebook.com/iConGroup.official/" className="underline" target="_blank">The iCon Group</a></>,
            course: "นร.คอร์สสด",
            video: <Image className="z-0" src="/images/3ms/theiconleft.png" />,
            src: "/images/3ms/theiconleft.png"

        },
        {
            id: 5,
            title: "",
            description: "พี่รับโทรศัพท์ไม่ไหว ลูกค้าโทรมากระหน่ำมากขอซื้อเฟรนไชส์..พีคสุด..จนเราต้องเปลี่ยนเบอร์หนี จากขายแฟรนไชส์ได้เดือนละ 2-3 สาขา (สาขาละ 150k) พอคลิปสั้นออกไป กลายเป็นว่าทำยอดได้ 5 สาขา/เดือน",
            profile: "/images/3ms/taa.webp",
            name: "คุณตา แก้วรุ้ง",
            role: <>เจ้าของ Brand T-Zaa ชาปากยูน</>,
            course: "นร.คอร์สสด",
            video: <Video className="rounded-xl" src={"/images/3ms/kuntaa.mp4"}></Video>,
            src: "/images/3ms/kuntaa.mp4"

        },
        {
            id: 6,
            title: "",
            description: "ยอดขายฉ่ำทั้งงานประจำและอาชีพเสริม แต่ไม่เหนื่อยกับการทำงานเลยเพราะเราใช้วิธีการขายแบบไม่ได้ขาย",
            profile: "/images/3ms/jib.png",
            name: "คุณจิ๊บ",
            role: <>เซลล์ขายยา และเจ้าของธุรกิจนวดหน้า</>,
            course: "นร.คอร์ส Online และ นร.คอร์สสด",
            video: <Video className="rounded-xl" src={"/images/3ms/kunjib.mp4"}></Video>,
            src: "/images/3ms/kunjib.mp4"

        },
        {
            id: 7,
            title: "",
            description: "Youtuber ที่เริ่มจาก 0 สู่ 1,000,000 ผู้ติดตาม",
            profile: "/images/3ms/eifel.png",
            name: "คุณไอเฟล",
            role: <>เจ้าของช่องยูทูป  <a href="https://www.youtube.com/@amazingstorytelling" className="underline" target="_blank">Amazing Storytelling</a></>,
            course: "นร.คอร์ส Online และ นร.คอร์สสด",
            video: <Image className="z-0" src="/images/3ms/amzaing.png" />,
            src: "/images/3ms/amzaing.png"

        },
        {
            id: 8,
            title: "",
            description: "ลูกค้าโอนเงินหลักแสนกลางอากาศ ยอดขายเพิ่ม 2 เท่าตั้งแต่เปิดตัว",
            profile: "/images/3ms/knight.jpg",
            name: "คุณไนต์",
            role: <>เจ้าของช่องยูทูป  <a href="https://www.youtube.com/@CheffyCar/videos" className="underline" target="_blank">Cheffy Car</a></>,
            course: "นร.คอร์สสด",
            video: <Video className="rounded-xl" src={"/images/3ms/cheffycar.mp4"}></Video>,
            src: "/images/3ms/cheffycar.mp4"

        },
    ]

    return (
        <>
            <div className="flex flex-wrap justify-center gap-5 w-full">
                {students.map((video) => {
                    return (
                        <div className="card  card-side bg-[--pink] glass shadow-xl w-[346px] h-[548px] overflow-hidden sm:w-[640px]  sm:h-[380px] flex-col sm:flex-row" key={video.id}>
                            <figure className='bg-[#da547d] w-[350px] sm:w-[50%] h-full  flex lg:items-center justify-center overflow-hidden '>
                                {video.src.match("mp4") ? <video controls src={video.src}  /> : <img src={video.src}/>}
                            </figure>
                            <div className="card-body sm:flex-col flex-row text-white sm:w-[50%] sm:h-[auto] ">
                                <div>
                                    <div className="card-title sm:text-3xl font-bold text-[--yellow] text-xl sm:w-[auto] overflow-hidden text-ellipsis">{video.title}</div>
                                    <p className="text-ellipsis sm:w-[auto] h-auto text-[14px] sm:text-xl overflow-hidden">{video.description}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    {/* <a href={video.src} target='blank'><Button className="bg-[--yellow] ">Watch</Button></a> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )

    return (
        <>

            {students.map((item, index) => <section key={index} className={`-skew-y-1 flex flex-col relative min-h-[60vh] items-center justify-between  p-8 lg:p-16 ${index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"} `}>
                {/* Text Section */}
                {/* <div className="bg-[--dark-blue] w-36 h-36 rounded-full absolute left-[-100px] bottom-[-10px] -z-0"></div>
                <div className="bg-[--green] w-36 h-36 rounded-full absolute left-[-10px] bottom-[-100px] -z-0"></div>
                <div className="bg-[--pink] w-36 h-36 rounded-full absolute right-[-100px] top-[-10px] -z-0"></div>
                <div className="bg-[--yellow] w-36 h-36 rounded-full absolute right-[-10px] top-[-100px] -z-0"></div> */}

                {/* <div className={`blob-green w-[600px]  absolute -z-0 aspect-square text-transparent bottom-[-400px] ${index%2==0 ? "right-[-100px]":"left-[-100px]"}`}>icon</div>
                <div className={`blob-yellow w-[600px] absolute -z-0 aspect-square text-transparent top-[-400px] ${index%2==0 ? "left-[-300px]":"right-[-300px]"} rotate-45`}>icon</div>
                <div className={`blob-pink w-[650px] absolute -z-0 aspect-square text-transparent bottom-[-400px] ${index%2==0 ? "left-[-300px]":"right-[-300px]"} rotate-45`}>icon</div> */}
                <div className="max-w-md lg:w-1/2 space-y-4 skew-y-1">

                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold title  relative z-1">
                        {item.title}
                    </h2>
                    <p className="relative z-1 des text-lg">
                        {item.description}
                    </p>
                    <div className="flex gap-2 items-center relative z-1">
                        <div className="h-[20vw] sm:h-20 aspect-square rounded-full overflow-hidden bg-black justify-center items-center flex relative">
                            <img
                                className="z-0 h-full aspect-square object-cover"

                                src={item.profile}
                            />
                        </div>
                        <div>
                            <div className="  text-[22px] font-bold name">{item.name} </div>
                            <div className="text-lg  ">{item.role} </div>
                            <div className="text-md ">{item.course}</div>

                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center skew-y-1">
                    <div className="relative lg:max-w-md max-w-xs">
                        {/* <img className=" w-32" src="/images/3ms/chubbycheeks.jpg" alt="" /> */}
                        {item.video}

                    </div>
                </div>
            </section>)}

        </>
    )
}
