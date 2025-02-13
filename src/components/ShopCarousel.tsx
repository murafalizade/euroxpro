import Slider from "react-slick";
import ShopCard from "./ShopCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
    {
        name: "EuroXPro'25 T-Shirt",
        price: "€12.00",
        img: "t-shirt.png",
    },
    {
        name: "EuroXPro'25 Hoodie",
        price: "€30.00",
        img: "euroxproHoodie.png",
    },
    {
        name: "United Exchange Hoodie",
        price: "€25.00",
        img: "europeHoodie.png",
    },
    {
        name: "United Exchange T-shirt",
        price: "€12.00",
        img: "europeTshirt.png",
    },
    {
        name: "Italy Green T-shirt",
        price: "€12.00",
        img: "italyGreenTshirt.png",
    },
    {
        name: "Italy Red T-shirt",
        price: "€12.00",
        img: "italyRedTshirt.png",
    },
    {
        name: "United Exchange Tote Bag",
        price: "€10.00",
        img: "toteBag.png",
    },
    {
        name: "EuroXpro'25 Lighter",
        price: "€2.50",
        img: "lighter.png",
    },
];

const ShopCarousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1640, // Larger screens, like desktops
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // Tablets and smaller desktops
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Medium-sized screens (like smaller tablets)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600, // Small screens, like mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Extra small mobile screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '20px'}}>
            <div style={{width: '80vw'}}>
                <Slider {...settings}>
                    {items.map((item, index) => (
                        <ShopCard
                            key={index}
                            name={item.name}
                            price={item.price}
                            imgSrc={item.img}
                            altText={item.name}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ShopCarousel;
