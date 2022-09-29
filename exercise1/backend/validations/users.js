const Joi = require('joi');
const JoiObjectId = require('joi-objectid');

const JoiObjectIdFunc = JoiObjectId(Joi);


exports.addUserValidate = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        age: Joi.number().min(10).required(),
        phone: Joi.string().min(10).max(15).required(),
        email: Joi.string().email({ignoreLength: true}).required(),
    });

    return schema.validate(user);
}


exports.updateUserValidate = (user) => {
    const schema = Joi.object({
        id: JoiObjectIdFunc().required(),
        name: Joi.string().min(5).max(50).optional(),
        age: Joi.number().min(10).optional(),
        phone: Joi.string().min(10).max(15).optional(),
        email: Joi.string().email({ignoreLength: true}).optional(),
    });

    return schema.validate(user);
}


exports.getUserValidate = (userId) => {
    const schema = Joi.object({
        id: JoiObjectIdFunc().required(),
    });

    return schema.validate(userId);
}


exports.deleteUserValidate = (userId) => {
    const schema = Joi.object({
        id: JoiObjectIdFunc().required(),
    });

    return schema.validate(userId);
}


exports.getUsersValidate = (data) => {
    const schema = Joi.object({
        page: Joi.number().optional(),
        limit: Joi.number().optional(),
    });

    return schema.validate(data);
}

exports.rankValidate = (body) => {
    const schema = Joi.object({
        score: Joi.number().min(0).max(100).required(),
    });

    return schema.validate(body);
}

exports.getWordsValidate = (params) => {
    const schema = Joi.object({
        count: Joi.number().integer().min(0).optional(),
    });

    return schema.validate(params);
}
