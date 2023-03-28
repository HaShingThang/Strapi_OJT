'use strict';

export default  {
    find: async (ctx) => {
        const users = await strapi.plugins['users-permissions'].services.user.fetchAll(ctx.query);

        return users.map(user => sanitizeUser(user));
    },

    findOne: async (ctx) => {
        const user = await strapi.plugins['users-permissions'].services.user.fetch(ctx.params);

        if (!user) {
            return ctx.notFound('user.notFound');
        }

        return sanitizeUser(user);
    },

    create: async (ctx) => {
        const user = await strapi.plugins['users-permissions'].services.user.add(ctx.request.body);

        return sanitizeUser(user);
    },

    update: async (ctx) => {
        const user = await strapi.plugins['users-permissions'].services.user.edit(ctx.params, ctx.request.body);

        return sanitizeUser(user);
    },

    delete: async (ctx) => {
        const user = await strapi.plugins['users-permissions'].services.user.remove(ctx.params);

        return sanitizeUser(user);
    }
};

function sanitizeUser(user) {
    const { id, username, email, provider, confirmed, blocked, createdAt, updatedAt, role } = user;

    return {
        id,
        username,
        email,
        provider,
        confirmed,
        blocked,
        createdAt,
        updatedAt,
        role: role.type
    };
}
