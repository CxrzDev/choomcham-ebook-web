'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../service/supabase'
import { useRouter } from 'next/navigation' 

export default function QuizPage() {
  const router = useRouter()
  
  const [questions, setQuestions] = useState<any[]>([
    {
      id: 1,
      question_text: 'เวลามีคนถามว่า "แบรนด์คุณทำอะไร?" คุณมักจะ...',
      order: 1,
      category: 'Identity & Soul',
      options: [
        { text: 'ก. ตอบตามสิ่งที่ตลาดต้องการได้ยิน', score: 1 },
        { text: 'ข. ตอบตามสินค้าที่ขายดีที่สุดในตอนนั้น', score: 2 },
        { text: 'ค. ตอบได้ชัดเจน แต่อธิบายลำบากถ้าต้องโยงเข้าหาตัวเอง', score: 3 },
        { text: 'ง. ตอบได้ทันทีด้วยความภูมิใจ เพราะมันคือเนื้อแท้ของคุณ', score: 4 }
      ]
    },
    {
      id: 2,
      question_text: 'ถ้าต้องอธิบายจุดเด่นของแบรนด์ใน 1 ประโยค โดยห้ามใช้คำว่า "ดี/ถูก/เร็ว/มีคุณภาพ" คุณทำได้ไหม?',
      order: 2,
      category: 'Identity & Soul',
      options: [
        { text: 'ก. นึกไม่ออกเลย ถ้าไม่ใช้คำพวกนี้ก็ไม่รู้จะขายอะไร', score: 1 },
        { text: 'ข. พอได้นะ แต่ฟังดูเหมือนก๊อปปี้คำสวยๆ ของคนอื่นมา', score: 2 },
        { text: 'ค. ทำได้ และเริ่มรู้สึกอินกับคำนั้นมากขึ้นเรื่อยๆ', score: 3 },
        { text: 'ง. ทำได้ทันที และประโยคนั้นคือคัมภีร์ที่ใช้ทำงานทุกวัน', score: 4 }
      ]
    },
    {
      id: 3,
      question_text: 'คุณรู้สึก "ปลอม" เวลาต้องออกหน้ากล้องหรือพูดคุยกับแฟนคลับไหม?',
      order: 3,
      category: 'Identity & Soul',
      options: [
        { text: 'ก. รู้สึกตลอดเวลา จนเหนื่อยใจและอยากหลบไปหลังบ้าน', score: 1 },
        { text: 'ข. รู้สึกเป็นบางช่วงที่ต้องทำเพื่อ "ยอดขาย" หรือตามกระแส', score: 2 },
        { text: 'ค. นานๆ ครั้ง เมื่อต้องทำในสิ่งที่ไม่ใช่จริตจริง', score: 3 },
        { text: 'ง. ไม่เลย ฉันเป็นคนเดิมทั้งหน้ากล้องและหลังกล้อง', score: 4 }
      ]
    },
    {
      id: 4,
      question_text: 'หากวันหนึ่งคุณอยากเปลี่ยนแนวทางธุรกิจ คุณกลัวไหมว่าคนจะจำคุณไม่ได้?',
      order: 4,
      category: 'Identity & Soul',
      options: [
        { text: 'ก. กลัวมาก เพราะคนจำแค่สินค้า ไม่ได้จำตัวตนของฉัน', score: 1 },
        { text: 'ข. กังวล เพราะภาพจำเดิมมันแข็งแรงจนขยับตัวยาก', score: 2 },
        { text: 'ค. เฉยๆ เพราะฉันค่อยๆ แทรกตัวตนลงไปบ้างแล้ว', score: 3 },
        { text: 'ง. ไม่กลัวเลย เพราะแฟนคลับติดตามที่ "วิธีคิด" ของฉัน', score: 4 }
      ]
    },
    {
      id: 5,
      question_text: 'ถ้าวันนี้คุณ "หยุดยิงโฆษณา" ทุกช่องทางเป็นเวลา 30 วัน...',
      order: 5,
      category: 'Message & Magnetic Power',
      options: [
        { text: 'ก. ธุรกิจน่าจะเงียบกริบเหมือนป่าช้า', score: 1 },
        { text: 'ข. ยอดขายน่าจะตกฮวบจนใจหาย', score: 2 },
        { text: 'ค. ยังพอมีลูกค้าทักมาบ้างจากคอนเทนต์เก่าๆ', score: 3 },
        { text: 'ง. ยังมีลูกค้าทักมาสม่ำเสมอ เพราะเขาตั้งใจมาหาคุณ', score: 4 }
      ]
    },
    {
      id: 6,
      question_text: 'ลูกค้าส่วนใหญ่ทักมาหาคุณด้วยประโยคไหนเป็นอันดับแรก?',
      order: 6,
      category: 'Message & Magnetic Power',
      options: [
        { text: 'ก. "ราคาเท่าไหร่?" / "มีโปรโมชั่นไหม?"', score: 1 },
        { text: 'ข. "สนใจสินค้าตัวนี้ค่ะ/ครับ" (ทักตามรูปที่เห็น)', score: 2 },
        { text: 'ค. "ชอบสไตล์การทำงานของคุณจังเลยค่ะ"', score: 3 },
        { text: 'ง. "ต้องเป็นคุณเท่านั้นถึงจะช่วยเรื่องนี้ได้"', score: 4 }
      ]
    },
    {
      id: 7,
      question_text: 'เมื่อตัดโลโก้และชื่อแบรนด์ออก คนยังจำ "น้ำเสียง" หรือ "สไตล์ภาพ" ของคุณได้ไหม?',
      order: 7,
      category: 'Message & Magnetic Power',
      options: [
        { text: 'ก. จำไม่ได้เลย เพราะฉันทำตามๆ คนอื่นมา', score: 1 },
        { text: 'ข. อาจจะสับสนกับเจ้าอื่นที่ทำแนวเดียวกัน', score: 2 },
        { text: 'ค. เริ่มจำได้จากเอกลักษณ์บางอย่างที่ชัดขึ้น', score: 3 },
        { text: 'ง. จำได้ทันที แค่เห็นฟอนต์หรือคำพูดก็รู้ว่าเป็นฉัน', score: 4 }
      ]
    },
    {
      id: 8,
      question_text: 'คุณรู้สึกเหนื่อยที่ต้องคอย "คิดคอนเทนต์ใหม่" ทุกวันเพื่อวิ่งไล่อัลกอริทึมไหม?',
      order: 8,
      category: 'Message & Magnetic Power',
      options: [
        { text: 'ก. เหนื่อยมาก เหมือนต้องเค้นสิ่งที่ไม่มีอยู่จริงออกมา', score: 1 },
        { text: 'ข. เหนื่อยแบบทำตามหน้าที่ให้จบไปวันๆ', score: 2 },
        { text: 'ค. เริ่มจับทางได้ว่าเล่าเรื่องไหนแล้วคนจะชอบ', score: 3 },
        { text: 'ง. ไม่เหนื่อยเลย คอนเทนต์ไหลออกมาเองจากสิ่งที่ฉันเชื่อ', score: 4 }
      ]
    },
    {
      id: 9,
      question_text: 'เช้าวันจันทร์ที่ต้องตื่นมาทำงานให้แบรนด์ตัวเอง คุณรู้สึกอย่างไร?',
      order: 9,
      category: 'Inner State & Consistency',
      options: [
        { text: 'ก. หนักอึ้งเหมือนแบกโลกไว้ อยากหลับต่อ', score: 1 },
        { text: 'ข. ตื่นมาทำตาม To-do list ให้เสร็จตามหน้าที่', score: 2 },
        { text: 'ค. ตื่นเต้นที่จะได้ลองไอเดียใหม่ๆ ในวันนี้', score: 3 },
        { text: 'ง. ขอบคุณที่ได้ทำสิ่งที่รักและเป็นตัวเองอย่างเต็มที่', score: 4 }
      ]
    },
    {
      id: 10,
      question_text: 'คำชมจากลูกค้าแบบไหนที่คุณได้รับแล้ว "ใจฟู" และมีพลังที่สุด?',
      order: 10,
      category: 'Inner State & Consistency',
      options: [
        { text: 'ก. "ถูกดี / คุ้มค่ามาก"', score: 1 },
        { text: 'ข. "ทำงานไว / เก่งจัง"', score: 2 },
        { text: 'ค. "ชอบแนวคิดและทัศนคติของคุณจัง"', score: 3 },
        { text: 'ง. "ขอบคุณที่คุณเป็นคุณ ขอบคุณที่ทำสิ่งนี้ออกมา"', score: 4 }
      ]
    },
    {
      id: 11,
      question_text: 'เวลาต้องเล่าเรื่องเดิมซ้ำๆ (เช่น ตอบคำถามเดิมหรือเล่าประวัติแบรนด์) คุณรู้สึก...',
      order: 11,
      category: 'Inner State & Consistency',
      options: [
        { text: 'ก. เบื่อจนอยากจ้างคนอื่นมาทำแทนให้หมด', score: 1 },
        { text: 'ข. อดทนทำเพราะมันคือส่วนหนึ่งของรายได้', score: 2 },
        { text: 'ค. พยายามหามุมมองใหม่ๆ มาเล่าให้ตัวเองไม่เบื่อ', score: 3 },
        { text: 'ง. ยินดีมาก เพราะรู้ว่านี่คือหัวใจที่ต้องส่งต่อให้คนใหม่ๆ', score: 4 }
      ]
    },
    {
      id: 12,
      question_text: 'พนักงานหรือแอดมินของคุณ สามารถตอบคำถามลูกค้าได้ "โทนเสียง" เดียวกับคุณไหม?',
      order: 12,
      category: 'Inner State & Consistency',
      options: [
        { text: 'ก. ไม่เลย ตอบเหมือนหุ่นยนต์ก๊อปวาง', score: 1 },
        { text: 'ข. พอได้บ้างถ้ามี Script ให้', score: 2 },
        { text: 'ค. เริ่มซึมซับความเป็นเราไปได้เกินครึ่ง', score: 3 },
        { text: 'ง. เหมือนมีฉันอีกคนมานั่งตอบเอง จิตวิญญาณเดียวกันเป๊ะ', score: 4 }
      ]
    },
    {
      id: 13,
      question_text: 'มีแบรนด์คู่แข่งหน้าใหม่ที่ "ภาพสวยกว่า / เด็กกว่า" เริ่มเข้ามา คุณรู้สึกอย่างไร?',
      order: 13,
      category: 'Future & Sustainability',
      options: [
        { text: 'ก. สติหลุด กลัวโดนแย่งลูกค้าจนต้องลดราคาแข่ง', score: 1 },
        { text: 'ข. กังวล และพยายามวิ่งไล่ตามทำตามเขาทุกอย่าง', score: 2 },
        { text: 'ค. ดูไว้เป็นไอเดีย แต่ยังเชื่อมั่นในทางของตัวเอง', score: 3 },
        { text: 'ง. ไม่หวั่นใจเลย เพราะเขาเลียนแบบ "ตัวตน" ของฉันไม่ได้', score: 4 }
      ]
    },
    {
      id: 14,
      question_text: 'ถ้าต้องทำธุรกิจแบบที่เป็นอยู่ตอนนี้ไปอีก 3 ปี คุณไหวไหม?',
      order: 14,
      category: 'Future & Sustainability',
      options: [
        { text: 'ก. ไม่ไหวแน่นอน ฉันคงเฉาตายหรือหมดไฟก่อน', score: 1 },
        { text: 'ข. ไหวแหละ ถ้าเงินยังดีอยู่ก็ต้องทน', score: 2 },
        { text: 'ค. ไหว และคิดว่าน่าจะปรับให้สนุกขึ้นได้อีก', score: 3 },
        { text: 'ง. สบายมาก เพราะมันคือไลฟ์สไตล์ที่เป็นเนื้อเดียวกับชีวิต', score: 4 }
      ]
    },
    {
      id: 15,
      question_text: 'คุณกล้าขึ้นราคาสินค้าเพิ่ม 20% โดยที่มั่นใจว่าลูกค้าเดิมจะยังอยู่ไหม?',
      order: 15,
      category: 'Future & Sustainability',
      options: [
        { text: 'ก. ไม่กล้าเลย ลูกค้าหนีไปหาของถูกกว่าแน่นอน', score: 1 },
        { text: 'ข. ลังเลมาก กลัวยอดขายหายไปเกินครึ่ง', score: 2 },
        { text: 'ค. พอจะกล้าลองกับลูกค้าบางกลุ่มที่เหนียวแน่น', score: 3 },
        { text: 'ง. มั่นใจมาก เพราะเขารู้ว่าคุณค่าที่เราให้มันเกินราคาไปเยอะ', score: 4 }
      ]
    },
    {
      id: 16,
      question_text: 'หากคุณหยุดทำงานไป 6 เดือน แบรนด์จะยังเดินต่อไปในทิศทางเดิมได้ไหม?',
      order: 16,
      category: 'Future & Sustainability',
      options: [
        { text: 'ก. ล่มสลายทันที เพราะทุกอย่างผูกติดที่ตัวฉันคนเดียว', score: 1 },
        { text: 'ข. เดินต่อได้แต่สะดุดและเสียทิศทางไปเยอะ', score: 2 },
        { text: 'ค. เดินต่อได้แต่อาจจะโตช้าลงกว่าตอนมีฉัน', score: 3 },
        { text: 'ง. เดินต่อได้สบาย เพราะฉันวางโครงสร้างและจิตวิญญาณไว้ชัดเจน', score: 4 }
      ]
    },
    {
      id: 17,
      question_text: 'แบรนด์ของคุณกำลังแย่ง "เวลาใช้ชีวิต" หรือ "ช่วยส่งเสริมชีวิต" คุณ?',
      order: 17,
      category: 'Future & Sustainability',
      options: [
        { text: 'ก. แย่งไปหมดจนไม่เหลือความเป็นตัวเอง', score: 1 },
        { text: 'ข. แย่งไปเยอะ แต่ก็แลกมาด้วยความมั่นคงทางการเงิน', score: 2 },
        { text: 'ค. เริ่มหาสมดุลได้แล้ว มีเวลาให้ตัวเองมากขึ้น', score: 3 },
        { text: 'ง. ส่งเสริมชีวิต ทำให้ฉันมีพลังและมีอิสระอย่างที่ต้องการ', score: 4 }
      ]
    },
    {
      id: 18,
      question_text: 'เป้าหมายในอีก 3 ปีข้างหน้า ชัดเจนจนทีมงานทุกคนมองเห็นภาพเดียวกันหรือยัง?',
      order: 18,
      category: 'Future & Sustainability',
      options: [
        { text: 'ก. ยังเลย แค่เอาตัวให้รอดเดือนนี้ก็เต็มที่แล้ว', score: 1 },
        { text: 'ข. มีภาพในหัวแค่คนเดียว แต่ไม่รู้จะบอกทีมยังไง', score: 2 },
        { text: 'ค. เริ่มสื่อสารให้ทีมเข้าใจทิศทางใหญ่ๆ บ้างแล้ว', score: 3 },
        { text: 'ง. ชัดเจนมาก ทุกคนรู้ว่าเรากำลังจะไปเปลี่ยนโลกใบนี้ด้วยกัน', score: 4 }
      ]
    },
    {
      id: 19,
      question_text: 'ถ้าวันนี้คุณมีเงิน 30 ล้านในบัญชี คุณยังจะทำแบรนด์นี้ต่อไหม?',
      order: 19,
      category: 'Future & Sustainability',
      options: [
        { text: 'ก. เลิกทันที ไปใช้ชีวิตที่อื่นดีกว่า', score: 1 },
        { text: 'ข. อาจจะทำต่อแบบกึ่งๆ แก้เบื่อ', score: 2 },
        { text: 'ค. ทำต่อแน่นอน แต่จะเน้นเรื่องที่อยากทำจริงๆ มากขึ้น', score: 3 },
        { text: 'ง. ทำต่อแน่นอน เพราะนี่คือภารกิจชีวิตของฉัน', score: 4 }
      ]
    },
    {
      id: 20,
      question_text: 'สรุปแล้ว คุณรู้สึกว่าความสำเร็จวันนี้มาจาก "ตัวจริง" หรือ "ความโชคดี"?',
      order: 20,
      category: 'Future & Sustainability',
      options: [
        { text: 'ก. โชคดีล้วนๆ และฉันกลัวว่าวันหนึ่งโชคจะหมดไป', score: 1 },
        { text: 'ข. โชคดีผสมกับความเหนื่อยขยัน แต่ยังไม่ใช่ตัวตนจริงๆ', score: 2 },
        { text: 'ค. เริ่มเป็นตัวจริงมากขึ้น แต่ยังต้องจูนอีกนิด', score: 3 },
        { text: 'ง. มาจากตัวตนที่ชัดเจน ความโชคดีเป็นเพียงแค่ตัวเร่ง', score: 4 }
      ]
    }
  ])
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

  const handlePayment = async (e?: React.MouseEvent) => {
    // 1. สำคัญมาก: ป้องกันไม่ให้หน้าเว็บรีเฟรชตัวเองตอนกดปุ่ม
    if (e) e.preventDefault();

    // โหลด Omise script ถ้ายังไม่มี
    if (!(window as any).OmiseCard) {
      const script = document.createElement('script');
      script.src = 'https://cdn.omise.co/omise.js';
      script.onload = () => {
        console.log('Omise script loaded successfully');
        proceedWithPayment();
      };
      script.onerror = () => {
        console.error('Failed to load Omise script');
        alert('ไม่สามารถโหลดระบบชำระเงินได้ กรุณาลองใหม่');
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
      return;
    }

    OmiseCard.configure({
      publicKey: process.env.NEXT_PUBLIC_OMISE_PUBLIC_KEY,
      currency: 'thb',
      frameLabel: 'ชุ่มฉ่ำ Branding Payment',
      submitLabel: 'ยืนยันการชำระเงิน',
    });

    // 2. เรียกเปิดหน้าต่างกรอกบัตร (ตัวนี้จะเป็นหน้าแยกที่เด้งขึ้นมาให้เองครับ)
    OmiseCard.open({
      amount: 59900,
      onCreateTokenSuccess: async (token: string) => {
        // สำหรับการทดสอบ: ข้ามการเรียก API จริง และไปหน้าขอบคุณเลย
        console.log('Payment token created (testing mode):', token);
        router.push('/quiz/success');
      },
      // ถ้าลูกค้ากดปิดหน้าต่างกรอกบัตร ไม่ต้องทำอะไร (จะยังอยู่ที่หน้าเดิม ไม่เด้งกลับไปลงทะเบียน)
      onCancel: () => {
        console.log("Customer closed the payment window");
      }
    });
  };

  const handleStartQuiz = async () => {
    console.log('Starting quiz with data:', regData)

    try {
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
        setCurrentIndex(-1)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่')
    }
  }

  return (
    <>

      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        
        {/* หน้าลงทะเบียน */}
        {currentIndex === -2 && (
          <div className="card w-full max-w-lg bg-white shadow-xl border-t-8 border-indigo-600 p-8 rounded-2xl">
             <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6 italic">ลงทะเบียนก่อนเริ่ม Quiz แบรนด์คุณคือ "ตัวจริง" หรือแค่ "โชคดี"?</h2>
             <p className="text-sm text-slate-600 mb-6">ก่อนจะไปค้นหาคำตอบร่วมกัน... น้องฉ่ำรวบรวมข้อมูลเล็กน้อย เพื่อให้ผลลัพธ์ที่ได้ 'ฉ่ำ' และตรงใจพี่ตัวจริงที่สุดนะคะ</p>
             <div className="space-y-4">
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">ชื่อเล่น :</label>
                 <input type="text" className="input input-bordered w-full" placeholder="กรอกชื่อเล่นของคุณ" value={regData.nickname} onChange={(e) => setRegData({...regData, nickname: e.target.value})} />
               </div>
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">อีเมล สำหรับรับผลวิเคราะห์ฉบับเต็ม:</label>
                 <input type="email" className="input input-bordered w-full" placeholder="กรอกอีเมลของคุณ" value={regData.email} onChange={(e) => setRegData({...regData, email: e.target.value})} />
               </div>
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">บทบาทปัจจุบันของพี่ตัวจริง:</label>
                 <select className="select select-bordered w-full" value={regData.role} onChange={(e) => setRegData({...regData, role: e.target.value})}>
                   <option value="" disabled>เลือกบทบาทของคุณ</option>
                   <option value="เจ้าของธุรกิจ">เจ้าของธุรกิจ (Business Owner)</option>
                   <option value="ครีเอเตอร์">ครีเอเตอร์ (Creator / Influencer)</option>
                   <option value="ผู้เชี่ยวชาญ">ผู้เชี่ยวชาญ / โค้ช / ที่ปรึกษา (Expert / Coach)</option>
                   <option value="กำลังเตรียมตัว">กำลังเตรียมตัวเริ่มทำแบรนด์</option>
                 </select>
               </div>
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">ความรู้สึกที่ "จี้ใจ" พี่ที่สุดในตอนนี้คือเรื่องไหนคะ?</label>
                 <div className="space-y-2">
                   {[
                     "ทำได้ ขายได้ แต่เริ่มไม่แน่ใจว่าที่ทำอยู่...ใช่ตัวเองจริงไหม",
                     "เหนื่อยกับการวิ่งตามกระแส/อัลกอริทึม จนใจเริ่มหมดไฟ",
                     "คู่แข่งเยอะจนโดนกดราคา อยากสร้างความต่างแต่ไม่รู้จะเริ่มตรงไหน",
                     "มีของดีในมือ แต่สื่อสารออกไปให้คนเห็นคุณค่าไม่ได้สักที"
                   ].map((option, index) => (
                     <label key={index} className="flex items-start space-x-2 cursor-pointer">
                       <input type="radio" name="pain_point" className="radio radio-primary mt-1" value={option} checked={regData.pain_point === option} onChange={(e) => setRegData({...regData, pain_point: e.target.value})} />
                       <span className="text-sm">{option}</span>
                     </label>
                   ))}
                 </div>
               </div>
               <div className="flex items-start space-x-2">
                 <input type="checkbox" className="checkbox checkbox-primary mt-1" checked={regData.consent} onChange={(e) => setRegData({...regData, consent: e.target.checked})} />
                 <span className="text-sm">✅ ข้าพเจ้ายินยอมให้เก็บข้อมูลส่วนบุคคลตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล</span>
               </div>
               <p className="text-xs text-slate-500">เรารักษาข้อมูลส่วนตัวของคุณ</p>
               <button className="btn btn-primary btn-block" disabled={!regData.nickname || !regData.email || !regData.role || !regData.pain_point || !regData.consent} onClick={handleStartQuiz}>ไปค้นหาคำตอบร่วมกัน</button>
             </div>
          </div>
        )}

        {/* หน้าคำถาม */}
        {currentIndex >= 0 && currentIndex < questions.length && (
          <div className="card w-full max-w-lg bg-white shadow-xl p-8 rounded-2xl border border-slate-100">
             <span className="text-[10px] font-black uppercase tracking-widest opacity-30 mb-4 block">Question {currentIndex + 1} of {questions.length}</span>
             <h2 className="text-2xl font-bold mb-8 leading-snug">{questions[currentIndex].question_text}</h2>
             <div className="grid gap-3">
               {questions[currentIndex].options.map((opt: any, i: number) => (
                 <button key={i} className="btn btn-outline btn-primary text-left justify-start h-auto py-5 px-6 border-2 hover:bg-indigo-600 transition-all" onClick={() => handleAnswer(opt.score)}>
                   <span className="mr-4 opacity-50">{String.fromCharCode(65 + i)}.</span>
                   <span className="flex-1">{opt.text}</span>
                 </button>
               ))}
             </div>
          </div>
        )}

        {/* หน้าสรุปผลพร้อมปุ่มจ่ายเงิน (เด้งหน้าต่าง Omise) */}
        {currentIndex >= questions.length && questions.length > 0 && (
          <div className="card w-full max-w-md bg-white shadow-2xl rounded-[32px] overflow-hidden border border-slate-100">
            <div className="bg-indigo-600 p-10 text-white text-center">
              <h2 className="text-lg opacity-80 mb-2 italic">ยินดีด้วยค่ะ พี่{regData.nickname}</h2>
              <p className="text-2xl font-black tracking-tight leading-tight">{getResultData(score).title}</p>
            </div>
            <div className="card-body p-8 text-center">
              <div className="text-6xl font-black text-indigo-600 mb-6">{score}</div>
              <p className="text-sm text-left mb-6 leading-relaxed text-slate-600 italic">"{getResultData(score).status}"</p>
              <button className="btn btn-outline btn-info mb-6" onClick={() => setShowAnalysis(!showAnalysis)}>
                {showAnalysis ? 'ซ่อนผลวิเคราะห์' : 'ดูผลวิเคราะห์'}
              </button>
              {showAnalysis && (
                <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl mb-8 text-left">
                  <p className="text-sm text-blue-800 font-bold mb-2">สิ่งที่เจอ:</p>
                  <p className="text-sm text-blue-700 italic mb-4">"{getResultData(score).finding}"</p>
                  <p className="text-sm text-red-800 font-bold mb-2">ความเสี่ยง:</p>
                  <p className="text-sm text-red-700 italic">"{getResultData(score).risk}"</p>
                </div>
              )}
              <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-2xl mb-8">
                <p className="text-xs text-yellow-800 font-bold italic mb-3">"{getResultData(score).sakit}"</p>
                <div className="text-3xl font-black text-slate-900">ราคา 599.-</div>
              </div>
              <button className="btn btn-success btn-block btn-lg h-16 rounded-2xl text-white font-black shadow-lg hover:scale-105 transition-transform" onClick={handlePayment}>
                {getResultData(score).ctaLabel}
              </button>
            </div>
          </div>
        )}

        {/* หน้าก่อนเริ่ม Quiz */}
        {currentIndex === -1 && (
          <div className="card w-full max-w-md bg-white shadow-xl p-12 text-center rounded-2xl border-b-8 border-indigo-600">
             <h2 className="text-3xl font-black text-indigo-600 mb-6 italic">พร้อมหรือยังคะ?</h2>
             <p className="mb-8 text-slate-500 text-sm">ข้อมูลที่ได้จะช่วยให้น้องวิเคราะห์ตัวตนพี่ได้ 'ฉ่ำ' ที่สุดค่ะ</p>
             <button className="btn btn-primary btn-wide btn-lg shadow-lg" onClick={() => setCurrentIndex(0)}>เริ่มทำ Quiz เลย</button>
          </div>
        )}

      </div>
    </>
  )
}