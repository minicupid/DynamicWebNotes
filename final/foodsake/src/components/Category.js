import React from 'react';
import Item from './Item';

// set items by expiration date (sooner to later)
const sortByExp = (itemA, itemB) => {
  const dateA = new Date(itemA.expDate);
  const dateB = new Date(itemB.expDate);
  return dateA - dateB;
}

function Category({ category, items, onDeleteItem }) {
  const categoryItems = items
    .filter((item) => item.category === category)
    .sort(sortByExp);

  return (
    <div className="category-card">
      <h2 className="category-title">{category}</h2>
      <div className="category-items">
        {categoryItems.length === 0 ? (
          <p className="empty-message">Empty</p>
        ) : (
          categoryItems.map((item) => (
            <Item key={item.id} item={item} onDeleteItem={onDeleteItem} />
          ))
        )}
      </div>
    </div>
  );
}

export default Category;
