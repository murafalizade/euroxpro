import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItalyCard from "./ItalyCard.tsx";

const items = [
    {
        name: "Colosseum",
        price: "Rome",
        img: "colessium.webp",
        desc: "An ancient amphitheater in Rome, the Colosseum is one of the most iconic symbols of the Roman Empire, known for its gladiatorial battles and grandeur."
    },
    {
        name: "Lake Como",
        price: "Lombardy",
        img: "lake_como.png",
        desc: "A breathtaking glacial lake surrounded by the Alps, Lake Como is famous for its picturesque villages, luxury villas, and serene waters."
    },
    {
        name: "Leaning Tower of Pisa",
        price: "Pisa",
        img: "pisa.jpg",
        desc: "A world-famous architectural marvel, the Leaning Tower of Pisa is known for its unintended tilt, making it a popular attraction in Italy."
    },
    {
        name: "St. Peter’s Basilica",
        price: "Vatican City, Rome",
        img: "beter.avif",
        desc: "One of the most significant churches in Christianity, St. Peter’s Basilica is a masterpiece of Renaissance architecture, home to Michelangelo’s Pietà."
    },
    {
        name: "Duomo di Milano",
        price: "Milan",
        img: "milan.jpg",
        desc: "A Gothic masterpiece, the Duomo di Milano is the largest church in Italy, featuring intricate spires, statues, and a breathtaking view from the rooftop."
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
                        <ItalyCard
                            desc={item.desc}
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
