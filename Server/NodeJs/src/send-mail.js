import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/', (req, res) => {
    // Extract user's email, password, and Ethereum address from request body
    const { email, password, ethereumAddress } = req.body;

    // Configuration for email service
    const config = {
        service: 'gmail',
        auth: {
            user: "email",
            pass: "password"
        }
    };

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport(config);

    const message = {
        from: 'shadowsnake570@gmail.com',
        to: email, 
        subject: 'Welcome to Cereal Office!',
        html: `
            <p>Welcome aboard to Cereal Office!</p>
            <p>Your account has been successfully created.</p>
            <p>Please <a href="http://localhost:3000/login">log in</a> to our website using the following credentials:</p>
            <ul>
                <li>Email: ${email}</li>
                <li>Password: ${password}</li>
                <li>Ethereum Address: ${ethereumAddress}</li>
            </ul>
            <p>Be sure to change your password after logging in. To use all functionalities, upload a permit so that the admin can activate your account.</p>
            <p>If you have any questions or need assistance, feel free to reach out to us at shadowsnake570@gmail.com.</p>
            <p>Best regards,<br>Cereals Office Team</p>
        `
    };

    // Send email
    transporter.sendMail(message)
        .then(info => {
            res.status(201).json({
                msg: "Email sent",
                info: info.messageId,
                preview: nodemailer.getTestMessageUrl(info)
            });
        })
        .catch(err => {
            res.status(500).json({ msg: err });
        });
});

export default router;
