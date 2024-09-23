import sgMail from '@sendgrid/mail';

const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  throw new Error('SENDGRID_API_KEY is not defined');
}
sgMail.setApiKey(apiKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  const msg = {
    to: email,
    from: 'contact.futuremd@gmail.com', 
    subject: 'Welcome to FutureMD Newsletter!',
    text: 'Thank you for subscribing to our newsletter!',
    html: '<strong>Thank you for subscribing to our newsletter!</strong>',
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
