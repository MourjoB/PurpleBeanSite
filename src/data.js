// src/data.js
// Central product data for the site — only the 6 product lines, with nested details.

export const products = [
  {
    id: 1,
    name: 'Green Coffee Beans',
    slug: 'green-coffee-beans',
    category: 'Green Coffee Beans',
    description: 'Unroasted Indian Arabica and Robusta beans, carefully graded and sorted for domestic and export markets.',
    image: '/green-coffee.jpg',
    types: {
      Arabica: {
        forms: ['Plantation', 'Cherry'],
        grades: ['A', 'AA', 'AAA', 'PB', 'B', 'C'],
      },
      Robusta: {
        forms: ['Plantation', 'Cherry'],
        grades: ['A', 'AA', 'AAA', 'PB', 'B', 'C'],
      },
    },
    specs: { moisture: '≤12%', origin: 'India', defects: 'As per buyer specification' },
    packing: ['50kg jute bags', 'Bulk in 1 MT lots'],
    moq: '1 MT',
    certifications: ['FSSAI', 'ISO 22000'],
    price: 'Request quote',
    features: ['Traceable lots', 'Bulk readiness', 'Sorted & graded'],
  },

  {
    id: 2,
    name: 'Roasted Coffee Beans',
    slug: 'roasted-coffee-beans',
    category: 'Roasted Coffee Beans',
    description: 'Freshly roasted Arabica and Robusta beans with configurable roast profiles and export-grade packing.',
    image: '/roasted-beans.jpg',
    types: {
      Arabica: {
        forms: ['Plantation', 'Cherry'],
        grades: ['A', 'AA', 'AAA', 'PB', 'B', 'C'],
      },
      Robusta: {
        forms: ['Plantation', 'Cherry'],
        grades: ['A', 'AA', 'AAA', 'PB', 'B', 'C'],
      },
    },
    specs: { roast: 'Light / Medium / Dark', origin: 'India', aroma: 'High' },
    packing: ['10kg bags', '25kg bags', 'Custom retail packs'],
    moq: '500 kg',
    certifications: ['FSSAI'],
    price: 'Request quote',
    features: ['Custom roast profiles', 'In-house QC lab', 'Private label'],
  },

  {
    id: 3,
    name: 'Instant Coffee Powder',
    slug: 'instant-coffee-powder',
    category: 'Instant Coffee',
    description: 'Premium spray-dried, agglomerated, and freeze-dried instant coffee powders for industrial and retail use.',
    image: '/instant-coffee.jpg',
    variants: ['Spray-Dried', 'Agglomerated', 'Freeze-Dried'],
    blends: ['100% Coffee', '80:20', '70:30', '53:47', 'Custom Blends (by request)'],
    specs: { solubility: '≥99%', moisture: '≤3%', bulkDensity: 'As per spec' },
    packing: ['25kg bags', 'Jars & retail pouches on request'],
    moq: '1 MT',
    certifications: ['FSSAI'],
    price: 'Request quote',
    features: ['High solubility', 'Industrial & retail grades', 'Custom formulation available'],
  },

  {
    id: 4,
    name: 'Chicory Products',
    slug: 'chicory-products',
    category: 'Chicory',
    description: 'Food-grade chicory: instant powders, dried root and cubes for blends and beverage manufacturers.',
    image: '/chicory.jpg',
    types: {
      Powder: [
        'Instant Chicory Powder (Light)',
        'Instant Chicory Powder (Medium)',
        'Instant Chicory Powder (Dark)',
      ],
      Roots: ['Dried Chicory Roots'],
      Cubes: ['Chicory Cubes'],
    },
    specs: { form: 'Powder / Roots / Cubes', origin: 'India' },
    packing: ['25kg bags', 'Custom retail packs'],
    moq: '1 MT',
    certifications: ['FSSAI'],
    price: 'Request quote',
    features: ['Food-grade processing', 'Blend support', 'Private label'],
  },

  {
    id: 5,
    name: 'Instant Tea',
    slug: 'instant-tea',
    category: 'Instant Tea',
    description: 'Instant tea solutions (Green & Black) with both cold-water-soluble and hot-water-soluble variants for flexible manufacturing.',
    image: '/tea.jpg',
    // structure: variants -> category -> CWS/HWS
    variants: {
      Green: {
        forms: ['Instant Green CWS (Cold Water Soluble)', 'Instant Green HWS (Hot Water Soluble)'],
      },
      Black: {
        forms: ['Instant Black CWS (Cold Water Soluble)', 'Instant Black HWS (Hot Water Soluble)'],
      },
    },
    packing: ['25kg bulk bags', 'Custom retail packs'],
    moq: '500 kg',
    certifications: ['FSSAI'],
    price: 'Request quote',
    features: ['CTC & specialty lots', 'Blending support', 'CWS & HWS available'],
  },

  {
    id: 6,
    name: 'Maltodextrin (Brown Malto)',
    slug: 'maltodextrin',
    category: 'Maltodextrin / Premixes',
    description: 'Maltodextrin for instant premixes, flavour carriers and vending solutions — also sold as Brown Malto for beverage premix applications.',
    image: '/malto.jpg',
    variants: ['Maltodextrin (DE 10-20)', 'Brown Malto (flavoured carrier)'],
    specs: { solubility: 'High', dextroseEquivalent: 'DE 10-20 (typical)', origin: 'India' },
    packing: ['1kg, 25kg bags', 'Drums for bulk supply'],
    moq: '500 kg',
    certifications: ['FSSAI'],
    price: 'Request quote',
    features: ['Custom recipes', 'OEM/private label', 'Used in 3-in-1 premixes'],
  },
];

// ----------------- Helper utilities -----------------

// Minimal categories (kept for compatibility)
export const categories = [
  'Green Coffee Beans',
  'Roasted Coffee Beans',
  'Instant Coffee',
  'Chicory',
  'Instant Tea',
  'Maltodextrin / Premixes',
];

// Quick search helper used by Navbar (returns {name,slug} items)
export function filterItems(items = products, query = '') {
  if (!query || typeof query !== 'string') return [];
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const matches = items.filter((p) => {
    const name = (p.name || '').toLowerCase();
    const slug = (p.slug || '').toLowerCase();
    const desc = (p.description || '').toLowerCase();
    const cat = (p.category || '').toLowerCase();
    const variants = (p.variants && typeof p.variants === 'object')
      ? Object.keys(p.variants).join(' ').toLowerCase() + ' ' + (Object.values(p.variants).flat().join(' ') || '')
      : ((p.variants || []).join(' ') || '').toLowerCase();
    const blends = (p.blends || []).join(' ').toLowerCase();
    return (
      name.includes(q) ||
      slug.includes(q) ||
      desc.includes(q) ||
      cat.includes(q) ||
      variants.includes(q) ||
      blends.includes(q)
    );
  });

  return matches.slice(0, 8).map((p) => ({ name: p.name, slug: p.slug }));
}

// Fetch single product by slug
export const getProductBySlug = (slug) =>
  products.find((p) => p.slug === slug) || null;

// Brief listings used for landing / cards
export const getProductSummaries = () =>
  products.map((p) => ({
    slug: p.slug,
    title: p.name,
    shortDescription: p.description,
    image: p.image,
    category: p.category,
    price: p.price,
  }));
