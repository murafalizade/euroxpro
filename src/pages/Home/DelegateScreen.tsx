import {FC} from "react";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import DelegateCard, {DelegateCardProps} from "../../components/DelegateCard";
import {fetchSheetData} from "../../service/sheetService.ts";
import {useQuery} from "react-query";

const DelegateScreen: FC = () => {
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
            transition={{ duration: 0.2, ease: "easeOut" }}
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
                {data.map((delegate:DelegateCardProps, index:number) => (
                    <Col key={index} md={3} sm={6} className="d-flex justify-content-center mb-4">
                            <DelegateCard img={delegate.img} name={delegate.name} lc={`AIESEC in ${delegate.lc}`} position={delegate.position} />
                    </Col>
                ))}
            </Row>

            <a
                href={'/delegates'}
                className={'btn btn-danger'}
                style={{ marginTop: "20px" }}
            >
              Show More
            </a>
        </motion.section>
    );
};

export default DelegateScreen;
