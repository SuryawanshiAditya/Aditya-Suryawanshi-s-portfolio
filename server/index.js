import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import * as Brevo from '@getbrevo/brevo'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const apiInstance = new Brevo.TransactionalEmailsApi()
apiInstance.authentications['apiKey'].apiKey = process.env.BREVO_API_KEY

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    const sendSmtpEmail = new Brevo.SendSmtpEmail()

    sendSmtpEmail.subject = `New message from ${name} — Portfolio`
    sendSmtpEmail.htmlContent = `
      <div style="font-family:monospace; background:#0a0a0a; color:#00ff41; padding:32px; border-radius:8px;">
        <h2 style="color:#00ff41;">New Portfolio Message</h2>
        <p><strong style="color:#00c832;">Name:</strong> ${name}</p>
        <p><strong style="color:#00c832;">Email:</strong> ${email}</p>
        <p><strong style="color:#00c832;">Message:</strong></p>
        <p style="color:#00c832; border-left:3px solid #00ff41; padding-left:12px;">${message}</p>
      </div>
    `
    sendSmtpEmail.sender = { name: 'Portfolio Contact', email: 'Suryawanshiadityaj@gmail.com' }
    sendSmtpEmail.to = [{ email: 'Suryawanshiadityaj@gmail.com', name: 'Aditya' }]
    sendSmtpEmail.replyTo = { email: email, name: name }

    await apiInstance.sendTransacEmail(sendSmtpEmail)
    res.status(200).json({ success: true })

  } catch (err) {
    console.error('Email error:', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.get('/', (req, res) => {
  res.json({ status: 'Server running ✅' })
})

setInterval(() => {
  console.log('keepalive ping')
}, 14 * 60 * 1000)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})