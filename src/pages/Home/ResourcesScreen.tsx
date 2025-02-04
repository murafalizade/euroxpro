import { FC } from "react";
import { motion } from "framer-motion";

const resources = [
    { name: "Agenda", link: "#" },
    { name: "Workshops", link: "#" },
    { name: "Delegate Guide", link: "#" },
    { name: "Partners", link: "#" },
    { name: "FAQ", link: "#" },
    { name: "Speakers", link: "#" },
    { name: "Accommodation", link: "#" },
    { name: "Transportation", link: "#" },
    { name: "Contact Us", link: "#" },
];

const ResourceScreen: FC = () => {

    return (
        <motion.section
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px 0",
                marginTop: '45px'
            }}
            initial={{ opacity: 0, y: 50 }}  // Start hidden & move up
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.h2
                style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    textAlign: "center",
                }}
                initial={{ opacity: 0, y: -20 }} // Slight fade-in effect
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Conference Resources
            </motion.h2>

            <motion.div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    flexDirection:  "unset",
                    gap: "20px",
                    width: "80%",
                    maxWidth: "900px",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {resources.map((resource, index) => (
                    <motion.a
                        key={index}
                        href={resource.link}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "2px solid black",
                            color: "#000",
                            fontWeight: 500,
                            borderRadius: "12px",
                            padding: "20px",
                            textAlign: "center",
                            textDecoration: "none",
                            background: "white",
                            transition: "background 0.3s ease, color 0.3s ease",
                            width: "auto",
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = "#000";
                            e.currentTarget.style.color = "#fff";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = "white";
                            e.currentTarget.style.color = "#000";
                        }}
                        initial={{ opacity: 0, scale: 0.9 }} // Start smaller
                        whileInView={{ opacity: 1, scale: 1 }} // Pop in effect
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        {resource.name}
                    </motion.a>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default ResourceScreen;
