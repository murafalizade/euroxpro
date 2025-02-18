import {FC} from "react";
import { Container, Row, Col } from "react-bootstrap";

const Feedback: FC = () => {

    return (
        <main
            style={{
                marginTop: "80px",
                width: "100vw",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
            }}
        >
        <Container fluid className="p-5">
            <Row className="align-items-center">
                <Col xs={12} md={6} className="p-2">
                    <h2 className="mb-4">Feedback</h2>
                    <div>
                        <a href={'/'} className={'btn btn-danger m-4'}>Day 1</a>
                        <a href={'/'} className={'btn btn-danger m-4'}>Day 2</a>
                        <a href={'/'} className={'btn btn-danger m-4'}>Day 3</a>
                        <a href={'/'} className={'btn btn-danger m-4'}>Day 4</a>
                    </div>
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                    <img src="./europe.png" alt="Europe" className="img-fluid" style={{ maxWidth: "80%", width: '450px'}} />
                </Col>
            </Row>
        </Container>
        </main>
    );
};

export default Feedback;
