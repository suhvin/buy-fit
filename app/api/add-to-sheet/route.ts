// app/api/add-to-sheet/route.ts
import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import path from 'path';

const SPREADSHEET_ID = '1ObbvT3XLodNwa8DcCLN0EEUy43rxECEKs31CSEUMg48'; // Google Sheets ID
const SHEET_NAME = '시트1'; // 시트 이름

export async function POST(req: Request) {
  const { name, phone, message, randomId, utmGlobalAtom } = await req.json();
  console.log('name', name);
  console.log('phone', phone);
  console.log('message', message);

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(process.cwd(), 'google-service-account.json'), // 서비스 계정 키 파일 경로
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:J`, // 예: 첫 번째 열과 두 번째 열에 이름과 전화번호 추가
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date(),
            randomId,
            name,
            phone,
            message,
            utmGlobalAtom.utmSource,
            utmGlobalAtom.utmMedium,
            utmGlobalAtom.utmCampaign,
            utmGlobalAtom.utmContent,
            utmGlobalAtom.utmTerm,
          ],
        ],
      },
    });

    return NextResponse.json({ message: 'Data added to Google Sheets successfully' });
  } catch (error) {
    console.error('Error adding data to Google Sheets:', error);
    return NextResponse.json({ message: 'Failed to add data to Google Sheets' }, { status: 500 });
  }
}
