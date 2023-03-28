/**
 * `is-admin` middleware
 */

const isAuth = (config, { strapi }) => {
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

export default isAuth;
