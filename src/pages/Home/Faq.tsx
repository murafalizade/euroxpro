import { Accordion, Container } from "react-bootstrap";
import {useQuery} from "react-query";
import {fetchFaqData} from "../../service/sheetService.ts";

export const Faq = () => {

    const { data = [] } = useQuery(["ALL_FAQ_DATA"], fetchFaqData);


    return (
        <div style={{
            color: "#fff",
            padding: "50px 0",
            minHeight: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Container style={{ maxWidth: "800px" }}>
                <h1 className="text-center mb-4" style={{ color: "#fff", fontSize: '36px' }}>Frequently Asked Questions</h1>
                <Accordion defaultActiveKey="0">
                    {data.map((faq, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>{faq.question}</Accordion.Header>
                            <Accordion.Body style={{ color: "black", fontWeight: 'bold' }}>
                                {faq.answer}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </div>
    );
};
