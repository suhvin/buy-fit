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
      credentials: {
        private_key:
          '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC2Bp6m/eChw+l0\nL/FoltRwdWPpjGK9enCpN/5tjkNSpXvfN+VD45vhkzYDtFDqn/ZtDzz0UlnOfzvz\ndHs6BWC6Mg8dct0dM20wSw0RF1fCK0ch2qzuPhp35uDrK5TnNxu2XrVGYVz3rdOj\n6DL+s84txcXNKBQavhccU0xKAIwYmznJ0GefCBK40Oi5qDb/8U4DDNQV48Yjqurf\n2JnmTOkDWS6eVYY6FrGOaXUR84LeiSktiSZc+9/ELgv2ymTzFJQ+2S034UWV9hbY\nX1Duz6G5Q2sykd8uAtDsQPXV+ygfVbF13fuFUYPAmcJngb4vKUBHEzBe8K/XYRKC\nfToRFqzvAgMBAAECggEAEkE6svueBgscRAs01izeNEMJmJf8JQ188/OKIBmW1diD\nwkCcTQEsFmTJk3iHbuhI8eoHzmbd29A1xnYlj42PhEzV6DmnRDDun9u+/TpOkkn9\n0b7Y/fGbfO/aGauevMtxi4oW+u5zwOEdawAz8Qg+QqflbOw6i+4Jak1ORtOkOSlY\nMVgkZed3G2AQpdBTYzHKdkgTBYtl89zLt+OJ0gVIRrEW2zljTe1FkAwU2kASEZZu\nJ6xGH7wO0+2e/XpfAq89JbTxSBfpBxdTpx4yTxATmvhcykxRGIcRnYn9MQAVZptZ\nYRk9g8ftCZoiSnbN7oOrNte/l5h4eT72XMcFNQJdQQKBgQD+cqt6mLtszhnI5ZEw\noj1YPltfHcqfOUnQstmvXEomIWrqh6vzZzceWuoqhktJyfV7SvyUACnKssdGkM5A\n9AUEfL+DWdsXHUpPOfO3alnWFTxgOM3rTpt8ca3wo1+Bgek78OUY0H2P6roU8o56\n2esY9kbraXrwa7HoUR5hZus7rwKBgQC3ItwtT2AQeKSfQjj7SK6yFu9gOTneygWB\n/YFpGvq03IqXMivSYM4HQp+uonIqzInfsr2UNl6mqgyVzCMcVygHYFTyN0BjSanw\nicNbda7Z1hRpgF+BF7MfF+jRjNhH130XYP8/39TMBvu01YYDCIbJaAOA1NE4Mloh\n4xrNDnGywQKBgHOq7QjuJUVw64fH1Binp/tVXXP/tvxqroOQyiRNb+eliVTUF/au\nFQBXk9uA8Pi6Nj21+NvOtzDN1IjfiuM8Covfqa+sSUxYpE8fqQrX7b7EKI4VRIaT\nVVtc0hVyLxhQVhZJi9ub63hg2/ZpzRtLtPPEALlDWf+w9U8GkSj2ADlBAoGAbzeE\nbx/dPyOFFhKpeDFTpmO3S8B1HI+jeKXziVkRF/U3VUrqwgB4HoCfaPbOTp+Yu3lZ\nGEFMifqLWg125Sco8BHYhKB5QdLimWmQcmKtpS0ViFylo0g5R5DFmzzlu/tpxGDr\nombUXHOBOPjTQdRTxsycFAkqZe5uPlYlWJKFCgECgYARHFeiLS8ukSz0ENulx0TN\nrMpW7vZQqR5jrAu1nlQkob6XjvOgNCdqp/99juNzXA6qioePLPG20OAAReMGGLX2\n+NqZBu/7ReauFK0iPrVyjW8TEiPSVLHKOhyS3MpEOtRjOlF13mwfYPAu7NzrmROK\n/NHz7DLMn1FXE06+pB9IQA==\n-----END PRIVATE KEY-----\n'?.replace(
            /\\n/g,
            '\n'
          ),
        client_email: 'sheet-log@suhkiseok.iam.gserviceaccount.com',
      },
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
