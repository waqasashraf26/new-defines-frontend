// pages/api/send-email.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const { firstName, lastName, email, phone, message } = await req.json();

    try {
        const transporter = nodemailer.createTransport({
            service: "SMTP",
            host: "smtpout.secureserver.net",
            // port: 465,
            // secure: true,
            auth: {
                user: 'info@newdefines.com', // Your Gmail email address
                pass: 'Newdefines123.', // Your Gmail password or an app-specific password if 2-factor authentication is enabled
            },
        });

        // Email content
        const mailOptions = {
            from: `${email}`,
            to: 'info@newdefines.com',
            subject: 'NewDefines Contact',
            html: `
                <p>First Name: ${firstName}</p>
                <p>Last Name: ${lastName}</p>
                <p>Email: ${email}</p>
                <p>Phone Number: ${phone}</p>
                <p>Message: ${message}</p>
            `,
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log("Email sent:", info.messageId);
            return NextResponse.json({ status: "sent" });
        } catch (error) {
            console.error("Email not sent:", error);
            return NextResponse.json({ status: "error", message: error.message }, { status: 500 });
        }

    } catch (error) {
        return NextResponse.json(
            {
                message: `Method Not Allowed`,
                error: error.message,
                isSuccess: false,
            },
            { status: 405 }
        );
    }
}
