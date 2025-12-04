import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
    if (email) {
      // UI-only submission - no backend logic
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', 
      background: 'linear-gradient(180deg, #0a0e27 0%, #13183d 100%)',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      
      {/* Enhanced Header Navigation - Fixed Width */}
      <header style={{
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        padding: '0.8rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ 
          maxWidth: '1100px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0.5rem 0'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.8rem',
            flexShrink: 0 
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #fff 0%, #667eea 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              color: '#0a0e27'
            }}>
              PV
            </div>
            <div>
              <h1 style={{ 
                margin: 0, 
                fontSize: '1.5rem', 
                color: 'white',
                fontWeight: '700',
                letterSpacing: '-0.5px'
              }}>
                PhirseView
              </h1>
              <p style={{ 
                margin: '0.2rem 0 0 0', 
                color: 'rgba(255,255,255,0.9)', 
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                Built for Indian Traders, by Indian.
              </p>
            </div>
          </div>
          <div style={{ 
            background: 'rgba(255,255,255,0.15)', 
            padding: '0.5rem 1.2rem', 
            borderRadius: '50px',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white',
            fontSize: '0.85rem',
            fontWeight: '600',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#4ade80',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }}></div>
            🚀 Launching 2026
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section with Email Collection */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1f3a 0%, #0f1325 100%)',
        padding: '3rem 2rem',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(102, 126, 234, 0.1)',
            padding: '0.5rem 1.2rem',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            border: '1px solid rgba(102, 126, 234, 0.3)'
          }}>
            <span style={{ color: '#667eea', fontWeight: '600' }}>✨ Exclusive Beta Access</span>
          </div>
          
          <h1 style={{ 
            fontSize: '3.2rem', 
            marginBottom: '1.2rem', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            fontWeight: '800',
            lineHeight: '1.1'
          }}>
            Master Options Trading<br />with Visual Backtesting
          </h1>
          
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'rgba(255,255,255,0.85)', 
            marginBottom: '2.5rem', 
            lineHeight: '1.6',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Backtest NIFTY & BANKNIFTY strategies with live option chain sync, 
            paper trading simulation, and pro-level risk analytics—built specifically for Indian markets.
          </p>

          {/* Email Collection Form */}
          <div style={{
            maxWidth: '550px',
            margin: '0 auto 2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}>
            <h3 style={{ 
              fontSize: '1.4rem', 
              marginBottom: '1rem', 
              color: 'white',
              fontWeight: '600'
            }}>
              🎁 Get Early Access & Exclusive Benefits
            </h3>
            <p style={{ 
              color: 'rgba(255,255,255,0.7)', 
              marginBottom: '1.5rem',
              fontSize: '0.95rem'
            }}>
              Early Subscribers – Get Your Lifetime Discount on PhirseView! It's free—just leave your email below.
            </p>
            
            {submitted ? (
              <div style={{
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '12px',
                padding: '1.2rem',
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '0.5rem',
                  color: '#22c55e'
                }}>
                  ✓
                </div>
                <p style={{ 
                  color: 'rgba(255,255,255,0.9)',
                  fontWeight: '600',
                  margin: 0
                }}>
                  Thank you! We'll contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  style={{
                    flex: '1',
                    minWidth: '250px',
                    padding: '1rem 1.5rem',
                    fontSize: '1rem',
                    borderRadius: '50px',
                    border: '2px solid rgba(102, 126, 234, 0.3)',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: 'white',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(102, 126, 234, 0.3)'}
                />
                <button 
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '1rem 2.5rem',
                    fontSize: '1rem',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
                    transition: 'all 0.3s',
                    minWidth: '150px'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Join Waitlist
                </button>
              </form>
            )}
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '1.5rem',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.85rem'
            }}>
              <span>✓ No spam ever</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span>✓ Unsubscribe anytime</span>
            </div>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#667eea' }}>1,500+</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Traders Joined</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#22c55e' }}>₹0</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Beta Access Cost</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#ec4899' }}>100%</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Made in India</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features - Enhanced */}
      <section style={{ 
        padding: '4rem 2rem', 
        background: 'rgba(10, 14, 39, 0.7)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(118, 75, 162, 0.05) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              color: 'white', 
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Everything You Need
              </span><br />
              In One Platform
            </h2>
            <p style={{ 
              color: 'rgba(255,255,255,0.7)', 
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              A complete ecosystem designed specifically for Indian derivatives trading
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.8rem',
            marginBottom: '3rem'
          }}>
            {/* Visual Backtesting */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              border: '1px solid rgba(102, 126, 234, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
              color: 'white',
              transition: 'all 0.3s',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '50%'
              }}></div>
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1.2rem',
                display: 'inline-block',
                background: 'rgba(102, 126, 234, 0.2)',
                padding: '0.8rem',
                borderRadius: '12px'
              }}>📊</div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                marginBottom: '0.8rem', 
                color: '#667eea',
                fontWeight: '600'
              }}>
                Visual Backtesting Engine
              </h3>
              <p style={{ 
                color: 'rgba(255,255,255,0.85)', 
                lineHeight: '1.6', 
                fontSize: '0.95rem',
                marginBottom: '1.2rem'
              }}>
                Watch your strategies come to life with interactive charting tools and real-time replay mode.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    background: '#667eea',
                    borderRadius: '50%'
                  }}></div>
                  Advanced charting with drawing tools
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    background: '#667eea',
                    borderRadius: '50%'
                  }}></div>
                  1-minute to 1-day timeframes
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    background: '#667eea',
                    borderRadius: '50%'
                  }}></div>
                  Custom indicator support
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    background: '#667eea',
                    borderRadius: '50%'
                  }}></div>
                  Multichart Sync and Layout
                </div>
              </div>
            </div>

            {/* Live Option Chain */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
              color: 'white',
              transition: 'all 0.3s',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: 'rgba(34, 197, 94, 0.1)',
                borderRadius: '50%'
              }}></div>
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1.2rem',
                display: 'inline-block',
                background: 'rgba(34, 197, 94, 0.2)',
                padding: '0.8rem',
                borderRadius: '12px'
              }}>🔗</div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                marginBottom: '0.8rem', 
                color: '#22c55e',
                fontWeight: '600'
              }}>
                Live Option Chain Sync
              </h3>
              <p style={{ 
                color: 'rgba(255,255,255,0.85)', 
                lineHeight: '1.6', 
                fontSize: '0.95rem',
                marginBottom: '1.2rem'
              }}>
                Real-time Greeks, IV ranks, and OI data synchronized with spot charts for precise analysis.
              </p>
              <div style={{
                display: 'inline-block',
                background: 'rgba(34, 197, 94, 0.2)',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                color: '#22c55e',
                fontWeight: '500'
              }}>
                Delta • Gamma • Vega • Theta
              </div>
            </div>

            {/* Paper Trading */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(29, 78, 216, 0.1) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
              color: 'white',
              transition: 'all 0.3s',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '50%'
              }}></div>
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1.2rem',
                display: 'inline-block',
                background: 'rgba(59, 130, 246, 0.2)',
                padding: '0.8rem',
                borderRadius: '12px'
              }}>💰</div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                marginBottom: '0.8rem', 
                color: '#3b82f6',
                fontWeight: '600'
              }}>
                Paper Trading Simulator
              </h3>
              <p style={{ 
                color: 'rgba(255,255,255,0.85)', 
                lineHeight: '1.6', 
                fontSize: '0.95rem',
                marginBottom: '1.2rem'
              }}>
                Practice with realistic fills, slippage simulation, and market conditions without risking capital.
              </p>
              <div style={{
                background: 'rgba(59, 130, 246, 0.15)',
                borderRadius: '12px',
                padding: '0.8rem',
                textAlign: 'center',
                marginTop: '1rem'
              }}>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Starting Balance</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#3b82f6' }}>₹10,00,000</div>
              </div>
            </div>
          </div>

          {/* Prop Firm Simulation */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.1) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
            color: 'white',
            transition: 'all 0.3s',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '3rem'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              background: 'rgba(245, 158, 11, 0.1)',
              borderRadius: '50%'
            }}></div>
            <div style={{ 
              fontSize: '2.5rem', 
              marginBottom: '1.2rem',
              display: 'inline-block',
              background: 'rgba(245, 158, 11, 0.2)',
              padding: '0.8rem',
              borderRadius: '12px'
            }}>🏆</div>
            <h3 style={{ 
              fontSize: '1.4rem', 
              marginBottom: '0.8rem', 
              color: '#f59e0b',
              fontWeight: '600'
            }}>
              Prop Firm Challenge Simulator
            </h3>
            <p style={{ 
              color: 'rgba(255,255,255,0.85)', 
              lineHeight: '1.6', 
              fontSize: '0.95rem',
              marginBottom: '1.2rem'
            }}>
              Practice with real prop firm rules. Experience daily loss limits, drawdown caps, and profit targets before taking the actual challenge.
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.8)'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(245, 158, 11, 0.2)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  color: '#f59e0b'
                }}>
                  ✓
                </div>
                Daily loss limits & trailing drawdown
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.8)'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(245, 158, 11, 0.2)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  color: '#f59e0b'
                }}>
                  ✓
                </div>
                Realistic profit targets (8-10%)
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.8)'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(245, 158, 11, 0.2)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  color: '#f59e0b'
                }}>
                  ✓
                </div>
                Psychology tracking & discipline scoring
              </div>
            </div>
            
            <div style={{
              background: 'rgba(245, 158, 11, 0.15)',
              borderRadius: '12px',
              padding: '1rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '3px',
                background: 'linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)',
                animation: 'progressBar 3s ease-in-out infinite'
              }}></div>
              <div style={{ 
                fontSize: '0.9rem', 
                color: 'rgba(255,255,255,0.9)',
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                Challenge Progress
              </div>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.3rem'
              }}>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Phase 1</span>
                <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#f59e0b' }}>65%</span>
              </div>
              <div style={{
                height: '6px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '3px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '65%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                  borderRadius: '3px',
                  transition: 'width 0.5s ease'
                }}></div>
              </div>
              <div style={{ 
                fontSize: '0.75rem', 
                color: 'rgba(255,255,255,0.6)',
                marginTop: '0.5rem'
              }}>
                ₹4,85,000 / ₹5,00,000 profit target
              </div>
            </div>
          </div>

          {/* Secondary Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '15px',
              padding: '1.5rem',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🛡️</div>
              <h4 style={{ 
                fontSize: '1.1rem', 
                marginBottom: '0.5rem', 
                color: '#ef4444',
                fontWeight: '600'
              }}>
                Risk Management
              </h4>
              <p style={{ 
                fontSize: '0.9rem', 
                color: 'rgba(255,255,255,0.7)',
                margin: 0
              }}>
                Daily limits & drawdown caps
              </p>
            </div>
            
            <div style={{
              background: 'rgba(236, 72, 153, 0.1)',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              borderRadius: '15px',
              padding: '1.5rem',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>📔</div>
              <h4 style={{ 
                fontSize: '1.1rem', 
                marginBottom: '0.5rem', 
                color: '#ec4899',
                fontWeight: '600'
              }}>
                Trading Journal
              </h4>
              <p style={{ 
                fontSize: '0.9rem', 
                color: 'rgba(255,255,255,0.7)',
                margin: 0
              }}>
                Psychology tracking & analytics
              </p>
            </div>
            
            <div style={{
              background: 'rgba(168, 85, 247, 0.1)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderRadius: '15px',
              padding: '1.5rem',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>📈</div>
              <h4 style={{ 
                fontSize: '1.1rem', 
                marginBottom: '0.5rem', 
                color: '#a855f7',
                fontWeight: '600'
              }}>
                Performance Metrics
              </h4>
              <p style={{ 
                fontSize: '0.9rem', 
                color: 'rgba(255,255,255,0.7)',
                margin: 0
              }}>
                Sharpe ratio & win rate analysis
              </p>
            </div>
            
            <div style={{
              background: 'rgba(251, 191, 36, 0.1)',
              border: '1px solid rgba(251, 191, 36, 0.2)',
              borderRadius: '15px',
              padding: '1.5rem',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>⚡</div>
              <h4 style={{ 
                fontSize: '1.1rem', 
                marginBottom: '0.5rem', 
                color: '#fbbf24',
                fontWeight: '600'
              }}>
                Fast Execution
              </h4>
              <p style={{ 
                fontSize: '0.9rem', 
                color: 'rgba(255,255,255,0.7)',
                margin: 0
              }}>
                Real-time data processing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview Section */}
      <section style={{ 
        padding: '4rem 2rem', 
        background: 'linear-gradient(135deg, #1a1f3a 0%, #0f1325 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              color: 'white', 
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #22c55e 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Platform Preview
              </span>
            </h2>
            <p style={{ 
              color: 'rgba(255,255,255,0.7)', 
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Experience the power of synchronized charting and option chain analysis
            </p>
          </div>

          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
            marginBottom: '3rem'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '1rem 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: '12px', height: '12px', background: '#ef4444', borderRadius: '50%' }}></div>
                <div style={{ width: '12px', height: '12px', background: '#fbbf24', borderRadius: '50%' }}></div>
                <div style={{ width: '12px', height: '12px', background: '#22c55e', borderRadius: '50%' }}></div>
              </div>
              <div style={{ 
                color: 'rgba(255,255,255,0.7)', 
                fontSize: '0.9rem',
                fontFamily: 'monospace'
              }}>
                NIFTY 50 • 1 Min Chart • Live Option Chain
              </div>
            </div>
            
            <div style={{
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: '1fr 350px',
              gap: '2rem',
              minHeight: '400px'
            }}>
              {/* Chart Area */}
              <div style={{
                background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <div style={{ 
                        fontSize: '0.9rem', 
                        color: 'rgba(255,255,255,0.7)',
                        fontWeight: '500'
                      }}>
                        NIFTY 50
                      </div>
                      <div style={{ 
                        fontSize: '2rem', 
                        fontWeight: '700',
                        color: '#4ade80'
                      }}>
                        18,542.15
                      </div>
                    </div>
                    <div style={{ 
                      background: 'rgba(34, 197, 94, 0.2)',
                      color: '#22c55e',
                      padding: '0.3rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      +1.24%
                    </div>
                  </div>
                  
                  {/* Simulated Chart */}
                  <div style={{
                    height: '200px',
                    background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))',
                    borderRadius: '8px',
                    position: 'relative',
                    marginBottom: '1rem'
                  }}>
                    {/* Chart line */}
                    <div style={{
                      position: 'absolute',
                      top: '30%',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #22c55e, transparent)',
                      animation: 'chartLine 3s ease-in-out infinite'
                    }}></div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}>
                    ↺ Replay
                  </button>
                  <button style={{
                    background: 'rgba(102, 126, 234, 0.3)',
                    border: '1px solid rgba(102, 126, 234, 0.5)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}>
                    ⚙️ Strategy
                  </button>
                  <button style={{
                    background: 'rgba(34, 197, 94, 0.3)',
                    border: '1px solid rgba(34, 197, 94, 0.5)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}>
                    📝 Journal
                  </button>
                </div>
              </div>
              
              {/* Option Chain Preview */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
                padding: '1.5rem',
                overflowY: 'auto'
              }}>
                <div style={{ 
                  color: 'white', 
                  marginBottom: '1rem',
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>
                  Option Chain (NIFTY)
                </div>
                
                {/* Chain Header */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '1rem',
                  marginBottom: '1rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  <div>CALLS</div>
                  <div style={{ textAlign: 'center' }}>STRIKE</div>
                  <div style={{ textAlign: 'right' }}>PUTS</div>
                </div>
                
                {/* Chain Rows */}
                {[
                  { strike: 18400, call: '245.15', put: '56.80' },
                  { strike: 18450, call: '195.30', put: '68.40' },
                  { strike: 18500, call: '152.75', put: '85.20' },
                  { strike: 18550, call: '118.90', put: '108.50', active: true },
                  { strike: 18600, call: '92.40', put: '138.75' },
                  { strike: 18650, call: '72.15', put: '176.90' },
                ].map((row, i) => (
                  <div 
                    key={i}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr',
                      gap: '1rem',
                      padding: '0.8rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      background: row.active ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
                      borderRadius: '4px',
                      fontSize: '0.9rem'
                    }}
                  >
                    <div style={{ color: '#ef4444', fontWeight: '500' }}>
                      {row.call} <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Δ0.68</span>
                    </div>
                    <div style={{ 
                      textAlign: 'center', 
                      color: 'white',
                      fontWeight: '600'
                    }}>
                      {row.strike.toLocaleString()}
                    </div>
                    <div style={{ 
                      textAlign: 'right', 
                      color: '#22c55e',
                      fontWeight: '500'
                    }}>
                      {row.put} <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Δ0.32</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '0.9rem',
            fontStyle: 'italic'
          }}>
            Interactive platform demo coming soon. Join waitlist for early access.
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ 
        padding: '4rem 2rem', 
        background: 'rgba(10, 14, 39, 0.7)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              color: 'white', 
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              Why <span style={{ color: '#667eea' }}>PhirseView</span>?
            </h2>
            <p style={{ 
              color: 'rgba(255,255,255,0.7)', 
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Built from the ground up for Indian traders, with features you won't find anywhere else
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(102, 126, 234, 0.2)',
              borderRadius: '15px',
              padding: '2rem',
              color: 'white',
              position: 'relative'
            }}>
              <div style={{ 
                position: 'absolute',
                top: '-15px',
                left: '2rem',
                background: '#667eea',
                color: 'white',
                padding: '0.3rem 1rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                Made in India
              </div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '1rem', 
                color: '#667eea',
                fontWeight: '600',
                marginTop: '0.5rem'
              }}>
                🇮🇳 For Indian Markets
              </h3>
              <ul style={{ 
                color: 'rgba(255,255,255,0.85)', 
                lineHeight: '1.8',
                fontSize: '0.95rem',
                paddingLeft: '1.2rem'
              }}>
                <li>NIFTY & BANKNIFTY focus</li>
                <li>Indian expiry cycles</li>
                <li>Rupee-denominated</li>
                <li>IST timezone optimized</li>
              </ul>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '15px',
              padding: '2rem',
              color: 'white',
              position: 'relative'
            }}>
              <div style={{ 
                position: 'absolute',
                top: '-15px',
                left: '2rem',
                background: '#22c55e',
                color: 'white',
                padding: '0.3rem 1rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                Learn & Grow
              </div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '1rem', 
                color: '#22c55e',
                fontWeight: '600',
                marginTop: '0.5rem'
              }}>
                🎓 Build Confidence
              </h3>
              <ul style={{ 
                color: 'rgba(255,255,255,0.85)', 
                lineHeight: '1.8',
                fontSize: '0.95rem',
                paddingLeft: '1.2rem'
              }}>
                <li>Risk-free paper trading</li>
                <li>Strategy backtesting</li>
                <li>Psychology tracking</li>
                <li>Real-time feedback</li>
              </ul>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              borderRadius: '15px',
              padding: '2rem',
              color: 'white',
              position: 'relative'
            }}>
              <div style={{ 
                position: 'absolute',
                top: '-15px',
                left: '2rem',
                background: '#ec4899',
                color: 'white',
                padding: '0.3rem 1rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                Advanced Tools
              </div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '1rem', 
                color: '#ec4899',
                fontWeight: '600',
                marginTop: '0.5rem'
              }}>
                ⚡ Professional Grade
              </h3>
              <ul style={{ 
                color: 'rgba(255,255,255,0.85)', 
                lineHeight: '1.8',
                fontSize: '0.95rem',
                paddingLeft: '1.2rem'
              }}>
                <li>Interactive charting tools</li>
                <li>Option chain visualization</li>
                <li>Scenario testing</li>
                <li>Multi-asset support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ 
        padding: '5rem 2rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)'
        }}></div>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <h2 style={{ 
            fontSize: '2.8rem', 
            marginBottom: '1.5rem', 
            color: 'white',
            fontWeight: '800',
            lineHeight: '1.1'
          }}>
            Start Trading Smarter.<br />Join the Waitlist Today.
          </h2>
          
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2.5rem', 
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Be among the first to experience the future of options trading. Early subscribers get exclusive benefits.
          </p>

          <div style={{
            maxWidth: '500px',
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{
                  flex: '1',
                  minWidth: '200px',
                  padding: '1rem 1.5rem',
                  fontSize: '1rem',
                  borderRadius: '50px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  outline: 'none'
                }}
              />
              <button 
                type="submit"
                style={{
                  background: 'white',
                  color: '#667eea',
                  border: 'none',
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: '700',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                }}
              >
                Secure My Spot
              </button>
            </form>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem',
              marginTop: '1.5rem',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.9rem'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{ fontSize: '1.2rem' }}>✓</span> No credit card required
              </span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{ fontSize: '1.2rem' }}>✓</span> Early access benefits
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '2rem 2rem', 
        background: '#0a0e27', 
        borderTop: '1px solid rgba(102, 126, 234, 0.2)', 
        color: 'rgba(255,255,255,0.7)', 
        fontSize: '0.85rem' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '1.5rem'
          }}>
            <div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.8rem',
                marginBottom: '0.5rem'
              }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  color: 'white'
                }}>
                  PV
                </div>
                <span style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: '700', 
                  color: 'white',
                  letterSpacing: '-0.5px'
                }}>
                  PhirseView
                </span>
              </div>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)' }}>
                Built for Indian traders, by Indian
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                Privacy Policy
              </a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                Terms of Service
              </a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                Contact
              </a>
            </div>
          </div>
          
          <div style={{ 
            paddingTop: '1.5rem', 
            borderTop: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center'
          }}>
            <p style={{ margin: '0.5rem 0', color: 'rgba(255,255,255,0.5)' }}>
              © 2026 PhirseView. All rights reserved.
            </p>
            <p style={{ margin: '0.5rem 0', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
              Charts Don't Lie, Legends Do.
            </p>
            <p style={{ margin: '0.5rem 0', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
              Paper trading simulations are for educational purposes only. Trading involves risk.
            </p>
          </div>
        </div>
      </footer>

      {/* Fun Counter */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 900 }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            fontSize: '1.5rem',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
          }}
        >
          {count}
        </button>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        
        @keyframes chartLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes progressBar {
          0% { background-position: -100px 0; }
          100% { background-position: 100px 0; }
        }
        
        @media (max-width: 768px) {
          header > div {
            padding: 0.5rem 1rem !important;
          }
          
          section {
            padding: 2rem 1rem !important;
          }
          
          h1 {
            font-size: 2.2rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          .demo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
