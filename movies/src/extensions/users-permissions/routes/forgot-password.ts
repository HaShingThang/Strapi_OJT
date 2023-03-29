export default {
    routes: [
        {
            method: "POST",
            path: "/auth/forgot-password",
            handler: "forgot-password.forgotPassword",
            config: {
                policies: ['global::is-auth'],
                middlewares: ['global::is-auth'],
            }
        },
    ],
};
