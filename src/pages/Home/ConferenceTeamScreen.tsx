import {FC} from "react";
import { motion } from "framer-motion";
import { Row, Col, Button } from "react-bootstrap";
import DelegateCard from "../../components/DelegateCard";

const ConferenceTeamScreen: FC = () => {
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
            id={'cc'}
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
                Conference Team
            </motion.h1>

            <Row className="justify-content-center" style={{ width: "80%", maxWidth: "1200px" }}>
                <h3>Core Team</h3>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                  <DelegateCard img={''} name={'Test test'} lc={'Conference Manager'} position={'+33 1232 2323 21'} />
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={''} name={'Test test'} lc={'Conference Manager'} position={'+33 1232 2323 21'} />
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={''} name={'Test test'} lc={'Conference Manager'} position={'+33 1232 2323 21'} />
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={''} name={'Test test'} lc={'Conference Manager'} position={'+33 1232 2323 21'} />
                </Col>
            </Row>

            <Row className="justify-content-center" style={{width: "80%", maxWidth: "1200px"}}>
                <h3>CC Team</h3>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={''} name={'Test test'} lc={'Conference Manager'} position={'+33 1232 2323 21'} />
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={''} name={'Test test'} lc={'Conference Manager'} position={'+33 1232 2323 21'} />
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={''} name={'Test test'} lc={'Conference Manager'} position={'+33 1232 2323 21'} />
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={''} name={'Test test'} lc={'Conference Manager'} position={'+33 1232 2323 21'} />
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={''} name={'Test test'} lc={'Conference Manager'} position={'+33 1232 2323 21'} />
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={''} name={'Test test'} lc={'Conference Manager'} position={'+33 1232 2323 21'} />
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={''} name={'Test test'} lc={'Conference Manager'} position={'+33 1232 2323 21'} />
                </Col>
            </Row>
        </motion.section>
    );
};

export default ConferenceTeamScreen;
