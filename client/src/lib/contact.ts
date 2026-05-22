export const PHONE_DISPLAY = '+44 2036 335494'
export const EMAIL = 'Travel@tripenroute.co.uk'
export const ADDRESS_LINES = [
  '123 Mitcham Road',
  'Tooting, London',
  'SW17 9PE',
] as const

const WHATSAPP_PREFILL = 'Hi Trip En Route Removals, I would like a quote.'

export const WHATSAPP_URL =
  `https://wa.me/442036335494?text=${encodeURIComponent(WHATSAPP_PREFILL)}`

export const MAILTO_URL = `mailto:${EMAIL}`
