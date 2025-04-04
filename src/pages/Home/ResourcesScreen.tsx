import { FC } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "./Resources.css";

const resources = [
    { name: "PICTURES", link: "https://drive.google.com/drive/folders/1ZXL8dSbFaweg3v8QLZEDSoSp1_4nWpA3?usp=sharing" },
    { name: "FAQ", link: "/#faq" },
    { name: "TRANSPORTATION FORM", link: "https://aiesecitaly.typeform.com/to/xXIzPXfI" },
    { name: "TELEGRAM GROUP", link: "https://t.me/addlist/TMSQLPMYsKViMzQ8" },
    { name: "REGISTER NOW!", link: "https://aiesecitaly.typeform.com/REuroXpro25" },
    { name: "AGENDA", link: "https://www.aies.ec/euroxpro-italy-2025-live-agenda" },
    { name: "ROLL CALL PLAYLIST", link: "https://youtube.com/playlist?list=PL8TfCMoCYFHHMoIdlwj_yWN3SJrLPVumC&si=rU6CHcNiHwENyAzs" },
    { name: "BOOKLET", link: "https://drive.google.com/drive/u/1/folders/1a4XftlYlxY06dYLEQmFLk4OU1jSZolPJ?fbclid=PAZXh0bgNhZW0CMTEAAabk_mbG8Q9jEq7fOgMlU9m8EG7t6NK11UKPgxbboCqvg8uetr_BflERODc_aem_YnII5R1stvP-o1r0Q153wA" },
    { name: "DELEGATE DOCUMENTS", link: "https://aiesecitaly.typeform.com/to/e8sZWYDd" },
    { name: "DELEGATE SUPPORT FORM", link: "https://aiesecitaly.typeform.com/to/YO7QDSsX" },
];

const ResourceScreen: FC = () => {
    return (
        <motion.main
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="vw-100 d-flex align-items-center justify-content-center text-center"
            style={{minHeight: '100vh'}}
        >
            <Container>
                <motion.h2
                    className="text-center mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        marginTop: "280px"
                    }}
                >
                    Conference Resources
                </motion.h2>

                <Row className="g-3 justify-content-center mb-4">
                    {resources.map((resource, index) => (
                        <Col key={index} xs={12} sm={6} md={4}>
                            <a
                                href={resource.link}
                                target={'_blank'}
                                className="resource-item text-decoration-none"
                            >
                                {resource.name}
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </motion.main>
    );
};

export default ResourceScreen;
