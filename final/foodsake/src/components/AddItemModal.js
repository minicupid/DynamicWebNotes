import React, { useState } from 'react';

function AddItemModal({ isOpen, onClose, onAddItem, categories }) {
  // state to store form input values
  const [name, setName] = useState(''); // name of item
  const [category, setCategory] = useState(categories[0] || ''); // default to first category
  const [expDate, setExpDate] = useState('');

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    
    // create new item object with unique ID
    const newItem = {
      id: Date.now(), // id generation using timestamp
      name: name.trim(),
      category: category,
      expDate: expDate
    };

    onAddItem(newItem);

    // reset + close form
    setName('');
    setCategory(categories[0] || '');
    setExpDate('');
    onClose();
  };

  // reset + close form
  const handleClose = () => {
    setName('');
    setCategory(categories[0] || '');
    setExpDate('');
    onClose();
  };

  // don't render if modal is not open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Item to Fridge</h2>
          <button className="modal-close-btn" onClick={handleClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="modal-form">
            
          {/* name input */}
          <div className="form-group">
            <label htmlFor="item-name">Name</label>
            <input
              type="text"
              id="item-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Milk, Apples, Chicken..."
              required
            />
          </div>

          {/* category selection */}
          <div className="form-group">
            <label htmlFor="item-category">Category</label>
            <select
              id="item-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* exp date */}
          <div className="form-group">
            <label htmlFor="item-exp-date">Expiration Date</label>
            <input
              type="date"
              id="item-exp-date"
              value={expDate}
              onChange={(e) => setExpDate(e.target.value)}
              required
              autoComplete='Off'
            />
          </div>

          {/* modal btns */}
          <div className="modal-buttons">
            <button type="button" className="btn-cancel" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemModal;

