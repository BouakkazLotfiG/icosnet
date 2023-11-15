import React from 'react';
import CreateOrder from '../components/CreateOrder';
import { useSelector } from 'react-redux';

const Orders = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      Orders:
      <CreateOrder user={user} />
    </div>
  );
};

export default Orders;
