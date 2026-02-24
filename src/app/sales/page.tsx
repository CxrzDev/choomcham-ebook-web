'use client'

import { motion } from 'framer-motion'
import Footer from '../components/footer'
import NavigationBar from '../components/NavigationBarMain'
import { Button, Card, CardBody, Link, Accordion, AccordionItem, Input } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { CheckCircle2, Star, ArrowRight, Lock, Sparkles, BookOpen, Zap, Heart } from 'lucide-react'
import { useState } from 'react'



export default function EbookPage() {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handlePayment = () => {
        setIsLoading(true)
        setTimeout(() => {
            alert('ระบบชำระเงินยังไม่เชื่อมต่อ (Demo Mode)\nEmail: ' + email)
            setIsLoading(false)
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-white selection:bg-[--pink] selection:text-white">
            <div className="text-white fixed z-50 w-full duration-200" id="scroll_nav">
                <NavigationBar current="ebook" />
            </div>

            {/* Hero Section */}
            <section className="bg-[--dark-blue] pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[--pink] rounded-full opacity-10 blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[--green] rounded-full opacity-10 blur-[100px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[--yellow] rounded-full opacity-5 blur-[150px]"></div>

                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-white/80 text-sm"
                        >
                            <Star size={14} className="text-[--yellow] fill-current" />
                            Best Selling Digital Book 2024
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight"
                        >
                            คัมภีร์สร้างแบรนด์<br />
                            <span className="text-[--yellow] underline decoration-[--yellow]/30 underline-offset-8">
                                &quot;ตัวจริงต้องมีที่ยืน&quot;
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-xl font-light leading-relaxed"
                        >
                            เปลี่ยนคุณจาก &quot;คนเก่งที่โลกลืม&quot; ให้กลายเป็น
                            &quot;ตำนานที่ใครก็แทนไม่ได้&quot;
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
                        >
                            <Button
                                as={Link}
                                href="#buy-section"
                                size="lg"
                                className="bg-[--green] text-white font-bold text-lg sm:text-xl px-10 py-8 shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all duration-300"
                                radius="full"
                                endContent={<ArrowRight size={20} />}
                            >
                                สั่งซื้อเพียง 599.-
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-3 justify-center lg:justify-start text-white/50 text-sm"
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[--dark-blue] bg-white/20 flex items-center justify-center text-[10px]">👤</div>
                                ))}
                            </div>
                            <span>ผู้อ่านกว่า 2,400+ คนทั่วประเทศ</span>
                        </motion.div>
                    </div>

                    <div className="flex-1 flex justify-center relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full max-w-[380px] group"
                        >
                            <Image
                                src="/images/sticker6.png"
                                alt="E-Book Cover"
                                className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)] transform rotate-1 group-hover:rotate-0 transition-transform duration-500"
                                removeWrapper
                            />
                            <div className="absolute top-2 right-2 bg-[--pink] text-white px-4 py-1.5 rounded-full font-bold text-base shadow-lg -rotate-12">
                                ลด 55%
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-20 px-4 sm:px-6 bg-slate-100/40">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[--dark-blue] mb-4">
                            ทำไมต้องอ่านเล่มนี้?
                        </h2>
                        <div className="w-20 h-1.5 bg-[--yellow] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                icon: <Zap size={40} className="text-[--pink]" />,
                                title: "หยุดลดราคา",
                                desc: "เลิกแข่งกันที่ความถูก ให้คนจำคุณได้ที่ความต่างและคุณค่าที่คู่แข่งเลียนแบบไม่ได้"
                            },
                            {
                                icon: <Sparkles size={40} className="text-[--green]" />,
                                title: "สร้างตัวตนที่ยั่งยืน",
                                desc: "เปลี่ยนจากแบรนด์ที่คนแค่เห็นผ่านตา เป็นแบรนด์อันดับ 1 ในใจลูกค้าเสมอ"
                            },
                            {
                                icon: <Heart size={40} className="text-[--yellow]" />,
                                title: "เพิ่มมูลค่าธุรกิจ",
                                desc: "เมื่อแบรนด์ชัด คุณจะกำหนดราคาที่เหมาะสมกับคุณค่าที่คุณมอบให้ลูกค้าจริงๆ"
                            }
                        ].map((item, idx) => (
                            <Card key={idx} className="w-full shadow-xl bg-white hover:-translate-y-2 duration-300 border border-slate-100">
                                <CardBody className="p-8">
                                    <div className="mb-5">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-[--dark-blue] mb-3">{item.title}</h3>
                                    <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-center">
                    <div className="flex-1 space-y-8">
                        <div>
                            <div className="text-[--yellow] font-bold text-lg mb-2">เนื้อหาที่คุณจะได้รับ</div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[--dark-blue] leading-tight">
                                7 พิกัด<br />
                                <span className="text-[--pink]">พาแบรนด์สู่ตำนาน</span>
                            </h2>
                        </div>
                        <ul className="space-y-5">
                            {[
                                "The Displacement Reality: ทำไมคนเก่งถึงไร้ที่ยืน",
                                "Positioning Matrix: วิธีวางตำแหน่งเป็นเบอร์หนึ่ง",
                                "Top of Mind Shortcut: ทางลัดสร้างภาพจำ",
                                "Emotional Connection: สร้างความผูกพันที่ตัดไม่ขาด"
                            ].map((point, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="bg-[--green] p-1 rounded-full mt-0.5 shrink-0">
                                        <CheckCircle2 size={20} className="text-white" />
                                    </div>
                                    <span className="text-gray-600 text-base sm:text-lg">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <Accordion variant="splitted" className="text-black">
                            <AccordionItem key="1" title={<span className="font-bold text-lg text-[--dark-blue]">บทที่ 1: ทำไมต้องมีที่ยืน?</span>}>
                                <p className="text-gray-600 pb-4">เจาะลึกวิกฤต Identity Crisis และกลยุทธ์ทางรอดของแบรนด์</p>
                            </AccordionItem>
                            <AccordionItem key="2" title={<span className="font-bold text-lg text-[--dark-blue]">บทที่ 2: ค้นหา DNA ของคุณ</span>}>
                                <p className="text-gray-600 pb-4">Workshop ดึงจุดแข็งที่คุณมี และคู่แข่งเลียนแบบไม่ได้</p>
                            </AccordionItem>
                            <AccordionItem key="3" title={<span className="font-bold text-lg text-[--dark-blue]">บทที่ 3: พลังของ Storytelling</span>}>
                                <p className="text-gray-600 pb-4">วิธีเล่าเรื่องให้เข้าถึงหัวใจคน เปลี่ยนลูกค้าเป็นแฟนพันธุ์แท้</p>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-4 sm:px-6 bg-slate-100/40">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="text-[--yellow] font-bold text-lg mb-2">รีวิวจากผู้อ่าน</div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[--dark-blue] mb-3">เสียงจากผู้อ่านบางส่วน</h2>
                        <p className="text-gray-600">ผลลัพธ์จากผู้อ่านที่นำไปใช้จริง</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { name: "คุณพลอย", role: "CEO MADAMFIN", text: "อ่านจบแล้วเหมือนได้ปลดล็อคตัวเอง เข้าใจเลยว่าที่ผ่านมาทำไมขายยาก พอปรับตามคำแนะนำในเล่ม ยอดขายเริ่มขยับขึ้นแบบธรรมชาติมากค่ะ" },
                            { name: "คุณม่อน", role: "Producer อายุน้อยร้อยล้าน", text: "เนื้อหากระชับ อ่านง่าย เอาไปใช้ได้จริง ไม่ใช่แค่น้ำท่วมทุ่ง แนะนำสำหรับคนที่อยากสร้าง Personal Brand ครับ" }
                        ].map((t, i) => (
                            <Card key={i} className="w-full shadow-xl bg-white border border-slate-100">
                                <CardBody className="p-8">
                                    <div className="flex text-[--yellow] mb-4 gap-0.5">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} fill="currentColor" />)}
                                    </div>
                                    <p className="text-gray-600 mb-6 text-base leading-relaxed italic">&quot;{t.text}&quot;</p>
                                    <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                                        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[--pink] to-[--yellow] flex items-center justify-center font-bold text-white text-lg">{t.name[0]}</div>
                                        <div>
                                            <div className="font-bold text-[--dark-blue]">{t.name}</div>
                                            <div className="text-sm text-gray-500">{t.role}</div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[--dark-blue] mb-3">
                            ขั้นตอนการสั่งซื้อ
                        </h2>
                        <p className="text-gray-600 max-w-lg mx-auto">
                            รับคัมภีร์สร้างแบรนด์ได้ง่ายๆ ใน 3 ขั้นตอน
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px border-t-2 border-dashed border-slate-200 z-0"></div>

                        {[
                            { step: "1", title: "คลิกปุ่มสั่งซื้อ", desc: "เลือกแพ็กเกจที่ต้องการ", icon: "🖱️" },
                            { step: "2", title: "กรอกข้อมูลชำระเงิน", desc: "ระบุอีเมลและชำระผ่าน QR หรือบัตร", icon: "💳" },
                            { step: "3", title: "รับไฟล์ทันที", desc: "ระบบส่งไฟล์ E-Book ทางอีเมลทันที", icon: "📩" }
                        ].map((item, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-32 h-32 mb-6 bg-white rounded-3xl shadow-md border border-slate-100 flex items-center justify-center text-5xl hover:-translate-y-2 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <div className="text-[--green] font-bold text-sm mb-2 tracking-wider">ขั้นตอนที่ {item.step}</div>
                                <h3 className="text-lg font-bold text-[--dark-blue] mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-base">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Checkout Section */}
            <section id="buy-section" className="py-20 px-4 sm:px-6 bg-[--dark-blue] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[--pink] rounded-full opacity-10 blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[--green] rounded-full opacity-10 blur-[100px]"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row gap-14 items-center">

                        <div className="flex-1 text-white space-y-8">
                            <div className="inline-flex items-center gap-2 bg-[--yellow]/20 border border-[--yellow]/30 text-[--yellow] px-5 py-2 rounded-full text-sm font-bold">
                                <Sparkles size={16} />
                                โปรโมชั่นพิเศษ
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                                เริ่มสร้าง<br />
                                <span className="text-[--yellow]">ตัวจริง</span> ของคุณ
                            </h2>
                            <p className="text-white/60 text-lg sm:text-xl leading-relaxed">
                                ราคาปกติ 1,290.- รับส่วนลดพิเศษวันนี้เพียง 599.-<br />
                                พร้อมสิทธิ์อัปเดตเนื้อหาตลอดชีพ
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { text: "ไฟล์ PDF คุณภาพสูง", icon: <BookOpen size={20} /> },
                                    { text: "Branding Worksheet", icon: <Sparkles size={20} /> },
                                    { text: "อัปเดตเนื้อหาตลอดชีพ", icon: <Zap size={20} /> },
                                    { text: "ส่งทางอีเมลทันที", icon: <ArrowRight size={20} /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
                                        <div className="text-[--green]">{item.icon}</div>
                                        <span className="text-white/80 font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full max-w-[460px]">
                            <Card className="bg-white shadow-2xl rounded-3xl overflow-visible">
                                <CardBody className="p-8 sm:p-10 space-y-6">
                                    <div className="text-center space-y-1">
                                        <div className="flex items-center justify-center gap-2 text-[--dark-blue]">
                                            <Lock size={18} />
                                            <h3 className="text-2xl font-bold text-[--dark-blue]">ชำระเงินปลอดภัย</h3>
                                        </div>
                                        <p className="text-gray-400 text-sm">ดำเนินการโดยระบบมาตรฐานสากล</p>
                                    </div>

                                    {/* Price Display */}
                                    <div className="bg-gradient-to-br from-[--dark-blue] to-[#2d3270] p-8 rounded-2xl text-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-[--yellow]/10 rounded-full blur-2xl"></div>
                                        <div className="text-white/40 text-sm line-through mb-1">1,290 บาท</div>
                                        <div className="text-5xl sm:text-6xl font-bold text-white">599<span className="text-xl ml-1 text-white/50">.-</span></div>
                                        <div className="text-[--yellow] font-bold text-sm mt-3">ราคาพิเศษวันนี้เท่านั้น</div>
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-4">
                                        <Input
                                            type="email"
                                            label="อีเมลสำหรับรับไฟล์"
                                            placeholder="your@email.com"
                                            variant="bordered"
                                            labelPlacement="outside"
                                            radius="lg"
                                            size="lg"
                                            classNames={{
                                                label: "text-[--dark-blue] font-bold text-sm pb-1",
                                                input: "text-base placeholder:text-slate-300",
                                                inputWrapper: "bg-slate-50 hover:bg-white border-slate-200 hover:border-[--dark-blue] transition-all h-14",
                                            }}
                                            value={email}
                                            onValueChange={setEmail}
                                        />
                                    </div>

                                    {/* CTA Button */}
                                    <Button
                                        size="lg"
                                        className="w-full bg-[--green] text-white font-bold text-xl h-16 rounded-2xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                                        isLoading={isLoading}
                                        onPress={handlePayment}
                                    >
                                        {isLoading ? 'กำลังดำเนินการ...' : 'สั่งซื้อทันที'}
                                    </Button>

                                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                                        <Lock size={12} />
                                        <span>ระบบชำระเงินปลอดภัย 256-bit SSL</span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 bg-[--green] text-center text-white px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">สร้างแบรนด์ให้คนรัก<br />ในแบบที่คุณ…เป็นคุณ</h2>
                    <p className="text-xl opacity-90 font-light">เติบโตเร็วกว่า ยั่งยืนกว่า มีความสุขกว่า</p>
                </div>
            </section>

            <Footer />
        </div>
    )
}
