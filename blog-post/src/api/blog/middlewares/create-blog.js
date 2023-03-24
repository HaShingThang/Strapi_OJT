'use strict';

/**
 * `create-blog` middleware
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const { title, description } = ctx.request.body
    if (!title) {
      ctx.badRequest('Title is required.');
      return;
    }
    if (!description) {
      ctx.badRequest('Description is required.');
      return;
    }

    await next();
  };
};
