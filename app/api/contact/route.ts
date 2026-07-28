import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { firstName, lastName, company, email, phone, serviceArea, message } = await req.json()

  const { error } = await resend.emails.send({
    from: 'FCI Website <noreply@fciwisconsin.com>',
    to: 'sales@fciwisconsin.com',
    replyTo: email,
    subject: `New Contact Form Submission – ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Name</td><td style="padding:8px;">${firstName} ${lastName}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Company</td><td style="padding:8px;">${company || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Phone</td><td style="padding:8px;">${phone || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Service Area</td><td style="padding:8px;">${serviceArea || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;vertical-align:top;">Message</td><td style="padding:8px;">${message}</td></tr>
      </table>
    `,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
