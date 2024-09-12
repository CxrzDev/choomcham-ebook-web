'use client'
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Asterisk } from "lucide-react";

export default function Lession() {

    const lessons = [
        {
            title: <div className="font-bold"><div className=" text-[--green]">Part 1</div> เราจะสร้างยอดขายจากการเล่าเรื่องได้ยังไง?</div>,
            details: [
                "ต้องเล่าอะไรบ้าง ให้มียอดขาย",
                "ขายแบบขาย VS ขายแบบไม่ขาย",
                "เขียนสิ่งนี้อันดับแรก ไม่ให้เรื่องเล่าออกทะเล",
                "นักเรียนชุ่มฉ่ำห้ามทำ 4 อย่างนี้"
            ]
        },
        {
            title: <div className="font-bold"><div className=" text-[--green]">Part 2</div> เครื่องมือลับทำคอนเทนต์ให้มียอดขาย</div>,
            details: [
                "ปลากรอบชุ่มฉ่ำ คืออะไร?",
                "เล่าเรื่องยังไงให้ไม่น่าเบื่อ?",
                "จิตวิทยาเลือกหัวข้อให้ขายได้",
                "จุดอร่อยของเรื่อง"
            ]
        },
        {
            title: <div className="font-bold"><div className=" text-[--green]">Part 3</div> 6 Checklists ภาษาชุ่มฉ่ำ ใช้แล้วขายดี มีเสน่ห์ น่าติดตาม</div>,
            details: [
                "สเต็ปการเขียนเนื้อหาให้ถูกใจลูกค้า",
                "ภาษาชุ่มฉ่ำเพิ่มยอดขาย 6 แบบ"
            ]
        },
        {
            title: <div className="font-bold"><div className=" text-[--green]">Part 4</div> ลงมือปรุงปลาเรียกแมว</div>,
            details: [
                "สูตรเปิด 6 แบบให้หยุดนิ้วคนได้",
                "เนื้อหาให้กลมกล่อม ดูได้จบไม่สะดุด",
                "ปิดคลิปให้เพิ่มยอดผู้ติดตาม ยอดขาย",
                "ก่อนโพสทำสิ่งนี้ คนเข้าถึงเพิ่ม"
            ]
        },
        {
            title: <div className="font-bold"><div className=" text-[--green]">Part 5</div> เตรียมพร้อมลงมือทำ</div>,
            details: [
                "ลงมือทำ 30 วัน",
                "หาไอเดียยังไงให้ไม่ตัน",
                "Tip เสริมสำหรับทำ Tiktok",
                "ครูอีฟฝากไว้ให้คิด อย่าหวังอะไรถ้าเราไม่ฝึก!"
            ]
        },
        {
            title: <div className="font-bold"><div className=" text-[--green]">Part 6</div> กิจกรรมลงมือทำฉ่ำ</div>,
            details: [
                "เอาชนะความท้าทายในการทำคลิป",
                "Action plan เพื่อการทำต่อเนื่อง",
                "นักเรียนเล่าตัวอย่าง 5 ปลา",
                "ฝึกแต่งประโยคจากภาษาชุ่มฉ่ำ",
                "เล่าเรื่องให้ได้ใจคน อย่าลืมใส่ผงชูรส",
                "คาแรกเตอร์ดึงดูดผู้ติดตาม",
                "การบ้าน 10 ข้อ ตัวจริงต้องมีที่ยืน",
                "ทิศทางช่อง สับสนว่ายังไงดี?"
            ]
        },
        {
            title: <div className="font-bold"><div className=" text-[--green]">Part 7</div> Extra tracks</div>,
            details: [
                "อย่าทำคอนเทนต์ดึงดูดคนที่ไม่ใช่",
                "ตารางวิเศษ ขายดีขึ้นเพราะมีคำถูกใจลูกค้า",
                "เล่าเรื่องให้ถูกใจลูกค้าจาก 1 ประโยค",
                "สร้างเรื่องเล่าที่คุณอินเพื่อขาย",
                "คลิป 300 Views VS คลิป 3,000,000 Views",
                "ตัวช่วยจัดระเบียบความคิด",
                "แปลงคอนเทนต์ในกระดาษออกมาเป็นคลิป"
            ]
        }
    ];

    const itemClasses = {
        // base: "py-0 w-full",
        title: "text-[16px]",
        // trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        // indicator: "text-medium",
        // content: "text-small px-2",
      };
    

    return (
        <Accordion isCompact 
        itemClasses={itemClasses}
        >
            {lessons.map(
                (item: any,index) => <AccordionItem key={index} aria-label="Accordion 1" 
                title={item.title}>
                    {item.details.map((detail: any) => <div key={detail} className="flex items-center"><Asterisk className="text-[--pink]"></Asterisk>{detail}</div>)}
                </AccordionItem>)}

        </Accordion>
    );
}
