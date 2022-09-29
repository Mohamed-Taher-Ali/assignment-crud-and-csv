const
  mongoose = require('mongoose'),
  schema = mongoose.Schema;

const userSchema = new schema(
  {
    name: {
      type: String,
      required: true,
      min: 5,
      max: 50
    },
    age: {
      type: Number,
      required: true,
      min: 10,
    },
    phone: {
      type: String,
      unique: true,
      required: true,
      min: 10,
      max: 15,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = {
  userSchema,
  User
}