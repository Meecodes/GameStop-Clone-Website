import React, { useState } from 'react';

const CheckoutPage = ({ cart }) => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const totalPrice = cart.reduce((sum, item) => sum + (item.salePrice || item.price), 0);

  const handlePaymentChange = (e) => {
    if (e.target.value === 'credit') {
      alert("Gateway not implemented, Cash on Delivery is available only");
      setPaymentMethod('cod'); // Reset back to COD
    } else {
      setPaymentMethod('cod');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully! We will contact you soon.");
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Checkout</h1>
      
      <form onSubmit={handleSubmit} style={checkoutLayout}>
        {/* Customer Information Section */}
        <div style={formSectionStyle}>
          <h3>Contact & Shipping</h3>
          <input type="text" placeholder="Full Name" required style={inputStyle} />
          <div style={dualInputStyle}>
            <input type="email" placeholder="Email Address" required style={inputStyle} />
            <input type="tel" placeholder="Phone Number" required style={inputStyle} />
          </div>
          <textarea placeholder="Full Shipping Address" required style={{...inputStyle, height: '100px'}} />
          
          <h3 style={{ marginTop: '30px' }}>Payment Method</h3>
          <div style={paymentOptionsStyle}>
            <label style={radioLabelStyle}>
              <input 
                type="radio" 
                value="cod" 
                checked={paymentMethod === 'cod'} 
                onChange={handlePaymentChange} 
              /> Cash on Delivery
            </label>
            <label style={radioLabelStyle}>
              <input 
                type="radio" 
                value="credit" 
                checked={paymentMethod === 'credit'} 
                onChange={handlePaymentChange} 
              /> Credit Card
            </label>
          </div>
        </div>

        {/* Order Summary Section */}
        <div style={summaryBoxStyle}>
          <h3>Order Summary</h3>
          <p>{cart.length} items in your bag</p>
          <hr />
          <div style={totalRowStyle}>
            <span>Total to Pay:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button type="submit" style={confirmButtonStyle}>Place Order</button>
        </div>
      </form>
    </div>
  );
};

// --- Styles ---
const containerStyle = { padding: '40px 50px', maxWidth: '1000px', margin: '0 auto' };
const titleStyle = { fontSize: '32px', fontWeight: '900', marginBottom: '30px', textTransform: 'uppercase' };
const checkoutLayout = { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' };
const formSectionStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const inputStyle = { padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' };
const dualInputStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' };
const paymentOptionsStyle = { display: 'flex', gap: '20px', background: '#f9f9f9', padding: '15px', borderRadius: '4px' };
const radioLabelStyle = { cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' };
const summaryBoxStyle = { background: '#000', color: '#fff', padding: '30px', borderRadius: '8px', height: 'fit-content' };
const totalRowStyle = { display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: 'bold', margin: '20px 0' };
const confirmButtonStyle = { width: '100%', padding: '15px', backgroundColor: '#cc0000', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' };

export default CheckoutPage;