import { FC, useState } from "react";
import "./ItalyCard.css";

interface ItalyCardProps {
    name: string;
    price: string;
    imgSrc: string;
    altText: string;
    desc: string;
}

const ItalyCard: FC<ItalyCardProps> = ({ name, price, imgSrc, altText, desc }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="shop-card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={imgSrc} alt={altText} className="italy-card-image" />

            <div className="italy-card-footer">
                <p className="italy-card-name">{name}</p>
            </div>

            {/* Hover overlay for description and price */}
            <div className={`info-overlay ${hovered ? "show" : ""}`}>
                <h3 className="italy-card-name mt-2">{name}</h3>
                <p className="italy-card-price">{price}</p>
                <p className="italy-card-desc">{desc}</p>
            </div>
        </div>
    );
};

export default ItalyCard;
