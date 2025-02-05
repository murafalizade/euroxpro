import  {FC} from "react";

interface DelegateCardProps {
    name: string;
    surname: string;
    position: string;
    img: string;
}

const DelegateCard: FC<DelegateCardProps> = ({name, surname, position, img}) => {
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
                alt={`${name} ${surname}`}
                style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "50%",
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
                    {name} {surname}
                </h3>
                <p
                    style={{
                        fontSize: "14px",
                        color: "#555",
                        fontWeight: "300",
                        margin: "5px 0",
                    }}
                >
                    {position} - AIESEC in Italia
                </p>
            </div>
        </div>
    );
};

export default DelegateCard;
