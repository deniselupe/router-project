import React, { useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { UserContext } from '../utils/UserContext';

const Users = () => {
  const allUsers = useContext(UserContext);
  const activeUsers = allUsers.filter(user => user.active === true);
  const [searchParams, setSearchParams] = useSearchParams({});
  const showActiveUsers = searchParams.get('filter') === 'active';

  const enableActiveFilter = () => {
    setSearchParams({filter: 'active'});
  };

  const disableActiveFilter = () => {
    setSearchParams({});
  };

  // In a way this is a factory, depending on the value
  // of showActiveUsersBool, the function either returns
  // the list of active users, or the list of all users
  // The returned array will be used to render the links in /users page
  const userRenderingList = (showActiveUsersBool) => {
    if (showActiveUsersBool) {
      return activeUsers;
    } else {
      return allUsers;
    }
  };

  return (
    <>
      <div>
        {
          userRenderingList(showActiveUsers).map(user => {
            return <h2 key={user.id}><Link to={`/users/${user.id}`}>User {user.id}</Link></h2>;
          })
        }
      </div>
      <button type="button" onClick={enableActiveFilter}>Active Users</button>
      <button type="button" onClick={disableActiveFilter}>Reset Filter</button>
    </>
  );
};

export default Users;
