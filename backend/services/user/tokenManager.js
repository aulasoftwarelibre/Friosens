'use strict';

const UnauthorizedError = require('spur-errors').UnauthorizedError;

module.exports = tokenService => {
  const create = (user, ttl, cb) => {
    const payload = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      company: user.company,
      telephone: user.telephone,
      email: user.email,
      admin: user.admin,
      organization_id: user.organization_id
    };
    tokenService.create(payload, ttl, (err, token) => {
      if (err) cb(err);
      else cb(null, token);
    });
  };

  const verify = (token, cb) => {
    tokenService.verify(token, (err, payload) => {
      if (err || !payload) cb(UnauthorizedError.create('Bad token'));
      else cb(null, payload);
    });
  };

  return { create, verify };
};
