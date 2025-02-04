import React from "react";
import Slider from "react-slick";
import ShopCard from "./ShopCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DelegateCard from "./DelegateCard.tsx";

const delegates = [
    {
        name: "Marco",
        surname: "Rossi",
        position: "President",
        entity: "AIESEC in Italia",
        img: "https://via.placeholder.com/150",
    },
    {
        name: "Elena",
        surname: "Bianchi",
        position: "Vice President",
        entity: "AIESEC in Italia",
        img: "https://via.placeholder.com/150",
    },
    {
        name: "Luca",
        surname: "Verdi",
        position: "Marketing Director",
        entity: "AIESEC in Italia",
        img: "https://via.placeholder.com/150",
    },
    {
        name: "Giulia",
        surname: "Ferrari",
        position: "Finance Manager",
        entity: "AIESEC in Italia",
        img: "https://via.placeholder.com/150",
    },
];

const DelegateCarousel = () => {
    const settings = {
        infinite: false,
        speed: 500,
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
                    {delegates.map((item, index) => (
                        <DelegateCard
                            key={index}
                            name={item.name}
                            surname={item.surname}
                            position={item.position}
                            pictureUrl={item.img}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default DelegateCarousel;
