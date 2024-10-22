'use client'
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Asterisk } from "lucide-react";

export default function Lession() {

    const lessons = [
        {
            title: <div className="font-bold"><div className=" text-[--green]">Part 1</div> อะไรทำให้การสร้างแบรนด์ของคุณล้มเหลวโดยไม่รู้ตัว?</div>,
            details: [
               
            ]
        },
        {
            title: <div className="font-bold"><div className=" text-[--green]">Part 2</div> สิ่งที่โฆษณาแพงๆ ก็ไม่มีทางให้คุณได้</div>,
            details: [
               
            ]
        },
        {
            title: <div className="font-bold"><div className=" text-[--green]">Part 3</div> Branding ยกระดับธุรกิจของคุณได้ยังไง</div>,
            details: [
               
            ]
        },
        {
            title: <div className="font-bold"><div className=" text-[--green]">Part 4</div> คุณสามารถเลือกลูกค้าในฝันได้ แม้โฆษณาไม่เป็น</div>,
            details: [
               
            ]
        },
        {
            title: <div className="font-bold"><div className=" text-[--green]">Part 5</div> ถอดรหัสความสำเร็จของแบรนด์ระดับโลก</div>,
            details: [
             
            ]
        },
        {
            title: <div className="font-bold"><div className=" text-[--green]">Part 6</div> แบบฝึกสร้างแบรนด์ในฝันของคุณไปด้วยกัน</div>,
            details: [
               
            ]
        },
       
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
