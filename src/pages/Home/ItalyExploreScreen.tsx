import ItalyCarousel from "../../components/ItalyCarousel.tsx";

const ItalyConferenceScreen = () => {
    return (
        <section
            id={'italy'}
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
                Explore Italy
            </h1>

            <ItalyCarousel />
        </section>
    );
};

export default ItalyConferenceScreen;
