const { throwHttpErrorIfError } = require("../config/helper");
const {
    addUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
} = require("../services/users");


exports.addUserController = (req, res) => {
    const newUserData = req.body;

    addUser(newUserData)
        .then(data => {
            throwHttpErrorIfError(data, 400);
            res.send(data);
        })
        .catch(error => throwHttpErrorIfError({error}, 500));
};


exports.getUserController = (req, res) => {
    const { id } = req.params;

    getUser(id)
        .then(data => {
            throwHttpErrorIfError(data, 400);
            res.send(data);
        })
        .catch(error => throwHttpErrorIfError({error}, 500));
};


exports.getUsersController = (req, res) => {
    const { page, limit } = req.query;

    getUsers({ page, limit })
        .then(data => {
            throwHttpErrorIfError(data, 400);
            res.send(data);
        })
        .catch(error => throwHttpErrorIfError({error}, 500));
};


exports.updateUserController = (req, res) => {
    const { id } = req.params;
    const updatedUserData = req.body;

    updateUser({ id, ...updatedUserData })
        .then(data => {
            throwHttpErrorIfError(data, 400);
            res.send(data);
        })
        .catch(error => throwHttpErrorIfError({error}, 500));
};


exports.deleteUserController = (req, res) => {
    const { id } = req.params;

    deleteUser(id)
        .then(data => {
            throwHttpErrorIfError(data, 400);
            res.send(data);
        })
        .catch(error => throwHttpErrorIfError({error}, 500));
};
