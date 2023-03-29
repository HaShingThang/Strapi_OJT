/**
 * movie controller
 */

import { factories } from "@strapi/strapi";
import { createReadStream } from 'fs'

export default factories.createCoreController(
    "api::movie.movie",
    ({ strapi }) => ({
        async findMovie(ctx) {
            try {
                const { title } = ctx.params;
                if (!title) throw Error("Missing title parameter");
                const movie = await strapi.service("api::movie.movie").findMovie(title);
                if (!movie) throw Error(`No movie found for title: ${title}`);
                ctx.body = movie;
            } catch (error) {
                ctx.response.status = 404;
                ctx.response.body = {
                    message: error.message,
                };
            }
        },
        async findMovies(ctx) {
            try {
                let movies;
                const { director } = ctx.request.query;
                if (director) {
                    movies = await strapi
                        .service("api::movie.movie")
                        .findMovies(director);
                    if (!movies.length)
                        throw new Error(`No movies found for director ${director}`);
                } else {
                    movies = await strapi.service("api::movie.movie").findMovies();
                    if (!movies.length) throw new Error(`No movies found.`);
                }
                ctx.body = movies;
            } catch (error) {
                ctx.response.status = 404;
                ctx.response.body = {
                    message: error.message,
                };
            }
        },

        async createMovie(ctx) {
            let { title, director, year, review } = ctx.request.body;
            let photo = {
                data: createReadStream(ctx.request.files.img.path),
                contentType: ctx.request.files.img.type,
                name: ctx.request.files.img.name,
            }
            let cat = [1]
            try {
                if (!title || !director || !year || !review || !cat)
                    throw Error("Please provide all required fields");
                ctx.body = await strapi
                    .service("api::movie.movie")
                    .createMovie({ title, director, year, review, cat, photo });
            } catch (error) {
                ctx.response.status = 404;
                ctx.response.body = {
                    message: error.message,
                };
            }
        },

        async updateMovie(ctx) {
            const { id } = ctx.params;
            try {
                const updatedMovie = await strapi
                    .service("api::movie.movie")
                    .updateMovie(id, ctx.request.body);
                if (!updatedMovie) throw Error(`Movie with id ${id} not found.`);
                ctx.body = updatedMovie;
            } catch (error) {
                ctx.response.status = 404;
                ctx.response.body = {
                    message: error.message,
                };
            }
        },
        async deleteMovie(ctx) {
            const { id } = ctx.params;
            try {
                const deleteMovie = await strapi
                    .service("api::movie.movie")
                    .deleteMovie(id);
                if (!deleteMovie) throw Error(`Movie id ${id} not found.`);
                ctx.body = deleteMovie;
            } catch (error) {
                ctx.response.status = 404;
                ctx.response.body = {
                    message: error.message,
                };
            }
        },
    })
);
