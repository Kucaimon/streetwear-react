// Минималистичные SVG изображения - стильные градиенты без эмодзи

const createProductImage = (name, color1, color2) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="350" viewBox="0 0 300 350">
    <defs>
      <linearGradient id="g${name.replace(/\s/g,'')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color1}"/>
        <stop offset="100%" style="stop-color:${color2}"/>
      </linearGradient>
    </defs>
    <rect width="300" height="350" fill="url(#g${name.replace(/\s/g,'')})"/>
    <rect x="40" y="120" width="220" height="110" rx="8" fill="rgba(255,255,255,0.1)"/>
    <text x="150" y="185" font-family="Arial Black, sans-serif" font-size="16" fill="rgba(255,255,255,0.9)" text-anchor="middle" letter-spacing="2">${name}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const createCategoryImage = (name, color1, color2) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="350" height="400" viewBox="0 0 350 400">
    <defs>
      <linearGradient id="c${name}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color1}"/>
        <stop offset="100%" style="stop-color:${color2}"/>
      </linearGradient>
    </defs>
    <rect width="350" height="400" fill="url(#c${name})"/>
    <rect x="50" y="150" width="250" height="100" rx="10" fill="rgba(0,0,0,0.3)"/>
    <text x="175" y="210" font-family="Arial Black, sans-serif" font-size="28" fill="#fff" text-anchor="middle" letter-spacing="3">${name}</text>
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
    image: createProductImage('URBAN HOODIE', '#c8ff00', '#1a1a1a'),
    badge: 'NEW'
  },
  {
    id: '2',
    name: 'STREET SNEAKERS',
    price: 129.99,
    category: 'sneakers',
    rating: 4.9,
    image: createProductImage('STREET SNEAKERS', '#ff6b6b', '#2a1a1a'),
    badge: '-20%'
  },
  {
    id: '3',
    name: 'OVERSIZED TEE',
    price: 49.99,
    category: 't-shirts',
    rating: 4.3,
    image: createProductImage('OVERSIZED TEE', '#4a90d9', '#1a2a3a')
  },
  {
    id: '4',
    name: 'TECH JACKET',
    price: 199.99,
    category: 'jackets',
    rating: 4.7,
    image: createProductImage('TECH JACKET', '#9b59b6', '#1a1a2a'),
    badge: 'HOT'
  },
  {
    id: '5',
    name: 'CLASSIC HOODIE',
    price: 79.99,
    category: 'hoodies',
    rating: 4.5,
    image: createProductImage('CLASSIC HOODIE', '#2ecc71', '#1a2a1a')
  },
  {
    id: '6',
    name: 'RUNNER SNEAKERS',
    price: 149.99,
    category: 'sneakers',
    rating: 4.6,
    image: createProductImage('RUNNER SNEAKERS', '#e67e22', '#2a1a0a')
  },
  {
    id: '7',
    name: 'GRAPHIC TEE',
    price: 39.99,
    category: 't-shirts',
    rating: 4.2,
    image: createProductImage('GRAPHIC TEE', '#e74c3c', '#2a1a1a'),
    badge: '-30%'
  },
  {
    id: '8',
    name: 'BOMBER JACKET',
    price: 179.99,
    category: 'jackets',
    rating: 4.8,
    image: createProductImage('BOMBER JACKET', '#34495e', '#1a1a1a')
  },
  {
    id: '9',
    name: 'STREET CAP',
    price: 34.99,
    category: 'accessories',
    rating: 4.4,
    image: createProductImage('STREET CAP', '#1abc9c', '#0a2a2a'),
    badge: 'NEW'
  },
  {
    id: '10',
    name: 'CARGO PANTS',
    price: 99.99,
    category: 'pants',
    rating: 4.6,
    image: createProductImage('CARGO PANTS', '#95a5a6', '#2a2a2a')
  },
  {
    id: '11',
    name: 'CHAIN NECKLACE',
    price: 59.99,
    category: 'accessories',
    rating: 4.7,
    image: createProductImage('CHAIN NECKLACE', '#f39c12', '#2a2a1a')
  },
  {
    id: '12',
    name: 'VINTAGE TEE',
    price: 44.99,
    category: 't-shirts',
    rating: 4.5,
    image: createProductImage('VINTAGE TEE', '#8e44ad', '#1a1a2a'),
    badge: 'HOT'
  }
];

export const categories = [
  { id: 'hoodies', name: 'HOODIES', image: createCategoryImage('HOODIES', '#c8ff00', '#1a1a1a') },
  { id: 'sneakers', name: 'SNEAKERS', image: createCategoryImage('SNEAKERS', '#ff6b6b', '#1a1a1a') },
  { id: 'accessories', name: 'ACCESSORIES', image: createCategoryImage('ACCESSORIES', '#4a90d9', '#1a1a1a') }
];

export const trendingProducts = products.slice(0, 4);
