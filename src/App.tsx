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
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Page Title */}
      <h1>Option Backtesting Platform</h1>

      {/* Project Description */}
      <section style={{ maxWidth: '600px', margin: '2rem auto', textAlign: 'left' }}>
        <p>
          This platform is focused on <strong>options trading</strong> and provides:
        </p>
        <ul>
          <li>Historical option chain data</li>
          <li>Option chain analysis tools</li>
          <li>Underlying index spot charts for strategy simulation</li>
        </ul>
        <p>
          Traders can visualize and backtest strategies in a fast, intuitive, and data-driven environment.
        </p>
        <p>
          <strong>Contact:</strong> <a href="mailto:your-email@example.com">your-email@example.com</a>
        </p>
      </section>

      {/* Fun Counter Section (Optional) */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
