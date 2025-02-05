const API_KEY = "AIzaSyA_l7WTCB04HR7s208I7dNOCzQ8LoP6jXk";
const SHEET_ID = "11XbmhooLKQcETblBhGGhLlf-NJPaCiYyNOV-zY6oI6k";
const RANGE = "Sheet1!A2:AC20";

const columns: Record<string, number>= {
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

    const rows: string[][] = Array.isArray(data.values) ? data.values : [];

    return rows.map((row: string[]) => {
        const rowData: unknown = {};

        for (const [key, index] of Object.entries(columns as Record<string, number>)) {
            rowData[key] = row[index - 1] || '';
        }

        return rowData;
    });
}
