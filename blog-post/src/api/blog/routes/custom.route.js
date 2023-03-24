
module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/blogs',
            handler: 'blog.find',
            config: {
                policies: ['global::is-auth'],
                middlewares: ['global::is-auth'],
            }
        },
        {
            method: 'GET',
            path: '/blogs/:id',
            handler: 'blog.findOne',
            config: {
                policies: ['global::is-auth'],
                middlewares: ['global::is-auth'],
            }
        },
        {
            method: 'POST',
            path: '/blogs',
            handler: 'blog.create',
            config: {
                policies: ['global::is-admin'],
                middlewares: ['global::is-admin', 'api::blog.create-blog'],
            }
        },
        {
            method: 'PUT',
            path: '/blogs/:id',
            handler: 'blog.update',
            config: {
                policies: ['global::is-admin'],
                middlewares: ['global::is-admin'],
            }
        },
        {
            method: 'DELETE',
            path: '/blogs/:id',
            handler: 'blog.delete',
            config: {
                policies: ['global::is-admin'],
                middlewares: ['global::is-admin'],
            }
        },
    ],
};