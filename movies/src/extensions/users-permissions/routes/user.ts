export default {
  routes: [
    {
      method: "GET",
      path: "/users",
      handler: "user.find",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/users/:id",
      handler: "user.findOne",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/users",
      handler: "user.create",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/users/:id",
      handler: "user.update",
      config: {
        policies: [],
      },
    },
    {
      method: "DELETE",
      path: "/users/:id",
      handler: "user.delete",
      config: {
        policies: [],
      },
    },
  ],
};
