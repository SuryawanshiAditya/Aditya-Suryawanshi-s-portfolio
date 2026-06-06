const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Portfolio Contact",
          email: "Suryawanshiadityaj@gmail.com",
        },
        to: [{ email: "Suryawanshiadityaj@gmail.com", name: "Aditya" }],
        replyTo: { email: email, name: name },
        subject: `New message from ${name} — Portfolio`,
        htmlContent: `
          <div style="font-family:monospace;background:#0a0a0a;color:#00ff41;padding:32px;border-radius:8px;">
            <h2 style="color:#00ff41;">New Portfolio Message</h2>
            <p><strong style="color:#00c832;">Name:</strong> ${name}</p>
            <p><strong style="color:#00c832;">Email:</strong> ${email}</p>
            <p><strong style="color:#00c832;">Message:</strong></p>
            <p style="color:#00c832;border-left:3px solid #00ff41;padding-left:12px;">${message}</p>
          </div>
        `,
      }),
    });

    if (response.ok) {
      res.status(200).json({ success: true });
    } else {
      const errText = await response.text();
      console.error("Brevo error status:", response.status);
      console.error("Brevo error body:", errText);
      res.status(500).json({ error: errText });
    }
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/", (req, res) => {
  res.json({ status: "Server running ✅" });
});

setInterval(() => console.log("keepalive"), 14 * 60 * 1000);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
