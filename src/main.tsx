import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import UserProvider from './store/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
