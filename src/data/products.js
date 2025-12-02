// Product images from Unsplash

export const products = [
  {
    id: '1',
    name: 'URBAN HOODIE',
    price: 89.99,
    category: 'hoodies',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop',
    badge: 'NEW'
  },
  {
    id: '2',
    name: 'STREET SNEAKERS',
    price: 129.99,
    category: 'sneakers',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=500&fit=crop',
    badge: '-20%'
  },
  {
    id: '3',
    name: 'OVERSIZED TEE',
    price: 49.99,
    category: 't-shirts',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop'
  },
  {
    id: '4',
    name: 'TECH JACKET',
    price: 199.99,
    category: 'jackets',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
    badge: 'HOT'
  },
  {
    id: '5',
    name: 'CLASSIC HOODIE',
    price: 79.99,
    category: 'hoodies',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop'
  },
  {
    id: '6',
    name: 'RUNNER SNEAKERS',
    price: 149.99,
    category: 'sneakers',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop'
  },
  {
    id: '7',
    name: 'GRAPHIC TEE',
    price: 39.99,
    category: 't-shirts',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
    badge: '-30%'
  },
  {
    id: '8',
    name: 'BOMBER JACKET',
    price: 179.99,
    category: 'jackets',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop'
  },
  {
    id: '9',
    name: 'STREET CAP',
    price: 34.99,
    category: 'accessories',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop',
    badge: 'NEW'
  },
  {
    id: '10',
    name: 'CARGO PANTS',
    price: 99.99,
    category: 'pants',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop'
  },
  {
    id: '11',
    name: 'CHAIN NECKLACE',
    price: 59.99,
    category: 'accessories',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop'
  },
  {
    id: '12',
    name: 'VINTAGE TEE',
    price: 44.99,
    category: 't-shirts',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop',
    badge: 'HOT'
  }
];

export const categories = [
  { 
    id: 'hoodies', 
    name: 'HOODIES', 
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop'
  },
  { 
    id: 'sneakers', 
    name: 'SNEAKERS', 
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=500&fit=crop'
  },
  { 
    id: 'accessories', 
    name: 'ACCESSORIES', 
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop'
  }
];

export const trendingProducts = products.slice(0, 4);
