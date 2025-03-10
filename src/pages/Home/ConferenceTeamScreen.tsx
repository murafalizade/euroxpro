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
                    <DelegateCard img={'/11.png'} name={'Mohmmed Algelany'} lc={'Europe OD Manager'} position={'-'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/13.png'} name={'Omar Ibrahim'} lc={'Conference Manager'} position={'+90 531 812 43 39'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/14.png'} name={'Eleonara Pezzi'} lc={'Agenda Manager'} position={'eleonora.pezzi@aiesec.it'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/isi.png'} name={'Isidora Lazovic'} lc={'Agenda Manager'} position={'+381 64 4559501'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/12.png'} name={'Ahmed Ellithy'} lc={'MCP of AIESEC in Italy'} position={'ahmed.ellithy@aiesec.it'}/>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={12}>
                    <h3 className="text-center my-5">CC Team</h3>
                </Col>
                <Col md={12} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/10.png'} name={'Maria Timeea'} lc={'CCP'} position={'+40 745 166 573'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/4.png'} name={'Maciek'} lc={'CCVP Events'} position={'maciek.holub@gmail.com'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/5.png'} name={'Francesco'} lc={'CCVP BD'} position={'francesco.urraro@aiesec.net'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/1.png'} name={'Feyza'} lc={'CCVP Logistics'} position={'feyza.mentise2@aiesec.net'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/2.png'} name={'Ionela'} lc={'CCVP DxP'} position={'+40 747 676 925'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/3.png'} name={'Andrea'} lc={'CCVP Finance'} position={'+39 333 294 3276'}/>
                </Col>
            </Row>
            <Row className="justify-content-center" style={{width:"95rem"}}>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/8.png'} name={'Pietro'} lc={'CCM Events'} position={'pietro.angeli@aiesec.net'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/9.png'} name={'Matilde'} lc={'CCM BD'} position={'matilde.zapparoli@aiesec.net'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/6.png'} name={'Andrei'} lc={'CCM Logistics'} position={'andreidaniel.giurea4@aiesec.net'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/m.jpg'} name={'Murad'} lc={'CCM MKT'} position={'murad.aliyev@aiesec.net'}/>
                </Col>
                <Col md={2} sm={6} className="d-flex justify-content-center mb-4">
                    <DelegateCard img={'/7.png'} name={'Tudii'} lc={'CCM MKT'} position={'alexandru.tudose@aiesec.net'}/>
                </Col>
            </Row>

        </motion.section>
    );
};

export default ConferenceTeamScreen;
