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
    text: 'Thank you for subscribing to our newsletter! You will receive updates on our latest news and events.',
    html: `
      <section style="max-width: 600px; margin: auto; padding: 16px; background-color: white; color: black;">
          <header>
              <a href="#">
                  <img style="width: auto; height: 28px;" src="https://futuremd.net/logo.png" alt="FutureMD Logo">
              </a>
          </header>
  
          <main style="margin-top: 16px;">
              <h2 style="color: #4A4A4A;">Hi there,</h2>
  
              <p style="margin-top: 8px; line-height: 1.6; color: #6B6B6B;">
                  Thank you for subscribing to the <strong>FutureMD Newsletter</strong>! 
                  You will receive updates on our latest news and events.
              </p>
              
              <button style="padding: 8px 16px; margin-top: 16px; background-color: #2563EB; color: white; border: none; border-radius: 8px; cursor: pointer;">
                  <a href="https://futuremd.net" style="text-decoration: none; color: white;">Explore FutureMD</a>
              </button>
              
              <p style="margin-top: 16px; color: #6B6B6B;">
                  Best regards,<br>
                  The FutureMD Team
              </p>
          </main>
     </section>
    `,
  };
  
  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
