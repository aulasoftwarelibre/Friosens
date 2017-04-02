'use strict';

const NotFoundError = require('spur-errors').NotFoundError;

module.exports = UserEntity => {
  const findOneById = (id, cb) => {
    const query = { id };
    UserEntity.one(query, cb);
  };

  const findByEmail = (email, cb) => {
    const query = { email };
    UserEntity.findOne(query, cb);
  };

  const create = (user, cb) => {
    UserEntity.create(user, cb);
  };

  return { findOneById, create, findByEmail };
};