import {FC} from "react";
import {motion} from "framer-motion";
import {Row, Col} from "react-bootstrap";
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
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.2, ease: "easeOut"}}
        >
            <motion.h1
                style={{fontSize: "36px", marginTop: '100px', marginBottom: "20px", fontWeight: "bold", textAlign: "center"}}
                initial={{opacity: 0, y: -20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.2}}
            >
                Conference Team
            </motion.h1>

            <Row className="justify-content-center">
                <h3 className={'text-center my-5'}>Core Team</h3>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/11.png'} name={'Mohmmed Algelany'} lc={'Conference Manager'} position={'+33 1232 2323 21'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/13.png'} name={'Omar Ibrahim'} lc={'Conference Manager'} position={'+33 1232 2323 21'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/14.png'} name={'Eleonara Pezzi'} lc={'Conference Manager'} position={'+33 1232 2323 21'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/15.png'} name={'Sertaç Gülbudak'} lc={'Conference Manager'} position={'+33 1232 2323 21'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/12.png'} name={'Ahmed Ellithy'} lc={'Conference Manager'} position={'+33 1232 2323 21'}/>
                </Col>
            </Row>

            <Row className="justify-content-center" style={{width: "80%"}}>
                <h3 className={'text-center my-5'}>CC Team</h3>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/10.png'} name={'Maria Timeea'} lc={'CCP'} position={'+33 1232 2323 21'}/>
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/8.png'} name={'Pietro'} lc={'CCM Events'} position={'+33 1232 2323 21'}/>
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/3.png'} name={'Andrea'} lc={'CCVP Finance'} position={'+33 1232 2323 21'}/>
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/7.png'} name={'Tudii'} lc={'CCM MKT'} position={'+33 1232 2323 21'}/>
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/m.jpg'} name={'Murad'} lc={'CCM MKT'} position={'+33 1232 2323 21'}/>
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/9.png'} name={'Matilde'} lc={'CCM BD'} position={'+33 1232 2323 21'}/>
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/6.png'} name={'Andrei'} lc={'CCM Logistics'} position={'+33 1232 2323 21'}/>
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/4.png'} name={'Maciek'} lc={'CCVP Events'} position={'+33 1232 2323 21'}/>
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/2.png'} name={'Ionela'} lc={'CCVP DxP'} position={'+33 1232 2323 21'}/>
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/1.png'} name={'Feyza'} lc={'CCVP Logistics'} position={'+33 1232 2323 21'}/>
                </Col>
                <Col md={3} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/5.png'} name={'Francesco'} lc={'CCVP BD'} position={'+33 1232 2323 21'}/>
                </Col>
            </Row>
        </motion.section>
    );
};

export default ConferenceTeamScreen;
