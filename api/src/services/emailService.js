import nodemailer from 'nodemailer';
import config from '../config/env.js';

const createTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.GMAIL_USER,
      pass: config.GMAIL_APP_PASSWORD,
    },
  });

export const sendContactEmail = async ({ name, email, subject, message }) => {
  try {
    const transporter = createTransporter();

    const notificationMail = {
      from: `"Portfolio Contact" <${config.GMAIL_USER}>`,
      to: config.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0a0a1a;color:#e2e8f0;padding:32px;border-radius:12px;">
          <h2 style="color:#6366f1;margin-bottom:24px;">New Portfolio Message</h2>
          <div style="background:rgba(255,255,255,0.05);padding:20px;border-radius:8px;margin-bottom:20px;border:1px solid rgba(255,255,255,0.1);">
            <p style="margin:8px 0;"><strong style="color:#06b6d4;">Name:</strong> ${name}</p>
            <p style="margin:8px 0;"><strong style="color:#06b6d4;">Email:</strong> <a href="mailto:${email}" style="color:#6366f1;">${email}</a></p>
            <p style="margin:8px 0;"><strong style="color:#06b6d4;">Subject:</strong> ${subject}</p>
          </div>
          <div style="background:rgba(255,255,255,0.03);padding:20px;border-radius:8px;border:1px solid rgba(255,255,255,0.08);">
            <h3 style="color:#e2e8f0;margin-top:0;">Message:</h3>
            <p style="line-height:1.7;color:#cbd5e1;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
          <p style="color:#4a5568;font-size:12px;margin-top:24px;">Sent from wasifhafeez.dev portfolio</p>
        </div>
      `,
    };

    const autoReplyMail = {
      from: `"Wasif Hafeez" <${config.GMAIL_USER}>`,
      to: email,
      subject: `Re: ${subject} — Message Received`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0a0a1a;color:#e2e8f0;padding:32px;border-radius:12px;">
          <h2 style="color:#6366f1;">Thanks for reaching out, ${name}!</h2>
          <p style="color:#cbd5e1;line-height:1.7;">I've received your message and will get back to you within 24–48 hours.</p>
          <div style="background:rgba(255,255,255,0.05);padding:20px;border-radius:8px;margin:20px 0;border:1px solid rgba(255,255,255,0.1);">
            <h4 style="color:#06b6d4;margin-top:0;">Your message:</h4>
            <p style="color:#a0aec0;line-height:1.7;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
          <p style="color:#e2e8f0;">Best regards,<br/><strong>Wasif Hafeez</strong><br/><span style="color:#6366f1;">Full Stack Developer</span></p>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(notificationMail),
      transporter.sendMail(autoReplyMail),
    ]);

    return { success: true };
  } catch (error) {
    console.error('Email send error:', error.message);
    return { success: false, error: error.message };
  }
};
