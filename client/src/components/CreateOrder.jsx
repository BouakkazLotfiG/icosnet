import React, { useState } from 'react';
import OrderStatusRadioButtons from './OrderStatusRadioButtons';

import { createOrder } from '../api/Order';
import { useSelector } from 'react-redux';

const CreateOrder = () => {
  const [showForm, setShowForm] = useState(false);
  const user = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    status: 'Pending',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (newStatus) => {
    setFormData({ ...formData, status: newStatus });
    console.log('Selected Status:', newStatus);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('User:', user);
    const orderData = {
      ...formData,
      user: user,
    };
    console.log('Form Data:', orderData);
    const res = await createOrder(orderData);
    console.log('Response:', res);
  };

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className='bg-pink-500 text-white p-2'
      >
        Create order
      </button>

      {showForm && (
        <form className='border border-gray-200 p-6' onSubmit={handleSubmit}>
          <h1 className='text-2xl font-semibold mb-2'>Create Order</h1>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='title'
            >
              Title
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='title'
              name='title' // Add name attribute
              type='text'
              placeholder='Title'
              value={formData.title} // Add value attribute
              onChange={handleInputChange} // Add onChange handler
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='description'
            >
              Description
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='description'
              name='description' // Add name attribute
              type='text'
              placeholder='Description'
              value={formData.description} // Add value attribute
              onChange={handleInputChange} // Add onChange handler
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='price'
            >
              Price
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='price'
              name='price' // Add name attribute
              type='number'
              placeholder='Price'
              value={formData.price} // Add value attribute
              onChange={handleInputChange} // Add onChange handler
            />
          </div>
          <OrderStatusRadioButtons
            initialStatus={formData.status}
            onStatusChange={handleStatusChange}
          />
          <button type='submit' className='bg-blue-500 text-white p-2'>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateOrder;
