import { FC, useState, useEffect } from "react";

// Props interface
export interface DelegateCardProps {
    name: string;
    position: string;
    lc: string;
    img: string; // This is the image URL (not yet a direct image link, needs to be processed)
    folderId: string; // Folder ID for searching the image on Google Drive
    apiKey: string; // API Key for Google Drive API
}

// Helper function to fetch image URL from Google Drive based on file name and folder ID
const fetchImageUrl = async (img: string, folderId: string, apiKey: string) => {
    // Extract the image name from the URL
    const fileNameWithExtension = img.substring(img.lastIndexOf("/") + 1);

    // Remove the extension and append '.webp'
    const fileNameWithoutExtension = fileNameWithExtension.split(".")[0];
    const fileNameWithWebp = `${fileNameWithoutExtension}.webp`;
    const query = `name="${fileNameWithWebp}" and "${folderId}" in parents`;

    // Make the API request to search for the file in the folder
    const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.files && data.files.length > 0) {
            const fileId = data.files[0].id;
            return `https://drive.google.com/uc?id=${fileId}`;
        } else {
            console.error("Image not found in folder.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching image:", error);
        return null;
    }
};

const DelegateCard: FC<DelegateCardProps> = ({ name, lc, position, img }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const API_KEY = "AIzaSyA_l7WTCB04HR7s208I7dNOCzQ8LoP6jXk";
    const folderId = "1abYtHWocfsOTqofS7yp3aHZhHl7cr09O"
    // Fetch image URL from Google Drive when component mounts or image URL changes
    useEffect(() => {
        const fetchImage = async () => {
            const fetchedImageUrl = await fetchImageUrl(img, folderId, API_KEY);
            setImageUrl(fetchedImageUrl);
        };

        fetchImage();
    }, [img]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "12px",
                padding: "20px",
                width: "250px",
                height: "300px",
                background: "#fff",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
            }}
        >
            {!imgLoaded && imageUrl && (
                <div
                    style={{
                        width: "100%",
                        height: "180px",
                        background: "#e0e0e0",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        color: "#555",
                    }}
                >
                    Loading...
                </div>
            )}

            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={name}
                    rel="preload"
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgLoaded(false)}
                    style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        display: imgLoaded ? "block" : "none",
                    }}
                />
            )}

            <div style={{ textAlign: "center", width: "100%" }}>
                <h3
                    style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#333",
                        margin: "5px 0",
                    }}
                >
                    {name}
                </h3>
                <p
                    style={{
                        fontSize: "14px",
                        color: "#555",
                        fontWeight: "300",
                        margin: "5px 0",
                    }}
                >
                    {position} - {lc}
                </p>
            </div>
        </div>
    );
};

export default DelegateCard;
