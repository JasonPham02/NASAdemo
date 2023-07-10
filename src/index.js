import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

createRoot(document.getElementById('app')).render(<App />);

if (module.hot) {
  module.hot.accept(function() {
    window.location.reload();
  });
}
