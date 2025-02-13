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
// https://drive.google.com/drive/folders/1abYtHWocfsOTqofS7yp3aHZhHl7cr09O?usp=sharing
export async function fetchSheetData() {
    const range = "Sheet2!A120:AC130";
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;
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

export async function fetchAllSheetData() {
    const range = "Sheet2!A2:AC";
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;
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

const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dorcbhjzc/image/upload/";

export const getCloudinaryImageUrl = (img: string): string => {
    const fileNameWithExtension = img.substring(img.lastIndexOf("/") + 1);
    const fileNameWithoutExtension = fileNameWithExtension.split(".")[0];
    return `${CLOUDINARY_BASE_URL}${fileNameWithoutExtension}.webp`;
};
