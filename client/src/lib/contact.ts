export const PHONE_DISPLAY = '0800 772 0036'
export const EMAIL = 'info@shiftingsolutions.co.uk'
export const ADDRESS_LINES = [
  '123 Mitcham Road',
  'Tooting, London',
  'SW17 9PE',
] as const

const WHATSAPP_PREFILL = 'Hi Shifting Solutions, I would like a quote.'

export const WHATSAPP_URL =
  `https://wa.me/448007720036?text=${encodeURIComponent(WHATSAPP_PREFILL)}`

export const MAILTO_URL = `mailto:${EMAIL}`
