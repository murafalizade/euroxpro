import { FC } from "react";
import './ShopCard.css';

interface ShopCardProps {
    name: string;
    price: string;
    imgSrc: string;
    altText: string;
    link: string;
}

const ShopCard: FC<ShopCardProps> = ({ name, price, imgSrc, altText, link }) => {
    return (
        <div className="shop-card">
            <img src={imgSrc} alt={altText} className="shop-card-image" />
            <div className="shop-card-info">
                <h3 className="shop-card-name">{name}</h3>
                <p className="shop-card-price">{price}</p>
            </div>
        </div>
    );
};

export default ShopCard;
