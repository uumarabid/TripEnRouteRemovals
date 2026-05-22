import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { ZodError } from 'zod'
import { contactSchema } from '../schemas/contact.js'
import { sendContactEmail } from '../services/mailer.js'

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please try again later.',
  },
})

export const contactRouter = Router()

contactRouter.post('/', contactLimiter, async (req, res, next) => {
  try {
    const data = contactSchema.parse(req.body)
    await sendContactEmail(data)
    res.json({ success: true, message: 'Thank you. We will contact you shortly.' })
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        success: false,
        errors: error.flatten().fieldErrors,
      })
      return
    }
    next(error)
  }
})
