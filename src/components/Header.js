import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products'; // Import data for searching

const Header = ({ cartCount, onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Filter products based on search input
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5); // Limit to top 5 results

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setShowResults(e.target.value.length > 0);
  };

  return (
    <header style={headerContainerStyle}>
      <div style={topBarStyle}>
        <Link to="/" style={logoStyle}>GAME<span style={{ color: '#cc0000' }}>STOP</span></Link>
      </div>

      <nav style={navBarStyle}>
        <div style={navLinksWrapper}>
          <Link to="/" style={navLinkStyle}>HOME</Link>
          <Link to="/playstation" style={navLinkStyle}>PLAYSTATION</Link>
          <Link to="/xbox" style={navLinkStyle}>XBOX</Link>
          <Link to="/nintendo" style={navLinkStyle}>NINTENDO</Link>
        </div>

        {/* Search Bar Section */}
        <div style={searchContainerStyle}>
          <div style={searchWrapper}>
            <input 
              type="text" 
              placeholder="Search games, consoles..." 
              value={searchQuery}
              onChange={handleSearch}
              onFocus={() => searchQuery && setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)} // Delay to allow clicks
              style={searchInputStyle}
            />
            <span style={searchIconStyle}>🔍</span>
            
            {/* Live Results Dropdown */}
            {showResults && (
              <div style={resultsDropdownStyle}>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <div key={product.id} style={resultItemStyle}>
                      <img src={product.img} alt="" style={resultThumbStyle} />
                      <div style={resultInfoStyle}>
                        <div style={resultNameStyle}>{product.name}</div>
                        <div style={resultPriceStyle}>${product.salePrice || product.price}</div>
                      </div>
                      <button 
                        onClick={() => onAddToCart(product)}
                        style={quickAddButtonStyle}
                      >
                        + Add
                      </button>
                    </div>
                  ))
                ) : (
                  <div style={{ padding: '10px', fontSize: '12px' }}>No results found</div>
                )}
              </div>
            )}
          </div>

          <div style={iconGroupStyle}>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit', position: 'relative' }}>
              <span style={{ fontSize: '20px' }}>👜</span>
              {cartCount > 0 && <span style={cartBadgeStyle}>{cartCount}</span>}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

// --- New/Updated Styles ---
const searchContainerStyle = { display: 'flex', alignItems: 'center', gap: '20px', flex: 1, justifyContent: 'flex-end' };
const searchWrapper = { position: 'relative', width: '250px' };
const searchInputStyle = { width: '100%', padding: '8px 35px 8px 12px', borderRadius: '20px', border: '1px solid #ddd', fontSize: '13px', outline: 'none' };
const searchIconStyle = { position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888', pointerEvents: 'none' };

const resultsDropdownStyle = {
  position: 'absolute', top: '100%', right: 0, width: '350px', backgroundColor: '#fff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)', borderRadius: '8px', marginTop: '10px', zIndex: 2000, padding: '10px'
};

const resultItemStyle = { display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #f0f0f0', gap: '10px' };
const resultThumbStyle = { width: '40px', height: '50px', objectFit: 'cover', borderRadius: '4px' };
const resultInfoStyle = { flex: 1 };
const resultNameStyle = { fontSize: '13px', fontWeight: 'bold', color: '#333' };
const resultPriceStyle = { fontSize: '12px', color: '#cc0000', fontWeight: 'bold' };
const quickAddButtonStyle = { backgroundColor: '#000', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer' };

// (Previous header styles omitted for brevity, but keep your topBarStyle and logoStyle)
const headerContainerStyle = { width: '100%', position: 'sticky', top: 0, zIndex: 1000 };
const topBarStyle = { backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '12px 0' };
const logoStyle = { fontSize: '22px', fontWeight: '900', color: '#fff', textDecoration: 'none', letterSpacing: '2px' };
const navBarStyle = { backgroundColor: '#fff', borderBottom: '1px solid #eee', padding: '0 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px' };
const navLinksWrapper = { display: 'flex', gap: '25px' };
const navLinkStyle = { textDecoration: 'none', color: '#000', fontWeight: '600', fontSize: '12px' };
const iconGroupStyle = { display: 'flex', alignItems: 'center', gap: '20px' };
const cartBadgeStyle = { position: 'absolute', top: '-8px', right: '-10px', backgroundColor: '#cc0000', color: 'white', fontSize: '10px', borderRadius: '50%', padding: '2px 5px', fontWeight: 'bold' };

export default Header;