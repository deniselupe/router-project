import React from 'react';
import { useAuth } from '../utils/AuthContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Profile = () => {
  const auth = useAuth();

  useDocumentTitle('Profile Page');

  return (
    <div>
      <h2>Welcome, {auth.user}</h2>
    </div>
  );
};

export default Profile;
