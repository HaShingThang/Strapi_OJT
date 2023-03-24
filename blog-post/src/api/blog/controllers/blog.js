'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
    async find(ctx) {
        ctx.body = await strapi.service("api::blog.blog").find();
    },

    async findOne(ctx) {
        const { id } = ctx.params;
        try {
            const blogPost = await strapi.service("api::blog.blog").findOne(id);
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
        ctx.body = await strapi.service("api::blog.blog").create({ title, description });
    },

    async update(ctx) {
        const { id } = ctx.params;
        console.log(id)
        const { title, description } = ctx.request.body;
        try {
            const updateBlog = await strapi.service("api::blog.blog").update(id, { title, description });
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
            const deleteBlog = await strapi.service("api::blog.blog").delete(id);
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

