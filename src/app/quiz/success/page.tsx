'use client'
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/navigation'

export default function SuccessPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-800 font-sans">
      <div className="max-w-md w-full bg-white rounded-[32px] shadow-2xl p-10 text-center border border-slate-100">
        <div className="flex justify-center mb-8">
          {/* ไอคอนติ๊กถูกสีเขียวขนาดใหญ่ */}
          <div className="bg-green-100 p-4 rounded-full">
            <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">ชำระเงินเสร็จสิ้น!</h1>
        <p className="text-slate-600 mb-10 leading-relaxed font-medium">
          น้องได้ส่งไฟล์ **E-Book และผลวิเคราะห์** <br/>
          ไปให้ที่อีเมลของพี่เรียบร้อยแล้วนะคะ <br/>
          ยินดีที่ได้ร่วมงานกับ "ตัวจริง" ค่ะ
        </p>
        <button 
          onClick={() => router.push('/')}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95"
        >
          กลับสู่หน้าหลัก
        </button>
      </div>
    </div>
  )
}