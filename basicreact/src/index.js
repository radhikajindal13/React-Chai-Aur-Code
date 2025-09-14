import React from 'react';
import ReactDOM from 'react-dom/client';
// react is the main library, but react-dom is its implementation for web, similarly
// react-native is its implementation for mobile
import App from './App';
// react makes its own DOM, and it has its own method createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />                        {/*custom tags like <br/> */}
  </React.StrictMode>
);
