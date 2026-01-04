import React from 'react';

function App() {
  return (
    <div style={{
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '2rem'
    }}>

      {/* Main Brand */}
      <h1 style={{
        fontSize: '3rem',
        fontWeight: '800',
        marginBottom: '1rem',
        lineHeight: '1.1'
      }}>
        PhirseView
      </h1>

      {/* Launch Info */}
      <h2 style={{
        fontSize: '2rem',
        fontWeight: '600',
        marginBottom: '2rem',
        opacity: 0.9
      }}>
        Launching Soon in 2026
      </h2>

      {/* Features */}
      <div style={{
        fontSize: '1rem',
        opacity: 0.85,
        lineHeight: '1.8',
        marginBottom: '2rem',
        maxWidth: '500px'
      }}>
        <p>🔹 Visual Backtesting – Replay historical charts and trades</p>
        <p>🔹 Option Chain Playback – Full calls, puts & strikes exactly as they were</p>
        
        <p>🔹 Paper Trading – Performance-based simulations without real risk</p>
        <p>🔹 Portfolio Analytics – Track targets, stop-loss, and results during playback</p>
      </div>

      {/* Decorative Dot Animation */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '2rem'
      }}>
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.7)',
            animation: `bounce 1s ${i * 0.2}s infinite`
          }}></div>
        ))}
      </div>

      {/* Contact */}
      <p style={{
        fontSize: '0.95rem',
        opacity: 0.8,
        marginBottom: '1rem'
      }}>
        Contact us at <a href="mailto:support@phirseview.in" style={{ color: 'white', textDecoration: 'underline' }}>support@phirseview.in</a>
      </p>

      {/* Footer */}
      <footer style={{
        fontSize: '0.85rem',
        opacity: 0.7
      }}>
        © 2026 PhirseView. All rights reserved.
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        @media (max-width: 768px) {
          h1 { font-size: 2.5rem; }
          h2 { font-size: 1.5rem; }
          div { font-size: 0.95rem; }
        }
      `}</style>
    </div>
  );
}

export default App;
