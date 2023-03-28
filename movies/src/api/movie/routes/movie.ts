/**
 * movie router
 */

export default {
    routes: [
        {
            method: 'GET',
            path: '/movies/:title',
            handler: 'movie.findMovie',
            config: {
                policies: ['global::is-auth'],
                middlewares: ['global::is-auth'],
            }
        },
        {
            method: 'GET',
            path: '/movies',
            handler: 'movie.findMovies',
            config: {
                policies: ['global::is-auth'],
                middlewares: ['global::is-auth'],
            }
        },
        {
            method: 'POST',
            path: '/movies',
            handler: 'movie.createMovie',
            config: {
                policies: ['global::is-admin'],
                middlewares: ['global::is-admin'],
            }
        },
        {
            method: 'PUT',
            path: '/movies/:id',
            handler: 'movie.updateMovie',
            config: {
                policies: ['global::is-admin'],
                middlewares: ['global::is-admin'],
            }
        },
        {
            method: 'DELETE',
            path: '/movies/:id',
            handler: 'movie.deleteMovie',
            config: {
                policies: ['global::is-admin'],
                middlewares: ['global::is-admin'],
            }
        },
    ],
};