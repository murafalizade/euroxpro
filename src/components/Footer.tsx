const Footer = () => {
    return (
        <footer style={{
            width: "100%",
            padding: "10px 0",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: 500,
            background: "#000",
            color: "#fff"
        }}>
            © {new Date().getFullYear()} EuroXPro 2025. All Rights Reserved.
        </footer>
    );
};

export default Footer;
