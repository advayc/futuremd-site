import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, birthdate, termsAccepted, wantsShawarma, heardAboutUs, referredBy } = req.body;

    try {
      const auth = new google.auth.GoogleAuth({
        credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY as string),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });
      const spreadsheetId = "1kWodX9h71SiXoMmib9hrCTmHAkOMxGduBiZJKxi9JSI";
      const range = "Sheet1!A2:F";

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[name, birthdate, termsAccepted, wantsShawarma, heardAboutUs, referredBy]],
        },
      });

      res.status(200).json({ data: response.data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to save data to Google Sheets" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
