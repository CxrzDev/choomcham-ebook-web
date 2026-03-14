'use client'
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import { supabase } from '../service/supabase'
import NextImage from 'next/image'
import { useRouter } from 'next/navigation'

export default function QuizPage() {
  const router = useRouter()

  const [questions, setQuestions] = useState<any[]>([])

  useEffect(() => {
    const hardcodedQuestions = [
      "ฉันอธิบายได้ชัดว่าแบรนด์ของฉันทำอะไร และยืนอยู่บนความเชื่อแบบไหน",
      "ฉันสรุปจุดเด่นแบรนด์ได้ใน 1 ประโยค โดยไม่ต้องใช้คำทั่วไปอย่าง ดี/ถูก/เร็ว",
      "เวลาออกหน้ากล้องหรือสื่อสารกับลูกค้า ฉันเป็นตัวเองเต็มที่ ไม่รู้สึกฝืน",
      "หากวันหนึ่งเปลี่ยนแนวทางธุรกิจ คนจะยังจำฉันได้จาก “วิธีคิด” ไม่ใช่แค่สินค้า",
      "ถ้าหยุดยิงโฆษณา 30 วัน ยังมีลูกค้าทักเข้ามาเอง",
      "ลูกค้าส่วนใหญ่ไม่ได้เริ่มบทสนทนาด้วยคำถามเรื่องราคา",
      "ต่อให้ไม่มีโลโก้ คนก็จำสไตล์/น้ำเสียงของฉันได้",
      "ฉันไม่เหนื่อยกับการคิดคอนเทนต์ เพราะมันไหลจากสิ่งที่ฉันเชื่อจริงๆ",
      "เช้าวันจันทร์ ฉันรู้สึกดีที่ได้ตื่นมาทำแบรนด์ตัวเอง",
      "คำชมที่ทำให้ฉันภูมิใจที่สุด คือคำชมเรื่องแนวคิดและตัวตน",
      "การเล่าเรื่องเดิมซ้ำๆ ยังรู้สึกมีความหมาย ไม่ใช่ภาระ",
      "ทีมงานหรือแอดมินสามารถสื่อสารแทนฉันได้ในโทนเดียวกันอย่างเป็นธรรมชาติ",
      "ฉันไม่หวั่นไหวเมื่อมีคู่แข่งใหม่ที่ภาพสวยกว่า/เด็กกว่า",
      "ถ้าต้องทำธุรกิจแบบนี้ต่ออีก 3 ปี ฉันยังมีพลัง",
      "ฉันมั่นใจพอจะขึ้นราคา เพราะรู้ว่าคุณค่าที่ให้มันเกินราคา",
      "ถ้าฉันหยุดทำงาน 6 เดือน แบรนด์ยังเดินต่อได้",
      "แบรนด์นี้ส่งเสริมชีวิตฉัน มากกว่าแย่งพลังชีวิต",
      "ทีมงานเห็นภาพอนาคตร่วมกันอย่างชัดเจน",
      "ถ้ามีเงิน 30 ล้านในบัญชี ฉันก็ยังอยากทำแบรนด์นี้ต่อ",
      "ฉันเชื่อว่าความสำเร็จวันนี้มาจากตัวตนที่ชัดเจน ไม่ใช่แค่โชคดี"
    ].map((q, i) => ({
      order: i + 1,
      question_text: q,
      options: [
        { text: "ไม่จริงเลย", score: 1 },
        { text: "ค่อนข้างไม่จริง", score: 2 },
        { text: "กลางๆ", score: 3 },
        { text: "ค่อนข้างจริง", score: 4 },
        { text: "จริงที่สุด", score: 5 },
      ]
    }));
    setQuestions(hardcodedQuestions);
  }, [])
  const [currentIndex, setCurrentIndex] = useState(-2)
  const [selectedScores, setSelectedScores] = useState<number[]>([])
  const score = selectedScores.reduce((acc, s) => acc + s, 0)
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

  // --- ระบบเลเวล (หมวดหมู่คำถาม) ---
  const levels = [
    { name: 'Identity & Soul', label: 'ตัวตนและจิตวิญญาณ', icon: '🧬', color: 'bg-[--pink]', start: 0, end: 4 },
    { name: 'Message & Magnetic Power', label: 'พลังดึงดูดและสาร', icon: '🧲', color: 'bg-[--green]', start: 5, end: 9 },
    { name: 'Inner State & Consistency', label: 'สภาวะภายในและความสม่ำเสมอ', icon: '🔥', color: 'bg-[--yellow]', start: 10, end: 14 },
    { name: 'Future & Sustainability', label: 'อนาคตและความยั่งยืน', icon: '🚀', color: 'bg-[--dark-blue]', start: 15, end: 19 },
  ]

  const getCurrentLevel = (idx: number) => {
    return levels.find(l => idx >= l.start && idx <= l.end) || levels[0]
  }

  const getCurrentLevelIndex = (idx: number) => {
    return levels.findIndex(l => idx >= l.start && idx <= l.end)
  }

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
    if (totalScore <= 39) return {
      title: "วิกฤต: ตัวจริงที่หลงทาง",
      status: "วิกฤต! หลงทางในสูตรสำเร็จจนเสียความเป็นตัวเอง ยอดขายพอมีแต่เหนื่อยและอึดอัดมากค่ะ",
      finding: "สุขภาพแบรนด์อ่อนแอขั้นรุนแรง... เพราะพี่กำลังรันธุรกิจด้วยลมหายใจของคนอื่นค่ะ พี่กำลังฝืนใส่ชุดที่คนอื่นตัดให้ วิ่งตามสูตรสำเร็จจนแบรนด์กลายเป็นเพียง 'เงา' ของคู่แข่ง พี่เก่งในการทำตามระบบที่คนอื่นบอกว่าดี แต่กลับเคว้งควางเมื่อต้องเล่าเรื่องที่เป็นเนื้อแท้ของตัวเองจริงๆ ค่ะ",
      risk: "แบรนด์พี่กำลังกลายเป็น 'ของที่หาซื้อที่ไหนก็ได้' ค่ะ ใครถูกกว่าเขาก็ไปเจ้านั้น วันไหนที่พี่หยุดยิงแอด หรือมีคนใหม่ที่สดกว่าโผล่มา พี่จะถูกเบียดออกจากหน้าฟีดทันที เพราะแบรนด์พี่ไม่มี 'รากแก้ว' ที่ยึดใจคนไว้ และไม่มีภูมิคุ้มกันต่อการเปลี่ยนแปลงของตลาดเลยนะคะ",
      sakit: "หยุดวิ่งตามคนอื่น แล้วกลับมากู้ตัวตนเพื่อสร้างที่ยืนของตัวเองด่วนค่ะ ต้องหยุดวิ่งตามตลาด แล้วกลับมาสร้างรากแก้วจากตัวตนที่แท้จริงของพี่เอง เพื่อสร้างภูมิคุ้มกันระยะยาวค่ะ น้องฉ่ำแนะนำ: E-book ตัวจริงต้องมีที่ยืน เพื่อให้พี่กลับมาตั้งหลัก ค้นหาเนื้อแท้ และใช้เป็นแผนที่ในการสร้างที่ยืนที่ไม่มีใครมาแทนที่พี่ได้ค่ะ",
      ctaLabel: "รับ E-book ตัวจริงต้องมีที่ยืน"
    }
    if (totalScore <= 59) return {
      title: "เฝ้าระวัง: ตัวจริงในกรงสีทอง",
      status: "เฝ้าระวัง! ติดกับดักภาพจำจนไม่กล้าขยับไปทำสิ่งที่รักจริงๆ ค่ะ",
      finding: "สุขภาพภายนอกดูดี แต่ข้างในเริ่มอักเสบ... พี่กำลังสำเร็จในแบบที่คนอื่นอยากให้เป็น แต่ไม่ใช่สิ่งที่พี่อยากทำจริง ๆ ค่ะ น้องฉ่ำวินิจฉัยอาการพี่ออกมาว่า 'ติดกับดักภาพจำ' ค่ะ พี่สร้างแบรนด์จนมีชื่อเสียง มีรายได้ แต่พี่กลับอึดอัดเหมือน 'สวมหน้ากาก' ออกไปทำงานทุกวัน",
      risk: "ถ้าพี่ฝืนรักษาระดับความสำเร็จด้วยหน้ากากนี้ไปเรื่อย ๆ พี่จะเจอภาวะ 'อักเสบเรื้อรังทางใจ' ค่ะ วันหนึ่งพี่จะทิ้งทุกอย่างแบบหักดิบเพราะทนความอึดอัดไม่ไหว แบรนด์จะพังทลายเพราะเจ้าของหมดไฟที่จะเดินต่อค่ะ",
      sakit: "รื้อกรงทองทิ้ง แล้วสร้างอาณาจักรที่สำเร็จแบบเป็นตัวเอง 100% ค่ะ ต้องวางโครงสร้างแบรนด์ใหม่ให้สะท้อนคุณค่าข้างใน เพื่อให้ธุรกิจรันต่อได้โดยที่พี่ไม่ต้องฝืนค่ะ น้องฉ่ำแนะนำ: คอร์สออนไลน์สร้างแบรนด์ให้มีคุณค่าใน 120 วัน หรือ เวิร์คชอปอบรมทีมผ่านออนไลน์ เพื่อ Transform ระบบแบรนด์ให้ชัดเจน จนพี่กลายเป็นอิสระและมีความสุขกับความสำเร็จที่แท้จริงค่ะ",
      ctaLabel: "รับคำแนะนำคอร์สสร้างแบรนด์"
    }
    if (totalScore <= 79) return {
      title: "แข็งแรง: ตัวจริงที่เริ่มมีพลังแม่เหล็ก",
      status: "แข็งแรง! ออร่าจับแล้ว แต่การสื่อสารยังกั๊กพลัง ทำให้ดึงดูดลูกค้าเกรด A ได้ไม่สุดค่ะ",
      finding: "สุขภาพดีเยี่ยมแต่ออร่ายังติดพลาสติก... พี่มีของดีในมือ แต่ยังสื่อสารให้ดูแพงได้ไม่สุดค่ะ พี่เริ่มหาที่ยืนเจอแล้ว และคนเริ่มจำแก่นแท้ของพี่ได้ แต่ผลการตรวจพบว่า 'การสื่อสารยังกั๊กพลัง' ค่ะ พี่มักจะเผลอใช้ภาษากลาง ๆ หรือวิธีนำเสนอแบบเซฟโซน ทำให้เสน่ห์ที่ควรจะพุ่งกระจายถูกบีบเอาไว้แค่ในวงแคบ ๆ ค่ะ",
      risk: "ถ้าพี่ไม่รีบ 'ขีดเส้นใต้' จุดยืนให้ชัด ออร่าที่กำลังมาจะจางลงค่ะ พี่จะติดอยู่ในระดับที่ 'เกือบจะปัง' แต่ไปไม่ถึงจุดที่เป็นแม่เหล็กดึงดูดความมั่งคั่ง เพราะความเกรงใจตลาดของพี่เองค่ะ",
      sakit: "ลับอาวุธการเล่าเรื่องให้พุ่งชนใจลูกค้าแบบไม่ต้องพยายามค่ะ ต้องลับคมการเล่าเรื่อง (Storytelling) ให้ดูแพงและมีระดับขึ้นหลายเท่าตัวค่ะ น้องฉ่ำแนะนำ: คอร์สออนไลน์เล่าเรื่อง 3 นาทีให้มียอดขาย เพื่อเปลี่ยนจากคน 'ขายดี' ให้กลายเป็นคน 'ขายแพง' ด้วยเสน่ห์เฉพาะตัวที่ไม่มีใครก๊อปปี้ได้ค่ะ",
      ctaLabel: "คอร์สเล่าเรื่องให้มียอดขาย"
    }
    return {
      title: "สมบูรณ์แบบ: ตัวจริงที่เป็นตำนาน",
      status: "สมบูรณ์แบบ! สวย สง่า และทรงพลัง พี่คือ Iconic ที่ใครก็เลียนแบบไม่ได้แล้วค่ะ",
      finding: "สุขภาพแบรนด์ระดับอุดมคติ... พี่ไม่ได้ขายแค่สินค้า แต่พี่กำลังขายความเชื่อที่คนอยากเดินตามค่ะ พี่คือตัวอย่างของแบรนด์ที่มีจิตวิญญาณอย่างสมบูรณ์แบบ แบรนด์กับตัวตนของพี่หลอมรวมเป็นเนื้อเดียวกันจนแยกไม่ออก พี่ไม่ต้องวิ่งไล่ตามใคร เพราะพี่คือแม่เหล็กที่ทรงพลังที่สุดในตลาดนี้แล้วค่ะ",
      risk: "ถ้าพี่ละเลยการวางกลยุทธ์ระยะยาว ความเป็นตำนานอาจจะค่อย ๆ จางไปตามกาลเวลาค่ะ พี่ต้องเปลี่ยนจาก 'คนดัง' ให้กลายเป็น 'สถาบัน' ที่แข็งแรงแม้ในวันที่พี่ไม่อยู่คุมงานเองค่ะ",
      sakit: "วางรากฐานตำนานระยะยาว เพื่อขยายอาณาจักรความฉ่ำให้ไร้ขีดจำกัดค่ะ การรักษามาตรฐานระดับพรีเมียมและการขยาย Legacy ให้ยั่งยืนโดยไม่หยุดนิ่งค่ะ น้องฉ่ำแนะนำ: Brand Diagnosis 1:1 เพื่อวางกลยุทธ์ระดับสูงแบบเจาะลึกรายบุคคล ให้แบรนด์ของพี่มั่นคงและสง่างามไปตลอดกาลค่ะ",
      ctaLabel: "Brand Diagnosis 1:1"
    }
  }

  const [isTransitioning, setIsTransitioning] = useState(false)

  // --- ฟังก์ชันจัดการการชำระเงิน Omise (จุดที่ปรับปรุงตามที่บอก) ---
  const handleAnswer = (answerScore: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    
    setSelectedScores((prev) => [...prev, answerScore])
    
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
      setIsTransitioning(false)
    }, 300)
  }

  const handleBack = () => {
    if (currentIndex > 0) {
      const newScores = [...selectedScores]
      newScores.pop()
      setSelectedScores(newScores)
      setCurrentIndex(currentIndex - 1)
    } else if (currentIndex === 0) {
      setCurrentIndex(-1)
    }
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
      if (password.length < 6) {
        setAuthError('รหัสผ่านควรมีอย่างน้อย 6 ตัวอักษร')
        setIsAuthLoading(false)
        return
      }

      // Create a timeout promise
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timed out')), 8000)
      )

      // Race between Supabase calls and timeout
      await Promise.race([
        (async () => {
          // 1. Sign Up
          const { error: authError } = await supabase.auth.signUp({
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

          if (authError) throw authError

          // 2. Insert Registration Data
          const { error: dbError } = await supabase
            .from('registrations')
            .insert([{
              nickname: regData.nickname,
              email: regData.email,
              role: regData.role,
              pain_point: regData.pain_point
            }])
          
          if (dbError) throw dbError
        })(),
        timeoutPromise
      ])
      
      // Success
      console.log('Registration success')
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('quizRegisteredEmail', regData.email)
      }
      setCurrentIndex(-1)

    } catch (err: any) {
      console.error('Error or Timeout during registration:', err)
      // Unified Fallback: เข้าสู่ Offline Mode ทันที
      console.warn('Proceeding in offline mode due to error')
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('quizRegisteredEmail', regData.email)
        window.localStorage.setItem('quizUserData', JSON.stringify(regData))
      }
      setCurrentIndex(-1)
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
        // Fallback: ถ้า Login กับ Supabase ไม่ผ่าน ให้เช็คใน localStorage แทน (กรณี Offline Mode)
        if (typeof window !== 'undefined') {
          const localEmail = window.localStorage.getItem('quizRegisteredEmail')
          if (localEmail === loginEmail) {
            console.log('Login success (Offline Mode)')
            setCurrentIndex(-1)
            setIsAuthLoading(false)
            return
          }
        }
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
    <div className="min-h-screen bg-[--dark-blue] flex items-center justify-center px-4 py-6 sm:py-10">
      <div className="w-full max-w-4xl min-h-[60vh] bg-slate-200 rounded-[24px] sm:rounded-[40px] py-6 px-4 sm:px-10 shadow-xl relative overflow-hidden">
        <div className="w-32 h-32 sm:w-48 sm:h-48 bg-[#D33666] rounded-full absolute -top-10 -right-10 sm:-top-16 sm:-right-20 opacity-60" />
        <div className="w-48 h-48 sm:w-64 sm:h-64 bg-[#3C4297] rounded-full absolute -bottom-16 -left-16 sm:-bottom-24 sm:-left-24 opacity-50" />
        <div className="w-24 h-24 sm:w-40 sm:h-40 bg-[#17A78A] rounded-full absolute -top-5 -left-5 sm:-top-10 sm:-left-10 opacity-60" />

        <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8">
          {/* หน้าลงทะเบียน / เข้าสู่ระบบ */}
          {currentIndex === -2 && authMode === 'register' && (
            <div className="w-full max-w-xl bg-white/90 shadow-2xl rounded-[24px] sm:rounded-[32px] border border-slate-200 p-5 sm:p-8 backdrop-blur-sm relative overflow-visible">
              <div className="flex justify-center -mt-12 sm:-mt-16 mb-4">
                <div className="bg-white p-2 sm:p-3 rounded-3xl shadow-lg border-2 border-[--yellow]">
                  <NextImage
                    src="/images/logo-clean.svg"
                    alt="Choomcham Logo"
                    width={150}
                    height={150}
                    unoptimized
                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                  />
                </div>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-center text-[--yellow] mb-3 sm:mb-4 italic px-2">
                Quiz: Brand DNA Check: แบรนด์คุณแข็งแรงระดับไหน?
              </h2>
              <p className="text-center text-[--pink] font-bold mb-2">
                90% ของเจ้าของธุรกิจล้มเหลวเพราะข้อนี้... คุณเป็น 1 ใน 10 คนที่รอดไหม?
              </p>
              <p className="text-sm sm:text-base text-slate-700 mb-6">
                เพื่อความแม่นยำในการวิเคราะห์ น้องฉ่ำขอรวบรวมข้อมูลเบื้องต้นสักครู่
                เพื่อให้ผลลัพธ์ที่ได้ <span className="text-[--pink] font-semibold"> คมชัด </span>
                และทรงพลังที่สุดสำหรับพี่ตัวจริงนะคะ
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
                    <option value="เจ้าของธุรกิจ">เจ้าของธุรกิจ</option>
                    <option value="ครีเอเตอร์">ครีเอเตอร์ / อินฟลูเอนเซอร์</option>
                    <option value="ผู้เชี่ยวชาญ">ผู้เชี่ยวชาญ / โค้ช / ที่ปรึกษา</option>
                    <option value="กำลังเริ่มสร้างแบรนด์">กำลังเริ่มสร้างแบรนด์</option>
                    <option value="ทำงานด้านการตลาด">ทำงานด้านการตลาด</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">
                    ความรู้สึกที่ "จี้ใจ" พี่ที่สุดในตอนนี้คือเรื่องไหนคะ?
                  </label>
                  <div className="space-y-2">
                    {[
                      'ทำได้ ขายได้ แต่ไม่แน่ใจว่านี่คือตัวเองจริงไหม',
                      'เหนื่อยกับการวิ่งตามกระแส จนหมดไฟ',
                      'คู่แข่งเยอะ โดนกดราคา อยากต่างแต่ไม่รู้เริ่มยังไง',
                      'มีของดี แต่สื่อสารคุณค่าออกไปไม่ได้',
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
                  เริ่มการเดินทางค้นหาตัวตน
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
            <div className="w-full max-w-xl bg-white/90 shadow-2xl rounded-[32px] border border-slate-200 p-6 sm:p-8 backdrop-blur-sm relative overflow-visible">
              <div className="flex justify-center -mt-16 mb-4">
                <div className="bg-white p-3 rounded-3xl shadow-lg border-2 border-[--yellow]">
                  <NextImage
                    src="/images/logo-clean.svg"
                    alt="Choomcham Logo"
                    width={150}
                    height={150}
                    unoptimized
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>
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
            <div className="w-full max-w-xl space-y-4">
              {/* Question Card */}
              <div className="bg-white/95 shadow-2xl rounded-[32px] border border-slate-200 p-6 sm:p-8 backdrop-blur-sm">
                {/* Question Counter & Progress */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Question {currentIndex + 1} of {questions.length}
                  </span>
                  <span className="text-[10px] font-bold text-[--green]">
                    {Math.round(((currentIndex) / questions.length) * 100)}% เสร็จแล้ว
                  </span>
                </div>

                {/* Mini Progress Bar */}
                <div className="w-full h-1.5 bg-slate-100 rounded-full mb-6 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[--green] to-[--yellow] rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
                  />
                </div>

                <h2 className="text-xl sm:text-2xl font-bold mb-6 leading-snug text-slate-900">
                  {questions[currentIndex].question_text}
                </h2>
                <div className="grid gap-3">
                  {questions[currentIndex].options.map((opt: any, i: number) => (
                    <button
                      key={i}
                      className="w-full flex items-start justify-start gap-3 rounded-2xl border-2 border-[--green] bg-white px-5 py-4 text-left text-sm sm:text-base font-medium text-slate-900 hover:bg-[--green] hover:text-white hover:-translate-y-0.5 transition-all duration-150 group shadow-sm"
                      onClick={() => handleAnswer(opt.score)}
                    >
                      <span className="mt-0.5 text-xs font-bold opacity-100 group-hover:text-white text-[--green]">
                        {i + 1}.
                      </span>
                      <span className="flex-1 font-semibold">{opt.text}</span>
                    </button>
                  ))}
                </div>

                {currentIndex > 0 && (
                  <div className="mt-8 flex justify-center">
                    <button
                      className="inline-flex items-center gap-2 rounded-full border-2 border-[--dark-blue]/20 bg-white px-6 py-3 text-sm font-bold text-[--dark-blue] shadow-sm hover:bg-[--dark-blue] hover:text-white hover:border-[--dark-blue] transition-all duration-200"
                      onClick={handleBack}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      ย้อนกลับข้อก่อนหน้า
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* หน้าสรุปผลพร้อมปุ่มจ่ายเงิน (เด้งหน้าต่าง Omise) */}
          {currentIndex >= questions.length && questions.length > 0 && (
            <div className="w-full max-w-2xl bg-white/95 shadow-2xl rounded-[32px] overflow-hidden border border-slate-200 backdrop-blur-sm">
              <div className="bg-[--pink] p-6 sm:p-10 text-white text-center">
                <h2 className="text-base sm:text-lg opacity-90 mb-2 italic">
                  ยินดีด้วยค่ะ พี่{regData.nickname}
                </h2>
                <p className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-[--yellow]">
                  คุณคือ "{getResultData(score).title}" นะคะ...
                </p>
              </div>
              <div className="p-6 sm:p-8 text-center space-y-6">
                <div>
                  <div className="text-5xl sm:text-6xl font-black text-[--green] mb-4">{score} คะแนน</div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <p className="text-sm sm:text-base text-left leading-relaxed text-slate-700 italic">
                      "{getResultData(score).status}"
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-left">
                  <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                    <p className="text-sm text-[--green] font-bold mb-2 flex items-center gap-2">
                      <span className="text-lg">💡</span> สิ่งที่เจอ (Insight):
                    </p>
                    <p className="text-sm text-slate-800 italic leading-relaxed">"{getResultData(score).finding}"</p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
                    <p className="text-sm text-[#D33666] font-bold mb-2 flex items-center gap-2">
                      <span className="text-lg">⚠️</span> ความเสี่ยง (Risk):
                    </p>
                    <p className="text-sm text-slate-800 italic leading-relaxed">"{getResultData(score).risk}"</p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-200">
                    <p className="text-sm text-yellow-800 font-bold mb-2 flex items-center gap-2">
                      <span className="text-lg">✨</span> ทางออก (Solution):
                    </p>
                    <p className="text-sm text-slate-800 italic leading-relaxed">"{getResultData(score).sakit}"</p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-3xl font-black text-slate-900 mb-4">ราคา 599.-</div>
                  <button
                    className="w-full bg-[--green] text-white rounded-full py-4 px-6 font-black text-base sm:text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-150"
                    onClick={() => router.push(`/checkout?email=${encodeURIComponent(regData.email)}`)}
                  >
                    {getResultData(score).ctaLabel}
                  </button>
                </div>
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
                ปลดล็อกตัวตนแบรนด์คุณเลย
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}