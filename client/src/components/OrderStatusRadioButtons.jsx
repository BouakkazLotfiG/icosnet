import React, { useState } from 'react';

const OrderStatusRadioButtons = ({ initialStatus, onStatusChange }) => {
  const [status, setStatus] = useState(initialStatus || 'Pending');

  const handleChange = (e) => {
    setStatus(e.target.value);
    onStatusChange(e.target.value);
  };

  return (
    <div>
      <label>
        <input
          type='radio'
          value='Pending'
          checked={status === 'Pending'}
          onChange={handleChange}
        />
        Pending
      </label>

      <label>
        <input
          type='radio'
          value='Processing'
          checked={status === 'Processing'}
          onChange={handleChange}
        />
        Processing
      </label>

      <label>
        <input
          type='radio'
          value='Shipped'
          checked={status === 'Shipped'}
          onChange={handleChange}
        />
        Shipped
      </label>

      <label>
        <input
          type='radio'
          value='Delivered'
          checked={status === 'Delivered'}
          onChange={handleChange}
        />
        Delivered
      </label>
    </div>
  );
};

export default OrderStatusRadioButtons;
