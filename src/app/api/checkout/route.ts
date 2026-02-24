
import { NextResponse } from 'next/server'

// Omise API requires 'omise' package, but we can also use fetch for simplicity in this demo
// Or instruct user to npm install omise

export async function POST(req: Request) {
  try {
    const { token, amount, email } = await req.json()

    if (!token || !amount || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const OMISE_SECRET_KEY = process.env.OMISE_SECRET_KEY
    if (!OMISE_SECRET_KEY) {
      console.error('Missing OMISE_SECRET_KEY')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // 1. Create Charge using Omise API
    const response = await fetch('https://api.omise.co/charges', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(OMISE_SECRET_KEY + ':').toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'amount': amount.toString(),
        'currency': 'thb',
        'card': token,
        'description': `Charge for E-Book (Email: ${email})`
      })
    })

    const charge = await response.json()

    if (charge.object === 'error') {
      throw new Error(charge.message)
    }

    if (charge.status === 'successful' || charge.status === 'pending') {
      // 2. Charge Success!
      // TODO: Add Logic to send E-Book Email here (e.g. Resend, Nodemailer)
      console.log(`Payment successful for ${email}. Charge ID: ${charge.id}`)

      // TODO: Save to Supabase 'registrations' or 'orders' table

      return NextResponse.json({ success: true, chargeId: charge.id })
    } else {
      throw new Error(`Charge status: ${charge.status}`)
    }

  } catch (error: any) {
    console.error('Checkout API Error:', error)
    return NextResponse.json({ error: error.message || 'Payment processing failed' }, { status: 500 })
  }
}
