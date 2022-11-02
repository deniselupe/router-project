import React, { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { UserContext } from '../utils/UserContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const UserDetails = () => {
  const userContext = useContext(UserContext);
  const { userId } = useParams();
  const user = userContext.filter(user => user.id === userId)[0];

  useDocumentTitle('User Details Page');

  return (
    <div>
      {
        !user ? <Navigate to="/404" replace /> 
        : 
        (
          <>
            <h2>Name: {user.name}</h2>
            <h2>Color: {user.color}</h2>
            <h2>Owner: {user.owner}</h2>
          </>
        )
      }
    </div>
  );
};

export default UserDetails;
