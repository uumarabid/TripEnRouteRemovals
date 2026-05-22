import nodemailer from 'nodemailer'
import type { ContactInput } from '../schemas/contact.js'

const getTransporter = () => {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT ?? 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    return null
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })
}

const formatContactEmail = (data: ContactInput) => {
  const lines = [
    'New contact form submission — Trip En Route Removals',
    '',
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone ?? 'Not provided'}`,
    `Service: ${data.serviceType ?? 'Not specified'}`,
    '',
    'Message:',
    data.message,
    '',
    `Submitted at: ${new Date().toISOString()}`,
  ]
  return lines.join('\n')
}

export const sendContactEmail = async (data: ContactInput) => {
  const transporter = getTransporter()
  if (!transporter) {
    throw new Error('SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.')
  }

  const to = process.env.CONTACT_TO ?? 'Travel@tripenroute.co.uk'
  const from =
    process.env.CONTACT_FROM ?? '"Trip En Route Website" <noreply@tripenroute.co.uk>'

  await transporter.sendMail({
    from,
    to,
    replyTo: data.email,
    subject: `Quote request from ${data.firstName} ${data.lastName}`,
    text: formatContactEmail(data),
  })
}
