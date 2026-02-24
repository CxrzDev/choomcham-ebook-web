'use client'

import { useState, useEffect } from 'react'
import { Button, Input, Card, CardBody } from '@nextui-org/react'
import { Lock, CheckCircle2, AlertCircle, Headphones } from 'lucide-react'
import { useRouter } from 'next/navigation'

declare global {
    interface Window {
        OmiseCard: any;
    }
}

export default function CheckoutPage() {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [orderBump, setOrderBump] = useState(false)
    const router = useRouter()

    const basePrice = 599;
    const bumpPrice = 150;
    const totalPrice = orderBump ? basePrice + bumpPrice : basePrice;
    const amountInSatang = totalPrice * 100;

    useEffect(() => {
        // Load Omise Script
        const script = document.createElement('script')
        script.src = 'https://cdn.omise.co/omise.js'
        script.async = true
        script.onload = () => {
            if (window.OmiseCard) {
                window.OmiseCard.configure({
                    publicKey: process.env.NEXT_PUBLIC_OMISE_PUBLIC_KEY,
                    currency: 'thb',
                    frameLabel: 'Choomcham Branding',
                    submitLabel: 'ชำระเงิน',
                    buttonLabel: 'ชำระเงิน'
                });
            }
        }
        document.head.appendChild(script)

        return () => {
            // Cleanup if needed
            if (document.head.contains(script)) {
                document.head.removeChild(script)
            }
        }
    }, [])

    const handlePayment = () => {
        setErrorMsg('')

        if (!email || !email.includes('@')) {
            setErrorMsg('กรุณากรอกอีเมลให้ถูกต้อง')
            return
        }

        setIsLoading(true)

        if (!window.OmiseCard) {
            setErrorMsg('ระบบชำระเงินกำลังโหลด กรุณารอสักครู่...')
            setIsLoading(false)
            return
        }

        window.OmiseCard.open({
            amount: amountInSatang, // Dynamic amount based on order bump
            onCreateTokenSuccess: async (token: string) => {
                try {
                    // Send token to backend API
                    const res = await fetch('/api/checkout', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email,
                            token,
                            amount: amountInSatang,
                            orderBump: orderBump
                        })
                    })

                    const data = await res.json()

                    if (!res.ok) {
                        throw new Error(data.error || 'Payment failed')
                    }

                    // Success! Redirect directly to Upsell Page
                    // (Do not redirect to success page yet, we want to upsell them first)
                    router.push('/upsell')

                } catch (err: any) {
                    console.error(err)
                    setErrorMsg(err.message || 'เกิดข้อผิดพลาดในการชำระเงิน')
                    setIsLoading(false)
                }
            },
            onFormClosed: () => {
                setIsLoading(false)
            }
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-thai">
            <Card className="w-full max-w-md shadow-xl rounded-[2.5rem] bg-white overflow-visible">
                <CardBody className="p-8 md:p-12 relative">
                    {/* Header Icon */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#06C755] border-2 border-[#06C755]/10">
                            <Lock size={20} />
                        </div>
                    </div>

                    <div className="text-center mt-6 mb-8 space-y-2">
                        <h1 className="text-2xl font-bold text-[#1e293b]">สั่งซื้อ E-Book</h1>
                        <p className="text-[--pink] font-medium text-lg">&quot;ตัวจริงต้องมีที่ยืน&quot;</p>
                    </div>

                    {/* Price Box */}
                    <div className="bg-gray-50 rounded-2xl p-6 text-center mb-6 border border-gray-100">
                        <p className="text-gray-400 text-sm mb-1 line-through">ราคาปกติ {orderBump ? '1,680.-' : '1,290.-'}</p>
                        <div className="text-5xl font-bold text-[#06C755] mb-2">{totalPrice}.-</div>
                        <p className="text-xs text-gray-400">ชำระครั้งเดียว รับไฟล์ทันทีทางอีเมล</p>
                    </div>

                    {/* Order Bump Section */}
                    <div
                        className={`p-4 rounded-xl border-2 transition-colors cursor-pointer mb-8 relative ${orderBump ? 'border-[#06C755] bg-[#06C755]/5' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                        onClick={() => setOrderBump(!orderBump)}
                    >
                        <div className="absolute -top-3 right-4 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">
                            🔥 ข้อเสนอพิเศษ
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="mt-1">
                                <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${orderBump ? 'bg-[#06C755] border-[#06C755]' : 'border-gray-300 bg-gray-50'}`}>
                                    {orderBump && <CheckCircle2 size={14} className="text-white" />}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-sm text-gray-800 flex items-center gap-2 mb-1">
                                    <Headphones size={16} className={orderBump ? "text-[#06C755]" : "text-gray-500"} />
                                    รับ Audiobook ด้วยไหม?
                                </h4>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    ฟังเพลินๆ ระหว่างขับรถ ประหยัดเวลาอ่าน ในราคาเพียง <span className="text-[#06C755] font-bold">+150.-</span> (ปกติ 390.-) ติ๊กถูกเพื่อเพิ่มลงในออเดอร์
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="space-y-6">
                        <div className="space-y-2 text-left">
                            <label className="text-sm font-medium text-gray-600 block">
                                อีเมลสำหรับจัดส่งไฟล์ <span className="text-red-500">*</span>
                            </label>
                            <Input
                                type="email"
                                placeholder="name@example.com"
                                variant="bordered"
                                radius="lg"
                                size="lg"
                                classNames={{
                                    input: "bg-white",
                                    inputWrapper: "border-gray-200 hover:border-[#06C755] focus-within:!border-[#06C755] bg-white shadow-sm"
                                }}
                                value={email}
                                onValueChange={(val) => { setEmail(val); setErrorMsg('') }}
                                isInvalid={!!errorMsg}
                                errorMessage={errorMsg}
                            />
                        </div>

                        <Button
                            size="lg"
                            className="w-full bg-[#06C755] text-white font-bold text-lg rounded-full shadow-lg shadow-[#06C755]/20"
                            startContent={!isLoading && <CheckCircle2 size={20} />}
                            isLoading={isLoading}
                            onPress={handlePayment}
                        >
                            {isLoading ? 'กำลังดำเนินการ...' : 'ยืนยันการชำระเงิน'}
                        </Button>
                    </div>

                    {/* Footer Trust Badge */}
                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                            <Lock size={12} /> ปลอดภัยด้วยมาตรฐาน SSL 256-bit
                        </p>
                        {process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_OMISE_PUBLIC_KEY && (
                            <p className="text-xs text-red-400 mt-2">
                                (Dev: Missing Omise Public Key)
                            </p>
                        )}
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
