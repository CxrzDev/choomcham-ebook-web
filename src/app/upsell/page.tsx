'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, X } from 'lucide-react'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function UpsellPage() {
    const router = useRouter()

    const handleBuyCourse = () => {
        // TODO: Implement course purchase flow (similar to eBook payment but different amount/product)
        // For now, maybe redirect to Line or just simulate success
        window.location.href = 'https://line.me/ti/p/@choomcham' // Example: Contact to buy
    }

    const handleSkip = () => {
        router.push('/quiz/success')
    }

    return (
        <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl w-full bg-neutral-800 rounded-3xl p-6 sm:p-8 border border-neutral-700 relative overflow-hidden"
            >
                {/* Decorative background */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[--yellow] to-[--pink]" />

                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[--green]/20 text-[--green] mb-4">
                        <CheckCircle size={32} />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">ยินดีด้วยค่ะ... <br /><span className="text-[--yellow]">คุณเพิ่งก้าวออกจาก &quot;ที่ยืนมั่วๆ&quot; ไปสู่ &quot;ที่ยืนของตัวจริง&quot;</span></h1>
                    <p className="text-neutral-300 mt-4">
                        เช็ก Email ของคุณตอนนี้ได้เลย หนังสือถูกส่งไปรอที่นั่นแล้ว <br />
                        <span className="text-[--pink] font-bold">แต่ก่อนที่คุณพี่จะเริ่มเปิดอ่าน น้องฉ่ำมีเรื่องสำคัญอยากบอก 3 ข้อค่ะ</span>
                    </p>
                </div>

                {/* 3 Key Points Section */}
                <div className="space-y-4 mb-8 text-left">
                    <div className="bg-neutral-700/50 p-4 rounded-xl border-l-4 border-[--pink]">
                        <h3 className="font-bold text-[--pink] mb-1">1. เล่มนี้ไม่ใช่หนังสืออ่านเล่น แต่มันคือ &quot;ยาแรง&quot;</h3>
                        <p className="text-sm text-gray-300">
                            เนื้อหาข้างในอาจจะทำให้คุณพี่รู้สึกจุก หรือเสียดายเวลาที่ผ่านมา แต่นั่นคือสัญญาณที่ดีค่ะ เพราะถ้าเราไม่รู้ว่า &quot;แผล&quot; อยู่ตรงไหน เราจะรักษาไม่ถูกจุด อย่าแค่อ่านให้จบนะคะ... <span className="text-white font-bold">แต่อ่านให้ &quot;ตื่น&quot; ค่ะ</span>
                        </p>
                    </div>
                    <div className="bg-neutral-700/50 p-4 rounded-xl border-l-4 border-[--yellow]">
                        <h3 className="font-bold text-[--yellow] mb-1">2. ความเก่งคือ &quot;ดาบ&quot; แต่ที่ยืนคือ &quot;ทำเล&quot;</h3>
                        <p className="text-sm text-gray-300">
                            ต่อให้ดาบคมแค่ไหน ถ้าไปยืนแกว่งผิดที่ก็ไม่มีใครเห็นค่ะ เล่มนี้จะช่วยคุณพี่เลือกทำเลที่ได้เปรียบที่สุด อ่านจบแล้วลองมองไปรอบตัวดูนะคะ แล้วคุณพี่จะเห็นชัดเลยว่า ใครคือ &quot;ตัวจริง&quot; และใครที่แค่ &quot;ทำเหมือนจะจริง&quot;
                        </p>
                    </div>
                    <div className="bg-neutral-700/50 p-4 rounded-xl border-l-4 border-[--green]">
                        <h3 className="font-bold text-[--green] mb-1">3. เตรียมใจไว้สำหรับการ &quot;ตัดทิ้ง&quot;</h3>
                        <p className="text-sm text-gray-300">
                            น้องฉ่ำจะชวนคุณพี่ทำสิ่งที่ยากที่สุด คือการเลือก &quot;เลิกเป็นทุกอย่าง&quot; เพื่อเป็น &quot;ที่หนึ่งเรื่องเดียว&quot; เตรียมใจไว้เลยค่ะว่าหลังจากอ่านจบ แบรนด์ของคุณพี่จะเปลี่ยนไป และมันจะเปลี่ยนไปในทางที่ชัดเจนจนใครก็เลียนแบบไม่ได้
                        </p>
                    </div>
                </div>

                <div className="bg-neutral-900/50 rounded-2xl p-6 border border-yellow-500/30 mb-8 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        ข้อเสนอพิเศษ (ครั้งเดียวเท่านั้น)
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-4 text-yellow-500 mt-2">
                        ต้องการเจาะลึก &quot;กลยุทธ์เฉพาะแบรนด์คุณ&quot; ไหม?
                    </h2>
                    <p className="text-gray-300 text-center mb-6">
                        eBook ช่วยปูพื้นฐานวิธีคิด แต่คอร์สออนไลน์นี้จะพาคุณลงมือทำจริง <br />
                        พร้อม Workshop ที่จะเปลี่ยนแบรนด์คุณให้ &quot;แพง&quot; และ &quot;ยั่งยืน&quot; ใน 30 วัน
                    </p>

                    <ul className="space-y-3 mb-8">
                        {[
                            'วิเคราะห์จุดอ่อนแบรนด์แบบรายบุคคล',
                            '5 เทคนิคเล่าเรื่องที่คู่แข่งเลียนแบบไม่ได้',
                            'Template การวางแผน Content ล่วงหน้า 1 ปี',
                            'เข้ากลุ่มปิดปรึกษาปัญหาธุรกิจกับ ChoomCham'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-300">
                                <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col gap-3">
                        <Button
                            size="lg"
                            className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold text-lg shadow-lg hover:shadow-orange-500/20"
                            onClick={handleBuyCourse}
                        >
                            สมัครคอร์สออนไลน์ทันที (เพียง 2,900.- จาก 5,900.-)
                        </Button>
                        <div className="text-center text-xs text-gray-500 mt-2">
                            *ข้อเสนอนี้จะหายไปทันทีเมื่อคุณปิดหน้านี้
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={handleSkip}
                        className="text-gray-500 hover:text-white text-sm transition-colors flex items-center justify-center mx-auto gap-2"
                    >
                        ไม่รับข้อเสนอ, ไปหน้าดาวน์โหลด eBook <ArrowRight size={14} />
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
