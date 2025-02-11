import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopCard from "./ShopCard.tsx";

const items = [
    {
        name: "Colessium",
        price: "Roma",
        img: "colessium.webp",
    },
    {
        name: "Como Lake",
        price: "Lombardy",
        img: "lake_como.png",
    },
    {
        name: "Pisa Tower",
        price: "Pisa",
        img: "pisa.jpg",
    },
    {
        name: "St. Peter’s Basilica",
        price: "Vatican City, Rome",
        img: "beter.avif",
    },
    {
        name: "Duomo di Milano",
        price: "Milan",
        img: "milan.jpg",
    }
];

const ItalyCarousel = () => {
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
                    {items.map((item) => (
                        <ShopCard
                            isItaly={true}
                            altText={item.name}
                            name={item.name}
                            price={item.price}
                            imgSrc={item.img}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ItalyCarousel;
