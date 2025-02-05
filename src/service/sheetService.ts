const API_KEY = "AIzaSyA_l7WTCB04HR7s208I7dNOCzQ8LoP6jXk";
const SHEET_ID = "11XbmhooLKQcETblBhGGhLlf-NJPaCiYyNOV-zY6oI6k";
const RANGE = "Sheet1!A2:AC20";

const columns = {
    'name': 2,
    'phoneNumber': 5,
    'position': 11,
    'lc': 10,
    'img': 29
};

export async function fetchSheetData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    const rows = data.values;
    return rows.map((row: object) => {
        const rowData: { [key: string]: string } = {};

        for (const [key, index] of Object.entries(columns)) {
            rowData[key] = row[index - 1] || '';
        }

        return rowData;
    });
}