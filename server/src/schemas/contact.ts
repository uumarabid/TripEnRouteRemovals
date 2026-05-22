import { z } from 'zod'

export const SERVICE_TYPES = [
  'house',
  'office',
  'student',
  'furniture',
  'piano',
  'man-and-van',
  'other',
] as const

export const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(100),
  lastName: z.string().min(1, 'Last name is required').max(100),
  email: z.string().email('A valid email is required'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
  phone: z.string().max(30).optional(),
  serviceType: z.enum(SERVICE_TYPES).optional(),
})

export type ContactInput = z.infer<typeof contactSchema>
