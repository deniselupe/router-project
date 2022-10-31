import React from 'react';

const usersList = [
  {id: '1', name: 'Nigel', color: 'orange', owner: 'Denise', active: true},
  {id: '2', name: 'Spooky', color: 'gray', owner: 'Alex', active: true},
  {id: '3', name: 'Juice', color: 'gray and white', owner: 'James', active: false}
];

export const UserContext = React.createContext();

export const UserProvider  = ({ children }) => {
  return(
    <UserContext.Provider value={usersList}>{children}</UserContext.Provider>
  );
};
