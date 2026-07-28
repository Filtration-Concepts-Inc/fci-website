import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { firstName, lastName, company, email, phone, serviceAddress, city, state, zip, serviceArea, message } = await req.json()

  const row = (label: string, value: string, shaded: boolean) => `
    <tr style="background:${shaded ? '#f0f4f8' : '#ffffff'};">
      <td style="padding:9px 14px;font-weight:600;color:#1a1a1a;width:180px;border-bottom:1px solid #dde3ea;">${label}</td>
      <td style="padding:9px 14px;color:#333;border-bottom:1px solid #dde3ea;">${value || '—'}</td>
    </tr>`

  const { error } = await resend.emails.send({
    from: 'FCI Website <noreply@fciwisconsin.com>',
    to: 'sales@fciwisconsin.com',
    replyTo: email,
    subject: `New Contact Form Submission – ${firstName} ${lastName}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;">
        <div style="background:#CC0000;padding:18px 24px;">
          <h2 style="margin:0;color:#ffffff;font-size:18px;">New Contact Form Submission</h2>
          <p style="margin:4px 0 0;color:#ffcccc;font-size:13px;">Submitted via fciwisconsin.com</p>
        </div>
        <table style="width:100%;border-collapse:collapse;border:1px solid #dde3ea;">
          <thead>
            <tr style="background:#1a3a5c;">
              <th style="padding:10px 14px;color:#ffffff;text-align:left;font-size:13px;">Form Label</th>
              <th style="padding:10px 14px;color:#ffffff;text-align:left;font-size:13px;">Content</th>
            </tr>
          </thead>
          <tbody>
            ${row('First Name', firstName, false)}
            ${row('Last Name', lastName, true)}
            ${row('Phone', phone, false)}
            ${row('Email', `<a href="mailto:${email}" style="color:#CC0000;">${email}</a>`, true)}
            ${row('Company Name', company, false)}
            ${row('Service Address', serviceAddress, true)}
            ${row('City', city, false)}
            ${row('State', state, true)}
            ${row('Zip', zip, false)}
            ${row('Service Area', serviceArea, true)}
            ${row('How can we help?', message, false)}
          </tbody>
        </table>
      </div>
    `,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
