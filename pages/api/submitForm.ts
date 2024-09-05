import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, birthdate, termsAccepted, wantsShawarma, heardAboutUs, referredBy } = req.body;

      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'Sheet1!A2:F2',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[name, birthdate, termsAccepted, wantsShawarma, heardAboutUs, referredBy]],
        },
      });

      res.status(200).json({ message: 'Form data submitted successfully', response });
    } catch (error) {
      console.error('Error submitting form data:');
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      } else {
        console.error('Unknown error:', error);
      }
      res.status(500).json({ 
        message: 'Error submitting form data', 
        error: {
          message: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : 'No stack trace available'
        } 
      });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
