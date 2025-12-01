import ProductCard from './ProductCard';
import { trendingProducts } from '../data/products';

export default function TrendingSection() {
  return (
    <section className="trending" id="trending">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">TRENDING NOW</h2>
          <a href="#catalog" className="view-all-btn">VIEW ALL</a>
        </div>
        
        <div className="products-grid">
          {trendingProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

