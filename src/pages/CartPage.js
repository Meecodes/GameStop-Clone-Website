import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + (item.salePrice || item.price), 0);
  const navigate = useNavigate();

  return (
    <div style={cartContainerStyle}>
      <h1 style={titleStyle}>Your Shopping Bag ({cart.length})</h1>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p>Your cart is empty.</p>
          <Link to="/" style={continueStyle}>Continue Shopping</Link>
        </div>
      ) : (
        <div style={cartContentStyle}>
          {/* List of Items */}
          <div style={itemsListStyle}>
            {cart.map((item, index) => (
              <div key={index} style={cartItemStyle}>
                <img src={item.img} alt={item.name} style={itemImageStyle} />
                <div style={itemInfoStyle}>
                  <h3 style={{ margin: '0 0 5px 0' }}>{item.name}</h3>
                  <p style={{ color: '#888', fontSize: '12px' }}>Platform: {item.category.toUpperCase()}</p>
                  <button onClick={() => removeFromCart(index)} style={removeButtonStyle}>Remove</button>
                </div>
                <div style={itemPriceStyle}>
                  ${(item.salePrice || item.price).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Sidebar */}
          <div style={summaryBoxStyle}>
            <h3>Order Summary</h3>
            <div style={summaryRowStyle}>
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div style={summaryRowStyle}>
              <span>Shipping</span>
              <span style={{ color: 'green' }}>FREE</span>
            </div>
            <hr />
            <div style={{ ...summaryRowStyle, fontWeight: 'bold', fontSize: '18px' }}>
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button 
            onClick={() => navigate('/checkout')} 
            style={checkoutButtonStyle}
            >
            Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Styles ---
const cartContainerStyle = { padding: '40px 50px', maxWidth: '1200px', margin: '0 auto', minHeight: '70vh' };
const titleStyle = { fontSize: '32px', fontWeight: '900', borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '30px' };
const cartContentStyle = { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' };
const itemsListStyle = { display: 'flex', flexDirection: 'column', gap: '20px' };
const cartItemStyle = { display: 'flex', gap: '20px', borderBottom: '1px solid #eee', paddingBottom: '20px', alignItems: 'center' };
const itemImageStyle = { width: '80px', height: '100px', objectFit: 'cover', borderRadius: '4px' };
const itemInfoStyle = { flex: 2 };
const itemPriceStyle = { fontWeight: 'bold', fontSize: '18px' };
const removeButtonStyle = { background: 'none', border: 'none', color: '#cc0000', cursor: 'pointer', textDecoration: 'underline', padding: '0', marginTop: '10px' };
const summaryBoxStyle = { background: '#f9f9f9', padding: '30px', borderRadius: '8px', height: 'fit-content' };
const summaryRowStyle = { display: 'flex', justifyContent: 'space-between', margin: '15px 0' };
const checkoutButtonStyle = { width: '100%', padding: '15px', backgroundColor: '#cc0000', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' };
const continueStyle = { display: 'inline-block', marginTop: '20px', color: '#0066ff', textDecoration: 'none', fontWeight: 'bold' };

export default CartPage;