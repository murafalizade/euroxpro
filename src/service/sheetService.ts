const API_KEY = "AIzaSyA_l7WTCB04HR7s208I7dNOCzQ8LoP6jXk";
const SHEET_ID = "11XbmhooLKQcETblBhGGhLlf-NJPaCiYyNOV-zY6oI6k";

const columns: Record<string, number>= {
    'name': 1,
    'email': 2,
    'phoneNumber': 3,
    'position': 5,
    'entity': 4,
    'lc': 6,
    'img': 7
};

const GOOGLE_SHEET_API = (range) => `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`

export async function fetchAllSheetData() {
    const range = "Sheet2!A2:AC";
    const response = await fetch(GOOGLE_SHEET_API(range));
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

const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dorcbhjzc/image/upload/";

export const getCloudinaryImageUrl = (img: string): string => {
    const fileNameWithoutExtension = img.toLowerCase().replace(/ /g, "_")
    return `${CLOUDINARY_BASE_URL}${fileNameWithoutExtension}.webp`;
};
