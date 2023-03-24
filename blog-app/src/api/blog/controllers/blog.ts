/**
 * blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog.blog', ({ strapi }) => ({
    async find(ctx) {
        ctx.body = await strapi.service("api::blog.blog").findBlog();
    },

    async findOne(ctx) {
        const { id } = ctx.params;
        try {
            const blogPost = await strapi.service("api::blog.blog").findOneBlog(id);
            if (!blogPost) throw Error(`Blog id ${id} not found.`)
            ctx.body = blogPost;

        } catch (error) {
            ctx.response.status = 404;
            ctx.response.body = {
                message: error.message,
            };
        }
    },

    async create(ctx) {
        const { title, description } = ctx.request.body;
        ctx.body = await strapi.service("api::blog.blog").createBlog({ title, description });
    },

    async update(ctx) {
        const { id } = ctx.params;
        console.log(id)
        const { title, description } = ctx.request.body;
        try {
            const updateBlog = await strapi.service("api::blog.blog").updateBlog(id, { title, description });
            if (!updateBlog) throw Error(`Blog id ${id} not found.`)
            ctx.body = updateBlog
        } catch (error) {
            ctx.response.status = 404;
            ctx.response.body = {
                message: error.message,
            };
        }
    },

    async delete(ctx) {
        const { id } = ctx.params;
        try {
            const deleteBlog = await strapi.service("api::blog.blog").deleteBlog(id);
            if (!deleteBlog) throw Error(`Blog id ${id} not found.`)
            ctx.body = deleteBlog
        } catch (error) {
            ctx.response.status = 404;
            ctx.response.body = {
                message: error.message,
            };
        }
    },
}));
