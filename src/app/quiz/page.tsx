'use client'
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import { supabase } from '../service/supabase'
import { useRouter } from 'next/navigation'

export default function QuizPage() {
  const router = useRouter()

  const [questions, setQuestions] = useState<any[]>([])

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data, error } = await supabase
          .from('questions')
          .select('*')
          .order('order', { ascending: true })

        if (error) {
          console.error('Error fetching questions:', error)
          // Fallback or alert could go here
        } else if (data && data.length > 0) {
          setQuestions(data)
        }
      } catch (err) {
        console.error('Unexpected error fetching questions:', err)
      }
    }

    fetchQuestions()
  }, [])
  const [currentIndex, setCurrentIndex] = useState(-2)
  const [score, setScore] = useState(0)
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [regData, setRegData] = useState({
    nickname: '',
    email: '',
    role: '',
    pain_point: '',
    consent: false
  })
  const [password, setPassword] = useState('')
  const [authMode, setAuthMode] = useState<'register' | 'login'>('register')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [authError, setAuthError] = useState<string | null>(null)
  const [resetEmailSent, setResetEmailSent] = useState(false)
  const [isAuthLoading, setIsAuthLoading] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const savedEmail = window.localStorage.getItem('quizRegisteredEmail')
    if (savedEmail) {
      setAuthMode('login')
      setLoginEmail(savedEmail)
    }
  }, [])

  // --- Logic การคำนวณและแสดงผลลัพธ์ ---
  const getResultData = (totalScore: number) => {
    if (totalScore <= 35) return {
      title: "ตัวจริงที่หาทางกลับบ้านไม่เจอ",
      status: "สภาพแบรนด์: คุณกำลังใส่ชุดที่คนอื่นตัดให้ ยิ่งทำยิ่งเหนื่อย เพราะไม่ใช่เนื้อแท้ของตัวเอง",
      finding: "สิ่งที่เจอ: ยอดขายแกว่ง คอนเทนต์ไร้เสน่ห์ เพราะคุณพยายามเป็นคนอื่นที่ไม่ใช่คุณ",
      risk: "ความเสี่ยง: แบรนด์ไม่มีรากแก้ว ถ้าเทรนด์เปลี่ยนคุณจะหายไปเป็นคนแรก",
      sakit: "เลิกเป็นคนอื่นแล้วกลับมาเป็นตัวเองที่ทำเงินได้ใน E-book ตัวจริงต้องมีที่ยืน นะจ๊ะ",
      ctaLabel: "สั่งซื้อ E-Book เพื่อหาทางกลับบ้าน"
    }
    if (totalScore <= 50) return {
      title: "ตัวจริงในกรงขังสีทอง",
      status: "สภาพแบรนด์: ขายดี มีชื่อเสียง แต่ลึกๆ อึดอัด เพราะติดกับดักภาพจำจนไม่กล้าเปลี่ยน",
      finding: "สิ่งที่เจอ: ยิ่งสำเร็จยิ่งปลอม กลัวยอดตกจนต้องฝืนทำสิ่งที่ใจไม่ได้อินแล้ว",
      risk: "ความเสี่ยง: ไฟมอด (Burnout) เพราะเจ้าของแบรนด์หมดพลังชีวิตจากข้างใน",
      sakit: "อยากขยับออกจากกรงมาหาจุดที่ใช่กว่าเดิมไหม? มาคุยกันต่อใน Program เล่าเรื่องแบรนด์ นะ",
      ctaLabel: "สมัคร PROGRAM เล่าเรื่องแบรนด์"
    }
    if (totalScore <= 65) return {
      title: "ตัวจริงที่เริ่มมีที่ยืน",
      status: "สภาพแบรนด์: มาถูกทางแล้ว! คนเริ่มจำได้ว่าเรื่องนี้ต้องเป็นคุณ แต่ความชัดเจนยังไม่ 100%",
      finding: "สิ่งที่เจอ: มีลูกค้าที่รักคุณจริงๆ ทักมาบ้าง แต่คุณยังเขินที่จะโชว์ความเจ๋งออกมาทั้งหมด",
      risk: "ความเสี่ยง: เติบโตช้ากว่าที่ควรจะเป็น เพราะการสื่อสารยังไม่คมพอจะดึงดูดลูกค้าเกรด A",
      sakit: "อีกนิดเดียวจะถึงจุดที่หายใจก็เป็นเงิน! มาลับคมตัวตนใน E-book ตัวจริงต้องมีที่ยืน กันจ้ะ",
      ctaLabel: "สั่งซื้อ E-Book เพื่อลับคมตัวตน"
    }
    return {
      title: "ตัวจริงที่เป็นตำนาน (ในใจคน)",
      status: "สภาพแบรนด์: คุณคือแม่เหล็ก! แบรนด์กับตัวตนคือเรื่องเดียวกัน ลูกค้าซื้อความเชื่อของคุณ",
      finding: "สิ่งที่เจอ: ทำงานเหมือนไม่ได้ทำงาน คู่แข่งเลียนแบบไม่ได้เพราะไม่มี 'จิตวิญญาณ' แบบคุณ",
      risk: "ความเสี่ยง: การย่ำอยู่กับที่จนเผลอหยุดพัฒนาวิธีเล่าเรื่องให้ทันยุคสมัย",
      sakit: "ภูมิใจในตัวคุณมาก! ถ้าอยากขยายอาณาจักรตัวตนให้ทรงพลังกว่าเดิม เจอกันใน Program เล่าเรื่องแบรนด์ จ้ะ",
      ctaLabel: "ขยายอาณาจักรใน PROGRAM เล่าเรื่องแบรนด์"
    }
  }

  // --- ฟังก์ชันจัดการการชำระเงิน Omise (จุดที่ปรับปรุงตามที่บอก) ---
  const handleAnswer = (answerScore: number) => {
    setScore(score + answerScore)
    setCurrentIndex(currentIndex + 1)
  }

  //   const handlePayment = async (e?: React.MouseEvent) => {
  //     // 1. สำคัญมาก: ป้องกันไม่ให้หน้าเว็บรีเฟรชตัวเองตอนกดปุ่ม
  //     if (e) e.preventDefault();

  //     // โหลด Omise script ถ้ายังไม่มี
  //     if (!(window as any).OmiseCard) {
  //       const script = document.createElement('script');
  //       script.src = 'https://cdn.omise.co/omise.js';
  //       script.onload = () => {
  //         console.log('Omise script loaded successfully');
  //         proceedWithPayment();
  //       };
  //       script.onerror = () => {
  //         console.error('Failed to load Omise script');
  //         alert('ไม่สามารถโหลดระบบชำระเงินได้ กรุณาลองใหม่');
  //       };
  //       document.head.appendChild(script);
  //     } else {
  //       proceedWithPayment();
  //     }
  //   };

  //   const proceedWithPayment = () => {
  //     const { OmiseCard } = window as any;
  //     if (!OmiseCard) {
  //       alert('ระบบชำระเงินยังไม่พร้อมใช้งาน กรุณารอสักครู่แล้วลองใหม่');
  //       return;
  //     }

  //     OmiseCard.configure({
  //       publicKey: process.env.NEXT_PUBLIC_OMISE_PUBLIC_KEY,
  //       currency: 'thb',
  //       frameLabel: 'ชุ่มฉ่ำ Branding Payment',
  //       submitLabel: 'ยืนยันการชำระเงิน',
  //     });

  //     // 2. เรียกเปิดหน้าต่างกรอกบัตร (ตัวนี้จะเป็นหน้าแยกที่เด้งขึ้นมาให้เองครับ)
  //     OmiseCard.open({
  //       amount: 59900,
  //       onCreateTokenSuccess: async (token: string) => {
  //         try {
  //           const res = await fetch('/api/checkout', {
  //             method: 'POST',
  //             headers: {
  //               'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({
  //               email: regData.email || 'guest@example.com',
  //               amount: 599, // Amount in THB
  //               token: token,
  //             }),
  //           })

  //           const data = await res.json()

  //           if (data.success) {
  //             console.log('Payment successful:', data)
  //             router.push('/upsell')
  //           } else {
  //             alert('การชำระเงินไม่สำเร็จ: ' + (data.message || data.error))
  //           }
  //         } catch (err) {
  //           console.error('Payment error:', err)
  //           alert('เกิดข้อผิดพลาดในการชำระเงิน กรุณาลองใหม่')
  //         }
  //       },
  //       // ถ้าลูกค้ากดปิดหน้าต่างกรอกบัตร ไม่ต้องทำอะไร (จะยังอยู่ที่หน้าเดิม ไม่เด้งกลับไปลงทะเบียน)
  //       onCancel: () => {
  //         console.log("Customer closed the payment window");
  //       }
  //     });
  //   };

  const handleStartQuiz = async () => {
    setAuthError(null)
    setIsAuthLoading(true)
    console.log('Starting quiz with data:', regData)

    try {
      // สมัครสมาชิกด้วยอีเมล / รหัสผ่าน เพื่อใช้เข้าสู่ระบบครั้งถัดไป
      if (password.length < 6) {
        setAuthError('รหัสผ่านควรมีอย่างน้อย 6 ตัวอักษร')
        setIsAuthLoading(false)
        return
      }

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: regData.email,
        password,
        options: {
          data: {
            nickname: regData.nickname,
            role: regData.role,
            pain_point: regData.pain_point,
          },
        },
      })

      if (authError) {
        console.error('Error during sign up:', authError)
        setAuthError(authError.message)
        setIsAuthLoading(false)
        return
      }

      const { data, error } = await supabase
        .from('registrations')
        .insert([regData])
        .select()

      if (error) {
        console.error('Error saving registration:', error)
        if (error.code === '42P01') {
          alert('ฐานข้อมูลยังไม่ได้ตั้งค่า กรุณาติดต่อผู้ดูแลระบบเพื่อสร้างตาราง registrations')
        } else if (error.code === '42501') {
          alert('ไม่มีสิทธิ์เข้าถึงฐานข้อมูล กรุณาตรวจสอบการตั้งค่า RLS')
        } else {
          alert(`เกิดข้อผิดพลาดในการบันทึกข้อมูล: ${error.message}`)
        }
      } else {
        console.log('Registration saved successfully:', data)
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('quizRegisteredEmail', regData.email)
        }
        setCurrentIndex(-1)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่')
    } finally {
      setIsAuthLoading(false)
    }
  }

  const handleLogin = async () => {
    setAuthError(null)
    setResetEmailSent(false)
    setIsAuthLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      })

      if (error) {
        console.error('Error during login:', error)
        setAuthError(error.message)
        return
      }

      console.log('Login success:', data)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('quizRegisteredEmail', loginEmail)
      }
      setCurrentIndex(-1)
    } catch (err) {
      console.error('Unexpected login error:', err)
      setAuthError('เกิดข้อผิดพลาดในการเข้าสู่ระบบ กรุณาลองใหม่')
    } finally {
      setIsAuthLoading(false)
    }
  }

  const handleForgotPassword = async () => {
    setAuthError(null)
    setResetEmailSent(false)

    if (!loginEmail) {
      setAuthError('กรุณากรอกอีเมลก่อนกดลืมรหัสผ่าน')
      return
    }

    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(loginEmail, {
        redirectTo: typeof window !== 'undefined' ? `${window.location.origin}/quiz/reset-password` : undefined,
      })

      if (error) {
        console.error('Error sending reset email:', error)
        setAuthError(error.message)
        return
      }

      console.log('Reset password email sent:', data)
      setResetEmailSent(true)
    } catch (err) {
      console.error('Unexpected reset error:', err)
      setAuthError('ไม่สามารถส่งอีเมลรีเซ็ตรหัสผ่านได้ กรุณาลองใหม่')
    }
  }

  return (
    <div className="min-h-screen bg-[--dark-blue] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl hero min-h-[60vh] bg-slate-200 rounded-[40px] py-8 px-4 sm:px-10 shadow-xl relative overflow-hidden">
        <div className="w-48 h-48 bg-[#D33666] rounded-full absolute -top-16 -right-20 opacity-60" />
        <div className="w-64 h-64 bg-[#3C4297] rounded-full absolute -bottom-24 -left-24 opacity-50" />
        <div className="w-40 h-40 bg-[#17A78A] rounded-full absolute -top-10 -left-10 opacity-60" />

        <div className="relative z-10 flex flex-col items-center justify-center gap-8">
          {/* หน้าลงทะเบียน / เข้าสู่ระบบ */}
          {currentIndex === -2 && authMode === 'register' && (
            <div className="w-full max-w-xl bg-white/90 shadow-2xl rounded-[32px] border border-slate-200 p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-[--yellow] mb-4 italic">
                ลงทะเบียนก่อนเริ่ม Quiz แบรนด์คุณคือ "ตัวจริง" หรือแค่ "โชคดี"?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mb-6">
                ก่อนจะไปค้นหาคำตอบร่วมกัน... น้องฉ่ำรวบรวมข้อมูลเล็กน้อย เพื่อให้ผลลัพธ์ที่ได้
                <span className="text-[--pink] font-semibold"> ฉ่ำ </span>
                และตรงใจพี่ตัวจริงที่สุดนะคะ
              </p>
              <div className="space-y-4 text-left">
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">ชื่อเล่น :</label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[--green]"
                    placeholder="กรอกชื่อเล่นของคุณ"
                    value={regData.nickname}
                    onChange={(e) => setRegData({ ...regData, nickname: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">
                    อีเมลที่สะดวกให้ "น้องฉ่ำ" ส่งผลวิเคราะห์ & ของขวัญไปให้ 🎁 :
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[--green]"
                    placeholder="กรอกอีเมลที่ใช้งานจริงนะจ๊ะ (สำคัญมาก!)"
                    value={regData.email}
                    onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                  />
                  <p className="text-xs text-slate-500 mt-1">* ระบบจะส่งลิงก์ดาวน์โหลด E-Book และผลลัพธ์ไปที่อีเมลนี้ค่ะ</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">
                    รหัสผ่านสำหรับเข้าสู่ระบบครั้งถัดไป:
                  </label>
                  <input
                    type="password"
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[--green]"
                    placeholder="ตั้งรหัสผ่านอย่างน้อย 6 ตัวอักษร"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">
                    บทบาทปัจจุบันของพี่ตัวจริง:
                  </label>
                  <select
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[--green]"
                    value={regData.role}
                    onChange={(e) => setRegData({ ...regData, role: e.target.value })}
                  >
                    <option value="" disabled>
                      เลือกบทบาทของคุณ
                    </option>
                    <option value="เจ้าของธุรกิจ">เจ้าของธุรกิจ (Business Owner)</option>
                    <option value="ครีเอเตอร์">ครีเอเตอร์ (Creator / Influencer)</option>
                    <option value="ผู้เชี่ยวชาญ">ผู้เชี่ยวชาญ / โค้ช / ที่ปรึกษา (Expert / Coach)</option>
                    <option value="กำลังเตรียมตัว">กำลังเตรียมตัวเริ่มทำแบรนด์</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">
                    ความรู้สึกที่ "จี้ใจ" พี่ที่สุดในตอนนี้คือเรื่องไหนคะ?
                  </label>
                  <div className="space-y-2">
                    {[
                      'ทำได้ ขายได้ แต่เริ่มไม่แน่ใจว่าที่ทำอยู่...ใช่ตัวเองจริงไหม',
                      'เหนื่อยกับการวิ่งตามกระแส/อัลกอริทึม จนใจเริ่มหมดไฟ',
                      'คู่แข่งเยอะจนโดนกดราคา อยากสร้างความต่างแต่ไม่รู้จะเริ่มตรงไหน',
                      'มีของดีในมือ แต่สื่อสารออกไปให้คนเห็นคุณค่าไม่ได้สักที',
                    ].map((option, index) => (
                      <label key={index} className="flex items-start space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="pain_point"
                          className="mt-1 h-4 w-4 accent-[--green]"
                          value={option}
                          checked={regData.pain_point === option}
                          onChange={(e) => setRegData({ ...regData, pain_point: e.target.value })}
                        />
                        <span className="text-sm text-slate-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-[--green]"
                    checked={regData.consent}
                    onChange={(e) => setRegData({ ...regData, consent: e.target.checked })}
                  />
                  <span className="text-sm text-slate-700">
                    ✅ ข้าพเจ้ายินยอมให้เก็บข้อมูลส่วนบุคคลตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล
                  </span>
                </div>
                <p className="text-xs text-slate-500">เรารักษาข้อมูลส่วนตัวของคุณ</p>
                {authError && (
                  <p className="text-xs text-red-600 font-medium">{authError}</p>
                )}
                <button
                  className="w-full bg-[--green] text-white rounded-full py-3 px-6 font-semibold text-sm sm:text-base shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-150"
                  disabled={
                    !regData.nickname ||
                    !regData.email ||
                    !regData.role ||
                    !regData.pain_point ||
                    !regData.consent ||
                    password.length < 6 ||
                    isAuthLoading
                  }
                  onClick={handleStartQuiz}
                >
                  ไปค้นหาคำตอบร่วมกัน
                </button>
                <button
                  type="button"
                  className="w-full mt-3 rounded-full border border-slate-300 bg-white/80 py-2 text-xs sm:text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                  onClick={() => {
                    setAuthMode('login')
                    setAuthError(null)
                  }}
                >
                  เคยลงทะเบียนแล้ว? คลิกที่นี่เพื่อเข้าสู่ระบบ
                </button>
              </div>
            </div>
          )}

          {currentIndex === -2 && authMode === 'login' && (
            <div className="w-full max-w-xl bg-white/90 shadow-2xl rounded-[32px] border border-slate-200 p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-[--yellow] mb-4 italic">
                เข้าสู่ระบบเพื่อทำ Quiz ต่อ
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mb-6">
                ถ้าเคยลงทะเบียนแล้ว ใช้อีเมลและรหัสผ่านที่ตั้งไว้เพื่อลงชื่อเข้าใช้ค่ะ
              </p>
              <div className="space-y-4 text-left">
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">
                    อีเมล:
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[--green]"
                    placeholder="กรอกอีเมลของคุณ"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">
                    รหัสผ่าน:
                  </label>
                  <input
                    type="password"
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[--green]"
                    placeholder="กรอกรหัสผ่านของคุณ"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                {authError && (
                  <p className="text-xs text-red-600 font-medium">{authError}</p>
                )}
                {resetEmailSent && (
                  <p className="text-xs text-[--green] font-medium">
                    ระบบได้ส่งอีเมลสำหรับรีเซ็ตรหัสผ่านไปให้แล้ว กรุณาตรวจสอบกล่องอีเมลของคุณ
                  </p>
                )}
                <button
                  className="w-full bg-[--green] text-white rounded-full py-3 px-6 font-semibold text-sm sm:text-base shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-150"
                  disabled={!loginEmail || !loginPassword || isAuthLoading}
                  onClick={handleLogin}
                >
                  เข้าสู่ระบบเพื่อเริ่ม Quiz
                </button>
                <button
                  type="button"
                  className="w-full mt-2 text-xs sm:text-sm text-[--pink] font-semibold hover:underline"
                  onClick={handleForgotPassword}
                >
                  ลืมรหัสผ่าน?
                </button>
                <button
                  type="button"
                  className="w-full mt-3 rounded-full border border-slate-300 bg-white/80 py-2 text-xs sm:text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                  onClick={() => {
                    setAuthMode('register')
                    setAuthError(null)
                  }}
                >
                  ยังไม่เคยลงทะเบียน? คลิกที่นี่เพื่อลงทะเบียนใหม่
                </button>
              </div>
            </div>
          )}

          {/* หน้าคำถาม */}
          {currentIndex >= 0 && currentIndex < questions.length && (
            <div className="w-full max-w-xl bg-white/95 shadow-2xl rounded-[32px] border border-slate-200 p-6 sm:p-8 backdrop-blur-sm">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4 block">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 leading-snug text-slate-900">
                {questions[currentIndex].question_text}
              </h2>
              <div className="grid gap-3">
                {questions[currentIndex].options.map((opt: any, i: number) => (
                  <button
                    key={i}
                    className="w-full flex items-start justify-start gap-3 rounded-2xl border-2 border-[--green] bg-white/80 px-5 py-4 text-left text-sm sm:text-base text-slate-900 hover:bg-[--green] hover:text-white hover:-translate-y-0.5 transition-all duration-150"
                    onClick={() => handleAnswer(opt.score)}
                  >
                    <span className="mt-0.5 text-xs font-semibold opacity-70">
                      {String.fromCharCode(65 + i)}.
                    </span>
                    <span className="flex-1">{opt.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* หน้าสรุปผลพร้อมปุ่มจ่ายเงิน (เด้งหน้าต่าง Omise) */}
          {currentIndex >= questions.length && questions.length > 0 && (
            <div className="w-full max-w-md bg-white/95 shadow-2xl rounded-[32px] overflow-hidden border border-slate-200 backdrop-blur-sm">
              <div className="bg-[--pink] p-8 sm:p-10 text-white text-center">
                <h2 className="text-base sm:text-lg opacity-90 mb-2 italic">
                  ยินดีด้วยค่ะ พี่{regData.nickname}
                </h2>
                <p className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-[--yellow]">
                  {getResultData(score).title}
                </p>
              </div>
              <div className="p-8 text-center">
                <div className="text-5xl sm:text-6xl font-black text-[--green] mb-6">{score}</div>
                <p className="text-sm text-left mb-6 leading-relaxed text-slate-700 italic">
                  "{getResultData(score).status}"
                </p>
                <button
                  className="inline-flex items-center justify-center rounded-full border border-[--yellow] bg-white/90 px-5 py-2 text-sm font-semibold text-[--yellow] shadow-sm hover:bg-[--yellow] hover:text-white hover:-translate-y-0.5 transition-all duration-150 mb-6"
                  onClick={() => setShowAnalysis(!showAnalysis)}
                >
                  {showAnalysis ? 'ซ่อนผลวิเคราะห์' : 'ดูผลวิเคราะห์'}
                </button>
                {showAnalysis && (
                  <div className="bg-slate-100/80 border border-slate-200 p-5 rounded-2xl mb-8 text-left">
                    <p className="text-sm text-[--green] font-bold mb-2">สิ่งที่เจอ:</p>
                    <p className="text-sm text-slate-800 italic mb-4">"{getResultData(score).finding}"</p>
                    <p className="text-sm text-[#D33666] font-bold mb-2">ความเสี่ยง:</p>
                    <p className="text-sm text-slate-800 italic">"{getResultData(score).risk}"</p>
                  </div>
                )}
                <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-2xl mb-8">
                  <p className="text-xs text-yellow-800 font-bold italic mb-3">
                    "{getResultData(score).sakit}"
                  </p>
                  <div className="text-3xl font-black text-slate-900">ราคา 599.-</div>
                </div>
                <button
                  className="w-full bg-[--green] text-white rounded-full py-4 px-6 font-black text-base sm:text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-150"
                  onClick={() => router.push(`/checkout?email=${encodeURIComponent(regData.email)}`)}
                >
                  {getResultData(score).ctaLabel}
                </button>
              </div>
            </div>
          )}

          {/* หน้าก่อนเริ่ม Quiz */}
          {currentIndex === -1 && (
            <div className="w-full max-w-md bg-white/95 shadow-2xl p-8 sm:p-12 text-center rounded-[32px] border border-slate-200 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-black text-[--yellow] mb-4 italic">
                พร้อมหรือยังคะ?
              </h2>
              <p className="mb-8 text-slate-600 text-sm sm:text-base">
                ข้อมูลที่ได้จะช่วยให้น้องวิเคราะห์ตัวตนพี่ได้{' '}
                <span className="text-[--pink] font-semibold">ฉ่ำ</span> ที่สุดค่ะ
              </p>
              <button
                className="bg-[--green] text-white rounded-full px-8 py-3 font-semibold text-sm sm:text-base shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-150"
                onClick={() => setCurrentIndex(0)}
              >
                เริ่มทำ Quiz เลย
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}