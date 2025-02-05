const API_KEY = "AIzaSyA_l7WTCB04HR7s208I7dNOCzQ8LoP6jXk";
const SHEET_ID = "11XbmhooLKQcETblBhGGhLlf-NJPaCiYyNOV-zY6oI6k";
const RANGE = "Sheet1!A2:AC10";

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
    const processedData = rows.map((row: object) => {
        const rowData: { [key: string]: string } = {};

        for (const [key, index] of Object.entries(columns)) {
            rowData[key] = row[index - 1] || '';
        }

        return rowData;
    });

    console.log(processedData);
    return processedData;
}

// https://sheets.googleapis.com/v4/spreadsheets/11XbmhooLKQcETblBhGGhLlf-NJPaCiYyNOV-zY6oI6k/values/Sheet1!A1:C10?key=993287adbe699145551ca05b80739c5eab9dfff9
// https://sheets.googleapis.com/v4/spreadsheets/11XbmhooLKQcETblBhGGhLlf-NJPaCiYyNOV-zY6oI6k/values/Sheet1!A1:C10?key=AIzaSyA_l7WTCB04HR7s208I7dNOCzQ8LoP6jXk