import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', background: '#0a0e27', minHeight: '100vh' }}>
      
      {/* Header Navigation */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '1.5rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '2rem', color: 'white' }}>
              ⚡ Backtester Pro
            </h1>
            <p style={{ margin: '0.3rem 0 0 0', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
              Advanced NIFTY Options Backtesting Platform
            </p>
          </div>
          <div style={{ 
            background: 'rgba(255,255,255,0.2)', 
            padding: '0.8rem 1.5rem', 
            borderRadius: '50px',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white',
            fontSize: '0.95rem',
            fontWeight: '600'
          }}>
            🚀 Launching 2026
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1f3a 0%, #0f1325 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        color: 'white',
        borderBottom: '2px solid rgba(102, 126, 234, 0.2)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Master Options Trading with Visual Backtesting
          </h1>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', lineHeight: '1.6' }}>
            Backtest NIFTY & BANKNIFTY options strategies with real-time option chain synchronization, 
            paper trading simulation, and prop firm-style risk management—all in one platform.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: '600',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s'
            }}>
              Join Waitlist
            </button>
            <button style={{
              background: 'transparent',
              color: '#667eea',
              border: '2px solid #667eea',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s'
            }}>
              See Demo
            </button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section style={{ padding: '4rem 2rem', background: '#0a0e27' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white', textAlign: 'center', marginBottom: '3rem' }}>
            🎯 Complete Trading Ecosystem
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {/* Feature 1: Visual Backtesting */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
              border: '1px solid rgba(102, 126, 234, 0.3)',
              borderRadius: '15px',
              padding: '2rem',
              color: 'white',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#667eea' }}>
                Visual Backtesting
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                Watch your strategies unfold with TradingView's Charting Library integration. See every candle, every trade, every entry and exit in real-time replay mode.
              </p>
              <ul style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                <li>✓ 1-minute to 1-day timeframes</li>
                <li>✓ Drawing tools for analysis</li>
                <li>✓ Custom indicator support</li>
              </ul>
            </div>

            {/* Feature 2: Option Chain Sync */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '15px',
              padding: '2rem',
              color: 'white',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔗</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#22c55e' }}>
                Live Option Chain Sync
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                Option chain and spot chart move in perfect synchronization. Watch Greeks (Delta, Gamma, Vega, Theta), IV ranks, and OI in real-time as you analyze strategies.
              </p>
              <ul style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                <li>✓ Greeks visualization</li>
                <li>✓ IV Rank alerts</li>
                <li>✓ Strike heatmaps</li>
              </ul>
            </div>

            {/* Feature 3: Paper Trading */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(29, 78, 216, 0.15) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '15px',
              padding: '2rem',
              color: 'white',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#3b82f6' }}>
                Paper Trading Simulator
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                Simulate real trades without risk. Practice with realistic fills, slippage, and market conditions. Build confidence before live trading.
              </p>
              <ul style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                <li>✓ Real-time order execution</li>
                <li>✓ Slippage simulation</li>
                <li>✓ Position tracking</li>
              </ul>
            </div>

            {/* Feature 4: Prop Firm Risk Management */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.15) 100%)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '15px',
              padding: '2rem',
              color: 'white',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#ef4444' }}>
                Prop Firm Risk Management
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                Learn risk discipline with prop firm-style account rules. Daily loss limits, drawdown caps, and maximum leverage—just like funded accounts.
              </p>
              <ul style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                <li>✓ Daily loss limits</li>
                <li>✓ Drawdown tracking</li>
                <li>✓ Account suspension rules</li>
              </ul>
            </div>

            {/* Feature 5: Trading Journal */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(219, 39, 119, 0.15) 100%)',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              borderRadius: '15px',
              padding: '2rem',
              color: 'white',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📔</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#ec4899' }}>
                Trading Journal & Analytics
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                Document every trade with notes, screenshots, and trade reasoning. Track your psychology, win rates, and improvement metrics over time.
              </p>
              <ul style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                <li>✓ Trade notes & tags</li>
                <li>✓ Win rate tracking</li>
                <li>✓ Psychology insights</li>
              </ul>
            </div>

            {/* Feature 6: Performance Analytics */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              borderRadius: '15px',
              padding: '2rem',
              color: 'white',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📈</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#a855f7' }}>
                Advanced Analytics
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                Analyze your strategies with pro-level metrics. Win rate, risk-reward ratio, Sharpe ratio, max drawdown, and more—all visually presented.
              </p>
              <ul style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                <li>✓ Equity curves</li>
                <li>✓ Risk metrics</li>
                <li>✓ Trade statistics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, #1a1f3a 0%, #0f1325 100%)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white', textAlign: 'center', marginBottom: '1rem' }}>
            🔍 Key Capabilities
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Everything you need for professional options backtesting
          </p>

          {/* 3 Column Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* Visual Backtesting Details */}
            <div style={{
              background: 'rgba(102, 126, 234, 0.1)',
              border: '1px solid rgba(102, 126, 234, 0.2)',
              borderRadius: '12px',
              padding: '2rem',
              color: 'white'
            }}>
              <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.3rem' }}>📊 Visual Backtesting Engine</h3>
              <div style={{
                background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1rem',
                minHeight: '150px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>NIFTY 50 - 1 Min Chart</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4ade80' }}>18,542</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>+1.2% | Vol: 125,000 | TradingView Charts</div>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                TradingView Charting Library powered visualization with full drawing tools, custom indicators, and real-time strategy overlay.
              </p>
            </div>

            {/* Option Chain Sync Details */}
            <div style={{
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '12px',
              padding: '2rem',
              color: 'white'
            }}>
              <h3 style={{ color: '#22c55e', marginBottom: '1rem', fontSize: '1.3rem' }}>🔗 Chain Synchronization</h3>
              <div style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1rem',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                minHeight: '150px'
              }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', color: '#a3e635' }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td style={{ padding: '0.5rem 0' }}>NIFTY 22MAY 24500 CE</td>
                      <td style={{ textAlign: 'right' }}>Δ: 0.68</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td style={{ padding: '0.5rem 0' }}>IV Rank: 62%</td>
                      <td style={{ textAlign: 'right' }}>Γ: 0.045</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.5rem 0' }}>Spot: 24,542</td>
                      <td style={{ textAlign: 'right' }}>Θ: -8.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Real-time Greeks, IV analysis, and option chain filtering synchronized perfectly with spot movement.
              </p>
            </div>

            {/* Paper Trading Details */}
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '12px',
              padding: '2rem',
              color: 'white'
            }}>
              <h3 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.3rem' }}>💰 Paper Trading</h3>
              <div style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(29, 78, 216, 0.2))',
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1rem',
                minHeight: '150px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Account</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6' }}>₹10,00,000</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>P&L</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#22c55e' }}>+₹45,320</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Trades</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>47</div>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Risk-free simulation with realistic fills, slippage, and broker integration.
              </p>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '10px', color: 'white' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>⚙️</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Prop Firm Rules</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Daily limits, max loss, drawdown caps—learn discipline</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '10px', color: 'white' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>📔</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Trade Journaling</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Notes, screenshots, psychology tracking—improve every day</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '10px', color: 'white' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🎯</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Strategy Builder</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Visual strategy creator—no coding required</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '10px', color: 'white' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>📊</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Win Rate Analytics</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Sharpe ratio, max drawdown, risk-reward metrics</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '10px', color: 'white' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🔐</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Historical Data</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Full NIFTY/BANKNIFTY history—unlimited backtesting</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '10px', color: 'white' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>⚡</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Real-Time Alerts</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Greeks alerts, IV rank notifications, support/resistance breaks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section style={{ padding: '4rem 2rem', background: '#0a0e27' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white', textAlign: 'center', marginBottom: '3rem' }}>
            Why Choose Backtester Pro?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
            padding: '2rem',
            borderRadius: '15px',
            border: '1px solid rgba(102, 126, 234, 0.2)'
          }}>
            <div>
              <h3 style={{ color: '#667eea', marginBottom: '1.5rem' }}>🎓 Designed for Indian Traders</h3>
              <ul style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '2' }}>
                <li>✓ NIFTY &amp; BANKNIFTY focus</li>
                <li>✓ Indian expiry cycles</li>
                <li>✓ Rupee denominations</li>
                <li>✓ IST timezones</li>
                <li>✓ NSE holiday calendar</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#667eea', marginBottom: '1.5rem' }}>🚀 Built for Learning</h3>
              <ul style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '2' }}>
                <li>✓ Prop firm challenge rules</li>
                <li>✓ Risk management training</li>
                <li>✓ Psychology tracking</li>
                <li>✓ Strategy optimization</li>
                <li>✓ Community features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, #1a1f3a 0%, #0f1325 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white', textAlign: 'center', marginBottom: '1rem' }}>
            💰 Affordable &amp; Accessible
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Everything included from day one
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Basic Plan */}
            <div style={{
              background: 'rgba(102, 126, 234, 0.1)',
              border: '1px solid rgba(102, 126, 234, 0.3)',
              borderRadius: '15px',
              padding: '2rem',
              color: 'white',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Starter</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#667eea', marginBottom: '1rem' }}>
                ₹199<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)' }}>/month</span>
              </div>
              <ul style={{ textAlign: 'left', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
                <li>✓ Visual backtesting</li>
                <li>✓ Paper trading (₹10L cap)</li>
                <li>✓ Basic analytics</li>
                <li>✗ Advanced Greeks</li>
              </ul>
              <button style={{
                background: 'rgba(102, 126, 234, 0.3)',
                border: '1px solid #667eea',
                color: '#667eea',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                width: '100%',
                fontWeight: '600'
              }}>
                Get Started
              </button>
            </div>

            {/* Professional Plan (Most Popular) */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3))',
              border: '2px solid #667eea',
              borderRadius: '15px',
              padding: '2rem',
              color: 'white',
              textAlign: 'center',
              transform: 'scale(1.05)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#667eea',
                color: 'white',
                padding: '0.3rem 1rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                MOST POPULAR
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', marginTop: '0.5rem' }}>Professional</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#a3e635', marginBottom: '1rem' }}>
                ₹299<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)' }}>/month</span>
              </div>
              <ul style={{ textAlign: 'left', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
                <li>✓ Everything in Starter</li>
                <li>✓ Advanced Greeks (Δ, Γ, Θ, Ν)</li>
                <li>✓ IV Rank alerts</li>
                <li>✓ Trade journaling</li>
                <li>✓ 100+ historical sessions</li>
              </ul>
              <button style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                width: '100%',
                fontWeight: '600'
              }}>
                Start Free Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div style={{
              background: 'rgba(102, 126, 234, 0.1)',
              border: '1px solid rgba(102, 126, 234, 0.3)',
              borderRadius: '15px',
              padding: '2rem',
              color: 'white',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Enterprise</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#667eea', marginBottom: '1rem' }}>
                ₹999<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)' }}>/month</span>
              </div>
              <ul style={{ textAlign: 'left', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
                <li>✓ Everything in Professional</li>
                <li>✓ Unlimited paper trading</li>
                <li>✓ API access</li>
                <li>✓ Custom indicators</li>
                <li>✓ Priority support</li>
                <li>✓ Group accounts</li>
              </ul>
              <button style={{
                background: 'rgba(102, 126, 234, 0.3)',
                border: '1px solid #667eea',
                color: '#667eea',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                width: '100%',
                fontWeight: '600'
              }}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '4rem 2rem', background: '#0a0e27' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#667eea', marginBottom: '0.5rem' }}>
                2,500+
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>Beta Testers Joined</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#22c55e', marginBottom: '0.5rem' }}>
                10,000+
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>Backtests Completed</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.5rem' }}>
                68%
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>Avg Win Rate (Users)</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ef4444', marginBottom: '0.5rem' }}>
                99.9%
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>Uptime SLA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, #1a1f3a 0%, #0f1325 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', color: 'white', textAlign: 'center', marginBottom: '3rem' }}>
            🛠️ Enterprise Technology Stack
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem',
            textAlign: 'center'
          }}>
            {['TradingView Charting', 'React.js', 'Lightweight Charts', 'PostgreSQL', 'Firebase', 'WebSockets', 'AWS', 'Docker'].map((tech, i) => (
              <div key={i} style={{
                background: 'rgba(102, 126, 234, 0.15)',
                border: '1px solid rgba(102, 126, 234, 0.3)',
                padding: '1.5rem',
                borderRadius: '10px',
                color: 'white'
              }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Ready to Master Options Trading?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            Join 2,500+ traders already backtesting with Backtester Pro. 
            Launching in 2026 with full TradingView integration.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: 'white',
              color: '#667eea',
              border: 'none',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: '600',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              Join Waitlist
            </button>
            <button style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: '600'
            }}>
              Book Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem 2rem', background: '#0a0e27', borderTop: '1px solid rgba(102, 126, 234, 0.2)', color: 'rgba(255,255,255,0.7)', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', marginBottom: '2rem', textAlign: 'left' }}>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Product</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="#features" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Features</a></li>
                <li><a href="#pricing" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Pricing</a></li>
                <li><a href="#docs" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="#about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>About</a></li>
                <li><a href="#blog" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Blog</a></li>
                <li><a href="#contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="#terms" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Terms</a></li>
                <li><a href="#privacy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Privacy</a></li>
                <li><a href="#disclaimer" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(102, 126, 234, 0.2)', paddingTop: '2rem', textAlign: 'center' }}>
            <p>
              © 2026 Backtester Pro. Built for Indian options traders. TradingView integration coming 2026.
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '1rem' }}>
              Disclaimer: Paper trading simulations are for educational purposes only. Past performance does not guarantee future results. Always trade responsibly.
            </p>
          </div>
        </div>
      </footer>

      {/* Fun Counter Easter Egg - Fixed */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 900 }}>
        <button onClick={() => setCount(count + 1)} style={{
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
          fontWeight: 'bold'
        }}>
          {count}
        </button>
      </div>
    </div>
  );
}

export default App;
