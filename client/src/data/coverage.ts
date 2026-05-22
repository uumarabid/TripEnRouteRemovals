export interface CoverageRegion {
  id: string
  name: string
  description: string
  areas: string[]
}

export const coverageRegions: CoverageRegion[] = [
  {
    id: 'london',
    name: 'London & South East',
    description:
      'Our home base in Tooting with regular moves across Greater London, Surrey, Kent, and the wider South East.',
    areas: ['London', 'Tooting', 'Croydon', 'Brighton', 'Reading', 'Oxford'],
  },
  {
    id: 'south-west',
    name: 'South West',
    description: 'Reliable long-distance and regional moves throughout the South West corridor.',
    areas: ['Bristol', 'Bath', 'Exeter', 'Plymouth', 'Bournemouth', 'Southampton'],
  },
  {
    id: 'midlands',
    name: 'Midlands',
    description: 'House, office, and commercial removals connecting the heart of England.',
    areas: ['Birmingham', 'Coventry', 'Leicester', 'Nottingham', 'Derby', 'Wolverhampton'],
  },
  {
    id: 'north',
    name: 'North of England',
    description: 'From Manchester to Newcastle — professional crews for urban and suburban moves.',
    areas: ['Manchester', 'Liverpool', 'Leeds', 'Sheffield', 'York', 'Newcastle'],
  },
  {
    id: 'scotland',
    name: 'Scotland',
    description: 'Nationwide service includes Edinburgh, Glasgow, and cross-border relocations.',
    areas: ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee', 'Stirling', 'Inverness'],
  },
  {
    id: 'wales',
    name: 'Wales',
    description: 'Moves throughout Wales with careful planning for valleys and coastal routes.',
    areas: ['Cardiff', 'Swansea', 'Newport', 'Wrexham', 'Bangor', 'Aberystwyth'],
  },
  {
    id: 'northern-ireland',
    name: 'Northern Ireland',
    description: 'Cross-channel moves coordinated with clear timelines and communication.',
    areas: ['Belfast', 'Derry', 'Lisburn', 'Newry', 'Armagh', 'Bangor'],
  },
  {
    id: 'east',
    name: 'East of England',
    description: 'Cambridge to Norwich — residential and business removals across the eastern counties.',
    areas: ['Cambridge', 'Norwich', 'Ipswich', 'Peterborough', 'Luton', 'Colchester'],
  },
]
