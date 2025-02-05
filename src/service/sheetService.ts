const API_KEY = "";
const SHEET_ID = "YOUR_SHEET_ID";
const RANGE = "Sheet1!A1:C10";

export async function fetchSheetData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

// https://sheets.googleapis.com/v4/spreadsheets/1yJX8uCpfAYj27nyTKQdNtE9n-le2DHLgzL8whT2sN0Gg/values/Cover!A1:C10?key=