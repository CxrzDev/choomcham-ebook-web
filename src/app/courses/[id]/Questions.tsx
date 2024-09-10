'use client'
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Asterisk } from "lucide-react";

export default function Question() {

    const questions = [
        {
            title: <div className="font-bold">เรียนผ่านอะไร เรียนได้เลยไหม?</div>,
            details: [
                // "ต้องเล่าอะไรบ้าง ให้มียอดขาย",
                // "ขายแบบขาย VS ขายแบบไม่ขาย",
                // "เขียนสิ่งนี้อันดับแรก ไม่ให้เรื่องเล่าออกทะเล",
                // "นักเรียนชุ่มฉ่ำห้ามทำ 4 อย่างนี้"
            ]
        },
        {
            title: <div className="font-bold">มีการรับประกันไหม?</div>,
            details: [
                // "ปลากรอบชุ่มฉ่ำ คืออะไร?",
                // "เล่าเรื่องยังไงให้ไม่น่าเบื่อ?",
                // "จิตวิทยาเลือกหัวข้อให้ขายได้",
                // "จุดอร่อยของเรื่อง"
            ]
        }
    ];

    const itemClasses = {
        // base: "py-0 w-full",
        title: "text-[20px]",
        // trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        // indicator: "text-medium",
        // content: "text-small px-2",
      };
    

    return (
        <Accordion isCompact 
        itemClasses={itemClasses}
        >
            {questions.map(
                (item: any,index) => <AccordionItem key={index} aria-label="Accordion 1" 
                title={item.title}>
                    {item.details.map((detail: any) => <div key={detail} className="flex items-center"><Asterisk className="text-[--pink]"></Asterisk>{detail}</div>)}
                </AccordionItem>)}

        </Accordion>
    );
}
