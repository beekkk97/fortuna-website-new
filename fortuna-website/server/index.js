import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json({ limit: '30kb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'FORTUNA contact API' }));

app.post('/api/contact', async (req, res) => {
  const { name, email, phone = '', service = '', message, website = '' } = req.body || {};
  // Honeypot field: real users should leave this hidden field empty.
  if (website) return res.json({ ok: true, message: 'Anfrage erhalten.' });
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ ok: false, message: 'Bitte füllen Sie Name, E-Mail und Nachricht aus.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' });
  }
  if (name.length > 120 || email.length > 200 || message.length > 5000) {
    return res.status(413).json({ ok: false, message: 'Ein Feld ist zu lang. Bitte kürzen Sie Ihre Angaben.' });
  }

  const configured = process.env.SMTP_HOST && process.env.SMTP_USER &&
    process.env.SMTP_PASS && process.env.CONTACT_TO;
  if (!configured) {
    console.log('Contact form submission (SMTP not configured):', {
      name, email, phone, service, message
    });
    return res.status(503).json({
      ok: false,
      message: 'Das Kontaktformular ist noch nicht mit E-Mail verbunden. Bitte konfigurieren Sie SMTP in der .env-Datei oder kontaktieren Sie uns telefonisch.'
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    await transporter.sendMail({
      from: process.env.CONTACT_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Website-Anfrage: ${service || 'Allgemein'} – ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone || '-'}\nLeistung: ${service || '-'}\n\nNachricht:\n${message}`
    });
    res.json({ ok: true, message: 'Vielen Dank! Ihre Anfrage wurde gesendet.' });
  } catch (err) {
    console.error('SMTP send error:', err.message);
    res.status(500).json({ ok: false, message: 'Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.' });
  }
});

const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')));

app.listen(PORT, () => console.log(`FORTUNA website running on port ${PORT}`));
