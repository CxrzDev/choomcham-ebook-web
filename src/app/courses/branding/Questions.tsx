'use client'
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Asterisk } from "lucide-react";

export default function Question() {

    const questions = [
        {
            title: <div className="font-bold">เรียนผ่านอะไร เรียนได้เลยไหม?</div>,
            details: [
                "ผู้ที่สนใจเรียนต้องผ่านการสัมภาษณ์ก่อน เราไม่ได้รับนักเรียนทุกคน"
            ]
        },
        {
            title: <div className="font-bold">มีการรับประกันไหม?</div>,
            details: [
               "แน่นอน เรียนกับเราแล้วใช้ได้จริง 100%"
            ]
        },
        {
            title: <div className="font-bold">ใช้เวลาเรียนนานแค่ไหน?</div>,
            details: [
               "คลาสนี้ใช้เวลาแค่ 3 ชั่วโมง"
            ]
        },
        {
            title: <div className="font-bold">ต้องมีพื้นฐานหรือมีธุรกิจมาก่อนหรือไม่? </div>,
            details: [
               "ไม่จำเป็นต้องมีพื้นฐาน หรือมีธุรกิจมาก่อน แค่คุณสนใจเราพร้อมสอนให้คุณเข้าใจถึงแก่นแท้ของ Branding"
            ]
        },
        {
            title: <div className="font-bold">คลาสนี้สอนเรื่อง Personal Branding หรือไม่? </div>,
            details: [
               "คลาสนี้มีเนื้อหาครอบคลุมเรื่อง Branding  และ  Personal Branding คือหนึ่งในนั้น"
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
        className="mt-10"
        >
            {questions.map(
                (item: any,index) => <AccordionItem key={index} aria-label="Accordion 1" 
                title={item.title}>
                    {item.details.map((detail: any) => <div key={detail} className="flex items-center"><Asterisk className="text-[--pink]"></Asterisk>{detail}</div>)}
                </AccordionItem>)}

        </Accordion>
    );
}
