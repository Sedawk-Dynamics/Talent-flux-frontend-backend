import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, company, message } = body

    // ✅ Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Required fields missing" },
        { status: 400 }
      )
    }

    // ✅ Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // ✅ Email to ADMIN only
    await transporter.sendMail({
      from: `"Website Lead" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Lead Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Company:</b> ${company || "N/A"}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    })
  } catch (error: any) {
    console.error("EMAIL ERROR:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 }
    )
  }
}