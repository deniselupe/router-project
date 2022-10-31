import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const OrderSummary = () => {
  const navigate = useNavigate();
  useDocumentTitle('Order Summary');

  return (
    <div>
      <h2>Order Summary Details</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Maecenas convallis neque vitae est varius, quis lobortis nisl 
        condimentum. Curabitur sit amet diam nec ipsum molestie malesuada 
        quis id urna. Praesent vulputate sed diam nec convallis. 
        Vestibulum a est sem. Nullam commodo ex et aliquam commodo. Aliquam 
        at blandit neque. Sed finibus fermentum interdum. Cras luctus dapibus 
        magna et sollicitudin. In consequat faucibus luctus. Ut felis leo, 
        viverra vel sapien id, fringilla hendrerit ex. Donec ultricies faucibus 
        erat, sed placerat massa convallis et. Curabitur aliquam consequat est, 
        et interdum lectus consectetur et.
      </p>
      <br/>
      <button type="button" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default OrderSummary;
