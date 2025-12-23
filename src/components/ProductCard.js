import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const { name, price, salePrice, img } = product;

  return (
    /* ADDED className="hover-card" HERE */
    <div className="product-card hover-card" style={cardStyle}>
      <div style={imageContainer}>
        <img src={img} alt={name} style={imgStyle} />
        {salePrice && <span style={saleBadge}>SALE</span>}
      </div>
      
      <div style={infoStyle}>
        <h4 style={nameStyle}>{name}</h4>
        <div style={priceRow}>
          {salePrice ? (
            <>
              <span style={oldPrice}>${price}</span>
              <span style={currentPrice}>${salePrice}</span>
            </>
          ) : (
            <span style={currentPrice}>${price}</span>
          )}
        </div>
        <button 
          onClick={() => onAddToCart(product)} 
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#cc0000'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#000'}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// ... (Styles stay the same)
const cardStyle = { border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', background: '#fff' };
const imageContainer = { position: 'relative', width: '100%', aspectRatio: '1/1', background: '#f9f9f9' };
const imgStyle = { width: '100%', height: '100%', objectFit: 'contain' };
const saleBadge = { position: 'absolute', top: '10px', left: '10px', backgroundColor: '#cc0000', color: '#fff', padding: '2px 8px', fontSize: '12px', fontWeight: 'bold', borderRadius: '3px' };
const infoStyle = { padding: '15px', textAlign: 'center' };
const nameStyle = { fontSize: '15px', fontWeight: '700', marginBottom: '10px', height: '40px', overflow: 'hidden' };
const priceRow = { marginBottom: '15px', display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center' };
const oldPrice = { textDecoration: 'line-through', color: '#888', fontSize: '13px' };
const currentPrice = { color: '#333', fontWeight: 'bold', fontSize: '18px' };
const buttonStyle = { width: '100%', padding: '10px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', transition: '0.3s' };

export default ProductCard;