// Используем Picsum.photos - более надежный CDN для изображений
// И Lorem Picsum с seed для консистентных изображений

export const products = [
  {
    id: '1',
    name: 'URBAN HOODIE',
    price: 89.99,
    category: 'hoodies',
    rating: 4.8,
    image: 'https://picsum.photos/seed/hoodie1/300/350',
    badge: 'NEW'
  },
  {
    id: '2',
    name: 'STREET SNEAKERS',
    price: 129.99,
    category: 'sneakers',
    rating: 4.9,
    image: 'https://picsum.photos/seed/sneakers1/300/350',
    badge: '-20%'
  },
  {
    id: '3',
    name: 'OVERSIZED TEE',
    price: 49.99,
    category: 't-shirts',
    rating: 4.3,
    image: 'https://picsum.photos/seed/tshirt1/300/350'
  },
  {
    id: '4',
    name: 'TECH JACKET',
    price: 199.99,
    category: 'jackets',
    rating: 4.7,
    image: 'https://picsum.photos/seed/jacket1/300/350',
    badge: 'HOT'
  },
  {
    id: '5',
    name: 'CLASSIC HOODIE',
    price: 79.99,
    category: 'hoodies',
    rating: 4.5,
    image: 'https://picsum.photos/seed/hoodie2/300/350'
  },
  {
    id: '6',
    name: 'RUNNER SNEAKERS',
    price: 149.99,
    category: 'sneakers',
    rating: 4.6,
    image: 'https://picsum.photos/seed/sneakers2/300/350'
  },
  {
    id: '7',
    name: 'GRAPHIC TEE',
    price: 39.99,
    category: 't-shirts',
    rating: 4.2,
    image: 'https://picsum.photos/seed/tshirt2/300/350',
    badge: '-30%'
  },
  {
    id: '8',
    name: 'BOMBER JACKET',
    price: 179.99,
    category: 'jackets',
    rating: 4.8,
    image: 'https://picsum.photos/seed/jacket2/300/350'
  },
  {
    id: '9',
    name: 'STREET CAP',
    price: 34.99,
    category: 'accessories',
    rating: 4.4,
    image: 'https://picsum.photos/seed/cap1/300/350',
    badge: 'NEW'
  },
  {
    id: '10',
    name: 'CARGO PANTS',
    price: 99.99,
    category: 'pants',
    rating: 4.6,
    image: 'https://picsum.photos/seed/pants1/300/350'
  },
  {
    id: '11',
    name: 'CHAIN NECKLACE',
    price: 59.99,
    category: 'accessories',
    rating: 4.7,
    image: 'https://picsum.photos/seed/necklace1/300/350'
  },
  {
    id: '12',
    name: 'VINTAGE TEE',
    price: 44.99,
    category: 't-shirts',
    rating: 4.5,
    image: 'https://picsum.photos/seed/tshirt3/300/350',
    badge: 'HOT'
  }
];

export const categories = [
  { id: 'hoodies', name: 'HOODIES', image: 'https://picsum.photos/seed/cathoodie/350/400' },
  { id: 'sneakers', name: 'SNEAKERS', image: 'https://picsum.photos/seed/catsneakers/350/400' },
  { id: 'accessories', name: 'ACCESSORIES', image: 'https://picsum.photos/seed/cataccessory/350/400' }
];

export const trendingProducts = products.slice(0, 4);
