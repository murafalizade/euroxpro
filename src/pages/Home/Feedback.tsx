import {ChangeEvent, FC, FormEvent, useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Feedback: FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        description: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Container fluid className="p-5">
            <Row className="align-items-center">
                {/* Left Section - Form */}
                <Col xs={12} md={6} className="p-4">
                    <h2 className="mb-4">Feedback Form</h2>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter your feedback"
                                rows={4}
                            />
                        </Form.Group>

                        <Button type="submit" variant="danger">
                            Send Feedback
                        </Button>
                    </Form>
                </Col>

                {/* Right Section - Image */}
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                    <img src="./europe.png" alt="Europe" className="img-fluid" style={{ maxWidth: "80%", width: '450px'}} />
                </Col>
            </Row>
        </Container>
    );
};

export default Feedback;
