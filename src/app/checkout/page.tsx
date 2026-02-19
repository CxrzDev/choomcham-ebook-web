'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Input } from '@nextui-org/react'
import { CheckCircle, Lock } from 'lucide-react'

export default function CheckoutPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const handlePayment = async (e?: React.MouseEvent) => {
        if (e) e.preventDefault();

        if (!email || !email.includes('@')) {
            alert('กรุณากรอกอีเมลให้ถูกต้องเพื่อรับไฟล์ E-Book');
            return;
        }

        setLoading(true);

        // Load Omise script if not present
        if (!(window as any).OmiseCard) {
            const script = document.createElement('script');
            script.src = 'https://cdn.omise.co/omise.js';
            script.onload = () => {
                proceedWithPayment();
            };
            script.onerror = () => {
                console.error('Failed to load Omise script');
                alert('ไม่สามารถโหลดระบบชำระเงินได้ กรุณาลองใหม่');
                setLoading(false);
            };
            document.head.appendChild(script);
        } else {
            proceedWithPayment();
        }
    };

    const proceedWithPayment = () => {
        const { OmiseCard } = window as any;
        if (!OmiseCard) {
            alert('ระบบชำระเงินยังไม่พร้อมใช้งาน กรุณารอสักครู่แล้วลองใหม่');
            setLoading(false);
            return;
        }

        OmiseCard.configure({
            publicKey: process.env.NEXT_PUBLIC_OMISE_PUBLIC_KEY,
            currency: 'thb',
            frameLabel: 'ชุ่มฉ่ำ Branding Payment',
            submitLabel: 'ชำระเงิน 599 THB',
        });

        OmiseCard.open({
            amount: 59900,
            onCreateTokenSuccess: async (token: string) => {
                try {
                    const res = await fetch('/api/checkout', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: email,
                            amount: 599,
                            token: token,
                        }),
                    })

                    const data = await res.json()

                    if (data.success) {
                        router.push('/upsell')
                    } else {
                        alert('การชำระเงินไม่สำเร็จ: ' + (data.message || data.error))
                        setLoading(false);
                    }
                } catch (err) {
                    console.error('Payment error:', err)
                    alert('เกิดข้อผิดพลาดในการชำระเงิน กรุณาลองใหม่')
                    setLoading(false);
                }
            },
            onCancel: () => {
                setLoading(false);
            }
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="w-96 h-96 bg-[--green] rounded-full absolute -top-20 -right-20 opacity-10 blur-3xl"></div>
                <div className="w-96 h-96 bg-[--pink] rounded-full absolute -bottom-20 -left-20 opacity-10 blur-3xl"></div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 max-w-md w-full text-center border border-slate-100 relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[--green]/10 text-[--green] mb-4">
                    <Lock size={24} />
                </div>

                <h1 className="text-2xl font-bold text-[--dark-blue] mb-2">สั่งซื้อ E-Book</h1>
                <h2 className="text-lg text-[--pink] font-bold mb-6">"ตัวจริงต้องมีที่ยืน"</h2>

                <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                    <div className="text-sm text-slate-500 mb-1">ราคาปกติ <span className="line-through">หลักแสน</span></div>
                    <div className="text-5xl font-black text-[--green] tracking-tight">599.-</div>
                    <div className="text-xs text-slate-400 mt-2">ชำระครั้งเดียว รับไฟล์ทันทีทางอีเมล</div>
                </div>

                <div className="space-y-4 text-left">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1 pl-1">
                            อีเมลสำหรับจัดส่งไฟล์ <span className="text-red-500">*</span>
                        </label>
                        <Input
                            type="email"
                            placeholder="name@example.com"
                            variant="bordered"
                            value={email}
                            onValueChange={setEmail}
                            classNames={{
                                inputWrapper: "border-slate-300 hover:border-[--green] focus-within:!border-[--green]",
                            }}
                        />
                    </div>

                    <Button
                        className="w-full bg-[--green] text-white font-bold text-lg shadow-lg hover:scale-[1.02] transition-transform"
                        size="lg"
                        radius="full"
                        isLoading={loading}
                        onClick={handlePayment}
                        startContent={!loading && <CheckCircle size={20} />}
                    >
                        ยืนยันการชำระเงิน
                    </Button>

                    <p className="text-xs text-slate-400 text-center mt-4">
                        ปลอดภัยด้วยมาตรฐาน SSL 256-bit
                    </p>
                </div>
            </div>
        </div>
    )
}
