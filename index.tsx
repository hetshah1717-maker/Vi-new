import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log('Starting application mount...');
console.log('React Version:', React.version);

const rootElement = document.getElementById('root');
if (!rootElement) {
  const errorMsg = "FATAL: Could not find root element to mount to";
  console.error(errorMsg);
  throw new Error(errorMsg);
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('React application mounted successfully.');
} catch (err) {
  console.error('Error during React mount:', err);
  // Visual fallback for immediate feedback
  rootElement.innerHTML = `<div style="color:red; padding:20px; font-family:sans-serif;">
    <h1>Failed to load app</h1>
    <p>Error: ${err instanceof Error ? err.message : String(err)}</p>
  </div>`;
}