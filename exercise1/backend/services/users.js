const
    {
        addUserValidate,
        getUserValidate,
        getUsersValidate,
        updateUserValidate,
        deleteUserValidate
    } = require('../validations/users'),
    { respError, validatePhone } = require('../config/helper'),
    { User } = require('../models/user');


exports.addUser = async (newUser) => {
    const { error } = addUserValidate(newUser);
    if (error) return respError(error.message);

    if (!validatePhone(newUser.phone))
        return respError('phone not correct');

    try {
        const savedUser = new User(newUser);
        return await savedUser.save();
    } catch (error) {
        return respError(error);
    }
}


exports.updateUser = async (userFullData) => {
    const { id, ...userData } = userFullData;
    const { error } = updateUserValidate(userFullData);

    if (error) return respError(error.message);

    if (userData.phone && !validatePhone(userData.phone))
        return respError('phone not correct');

    try {
        return await User.findByIdAndUpdate(
            id,
            userData,
            {
                new: true,
                upsert: true,
            }
        );
    } catch (error) {
        return respError(error);
    }
}


exports.getUser = async (id) => {
    const { error } = getUserValidate({ id });
    if (error) return respError(error.message);

    try {
        return await User.findById(id);
    } catch (error) {
        return respError(error);
    }
}


exports.getUsers = async (data) => {
    const { page = '1', limit = '10' } = data;

    const { error } = getUsersValidate(data);
    if (error) return respError(error.message);

    const size = limit ? +limit : 10;
    const offset = page ? (page - 1) * limit : 0;

    try {
        return await User
            .find()
            .sort({ _id: -1 })
            .skip(offset)
            .limit(size);
    } catch (error) {
        return respError(error);
    }
}


exports.deleteUser = async (id) => {
    const { error } = deleteUserValidate({ id });
    if (error) return respError(error.message);

    try {
        return await User.findByIdAndDelete(id);
    } catch (error) {
        return respError(error);
    }
}
