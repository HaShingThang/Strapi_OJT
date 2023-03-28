/**
 * category controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::category.category",
    ({ strapi }) => ({

        async findCat(ctx) {
            try {
                const { id } = ctx.params;
                const category = await strapi
                    .service("api::category.category")
                    .findCat(id);
                if (!category) throw Error(`No category found for id: ${id}`);
                ctx.body = category;
            } catch (error) {
                ctx.response.status = 404;
                ctx.response.body = {
                    message: error.message,
                };
            }
        },

        async findCats(ctx) {
            try {
                const categories = await strapi
                    .service("api::category.category")
                    .findCats();
                if (!categories.length) throw new Error(`No Categories found.`);
                ctx.body = categories;
            } catch (error) {
                ctx.response.status = 404;
                ctx.response.body = {
                    message: error.message,
                };
            }
        },

        async createCat(ctx) {
            const { type } = ctx.request.body;
            try {
                let cat = await strapi
                    .service("api::category.category")
                    .createCat({ type });
                if (!cat) throw Error("Catagory typ is required.")
                ctx.body = cat
            } catch (error) {
                ctx.response.status = 404;
                ctx.response.body = {
                    message: error.message,
                };
            }

        },

        async updateCat(ctx) {
            const { id } = ctx.params;
            try {
                const updatedCat = await strapi
                    .service("api::category.category")
                    .updateCat(id, ctx.request.body);
                if (!updatedCat) throw Error(`Category with id ${id} not found.`);
                ctx.body = updatedCat;
            } catch (error) {
                ctx.response.status = 404;
                ctx.response.body = {
                    message: error.message,
                };
            }
        },

        async deleteCat(ctx) {
            const { id } = ctx.params;
            try {
                const deleteCat = await strapi
                    .service("api::category.category")
                    .deleteCat(id);
                if (!deleteCat) throw Error(`Category id ${id} not found.`);
                ctx.body = deleteCat;
            } catch (error) {
                ctx.response.status = 404;
                ctx.response.body = {
                    message: error.message,
                };
            }
        },
    })
);
