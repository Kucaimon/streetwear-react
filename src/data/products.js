// Встроенные SVG изображения - не требуют внешних запросов
// Загружаются вместе с сайтом с GitHub Pages

const createProductImage = (emoji, bgColor, category) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="350" viewBox="0 0 300 350">
    <defs>
      <linearGradient id="bg${category}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${bgColor}"/>
        <stop offset="100%" style="stop-color:#1a1a1a"/>
      </linearGradient>
    </defs>
    <rect width="300" height="350" fill="url(#bg${category})"/>
    <text x="150" y="160" font-size="80" text-anchor="middle">${emoji}</text>
    <text x="150" y="220" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">${category.toUpperCase()}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const createCategoryImage = (emoji, bgColor, name) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="350" height="400" viewBox="0 0 350 400">
    <defs>
      <linearGradient id="cat${name}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${bgColor}"/>
        <stop offset="100%" style="stop-color:#0a0a0a"/>
      </linearGradient>
    </defs>
    <rect width="350" height="400" fill="url(#cat${name})"/>
    <text x="175" y="180" font-size="100" text-anchor="middle">${emoji}</text>
    <text x="175" y="260" font-family="Arial Black" font-size="24" fill="#fff" text-anchor="middle">${name}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const products = [
  {
    id: '1',
    name: 'URBAN HOODIE',
    price: 89.99,
    category: 'hoodies',
    rating: 4.8,
    image: createProductImage('🧥', '#2d2d2d', 'hoodie'),
    badge: 'NEW'
  },
  {
    id: '2',
    name: 'STREET SNEAKERS',
    price: 129.99,
    category: 'sneakers',
    rating: 4.9,
    image: createProductImage('👟', '#c8ff00', 'sneakers'),
    badge: '-20%'
  },
  {
    id: '3',
    name: 'OVERSIZED TEE',
    price: 49.99,
    category: 't-shirts',
    rating: 4.3,
    image: createProductImage('👕', '#3a3a3a', 't-shirt')
  },
  {
    id: '4',
    name: 'TECH JACKET',
    price: 199.99,
    category: 'jackets',
    rating: 4.7,
    image: createProductImage('🧥', '#1e3a5f', 'jacket'),
    badge: 'HOT'
  },
  {
    id: '5',
    name: 'CLASSIC HOODIE',
    price: 79.99,
    category: 'hoodies',
    rating: 4.5,
    image: createProductImage('🧥', '#4a4a4a', 'hoodie')
  },
  {
    id: '6',
    name: 'RUNNER SNEAKERS',
    price: 149.99,
    category: 'sneakers',
    rating: 4.6,
    image: createProductImage('👟', '#ff6b6b', 'sneakers')
  },
  {
    id: '7',
    name: 'GRAPHIC TEE',
    price: 39.99,
    category: 't-shirts',
    rating: 4.2,
    image: createProductImage('👕', '#5a3a7a', 't-shirt'),
    badge: '-30%'
  },
  {
    id: '8',
    name: 'BOMBER JACKET',
    price: 179.99,
    category: 'jackets',
    rating: 4.8,
    image: createProductImage('🧥', '#2a4a3a', 'jacket')
  },
  {
    id: '9',
    name: 'STREET CAP',
    price: 34.99,
    category: 'accessories',
    rating: 4.4,
    image: createProductImage('🧢', '#3a2a2a', 'cap'),
    badge: 'NEW'
  },
  {
    id: '10',
    name: 'CARGO PANTS',
    price: 99.99,
    category: 'pants',
    rating: 4.6,
    image: createProductImage('👖', '#4a3a2a', 'pants')
  },
  {
    id: '11',
    name: 'CHAIN NECKLACE',
    price: 59.99,
    category: 'accessories',
    rating: 4.7,
    image: createProductImage('📿', '#5a4a3a', 'accessory')
  },
  {
    id: '12',
    name: 'VINTAGE TEE',
    price: 44.99,
    category: 't-shirts',
    rating: 4.5,
    image: createProductImage('👕', '#2a3a4a', 't-shirt'),
    badge: 'HOT'
  }
];

export const categories = [
  { id: 'hoodies', name: 'HOODIES', image: createCategoryImage('🧥', '#333', 'HOODIES') },
  { id: 'sneakers', name: 'SNEAKERS', image: createCategoryImage('👟', '#c8ff00', 'SNEAKERS') },
  { id: 'accessories', name: 'ACCESSORIES', image: createCategoryImage('🧢', '#444', 'ACCESSORIES') }
];

export const trendingProducts = products.slice(0, 4);
