import  {FC} from "react";

export interface DelegateCardProps {
    name: string;
    position: string;
    lc:string;
    img: string;
}

const DelegateCard: FC<DelegateCardProps> = ({name, lc, position, img = ''}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "12px",
                padding: "20px",
                width: "250px",
                height: "300px",
                background: "#fff",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                margin: "15px",
            }}
        >
            <img
                src={img}
                alt={name}
                loading={'lazy'}
                style={{
                    width: "initial",
                    height: "180px",
                    objectFit: "cover",
                }}
            />
            <div>
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
                    {position} - AIESEC in {lc}
                </p>
            </div>
        </div>
    );
};

export default DelegateCard;
