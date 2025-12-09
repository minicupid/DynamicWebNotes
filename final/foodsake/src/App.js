import React from 'react';
import Fridge from './components/Fridge';
import './styles/app.css';
import './styles/category.css';
import './styles/item.css';
import './styles/modal.css';
import './styles/button.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Janice's Fridge</h1>
      </header>
      <Fridge />
    </div>
  );
}

export default App;
