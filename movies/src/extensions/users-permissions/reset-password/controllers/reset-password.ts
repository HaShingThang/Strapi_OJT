// api/controllers/reset-password.js

export default {
    async resetPassword(ctx) {
        const { code, password } = ctx.request.body;

        // Check if reset token is valid
        const user = await strapi.plugins['users-permissions'].services.user.fetch({ resetPasswordToken: code });

        if (!user) {
            return ctx.badRequest('Invalid reset token');
        }

        // Reset user's password
        await strapi.plugins['users-permissions'].services.user.edit({ id: user.id }, { password, resetPasswordToken: null });

        return { ok: true };
    },
};
