const joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      confirmpassword: joi.string().min(6).max(32).required().label('ConfirmPassword'),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  patchuser: {
    body:{
      passwordlama:joi.string().min(6).max(32).required().label('passwordlama'),
      passwordbaru:joi.string().min(6).max(32).required().label('passwordbaru'),
      confirmpasswordbaru:joi.string().min(6).max(32).required().label('confirmpasswordbaru'),
    }

  },
};
