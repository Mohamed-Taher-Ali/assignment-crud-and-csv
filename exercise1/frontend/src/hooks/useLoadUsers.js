import { useEffect, useState } from "react";
import useUsers from "./userUsers";

function useLoadUsers() {
  const [users, setUsers] = useState([]);
  const { getUs, deleteU, update, create } = useUsers();

  useEffect(() => {
    getUs()
      .then(data => {
        setUsers(data.data);
      })
  }, []);

  const onDeleteUser = async (user) => {
    const confirm = window
      .confirm(`Make Sure You Will Delete ${user.name}`);

    if (!confirm) return;
    const deletedUser = await deleteU(user._id);

    if (deletedUser) {
      const updatedUsers = users.filter(({ _id }) => _id !== user._id);
      setUsers(updatedUsers);
      return deletedUser;
    }
  }

  const onUpdateUser = async ({ _id: id, ...userData }) => {
    delete userData.createdAt;
    delete userData.updatedAt;
    delete userData.__v;

    const updatedUser = await update(id, userData)

    if (updatedUser) {
      const updatedUsers = users
      .map(u => (u._id !== id ? u : { ...u, ...userData }));
      
      setUsers(updatedUsers);
      return updatedUser;
    }
  }

  const onCreateUser = async (user) => {
    const newUser = await create(user);

    if (newUser) {
      const updatedUsers = [newUser, ...users];
      setUsers(updatedUsers);
      return newUser;
    }
  }

  return {
    users,
    onDeleteUser,
    onUpdateUser,
    onCreateUser
  }
}

export default useLoadUsers;
