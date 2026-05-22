export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'nationwide',
    question: 'Do you cover removals nationwide across the UK?',
    answer:
      'Yes. Trip En Route Removals operates nationwide. We are based in London and regularly complete moves throughout England, Scotland, Wales, and Northern Ireland. Contact us with your locations for a tailored quote.',
  },
  {
    id: 'quote',
    question: 'How do I get a free quote?',
    answer:
      'Use our contact form, email Travel@tripenroute.co.uk, or message us on WhatsApp. Share your move dates, addresses, and what needs moving — we will respond with a clear, no-obligation estimate.',
  },
  {
    id: 'insurance',
    question: 'Are my belongings insured during the move?',
    answer:
      'We carry appropriate insurance for professional removals work. We will explain coverage details when you book. For high-value items, let us know in advance so we can advise on the best approach.',
  },
  {
    id: 'packing',
    question: 'Do you offer packing services?',
    answer:
      'Yes. We can supply materials and pack all or part of your home or office. Partial packing is popular for fragile items and busy households who prefer to handle clothes and personal items themselves.',
  },
  {
    id: 'timing',
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking as early as possible, especially at month-end and during summer. We do accommodate shorter-notice moves when availability allows — WhatsApp is the fastest way to check.',
  },
  {
    id: 'storage',
    question: 'Can you help if I need storage between properties?',
    answer:
      'We can advise on storage solutions and coordinate timing between collection and delivery. Mention your requirements when requesting a quote.',
  },
]
