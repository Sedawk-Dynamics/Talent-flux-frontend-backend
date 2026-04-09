import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    // ✅ Get fields
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const experience = formData.get("experience") as string
    const currentCTC = formData.get("currentCTC") as string
    const currentRole = formData.get("currentRole") as string
    const location = formData.get("location") as string
    const skills = formData.get("skills") as string
    const message = formData.get("message") as string
    const file = formData.get("cv") as File

    // ✅ Validation
    if (!firstName || !email || !phone || !file) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    // ✅ Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // ✅ Transporter (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // ✅ Send email with attachment
    await transporter.sendMail({
      from: "CV Submission",
      to: process.env.TO_EMAIL,
      subject: `New CV: ${firstName} ${lastName}`,
      html: `
        <h2>New CV Submission</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Experience:</b> ${experience || "N/A"}</p>
        <p><b>Current CTC:</b> ${currentCTC || "N/A"}</p>
        <p><b>Role:</b> ${currentRole}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Skills:</b> ${skills}</p>
        <p><b>Message:</b> ${message || "N/A"}</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    })

    return Response.json({
      success: true,
      message: "CV sent successfully",
    })
  } catch (error) {
    console.error("CV ERROR:", error)

    return Response.json(
      { success: false, message: "Failed to send CV" },
      { status: 500 }
    )
  }
}