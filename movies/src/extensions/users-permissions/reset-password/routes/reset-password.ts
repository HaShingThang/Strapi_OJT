export default {
    routes: [
        {
            method: "POST",
            path: "/auth/reset-password",
            handler: "auth.resetPassword",
            config: {
                policies: [],
            },
        },
    ],
};
