/**
 * `is-auth` middleware
 */

import { Strapi } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Strapi }) => {
  return async (ctx, next) => {
    if (ctx.state.user && ctx.state.user.role.name === 'Admin' ||
      ctx.state.user && ctx.state.user.role.name === 'User'
    ) {
      await next();
    } else {
      ctx.unauthorized('you are unauthenticated.');
    }
  };
};
