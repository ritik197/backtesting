function App() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', 'Inter', -apple-system, sans-serif",
        width: '100vw',               // ensure full viewport width
        height: '100vh',              // ensure full viewport height
        margin: 0,                    // remove browser default margins
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: '#0f172a',
        color: '#f8fafc',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box'       // include padding inside width
      }}
    >

      {/* Subtle trading chart grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(90deg, transparent 98%, rgba(59, 130, 246, 0.05) 100%),
          linear-gradient(0deg, transparent 98%, rgba(59, 130, 246, 0.05) 100%)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.3
      }}></div>

      {/* Main content: centered and responsive */}
      <div
        className="main-container"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '900px',             // allow more room on large screens
          width: 'min(92%, 900px)',      // responsive width with margin
          margin: '0 auto',
        }}
      >

        {/* Trading indicator */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '1.5rem',
          padding: '6px 12px',
          background: 'rgba(30, 41, 59, 0.4)',
          borderRadius: '20px',
          border: '1px solid rgba(59, 130, 246, 0.2)'
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#10b981',
            animation: 'pulse 2s ease-in-out infinite'
          }}></div>
          <span style={{
            fontSize: '0.8rem',
            fontWeight: '500',
            color: '#cbd5e1',
            letterSpacing: '0.05em'
          }}>LAUNCHING 2026</span>
        </div>

        {/* Brand */}
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em'
        }}>
          PhirseView
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: '#94a3b8',
          fontWeight: '400',
          marginBottom: '2.5rem',
          letterSpacing: '0.05em'
        }}>
          Trading Analytics Platform
        </p>

        {/* Simple price line effect */}
        <div style={{
          height: '2px',
          width: '200px',
          margin: '2rem auto',
          background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
          opacity: 0.5
        }}></div>

        {/* Features - Minimal */}
        <div style={{
          fontSize: '1rem',
          color: '#e2e8f0',
          lineHeight: '1.8',
          marginBottom: '2rem'
        }}>
          <p style={{ margin: '0.8rem 0' }}>📈 Visual Backtesting – Replay historical charts</p>
          <p style={{ margin: '0.8rem 0' }}>🔗 Option Chain Playback – Full calls & puts history</p>
          <p style={{ margin: '0.8rem 0' }}>📊 Paper Trading – Risk-free simulation</p>
          <p style={{ margin: '0.8rem 0' }}>🎯 Portfolio Analytics – Track performance metrics</p>
        </div>

        {/* Simple dots */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          justifyContent: 'center',
          margin: '2rem 0'
        }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#3b82f6',
              opacity: 0.6,
              animation: `fade 1.5s ${i * 0.3}s infinite`
            }}></div>
          ))}
        </div>

        {/* Contact */}
        <p style={{
          fontSize: '0.9rem',
          color: '#94a3b8',
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(59, 130, 246, 0.1)'
        }}>
          contact: <a href="mailto:support@phirseview.in" style={{ color: '#60a5fa', textDecoration: 'none' }}>support@phirseview.in</a>
        </p>

        <footer style={{
          fontSize: '0.8rem',
          color: '#64748b',
          marginTop: '1rem'
        }}>
          © 2026 PhirseView
        </footer>

      </div>

      <style>{`
        /* Reset & ensure root fills viewport (important for some dev setups) */
        html, body, #root {
          width: 100%;
          height: 100%;
          margin: 0;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @keyframes fade {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        /* RESPONSIVE STYLES */
        @media (max-width: 1024px) {
          h1 { font-size: 3rem !important; }
        }
        @media (max-width: 768px) {
          .main-container { padding: 0 1rem; }
          h1 { font-size: 2.5rem !important; }
          p { font-size: 1rem !important; }
        }
        @media (max-width: 480px) {
          .main-container { padding: 0 0.75rem; }
          h1 { font-size: 2rem !important; }
          p { font-size: 0.9rem !important; }
        }
      `}</style>
    </div>
  );
}

export default App;
