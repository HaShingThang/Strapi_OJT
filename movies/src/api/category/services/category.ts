/**
 * category service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::category.category', ({ strapi }) => ({

    async findCat(id) {
        return strapi.entityService.findOne('api::category.category', id, {
            fields: ['id', 'type'],
        });
    },

    async findCats() {
        return strapi.entityService.findMany('api::category.category', {
            fields: ['id', 'type'],
            sort: { createdAt: 'DESC' },
        });
    },

    async createCat(cat) {
        return strapi.entityService.create('api::category.category', {
            data: {
                type: cat.type,
                publishedAt: new Date()
            },
        });
    },

    async updateCat(id, cat) {
        return strapi.entityService.update('api::category.category', id, {
            data: {
                type: cat.type,
                updatedAt: new Date()
            },
        });
    },

    async deleteCat(id) {
        return strapi.entityService.delete('api::category.category', id);
    },
}));
