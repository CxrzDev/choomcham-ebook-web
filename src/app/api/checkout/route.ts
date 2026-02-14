import { NextResponse } from 'next/server'
const omise = require('omise')({
  publicKey: process.env.NEXT_PUBLIC_OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
})

export async function POST(req: Request) {
  try {
    const { amount, token, email } = await req.json()
    
    const charge = await omise.charges.create({
      amount: amount * 100, // เปลี่ยนหน่วยเป็นสตางค์
      currency: 'thb',
      card: token,
      description: `eBook Choomcham for ${email}`,
    })

    return NextResponse.json({ success: true, charge })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}
