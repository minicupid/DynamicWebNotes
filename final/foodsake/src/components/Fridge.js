import React, { useState, useEffect } from 'react';
import Category from './Category';
import AddItemModal from './AddItemModal';

function Fridge() {
  const [items, setItems] = useState(() => {
    // load items from localStorage on initial render
    try {
      const storedItems = localStorage.getItem('items');
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error('Error loading items from localStorage:', error);
      return [];
    }
  });

  const categories = ['Produce', 'Meat', 'Dairy', 'Leftovers', 'Pantry', 'Beverage'];

  // save items to localStorage whenever items state changes
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // add new item to items array
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // delete item from items array by id
  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId)); // filter out the item with the matching id
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="categories-container">
        <div className="categories-grid">
          {categories.map((category) => (
            <Category key={category} category={category} items={items} onDeleteItem={deleteItem} />
          ))}
        </div>  

        <button className="fab" onClick={openModal} >
          +
        </button>

        <AddItemModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onAddItem={addItem}
          categories={categories}
        />
      </div>
    </>
  );
}

export default Fridge;
