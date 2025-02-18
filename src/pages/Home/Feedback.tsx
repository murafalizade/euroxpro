import { FC } from "react";
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
            <Container fluid className="p-5 text-center">
                {/* Centered Title */}
                <h2 className="mb-4">Feedback</h2>

                <Row className="justify-content-center">
                    {/* Buttons Column */}
                    <Col xs={12} md={6} className="d-flex flex-column align-items-center mb-4">
                        <a href="/" className="btn btn-danger my-2 w-75">Day 1</a>
                        <a href="/" className="btn btn-danger my-2 w-75">Day 2</a>
                        <a href="/" className="btn btn-danger my-2 w-75">Day 3</a>
                        <a href="/" className="btn btn-danger my-2 w-75">Day 4</a>
                    </Col>

                    {/* Image Column */}
                    <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                        <img src="./europe.png" alt="Europe" className="img-fluid" style={{ maxWidth: "80%", width: "450px" }} />
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Feedback;
