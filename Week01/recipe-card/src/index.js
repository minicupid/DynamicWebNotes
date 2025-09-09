// import react libraries
import React from 'react';
// and react-dom libraries! allows us to write JSX for web apps
import ReactDOM from 'react-dom/client';
// to use a component, we need to import it first
import App from './App';

// optuional: we can import css files here
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);