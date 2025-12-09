import React from 'react';

// calculate days left until expiration date
const daysLeft = (expDate) => {
  const today = new Date();
  const expirationDate = new Date(expDate);
  const diffTime = expirationDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// determine expiration status
const expStatus = (expDate) => {
  const days = daysLeft(expDate);
  if (days > 2) {
    return 'fresh';
  } else if (days > -1) {
    return 'expiring';
  } else {
    return 'expired';
  }
}

function Item({ item, onDeleteItem }) {
  const days = daysLeft(item.expDate);
  const status = expStatus(item.expDate);

  const handleDelete = () => {
    onDeleteItem(item.id);
  };

  return (
    <div className="item">
      <div className="item-header">
        <div className="item-name">{item.name}</div>
        <button className="item-delete-btn" onClick={handleDelete}>
          ×
        </button>
      </div>
      <div className="item-exp">
        <span className={`item-status item-status-${status}`}>
          {status}
        </span>
        <span className="item-days">{days} days</span>
      </div>
    </div>
  );
}

export default Item;
