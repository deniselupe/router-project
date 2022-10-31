import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Products = () => {
  useDocumentTitle('Products Page');

  return (
    <div>
      <h2>Products Page</h2>
      <br />
      <nav>
        <Link to="/products/featured">Featured</Link>
        <Link to="/products/new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
