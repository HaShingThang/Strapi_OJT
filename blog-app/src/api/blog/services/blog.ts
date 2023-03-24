/**
 * blog service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::blog.blog', ({ strapi }) => ({
    async findBlog() {
        return strapi.entityService.findMany('api::blog.blog', {
            fields: ['title', 'description', 'createdAt', 'updatedAt'],
            sort: { createdAt: 'DESC' },
        });
    },

    async findOneBlog(id) {
        return strapi.entityService.findOne('api::blog.blog', id, {
            fields: ['title', 'description', 'createdAt', 'updatedAt'],
        });
    },

    async createBlog(data) {
        return strapi.entityService.create('api::blog.blog', {
            data: {
                title: data.title,
                description: data.description,
                publishedAt: new Date()
            },
        });
    },

    async updateBlog(id, data) {
        return strapi.entityService.update('api::blog.blog', id, {
            data: {
                title: data.title,
                description: data.description,
                updatedAt: new Date()
            },
        });
    },

    async deleteBlog(id) {
        return strapi.entityService.delete('api::blog.blog', id);
    },
}));
