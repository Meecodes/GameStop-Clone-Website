import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductList = ({ title, category, products, addToCart }) => {
  const [selectedConsole, setSelectedConsole] = useState('All');

  // 1. Get products for this brand (e.g., PlayStation)
  const brandProducts = products.filter(p => p.category === category);

  // 2. Extract unique console tags (PS4, PS5, etc.) for the filter buttons
  // This takes all the console arrays and merges them into one flat list of unique names
    const consoleTags = [
    'All', 
    ...new Set(brandProducts.flatMap(p => p.console))
    ];

  // 3. Filter by the selected console tag
  const filteredProducts = selectedConsole === 'All' 
  ? brandProducts 
  : brandProducts.filter(p => p.console.includes(selectedConsole));

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h2 style={titleStyle}>{title}</h2>
        
        {/* New Filter Buttons */}
        <div style={filterGroupStyle}>
          {consoleTags.map(tag => (
            <button 
              key={tag}
              onClick={() => setSelectedConsole(tag)}
              style={{
                ...filterButtonStyle,
                backgroundColor: selectedConsole === tag ? '#cc0000' : '#f4f4f4',
                color: selectedConsole === tag ? '#fff' : '#000',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </header>

      <div style={gridStyle}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

// --- Styles ---
const containerStyle = { padding: '40px 50px', maxWidth: '1400px', margin: '0 auto' };
const headerStyle = { borderBottom: '1px solid #eee', marginBottom: '30px', paddingBottom: '20px' };
const titleStyle = { fontSize: '28px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '15px' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '30px' };
const filterGroupStyle = { display: 'flex', gap: '10px' };
const filterButtonStyle = { 
    padding: '8px 16px', 
    border: 'none', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    fontWeight: 'bold',
    fontSize: '12px',
    transition: '0.2s'
};

export default ProductList;