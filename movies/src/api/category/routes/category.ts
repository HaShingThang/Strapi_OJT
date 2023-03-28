/**
 * category router
 */

export default {
    routes: [
        {
            method: 'GET',
            path: '/categories/:id',
            handler: 'category.findCat',
            config: {
                policies: ['global::is-auth'],
                middlewares: ['global::is-auth'],
            }
        },
        {
            method: 'GET',
            path: '/categories',
            handler: 'category.findCats',
            config: {
                policies: ['global::is-auth'],
                middlewares: ['global::is-auth'],
            }
        },
        {
            method: 'POST',
            path: '/categories',
            handler: 'category.createCat',
            config: {
                policies: ['global::is-admin'],
                middlewares: ['global::is-admin'],
            }
        },
        {
            method: 'PUT',
            path: '/categories/:id',
            handler: 'category.updateCat',
            config: {
                policies: ['global::is-admin'],
                middlewares: ['global::is-admin'],
            }
        },
        {
            method: 'DELETE',
            path: '/categories/:id',
            handler: 'category.deleteCat',
            config: {
                policies: ['global::is-admin'],
                middlewares: ['global::is-admin'],
            }
        },
    ],
};