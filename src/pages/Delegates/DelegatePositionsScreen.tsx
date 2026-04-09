import {FC} from "react";
import {motion} from "framer-motion";
import {Col, Container, Row} from "react-bootstrap";
import {areas} from "../../service/constants.ts";

export const  DelegatePositionsScreen: FC = () => {
    return (
        <motion.main
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" vw-100 min-vh-100 d-flex align-items-center justify-content-center text-center"
        >
            <Container>
                <motion.h2
                    className="text-center mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{marginTop:'190px'}}
                >
                    Positions
                </motion.h2>

                <Row className="g-3 justify-content-center mb-5">
                    <Col md={4}>
                        <motion.a
                            href={`/delegates`}
                            className="resource-item text-decoration-none"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            All
                        </motion.a>
                    </Col>
                    {areas.map((resource, index) => (
                        <Col key={index} md={4}>
                            <motion.a
                                href={`/delegates?position=${resource}`}
                                className="resource-item text-decoration-none"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                {resource}
                            </motion.a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </motion.main>
    );
};
