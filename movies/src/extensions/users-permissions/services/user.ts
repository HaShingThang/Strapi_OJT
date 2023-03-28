export default {
    fetchAll: (params) => {
        return strapi.query('user', 'users-permissions').find(params);
    },

    fetch: (params) => {
        return strapi.query('user', 'users-permissions').findOne(params);
    },

    add: (data) => {
        return strapi.query('user', 'users-permissions').create(data);
    },

    edit: (params, data) => {
        return strapi.query('user', 'users-permissions').update(params, data);
    },

    remove: (params) => {
        return strapi.query('user', 'users-permissions').delete(params);
    }
};
