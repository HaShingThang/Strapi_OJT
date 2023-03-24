'use strict';

/**
 * `is-auth` middleware
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (ctx.state.user && ctx.state.user.role.name === 'Auth'
      || ctx.state.user && ctx.state.user.role.name === 'Admin') {
      await next();
    } else {
      ctx.unauthorized('you are unauthenticated.');
    }
  };
};
