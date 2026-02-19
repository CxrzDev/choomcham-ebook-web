import { NextResponse } from 'next/server'
import { supabase } from '@/app/service/supabase'
import { sendEmail } from '@/lib/email'
import { sendLineNotify } from '@/lib/line'

const omise = require('omise')({
  publicKey: process.env.NEXT_PUBLIC_OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
})

export async function POST(req: Request) {
  try {
    const { amount, token, email } = await req.json()

    // 1. Charge Credit Card
    const charge = await omise.charges.create({
      amount: amount * 100, // เปลี่ยนหน่วยเป็นสตางค์
      currency: 'thb',
      card: token,
      description: `eBook Choomcham for ${email}`,
    })

    if (charge.status === 'successful' || charge.status === 'pending') {
      // 2. Save Order to Supabase
      const { data, error } = await supabase
        .from('orders')
        .insert([
          {
            email: email,
            amount: amount,
            status: charge.status,
            omise_charge_id: charge.id
          }
        ])
        .select()

      if (error) {
        console.error('Error saving order to Supabase:', error)
      } else {
        console.log('Order saved successfully:', data)

        // 3. Send Email to Customer (Async - don't await blocking)
        const downloadLink = 'https://choomcham.com/download/e-book-link-dummy'; // TODO: Replace with real secure link

        // Dynamic email content
        const emailSubject = 'ดาวน์โหลด eBook - ChoomCham Brand Consultant';
        const emailBody = `
          ขอบคุณสำหรับการสั่งซื้อ eBook ครับ!
          
          ขอบคุณสำหรับการสั่งซื้อ eBook "ตัวจริงต้องมีที่ยืน" ครับ!
          
          ขณะนี้ทางทีมงานกำลังอัปเดตไฟล์ eBook เป็นเวอร์ชันล่าสุดเพื่อให้เนื้อหา "ฉ่ำ" และครบถ้วนที่สุดสำหรับคุณ
          
          เราจะทำการจัดส่งไฟล์ฉบับสมบูรณ์ให้ท่านทางอีเมลนี้โดยเร็วที่สุดครับ (ไม่เกิน 24 ชม.)
          
          ระหว่างนี้ท่านสามารถเตรียมตัวเข้าสู่เนื้อหาเข้มข้นได้เลย!
          
          หากมีข้อสงสัย หรือต้องการสอบถามเพิ่มเติม ติดต่อเราได้ที่ line: @choomcham
        `;

        // Send Email
        sendEmail({
          to: email,
          subject: emailSubject,
          text: emailBody
        }).catch(err => console.error('Failed to send email:', err));

        // 4. Send Email Notification to Admin (Instead of LINE Notify)
        const adminEmail = 'choomchamsale@gmail.com';
        const adminSubject = `[New Order] 💰 ยอดเข้าใหม่! ${amount} THB`;
        const adminBody = `
          แจ้งเตือนออเดอร์ใหม่ครับ!
          
          ลูกค้า: ${email}
          ยอดเงิน: ${amount} THB
          Order ID: ${data?.[0]?.id || 'N/A'}
          เวลา: ${new Date().toLocaleString('th-TH')}
        `;

        sendEmail({
          to: adminEmail,
          subject: adminSubject,
          text: adminBody
        }).catch(err => console.error('Failed to send admin email:', err));
      }

      return NextResponse.json({ success: true, charge, order: data })
    } else {
      return NextResponse.json({ success: false, message: 'Payment failed', charge })
    }

  } catch (error: any) {
    console.error('Checkout error:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
