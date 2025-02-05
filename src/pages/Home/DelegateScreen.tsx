import {FC, useEffect, useState} from "react";
import { motion } from "framer-motion";
import { Row, Col, Button } from "react-bootstrap";
import DelegateCard from "../../components/DelegateCard";
import {fetchSheetData} from "../../service/sheetService.ts";
import {useQuery} from "react-query";

const DelegateScreen: FC = () => {
    const [delegate, setDelegates] = useState([]);

    const {data = []} = useQuery('DELEGATE_DATA', fetchSheetData)

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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.h1
                style={{ fontSize: "36px", marginBottom: "20px", fontWeight: "bold", textAlign: "center" }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Delegates
            </motion.h1>

            <Row className="justify-content-center" style={{ width: "80%", maxWidth: "1200px" }}>
                {data.map((delegate, index) => (
                    <Col key={index} md={3} sm={6} className="d-flex justify-content-center mb-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <DelegateCard {...delegate} />
                        </motion.div>
                    </Col>
                ))}
            </Row>

            <Button
                variant="danger"
                style={{ marginTop: "20px" }}
            >
              Show More
            </Button>
        </motion.section>
    );
};

export default DelegateScreen;
