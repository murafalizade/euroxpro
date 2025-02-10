import ShopCarousel from "../../components/ShopCarousel.tsx"; // Import your carousel component

const MerchSection = () => {
    return (
        <section
            id={'merch'}
            style={{
                width: "100vw",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
            }}
        >
            <h1 style={{ fontSize: "36px", marginBottom: "20px", fontWeight: "bold" }}>
                EuroXPro'25 Merch
            </h1>

            <ShopCarousel />
            <a
                href="https://aiesecitaly.typeform.com/ShopEuroXpro25"
                style={{
                    marginTop: "20px",
                    padding: "12px 20px",
                    backgroundColor: "#005402",
                    color: "white",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "bold",
                }}
            >
               Shop Now
            </a>
        </section>
    );
};

export default MerchSection;
