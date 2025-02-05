const API_KEY = "";
const SHEET_ID = "YOUR_SHEET_ID";
const RANGE = "Sheet1!A1:C10";

export async function fetchSheetData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

// https://sheets.googleapis.com/v4/spreadsheets/11XbmhooLKQcETblBhGGhLlf-NJPaCiYyNOV-zY6oI6k/values/Sheet1!A1:C10?key=993287adbe699145551ca05b80739c5eab9dfff9
// https://sheets.googleapis.com/v4/spreadsheets/11XbmhooLKQcETblBhGGhLlf-NJPaCiYyNOV-zY6oI6k/values/Sheet1!A1:C10?key=AIzaSyA_l7WTCB04HR7s208I7dNOCzQ8LoP6jXk
const columns = [
    'Please upload your best picture😊',
    'What is your Name & Surname?',
    'What is your e-mail address?',
    'What is your phone number?',
    'What is your Telegram username?',
    'What is you position?',
    'What is your MC/LC?'
]
