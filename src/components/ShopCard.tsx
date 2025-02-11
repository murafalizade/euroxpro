import { FC } from "react";
import './ShopCard.css';

interface ShopCardProps {
    name: string;
    price: string;
    imgSrc: string;
    altText: string;
    isItaly: boolean
}

const ShopCard: FC<ShopCardProps> = ({ name, price, imgSrc, altText, isItaly = false }) => {
    return (
        <div className="shop-card">
            <img src={imgSrc} alt={altText} className={isItaly? "italy-card-image" :"shop-card-image"} />
            <div className="shop-card-info">
                <h3 className="shop-card-name">{name}</h3>
                <p className="shop-card-price">{price}</p>
            </div>
        </div>
    );
};

export default ShopCard;
