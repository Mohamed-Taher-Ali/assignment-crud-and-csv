const
    {
        addUserController,
        getUserController,
        getUsersController,
        deleteUserController,
        updateUserController,
    } = require('../controllers/users'),
    router = require('express').Router();


router
    .post('/', addUserController)
    .get('/', getUsersController)
    .get('/:id', getUserController)
    .put('/:id', updateUserController)
    .delete('/:id', deleteUserController);


module.exports = router;