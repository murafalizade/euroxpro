import { FC } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "./Resources.css";

const resources = [
    { name: "DELEGATE SUPPORT FORM", link: "#" },
    { name: "FAQ", link: "#" },
    { name: "TRANSPORTATION FORM", link: "#" },
    { name: "SHOP REGISTRATION", link: "#" },
    { name: "REGISTER NOW!", link: "#" },
    { name: "AGENDA", link: "#" },
    { name: "INVITATION LETTER FORM", link: "#" },
    { name: "BOOKLET", link: "#" },
    { name: "PICTURES", link: "#" },
];

const ResourceScreen: FC = () => {
    return (
        <motion.section
            id="resources"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="vh-100 vw-100 d-flex align-items-center justify-content-center text-center"
        >
            <Container>
                <motion.h2
                    className="text-center mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Conference Resources
                </motion.h2>

                <Row className="g-3 justify-content-center">
                    {resources.map((resource, index) => (
                        <Col key={index} xs={12} sm={6} md={4}>
                            <motion.a
                                href={resource.link}
                                className="resource-item text-decoration-none"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                {resource.name}
                            </motion.a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </motion.section>
    );
};

export default ResourceScreen;
