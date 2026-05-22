export interface Service {
  slug: string
  title: string
  shortDescription: string
  description: string
  highlights: string[]
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    slug: 'house',
    title: 'House Removals',
    shortDescription:
      'Full home moves planned with care — packing, transport, and unpacking support nationwide.',
    description:
      'Moving house does not have to be overwhelming. Trip En Route Removals handles everything from careful packing to secure transport and optional unpacking. Our trained team works to your timeline so you can settle into your new home with confidence, whether you are moving across town or across the UK.',
    highlights: [
      'Full packing and unpacking options',
      'Furniture dismantling and reassembly',
      'Fully insured transport',
      'Flexible scheduling',
    ],
    image: '/images/house-removals.jpg',
    imageAlt: 'Professional movers carrying boxes into a new home',
  },
  {
    slug: 'office',
    title: 'Office Removals',
    shortDescription:
      'Minimise downtime with efficient commercial relocations for businesses of every size.',
    description:
      'Relocating your office demands precision and speed. We plan every detail — IT equipment, desks, filing, and specialist items — so your team can return to work quickly. From single rooms to multi-site moves, we deliver professional office removals across the UK.',
    highlights: [
      'Out-of-hours moves available',
      'Secure handling of equipment',
      'Detailed move planning',
      'Nationwide commercial coverage',
    ],
    image: '/images/office-removals.jpg',
    imageAlt: 'Office furniture and equipment being moved professionally',
  },
  {
    slug: 'student',
    title: 'Student Removals',
    shortDescription:
      'Affordable, flexible moves for halls, shared houses, and term-time relocations.',
    description:
      'Student moves should be simple and budget-friendly. We help transport belongings between university accommodation, family homes, and storage — without the stress of fitting everything into a small car. Light loads and flexible booking make us the smart choice for students nationwide.',
    highlights: [
      'Student-friendly pricing',
      'Light load specialists',
      'Flexible term-time dates',
      'UK-wide university towns',
    ],
    image: '/images/student-removals.jpg',
    imageAlt: 'Students moving belongings with professional help',
  },
  {
    slug: 'furniture',
    title: 'Furniture Removals',
    shortDescription:
      'Single items or full loads — sofas, beds, antiques, and marketplace deliveries.',
    description:
      'Need one piece moved or an entire room cleared? Our furniture removals service covers marketplace purchases, house clearances, and delicate items. We use proper equipment and padding so your furniture arrives in excellent condition, locally or long-distance.',
    highlights: [
      'Single-item and bulk moves',
      'Protective wrapping included',
      'Online purchase deliveries',
      'Stair and access expertise',
    ],
    image: '/images/furniture-removals.jpg',
    imageAlt: 'Wrapped furniture being carefully transported',
  },
  {
    slug: 'piano',
    title: 'Piano Removals',
    shortDescription:
      'Specialist piano moving with the right tools, training, and insurance.',
    description:
      'Pianos require expert handling. Our team uses specialist equipment and proven techniques to move upright and grand pianos safely — including tight staircases and awkward access. Protect your instrument and your property by choosing experienced piano movers.',
    highlights: [
      'Upright and grand pianos',
      'Specialist equipment',
      'Trained piano movers',
      'Fully insured service',
    ],
    image: '/images/piano-removals.jpg',
    imageAlt: 'Professional piano movers with specialist equipment',
  },
  {
    slug: 'man-and-van',
    title: 'Man & Van',
    shortDescription:
      'Cost-effective help for smaller loads, clearances, and quick UK relocations.',
    description:
      'Our man and van service is ideal when you need reliable help without a full removals crew. Perfect for studio flats, few items, dump runs, or customer deliveries. You get a trained removals professional — not a casual driver — at a competitive price.',
    highlights: [
      'Same-day options where available',
      'Ideal for smaller loads',
      'Trained removals staff',
      'Affordable hourly rates',
    ],
    image: '/images/man-and-van.jpg',
    imageAlt: 'Removal van with professional driver ready to help',
  },
]

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug)
