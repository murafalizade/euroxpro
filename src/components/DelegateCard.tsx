import { FC } from "react";
import {getCloudinaryImageUrl} from "../service/sheetService.ts";

// Props interface
export interface DelegateCardProps {
    name: string;
    position: string;
    lc: string;
    img: string;
}

const DelegateCard: FC<DelegateCardProps> = ({ name, lc, position, img }) => {
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

            {img && (
                <img
                    src={getCloudinaryImageUrl(img)}
                    alt={name}
                    style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "8px",
                    }}
                />
            )}

            <div style={{ textAlign: "center", width: "100%" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#333", margin: "5px 0" }}>
                    {name}
                </h3>
                <p style={{ fontSize: "14px", color: "#555", fontWeight: "300", margin: "5px 0" }}>
                    {position} - {lc}
                </p>
            </div>
        </div>
    );
};

export default DelegateCard;
