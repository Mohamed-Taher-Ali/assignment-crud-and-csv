import useLoadUsers from '../hooks/useLoadUsers';
import { getUserInit } from '../config/helpers';
import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import './mainPage.scss';


const initUser = getUserInit();

function MainPage() {
  const { users, onDeleteUser, onUpdateUser, onCreateUser } = useLoadUsers();
  const [user, setUser] = useState(initUser);

  const onRowDeleted = (user) => {
    const deletedUser = onDeleteUser(user);
    if(deletedUser) setUser(initUser);
  }

  const onRowUpdated = (user) => {
    setUser(user);
  }

  return (
    <div>
      <UserForm
        user={user}
        onSetUser={setUser}
        onCreateUser={onCreateUser}
        onUpdateUser={onUpdateUser}
      />
      <UserList
        users={users}
        onRowDeleted={onRowDeleted}
        onRowUpdated={onRowUpdated}
      />
    </div>
  );
}

export default MainPage;
