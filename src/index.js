import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./scss/mainStyle.scss";
import "./scss/dimension-and-spacing.scss";
import "./scss/merging.scss";
import "./scss/animation.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
