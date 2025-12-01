import { categories } from '../data/products';

export default function CategoriesSection({ onCategoryClick }) {
  return (
    <section className="categories" id="categories">
      <div className="section-container">
        <h2 className="section-title">SHOP BY CATEGORY</h2>
        
        <div className="categories-grid">
          {categories.map(category => (
            <a 
              key={category.id}
              href="#catalog" 
              className="category-card"
              onClick={(e) => {
                e.preventDefault();
                onCategoryClick?.(category.id);
              }}
            >
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <h3 className="category-name">{category.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

