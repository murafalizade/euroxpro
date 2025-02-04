import { motion } from "framer-motion";
import DelegateCarousel from "../../components/DelegateCarousel.tsx"; // Import your carousel component

const DelegateScreen = () => {
    return (
        <motion.section
            style={{
                marginTop: "75px",
                width: "100vw",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
            }}
            id={'delegate'}
            initial={{ opacity: 0, y: 50 }}  // Start hidden & move up
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Title Section */}
            <motion.h1
                style={{
                    fontSize: "36px",
                    marginBottom: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                }}
                initial={{ opacity: 0, y: -20 }} // Slight fade-in effect
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Delegates
            </motion.h1>

            {/* Delegate Carousels with staggered animation */}
            {[...Array(4)].map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }} // Start smaller
                    whileInView={{ opacity: 1, scale: 1 }} // Pop in effect
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <DelegateCarousel />
                </motion.div>
            ))}
        </motion.section>
    );
};

export default DelegateScreen;
