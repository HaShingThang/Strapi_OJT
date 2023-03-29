import nodemailer from 'nodemailer'
export default {
    async forgotPassword(ctx: any) {
        const { email } = ctx.request.body;
        console.log(email)

        // Check if user exists
        const user = await strapi.plugins['users-permissions'].services.user.fetch({ email });

        if (!user) {
            return ctx.badRequest('User not found');
        }

        // Generate reset token and send email
        const resetToken = await strapi.plugins['users-permissions'].services.user.generateResetToken(email);
        const resetUrl = `${strapi.config.server.url}/auth/reset-password?code=${resetToken}`;

        const transporter = nodemailer.createTransport({
            host: strapi.config.get('plugins.email.config.providerOptions.host'),
            port: strapi.config.get('plugins.email.config.providerOptions.port'),
            auth: {
                user: strapi.config.get('plugins.email.config.providerOptions.auth.user'),
                pass: strapi.config.get('plugins.email.config.providerOptions.auth.pass'),
            },
        });

        const mailOptions = {
            from: strapi.config.get('plugins.email.config.settings.defaultFrom'),
            to: user.email,
            subject: 'Reset password',
            html: `Click <a href="${resetUrl}">here</a> to reset your password.`,
        };

        await transporter.sendMail(mailOptions);
        return { message: "Email sent successfully" };
    },
};
