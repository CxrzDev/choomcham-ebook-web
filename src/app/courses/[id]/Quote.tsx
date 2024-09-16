'use client'

import { motion } from "framer-motion"

export default function Quote() {
    return <>

        <section className="h-[70vh] justify-center items-center w-full ">
            <div className="flex flex-col  h-full items-center justify-center">
                <motion.div initial={{ y: 100 ,opacity:0 }}
                    
                    whileInView={{ y: 0,opacity:100 }} className="lg:text-[2rem] md:text-[1.5rem] text-[6vw]">ถ้าคุณรู้...ว่าตัวเองมีของดี</motion.div>
                <motion.div  initial={{ y: 100 ,opacity:0 }}
                    
                    whileInView={{ y: 0,opacity:100 }}  className="lg:text-[2rem] md:text-[1.5rem] text-[6vw]">ถ้าคุณรู้...ว่าตัวเองคือตัวจริง</motion.div>
                <motion.div  initial={{ y: 100 ,opacity:0 }}
                    
                    whileInView={{ y: 0,opacity:100 }}  className="lg:text-[4rem] md:text-[3.5rem] text-[8vw] font-bold text-[--pink]">มันจะเจ็บปวดแค่ไหน?</motion.div>
                <motion.div  initial={{ y: 100 ,opacity:0 }}
                    
                    whileInView={{ y: 0,opacity:100 }}  className="lg:text-[1.8rem] md:text-[1rem] text-[4vw] bg-[--green] text-white">ถ้าสุดท้ายคุณเป็นได้แค่...คนเก่งที่ไม่มีใครรู้จัก</motion.div>
                <motion.div  initial={{ y: 100 ,opacity:0 }}
                    
                    whileInView={{ y: 0,opacity:100 }}  className="lg:text-[1.8rem] md:text-[1rem] text-[4vw] bg-[--dark-blue] text-white">เพราะแค่ไม่รู้...ว่าเล่าเรื่องยังไงให้ได้ใจคน</motion.div>

            </div>

        </section>
        <section className="h-[70vh] justify-center items-center w-full bg-[--green] skewed-background">
            <div className="flex flex-col  h-full items-center justify-center">
                <motion.div  initial={{ y: 100 ,opacity:0 }}
                    
                    whileInView={{ y: 0,opacity:100 }}  className="lg:text-[4rem] md:text-[3.5rem] text-[8vw] font-bold text-[--pink]">ถึงเวลาแล้ว</motion.div>
                <motion.div  initial={{ y: 100 ,opacity:0 }}
                    
                    whileInView={{ y: 0,opacity:100 }}  className="lg:text-[4rem] md:text-[3.5rem] text-[8vw] font-bold text-[--pink]">ที่ตัวจริงอย่างคุณ<span className="bg-[--yellow] text-white px-2">ต้องมีที่ยืน</span></motion.div>

            </div>

        </section>
    </>
}