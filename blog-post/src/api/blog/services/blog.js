'use strict';

/**
 * api::blog.blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog.blog', ({ strapi }) => ({
    async find() {
        return strapi.entityService.findMany('api::blog.blog', {
            fields: ['title', 'description', 'createdAt', 'updatedAt'],
            sort: { createdAt: 'DESC' },
        });
    },

    async findOne(id) {
        return strapi.entityService.findOne('api::blog.blog', id, {
            fields: ['title', 'description', 'createdAt', 'updatedAt'],
        });
    },

    async create(data) {
        return strapi.entityService.create('api::blog.blog', {
            data: {
                title: data.title,
                description: data.description,
                publishedAt: new Date()
            },
        });
    },

    async update(id, data) {
        return strapi.entityService.update('api::blog.blog', id, {
            data: {
                title: data.title,
                description: data.description,
                updatedAt: new Date()
            },
        });
    },

    async delete(id) {
        return strapi.entityService.delete('api::blog.blog', id);
    },
}));

