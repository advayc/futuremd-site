import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const {name, email, subject, message} = req.body;

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'contact.futuremd@gmail.com',
                pass: 'dclx nbvb ifdm xmfs',
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject:subject,
            text: `${name}\n${message} \nSent By Contact Form`
        });

        res.status(200).json({ success: true })
    } else {
        res.status(405).json({ message: 'Method Not Allowed'});
    }
}