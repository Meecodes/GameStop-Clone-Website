import React from 'react';
import { products } from '../data/products';
import bannerImage from '../assets/Homepage_banner.PNG';

const HomePage = () => {
  const ps5Games = products.filter(p => p.category === 'playstation').slice(0, 6);
  const xboxGames = products.filter(p => p.category === 'xbox').slice(0, 6);
  const nintendoGames = products.filter(p => p.category === 'nintendo').slice(0, 6);

  return (
    <div className="homepage-container" style={{ backgroundColor: '#fff', paddingBottom: '50px' }}>
      <div style={announcementBarStyle}>We don't offer Cash on Delivery at this time.</div>

      <div style={heroSectionStyle} className="animate-row">
        <h1 style={heroTitleStyle}>11.11 <span style={{ color: '#0066ff' }}>SALE</span></h1>
        <p style={heroSubTitleStyle}>Flash deals. Crazy discounts. Only on 11.11</p>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img src={bannerImage} alt="GameStop Sale" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
      </div>

      {/* Row 1: PlayStation */}
      <div className="animate-row" style={{ animationDelay: '0.2s' }}>
        <div style={sectionHeaderStyle}><h2 style={sectionTitleStyle}>PlayStation 5 Games</h2></div>
        <div style={responsiveGridStyle}>
          {ps5Games.map(game => <GameCard key={game.id} game={game} />)}
        </div>
      </div>

      {/* Row 2: Xbox */}
      <div className="animate-row" style={{ animationDelay: '0.4s' }}>
        <div style={sectionHeaderStyle}><h2 style={sectionTitleStyle}>Xbox Series Games</h2></div>
        <div style={responsiveGridStyle}>
          {xboxGames.map(game => <GameCard key={game.id} game={game} />)}
        </div>
      </div>

      {/* Row 3: Nintendo */}
      <div className="animate-row" style={{ animationDelay: '0.6s' }}>
        <div style={sectionHeaderStyle}><h2 style={sectionTitleStyle}>Nintendo Switch Games</h2></div>
        <div style={responsiveGridStyle}>
          {nintendoGames.map(game => <GameCard key={game.id} game={game} />)}
        </div>
      </div>
    </div>
  );
};

const GameCard = ({ game }) => (
  <div style={gameCardStyle} className="hover-card">
    <div style={imageWrapperStyle}>
      <img src={game.img} alt={game.name} style={gameImageStyle} />
      {game.salePrice && <div style={saleBadgeStyle}>SALE</div>}
    </div>
    <h3 style={gameNameStyle}>{game.name}</h3>
    <div style={priceContainerStyle}>
      {game.salePrice ? (
        <>
          <span style={originalPriceStyle}>${game.price}</span>
          <span style={salePriceStyle}>${game.salePrice}</span>
        </>
      ) : (
        <span style={normalPriceStyle}>${game.price}</span>
      )}
    </div>
  </div>
);

// ... (Styles remain the same as your provided code)
const announcementBarStyle = { backgroundColor: '#cc0000', color: 'white', textAlign: 'center', padding: '8px 0', fontSize: '13px', fontWeight: 'bold' };
const heroSectionStyle = { background: 'linear-gradient(to bottom, #e3f2fd 0%, #ffffff 100%)', padding: '60px 20px 0px 20px', textAlign: 'center' };
const heroTitleStyle = { fontSize: '120px', fontWeight: '900', color: '#0066ff', margin: '0', lineHeight: '1' };
const heroSubTitleStyle = { fontSize: '42px', fontWeight: '700', color: '#333', marginTop: '10px', marginBottom: '30px' };
const sectionHeaderStyle = { textAlign: 'center', padding: '60px 0 20px 0' };
const sectionTitleStyle = { fontSize: '36px', fontWeight: '900', textTransform: 'uppercase', fontStyle: 'italic' };
const responsiveGridStyle = { display: 'flex', flexWrap: 'nowrap', overflow: 'hidden', gap: '20px', padding: '20px 50px', maxWidth: '1400px', margin: '0 auto', justifyContent: 'flex-start' };
const gameCardStyle = { textAlign: 'center', flex: '0 0 180px', minWidth: '180px', padding: '10px', borderRadius: '8px' };
const imageWrapperStyle = { position: 'relative', borderRadius: '4px', overflow: 'hidden', aspectRatio: '2/3', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' };
const gameImageStyle = { width: '100%', height: '100%', objectFit: 'cover' };
const saleBadgeStyle = { position: 'absolute', top: '8px', right: '8px', backgroundColor: '#cc0000', color: 'white', padding: '2px 6px', fontSize: '11px', fontWeight: 'bold', borderRadius: '3px' };
const gameNameStyle = { fontSize: '14px', fontWeight: '700', margin: '10px 0 5px 0', color: '#333', height: '40px', overflow: 'hidden' };
const priceContainerStyle = { display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center' };
const originalPriceStyle = { textDecoration: 'line-through', color: '#888', fontSize: '12px' };
const salePriceStyle = { color: '#cc0000', fontWeight: 'bold', fontSize: '16px' };
const normalPriceStyle = { color: '#333', fontWeight: 'bold', fontSize: '16px' };

export default HomePage;