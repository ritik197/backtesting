import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '2rem' }}>
      {/* Header Logos */}
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" style={{ height: '80px', margin: '1rem' }} />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" style={{ height: '80px', margin: '1rem' }} />
        </a>
        <a href="https://www.tradingview.com/charting-library-docs/latest/" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/TradingView_logo.svg" 
               alt="TradingView" 
               style={{ height: '80px', margin: '1rem' }} />
        </a>
      </div>

      {/* Page Title */}
      <h1>Option Backtesting Platform</h1>
      
      {/* Launch Announcement */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '15px', 
        margin: '2rem 0',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}>
        <h2 style={{ margin: '0 0 1rem 0' }}>🚀 Launching 2026</h2>
        <p style={{ fontSize: '1.2rem', margin: '0' }}>
          Full integration with <strong>TradingView Charting Library</strong> for advanced NIFTY & BANKNIFTY options backtesting
        </p>
      </div>

      {/* Project Description */}
      <section style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'left' }}>
        <p>
          This platform is focused on <strong>options trading</strong> and provides:
        </p>
        <ul style={{ fontSize: '1.1rem' }}>
          <li>Historical option chain data for NIFTY & BANKNIFTY</li>
          <li>Advanced option chain analysis tools</li>
          <li>TradingView-powered spot charts for strategy simulation</li>
          <li>Visual backtesting with drawing tools & annotations</li>
          <li>Real-time P&L tracking and strategy optimization</li>
        </ul>
        <p style={{ background: '#f0f8ff', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
          Traders can visualize, backtest, and optimize strategies in a fast, intuitive, and data-driven environment.
        </p>
        <p>
          <strong>Coming 2026:</strong> Full TradingView Charting Library integration with advanced drawing tools, 
          multi-timeframe analysis, and real-time option chain synchronization [web:15][web:17].
        </p>
        <p>
          <strong>Contact:</strong> <a href="mailto:your-email@example.com" style={{ color: '#007bff' }}>your-email@example.com</a>
        </p>
      </section>

      {/* Feature Screenshots Gallery */}
      <section style={{ margin: '4rem 0' }}>
        <h2 style={{ color: '#333', marginBottom: '2rem' }}>Platform Preview</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {/* TradingView Chart Mockups */}
          <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <h3>NIFTY Spot Chart</h3>
            <div style={{ 
              height: '200px', 
              background: 'linear-gradient(45deg, #1e3c72 0%, #2a5298 100%)', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white', 
              fontSize: '1.2rem',
              marginTop: '1rem'
            }}>
              📈 TradingView Charting Library<br/>Advanced Candlestick Analysis
            </div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
              Real-time NIFTY charts with drawing tools [web:20].
            </p>
          </div>

          <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <h3>Option Chain View</h3>
            <div style={{ 
              height: '200px', 
              background: '#e8f5e8', 
              borderRadius: '8px', 
              padding: '1rem',
              marginTop: '1rem'
            }}>
              <div style={{ fontFamily: 'monospace', background: 'white', padding: '1rem', borderRadius: '4px', height: '140px', overflow: 'auto' }}>
                NIFTY 22MAY25 24500 CE<br/>Strike: 24500 | LTP: 152.50<br/>OI: 1,25,000 | IV: 22.5%<br/><br/>
                NIFTY 22MAY25 24500 PE<br/>Strike: 24500 | LTP: 98.25<br/>OI: 98,000 | IV: 24.1%
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
              Live option chain with Greeks & OI analysis [web:20].
            </p>
          </div>

          <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <h3>Backtesting Dashboard</h3>
            <div style={{ 
              height: '200px', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
              borderRadius: '8px', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white',
              marginTop: '1rem',
              textAlign: 'center',
              padding: '1rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊 +247%</div>
              <div style={{ fontSize: '1.2rem' }}>Strategy Win Rate: 68%</div>
              <div>Backtested: May 2024 - Dec 2025</div>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
              Visual P&L tracking across 100+ sessions [web:21].
            </p>
          </div>

          <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <h3>Drawing Tools</h3>
            <div style={{ 
              height: '200px', 
              background: '#fff3cd', 
              borderRadius: '8px', 
              marginTop: '1rem',
              padding: '1rem',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '20px', left: '20px', right: '20px', bottom: '20px',
                border: '2px dashed #ffc107',
                borderRadius: '4px'
              }}></div>
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '80px' }}>
                ✏️ Trendlines<br/>📐 Support/Resistance<br/>🎯 Entry/Exit Zones
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
              TradingView-powered annotation tools [web:15].
            </p>
          </div>
        </div>
      </section>

      {/* Fun Counter Section (Optional) */}
      <div className="card" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <button onClick={() => setCount((count) => count + 1)}>
          Strategies backtested: {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="read-the-docs" style={{ marginTop: '4rem', color: '#666' }}>
        Built with ❤️ for Indian Options Traders | Launching 2026 with TradingView™ Charting Library [web:17]
      </p>
      <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '1rem' }}>
        Click logos above to learn more about our tech stack
      </p>
    </div>
  );
}

export default App;
