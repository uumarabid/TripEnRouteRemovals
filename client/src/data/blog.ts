export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
  imageAlt: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'stress-free-house-move-checklist',
    title: 'Stress-Free House Move: A Practical UK Checklist',
    excerpt:
      'Plan your nationwide house move step by step — from decluttering to moving day.',
    date: '2025-03-12',
    image: '/images/blog-checklist.jpg',
    imageAlt: 'Moving boxes labelled and ready for transport',
    content: [
      'A successful house move starts weeks before the van arrives. Begin by decluttering room by room — fewer items means lower cost and less stress on moving day.',
      'Book your removals company early, especially if you are moving at month-end or during school holidays. Confirm access at both properties, parking permits, and whether you need packing help.',
      'Label boxes by room and mark fragile items clearly. Keep essentials — documents, medication, phone chargers — in a separate bag you carry yourself.',
      'On moving day, walk through both properties with your removals team. Trip En Route Removals will handle the heavy work so you can focus on settling in.',
    ],
  },
  {
    slug: 'office-relocation-without-downtime',
    title: 'Office Relocation Without Losing Business Momentum',
    excerpt:
      'How UK businesses plan efficient office moves with minimal disruption.',
    date: '2025-02-08',
    image: '/images/blog-office.jpg',
    imageAlt: 'Modern office space being prepared for relocation',
    content: [
      'Office moves fail when planning starts too late. Assign a move coordinator, inventory equipment, and map the new floor plan before packing begins.',
      'Consider evening or weekend moves to protect productivity. IT and telecoms should be scheduled with your removals timeline in mind.',
      'Communicate clearly with staff about what they need to pack personally versus what the removals team will handle. Trip En Route provides structured commercial moves nationwide.',
    ],
  },
  {
    slug: 'student-moving-tips',
    title: 'Student Moving Tips for Term Starts and Ends',
    excerpt:
      'Save money and hassle when moving between halls, flats, and home.',
    date: '2025-01-20',
    image: '/images/blog-student.jpg',
    imageAlt: 'Student with boxes moving into accommodation',
    content: [
      'Student moves are often smaller but still awkward — think desks, kitchenware, and seasonal clothing across multiple trips.',
      'Share a van with housemates when dates align, or book a man and van for a single efficient run. Avoid overloading cars with heavy textbooks and furniture.',
      'Book early before university towns get busy. Trip En Route offers student-friendly pricing and flexible scheduling across UK university cities.',
    ],
  },
  {
    slug: 'why-professional-piano-movers-matter',
    title: 'Why Professional Piano Movers Matter',
    excerpt:
      'Protect your instrument, your home, and yourself with specialist piano removals.',
    date: '2024-12-05',
    image: '/images/blog-piano.jpg',
    imageAlt: 'Grand piano in a home living room',
    content: [
      'Pianos are heavy, delicate, and easily damaged by amateur moves. Internal mechanisms, legs, and finishes all require careful handling.',
      'Professional piano movers use skids, straps, and padding designed for the job. They assess stairs, doorways, and turns before lifting a single inch.',
      'Trip En Route piano removals are available nationwide — contact us with your piano type and access details for an accurate quote.',
    ],
  },
]

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug)
