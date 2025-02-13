import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Row, Col, Form, Badge, Offcanvas, Button } from "react-bootstrap";
import DelegateCard, { DelegateCardProps } from "../../components/DelegateCard";
import {fetchAllSheetData, getCloudinaryImageUrl} from "../../service/sheetService.ts";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

const DelegateScreen: FC = () => {
    const [searchParams] = useSearchParams();
    const position = searchParams.get("position");
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [countries, setCountries] = useState<string[]>([]);
    const [selectedDelegate, setSelectedDelegate] = useState<any | null>(null);
    const [showSidebar, setShowSidebar] = useState(false);

    const { data = [] } = useQuery("ALL_DELEGATE_DATA", fetchAllSheetData, {
        select: (data: any) => {
            if (position) {
                data = data.filter((x) => x.position === position);
            }
            if (selectedCountry) {
                data = data.filter((x) => x.entity === selectedCountry);
            }
            return data;
        },
    });

    useEffect(() => {
        const uniqueCountries = Array.from(new Set(data.map((x) => x.entity)));
        if (countries.length === 0) {
            setCountries(uniqueCountries);
        }
    }, [data]);

    const handleSelectDelegate = (delegate: any) => {
        setSelectedDelegate(delegate);
        setShowSidebar(true);
    };

    return (
        <main
            style={{
                marginTop: "180px",
                width: "100vw",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
            }}
        >
            <motion.h1
                style={{
                    fontSize: "36px",
                    marginBottom: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {position ? `${position} - ` : ""} Delegates
            </motion.h1>

            {/* Filter Section */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
            >
                <Form.Select
                    style={{
                        width: "200px",
                        marginRight: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        padding: "10px",
                        color: "black",
                    }}
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                >
                    <option className={'text-dark'} value="">Select the entity</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country} className={'text-dark'}>
                            {country}
                        </option>
                    ))}
                </Form.Select>
                <Badge bg="danger" style={{ fontSize: "18px", padding: "10px 20px" }}>
                    Total: {data.length}
                </Badge>
            </div>

            {/* Delegate Cards */}
            <Row className="justify-content-center" style={{ width: "80%", maxWidth: "1200px" }}>
                {data.map((delegate: DelegateCardProps, index: number) => (
                    <Col key={index} md={3} sm={6} xs={12} className="d-flex justify-content-center mb-4">
                        <div onClick={() => handleSelectDelegate(delegate)} style={{ cursor: "pointer" }}>
                            <DelegateCard
                                img={delegate.img}
                                name={delegate.name}
                                lc={`AIESEC in ${delegate.lc}`}
                                position={delegate.position}
                            />
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Sidebar */}
            <Offcanvas
                show={showSidebar}
                onHide={() => setShowSidebar(false)}
                placement="end"
                style={{ width: "400px" }}
                className="d-none d-md-block bg-dark text-light"
            >
                <Offcanvas.Header closeButton closeVariant="white">
                    <Offcanvas.Title>Delegate Details</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {selectedDelegate && (
                        <>
                            {/* Image, Name, LC, Entity in one row */}
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "left",
                                    gap: "30px",
                                    marginBottom: "15px",
                                }}
                            >
                                <img
                                    src={getCloudinaryImageUrl(selectedDelegate.img)}
                                    alt={selectedDelegate.name}
                                    style={{
                                        width: "140px",
                                        height: "140px",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                    }}
                                />
                                    <h4 style={{ marginBottom: "5px" }}>{selectedDelegate.name}</h4>
                                    <p style={{ margin: "0", fontSize: "14px" }}>
                                        {selectedDelegate.lc} - AIESEC in {selectedDelegate.entity}
                                    </p>

                            <p>
                                <strong>Email:</strong> {selectedDelegate.email}
                            </p>
                            <p>
                                <strong>Phone:</strong> {selectedDelegate.phoneNumber}
                            </p>
                            <Button variant="danger" href={`https://wa.me/${selectedDelegate.phoneNumber}`}>
                                Contact
                            </Button>
                            </div>

                        </>
                    )}
                </Offcanvas.Body>
            </Offcanvas>

            {/* Full-Screen Sidebar for Mobile */}
            <Offcanvas
                show={showSidebar}
                onHide={() => setShowSidebar(false)}
                placement="bottom"
                className="d-md-none bg-dark text-light"
                style={{ height: "100vh", width: "100vw" }}
            >
                <Offcanvas.Header closeButton closeVariant="white">
                    <Offcanvas.Title>Delegate Details</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="text-center">
                    {selectedDelegate && (
                        <>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "left",
                                    gap: "30px",
                                    marginBottom: "15px",
                                }}
                            >
                                <img
                                    src={getCloudinaryImageUrl(selectedDelegate.img)}
                                    alt={selectedDelegate.name}
                                    style={{
                                        width: "140px",
                                        height: "140px",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                    }}
                                />
                                    <h4 style={{marginBottom: "5px"}}>{selectedDelegate.name}</h4>
                                    <p style={{margin: "0", fontSize: "14px"}}>
                                        {selectedDelegate.lc} - AIESEC in {selectedDelegate.entity}
                                    </p>
                            <p>
                                <strong>Email:</strong> {selectedDelegate.email}
                            </p>
                            <p>
                                <strong>Phone:</strong> {selectedDelegate.phoneNumber}
                            </p>
                            <Button variant="danger" href={`https://wa.me/${selectedDelegate.phoneNumber}`}>
                                Contact
                            </Button>
                            </div>
                        </>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </main>
    );
};

export default DelegateScreen;
