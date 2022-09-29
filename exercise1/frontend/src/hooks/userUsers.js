import { NotificationManager } from 'react-notifications';
import { addUser, deleteUser, getUser, getUsers, updateUser } from '../services/users.services';

function useUsers() {

  const create = async (user) => {
    try {
      const newUser = await addUser(user);
      
      if (newUser?.data?._id && !newUser.data.error) {
        NotificationManager.success('User Created Successfully');
        return newUser.data;
      }else {
        if(newUser?.data?.error && typeof newUser?.data?.error === 'string')
          NotificationManager.error(newUser.data.error);
        else NotificationManager.error("Unhandled Error");
      }
    } catch (error) {
      NotificationManager.error(error);
    }
  }

  const update = async (userId, userData) => {
    try {
      const updatedUser = await updateUser(userId, userData);

      if (updatedUser?.data?._id && !updatedUser.data.error) {
        NotificationManager.success('User Updated Successfully');
        return updatedUser.data;
      }else {
        if(updatedUser?.data?.error && typeof updatedUser?.data?.error === 'string')
          NotificationManager.error(updatedUser.data.error);
        else NotificationManager.error("Unhandled Error");
      }
    } catch (error) {
      NotificationManager.error(error);
    }
  }

  const getU = async (userId, notify) => {
    try {
      const user = await getUser(userId);

      if (user?.data?._id && !user.data.error && notify) {
        NotificationManager.success('User Loaded Successfully');
        return user;
      }else {
        if(user?.data?.error && typeof user?.data?.error === 'string' )
          NotificationManager.error(user.data.error);
        else NotificationManager.error("Unhandled Error");
      }
    } catch (error) {
      NotificationManager.error(error);
    }
  }

  const deleteU = async (userId) => {
    try {
      const user = await deleteUser(userId);

      if (user?.data?._id && !user.data.error) {
        NotificationManager.success('User Deleted Successfully');
        return user;
      }else {
        if(user?.data?.error && typeof user?.data?.error === 'string')
          NotificationManager.error(user.data.error);
        else NotificationManager.error("Unhandled Error");
      }
    } catch (error) {
      NotificationManager.error(error);
    }
  }

  const getUs = async (page = 1, limit = 1000) => {
    try {
      const users = await getUsers(page, limit);
      if (users.data.length) {
        return users;
      }
    } catch (error) {
      NotificationManager.error(error);
    }
  }


  return ({
    create,
    update,
    getU,
    getUs,
    deleteU,
  });
}

export default useUsers;
