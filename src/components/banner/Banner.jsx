import React, { useState } from 'react';
import './Banner.css';

const products = [
  { id: 1, name: "Apple iPhone 14 Pro Max 128GB", price: 900, image: "/images/iphone.png" },
  { id: 2, name: "Blackmagic Pocket Cinema Camera", price: 2535, image: "/images/kamera.png" },
  { id: 3, name: "Apple Watch Series 9 GPS", price: 399, image: "/images/watch.png" },
  { id: 4, name: "AirPods Max Silver", price: 549, image: "/images/airpods.png" },
  { id: 5, name: "Samsung Galaxy Watch6", price: 369, image: "/images/galaxy-watch.png" },
  { id: 6, name: "Galaxy Z Fold5 Unlocked", price: 1799, image: "/images/galaxy-fold.png" },
  { id: 7, name: "Galaxy Buds FE Graphite", price: 99, image: "/images/galaxy-buds.png" },
  { id: 8, name: "Apple iPad 9 10.2 64GB", price: 398, image: "/images/ipad.png" },
];

const categories = [
  { id: 1, name: "Phones", icon: "📱" },
  { id: 2, name: "Smart Watches", icon: "⌚" },
  { id: 3, name: "Cameras", icon: "📷" },
  { id: 4, name: "Headphones", icon: "🎧" },
  { id: 5, name: "Computers", icon: "💻" },
  { id: 6, name: "Gaming", icon: "🎮" }
];

function ProductCard({ product, onLike, onAddCart, isLiked }) {
  const [showCart, setShowCart] = useState(false);

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setShowCart(true)}
      onMouseLeave={() => setShowCart(false)}>
      <div className="product-image">
        <button 
          className={`wishlist-btn ${isLiked ? 'liked' : ''}`}
          onClick={() => onLike(product.id)}>
          {isLiked ? '❤️' : '🤍'}
        </button>

        <img src={product.image} alt={product.name} className="product-img" />

        <button 
          className={`add-cart-btn ${showCart ? 'show' : ''}`}
          onClick={() => onAddCart(product.id)}>
          Add To Cart
        </button>
      </div>

      <div className="product-info">
        <h4>{product.name}</h4>
        <p className="price">${product.price}</p>
      </div>
    </div>
  );
}

function Banner({ onLike, onAddCart, wishlist = [] }) {
  return (
    <section className="banner-container">
      <div className="hero-banner">
        <div className="hero-content">
          <p className="hero-subtitle">Pro.Beyond.</p>
          <h1 className="hero-title">
            IPhone 14 <span>Pro</span>
          </h1>
          <p className="hero-description">
            Created to change everything for the better. For everyone
          </p>
          <button className="hero-btn">Shop Now</button>
        </div>
        <div className="hero-image">
          <img src="/images/iphone.png" alt="iPhone 14 Pro" className="hero-phone-img" />
        </div>
      </div>

      <div className="small-banners">
        <div className="small-banner ps5">
          <div className="banner-icon">🎮</div>
          <div className="banner-text">
            <h3>Playstation <span>5</span></h3>
            <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O</p>
          </div>
        </div>

        <div className="banner-column">
          <div className="small-banner airpods">
            <div className="banner-icon-small">🎧</div>
            <div className="banner-text">
              <h3>Apple<br/>AirPods <span>Max</span></h3>
              <p>Computational audio. Listen, it's powerful</p>
            </div>
          </div>

          <div className="small-banner vision">
            <div className="banner-icon-small">🥽</div>
            <div className="banner-text">
              <h3>Apple<br/>Vision <span>Pro</span></h3>
              <p>An immersive way to experience entertainment</p>
            </div>
          </div>
        </div>

        <div className="small-banner macbook">
          <div className="banner-icon">💻</div>
          <div className="banner-text">
            <h3>Macbook <span>Air</span></h3>
            <p>The new 15-inch MacBook Air makes room for more of what you love</p>
            <button className="banner-btn">Shop Now</button>
          </div>
        </div>
      </div>

      <div className="category-section">
        <h2 className="section-title">Browse By Category</h2>
        <div className="categories">
          {categories.map(cat => (
            <div key={cat.id} className="category-card">
              <div className="category-icon">{cat.icon}</div>
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="products-section">
        <div className="products-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onLike={onLike}
              onAddCart={onAddCart}
              isLiked={wishlist.includes(product.id)}
            />
          ))}
        </div>
      </div>
      <div className="discount-banner">
        <div className="discount-content">
          <h2>Big Summer <span>Sale</span></h2>
          <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
          <button className="discount-btn">Shop Now</button>
        </div>
        <div className="discount-image">💻</div>
      </div>
    </section>
  );
}

export default Banner;