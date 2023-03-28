/**
 * movie service
 */

import { factories } from '@strapi/strapi';


export default factories.createCoreService('api::movie.movie', ({ strapi }) => ({

    async findMovie(title) {
        const getMovie = await strapi.db.query('api::movie.movie').findOne({
            select: ['id', 'title', 'director', 'year', 'review'],
            where: { title },
            populate: ["categories"],
        });
        return getMovie;
    },

    async findMovies(director) {
        let movies;
        if (director) {
            movies = await strapi.db.query('api::movie.movie').findMany({
                select: ['id', 'title', 'director', 'year', 'review'],
                where: { director },
                orderBy: { publishedAt: 'DESC' },
                populate: ["categories"],
            });
        } else {
            movies = await strapi.db.query('api::movie.movie').findMany({
                select: ['id', 'title', 'director', 'year', 'review'],
                orderBy: { publishedAt: 'DESC' },
                populate: ["categories"],

            });
        }

        return movies;
    },

    async createMovie(movie) {
        const createdMovie = await strapi.db.query('api::movie.movie').create({
            data: {
                title: movie.title,
                director: movie.director,
                year: movie.year,
                review: movie.review,
                publishedAt: new Date(),
                categories: {
                    set: movie.cat,
                }
            },
        });
        return createdMovie;
    },

    async updateMovie(id, updates) {
        const updatedMovie = await strapi.db.query('api::movie.movie').update({
            where: { id },
            data: {
                ...updates,
                updatedAt: new Date(),
            },
        });
        return updatedMovie;
    },
    async deleteMovie(id) {
        const deleteMovie = await strapi.db.query('api::movie.movie').delete({
            where: { id },
        });
        return deleteMovie
    },
}));
