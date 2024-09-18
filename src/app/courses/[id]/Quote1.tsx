'use client'

import { motion } from "framer-motion"

export default function Quote1() {
    return <>

        <section className="h-[70vh] justify-center items-center w-full bg-zinc-200 skewed-background">
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
     
    </>
}