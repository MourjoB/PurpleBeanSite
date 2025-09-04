// src/data.js
// Minimal, robust data API for the app.
// Keeps only the 6 main product lines and provides helper exports used across components.

export const products = [
  {
    id: 1,
    name: 'Green Coffee Beans',
    slug: 'green-coffee-beans',
    category: 'Green Coffee Beans',
    description: 'High-quality unroasted Arabica and Robusta beans for domestic supply and export.',
    image: '/green-coffee.jpg',
    specs: { moisture: '≤12%', grade: 'AA/AAA', origin: 'India' },
    packing: ['50kg jute bags'],
    moq: '1 MT',
    certifications: ['FSSAI', 'ISO 22000'],
    price: 'Request quote',
    features: ['Traceable lots', 'Bulk readiness']
  },
  {
    id: 2,
    name: 'Roasted Coffee Beans',
    slug: 'roasted-coffee-beans',
    category: 'Roasted Coffee Beans',
    description: 'Freshly roasted beans with balanced flavor and strong aroma.',
    image: '/roasted-beans.jpg',
    specs: { roast: 'Light / Medium / Dark', origin: 'India' },
    packing: ['10kg, 25kg bags'],
    moq: '500 kg',
    certifications: ['FSSAI'],
    price: 'Request quote',
    features: ['Custom roast profiles', 'QC lab']
  },
  {
    id: 3,
    name: 'Instant Coffee Powder',
    slug: 'instant-coffee-powder',
    category: 'Instant Coffee Powder',
    description: 'Premium spray-dried, agglomerated, and freeze-dried instant coffee powders.',
    image: '/instant-coffee.jpg',
    specs: { solubility: '99.5%', blends: '100% Coffee, 80:20, 70:30' },
    packing: ['25kg bags'],
    moq: '1 MT',
    certifications: ['FSSAI'],
    price: 'Request quote',
    features: ['High solubility', 'Industrial & retail grades']
  },
  {
    id: 4,
    name: 'Chicory Products',
    slug: 'chicory-products',
    category: 'Chicory Products',
    description: 'Roasted chicory root powder and coffee–chicory blends.',
    image: '/chicory.jpg',
    specs: { form: 'Roasted Powder', blends: 'Pure Chicory or Coffee Mix' },
    packing: ['25kg bags'],
    moq: '1 MT',
    certifications: ['FSSAI'],
    price: 'Request quote',
    features: ['Food-grade processing', 'Blend support']
  },
  {
    id: 5,
    name: 'Tea',
    slug: 'tea',
    category: 'Tea',
    description: 'Wide range of CTC, Green, and Specialty teas from Indian estates.',
    image: '/tea.jpg',
    specs: { variants: 'CTC, Green, Assam, Darjeeling', origin: 'India' },
    packing: ['25kg bulk bags', 'Custom retail packs'],
    moq: '500 kg',
    certifications: ['FSSAI'],
    price: 'Request quote',
    features: ['CTC & specialty lots', 'Blending support']
  },
  {
  id: 6,
  name: 'Brown Maltodextrin',
  slug: 'maltodextrin',
  category: 'Maltodextrin',
  description: 'High-quality food-grade maltodextrin powder for use in beverages, foods, and industrial formulations.',
  image: '/malto.jpg', // put malto.jpg directly inside public/
  specs: { form: 'Powder', source: 'Food-grade starch', applications: 'Beverages, coffee mixes, food products' },
  packing: ['25kg bags', 'Custom bulk packaging'],
  moq: '500 kg',
  certifications: ['FSSAI'],
  price: 'Request quote',
  features: ['Neutral taste', 'Excellent solubility', 'Food-grade quality']
}

];

// Helpful small exports used across components

// categories: kept for backward compatibility (some components import this)
export const categories = [
  'Green Coffee Beans',
  'Roasted Coffee Beans',
  'Instant Coffee Powder',
  'Chicory Products',
  'Tea',
  'Maltodextrin'
];

// Simple filter helper used by Navbar
// signature: filterItems(itemsArray, query) -> returns array of { name, slug }
export function filterItems(items = products, query = '') {
  if (!query || typeof query !== 'string') return [];
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const matches = items.filter((p) => {
    const name = (p.name || '').toLowerCase();
    const slug = (p.slug || '').toLowerCase();
    const desc = (p.description || '').toLowerCase();
    const cat = (p.category || '').toLowerCase();
    return name.includes(q) || slug.includes(q) || desc.includes(q) || cat.includes(q);
  });
  return matches.slice(0, 8).map((p) => ({ name: p.name, slug: p.slug }));
}

// Convenience getters used by pages
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug) || null;
export const getProductSummaries = () => products.map((p) => ({
  slug: p.slug,
  title: p.name,
  shortDescription: p.description,
  image: p.image,
  category: p.category,
  price: p.price,
}));

// Optional legacy export (in case some component expects `categoryStructure` or similar)
// Keep empty/minimal to avoid runtime errors where imports still exist.
export const categoryStructure = {};
