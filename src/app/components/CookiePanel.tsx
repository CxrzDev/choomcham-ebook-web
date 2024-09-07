'use client'


import { Button, Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";



export default function CookiePanel() {

    const [onAccept, setAccept] = useState(false)

    useEffect(() => {
        const panel = document.getElementById('cookiepanel');
        document.documentElement.classList.add('light')
        if (localStorage.cookie == 'accept' || onAccept) {
            localStorage.cookie = 'accept'
            panel?.classList.add("hidden")
        } else {
            panel?.classList.remove("hidden")
            localStorage.clear()
        }

    }, [onAccept])

    return <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        className="fixed z-[999] bottom-5 right-5 hidden" id="cookiepanel">
        <Card className="w-[400px] ">
            <CardBody className="p-5">
                {/* <div className="w-50 flex justify-end"><img src="/images/cropped-logo.png" alt="" /></div> */}
                <div className="font-bold text-[--green] text-lg">เว็บไซต์นี้ใช้คุกกี้</div>
                <div>
                    เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพ และประสบการณ์ที่ดีในการใช้งานเว็บไซต์ คุณสามารถเลือกตั้งค่าความยินยอมการใช้คุกกี้ได้ โดยคลิก &quot;การตั้งค่าคุกกี้&quot;
                    <Link href="#"><span className="underline text-[--pink] ml-1"> นโยบายความเป็นส่วนตัว</span></Link>
                </div>
            </CardBody>
            <CardFooter className="flex justify-end gap-2 p-5">
                <Button variant="light" className="text-[--pink] underline">การตั้งค่าคุกกี้</Button>
                <Button onClick={e => setAccept(true)} className="bg-[--pink] text-white">ยอมรับทั้งหมด</Button>
            </CardFooter>
            {/* <div className="w-full pb-2 px-5">
                <img src="/images/cropped-logo.png" className="w-4" alt="choomcham logo icon" />
            </div> */}
        </Card>
    </motion.div>
}