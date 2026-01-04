function App() {
  return (
    <div style={{
      fontFamily: "'Segoe UI', 'Inter', -apple-system, sans-serif",
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      background: '#0f172a',
      color: '#f8fafc',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>

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

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
        
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        
        @keyframes fade {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @media (max-width: 768px) {
          h1 { font-size: 2.5rem; }
          .main-container { padding: 1rem; }
        }
      `}</style>
    </div>
  );
}

export default App;
