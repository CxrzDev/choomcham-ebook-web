'use client'

import { motion } from "framer-motion"

export default function Quote() {
    return <>
  <section className="h-[70vh] flex justify-center items-center w-full bg-[--green] skewed-background">
    <div className="flex flex-col h-full items-center justify-center px-4 text-center">
        {/* Main Heading */}
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-bold text-[--pink] leading-tight"
        >
            <h1 className="lg:text-[3rem] md:text-[2rem] text-[6vw]">
                พร้อมจะเปลี่ยนธุรกิจของคุณแล้วหรือยัง?
            </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-[--pink] leading-tight mt-4"
        >
            <h2 className="lg:text-[3rem] md:text-[2rem] text-[6vw]">
                ลงทะเบียนเรียนวันนี้{' '}
                <span className="bg-[--yellow] text-white px-2">
                    แล้วพาธุรกิจคุณพัฒนาไปอีกขั้น!
                </span>
            </h2>
        </motion.div>
    </div>
</section>

    </>
}