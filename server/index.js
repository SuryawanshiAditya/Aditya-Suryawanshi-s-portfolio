import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://adityasuryawanshisportfolio.vercel.app',
    'https://aditya-suryawanshi-s-portfolio.vercel.app',
    process.env.FRONTEND_URL
  ],
  methods: ['GET', 'POST'],
}))

app.use(express.json())

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
})

// Contact route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family:monospace; background:#0a0a0a; color:#00ff41; padding:32px; border-radius:8px;">
          <h2 style="color:#00ff41; margin-bottom:16px;">New Portfolio Message</h2>
          <p><strong style="color:#00c832;">Name:</strong> ${name}</p>
          <p><strong style="color:#00c832;">Email:</strong> ${email}</p>
          <p><strong style="color:#00c832;">Message:</strong></p>
          <p style="color:#00c832; border-left:3px solid #00ff41; padding-left:12px;">${message}</p>
        </div>
      `
    })

    res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (err) {
    console.error('Email error:', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.get('/', (req, res) => {
  res.json({ status: 'Server running ✅' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})