const fs = require('fs');
const { google } = require('googleapis');

// Load client secrets from a local file.
fs.readFile('C:\Users\this\Desktop\client_secret_557061116090-qu8maq1qgmqcap50pcg7cm7ns6kshjof.apps.googleusercontent.com.json', (err, content) => {
    if (err) return console.error('Error loading client secret file:', err);
    authorize(JSON.parse(content), appendData);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    fs.readFile('token.json', (err, token) => {
        if (err) return getNewToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}

/**
 * Get and store new token after prompting for user authorization, and then execute the callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    console.log('Authorize this app by visiting this URL:', authUrl);
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error retrieving access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile('token.json', JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to token.json');
            });
            callback(oAuth2Client);
        });
    });
}

/**
 * Appends data to the Google Sheets.
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function appendData(auth) {
    const sheets = google.sheets({ version: 'v4', auth });
    const data = [['Name', 'Email']]; // Replace with your actual data

    sheets.spreadsheets.values.append({
        spreadsheetId: 'your-spreadsheet-id', // Replace with your Google Sheets ID
        range: 'Sheet1!A1', // Specify the range (Sheet and Cell)
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: data, // Add your data here
        },
    }, (err, result) => {
        if (err) {
            console.error('The API returned an error:', err);
            return;
        }
        console.log(`${result.data.updates.updatedCells} cells appended.`);
    });
}
