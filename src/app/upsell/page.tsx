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
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-orange-500" />

                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-4">
                        <CheckCircle size={32} />
                    </div>
                    <h1 className="text-3xl font-bold mb-2">การชำระเงินสำเร็จ!</h1>
                    <p className="text-neutral-400">ระบบได้ส่งลิงก์ดาวน์โหลด eBook ไปยังอีเมลของคุณแล้ว</p>
                </div>

                <div className="bg-neutral-900/50 rounded-2xl p-6 border border-yellow-500/30 mb-8 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        ข้อเสนอพิเศษ (ครั้งเดียวเท่านั้น)
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-4 text-yellow-500 mt-2">
                        ต้องการเจาะลึก "กลยุทธ์เฉพาะแบรนด์คุณ" ไหม?
                    </h2>
                    <p className="text-gray-300 text-center mb-6">
                        eBook ช่วยปูพื้นฐานวิธีคิด แต่คอร์สออนไลน์นี้จะพาคุณลงมือทำจริง <br />
                        พร้อม Workshop ที่จะเปลี่ยนแบรนด์คุณให้ "แพง" และ "ยั่งยืน" ใน 30 วัน
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
