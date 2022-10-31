import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const NoMatchPage = () => {
  const navigate = useNavigate();
  useDocumentTitle('Page Not Found');

  return (
    <div>
      <h2>404: Page Not Found</h2>
      <button type="button" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default NoMatchPage;
