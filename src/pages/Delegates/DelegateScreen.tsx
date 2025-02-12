import {FC, useEffect, useState} from "react";
import { motion } from "framer-motion";
import { Row, Col, Form, Badge } from "react-bootstrap";
import DelegateCard, { DelegateCardProps } from "../../components/DelegateCard";
import { fetchAllSheetData } from "../../service/sheetService.ts";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

const DelegateScreen: FC = () => {
    const [searchParams] = useSearchParams();
    const position = searchParams.get("position");
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [countries, setCountries] = useState([])

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
        if(countries.length === 0){
            setCountries(Array.from(new Set(data.map((x) => x.entity))))
        }
    }, [data]);

    return (
        <section
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
            id={"delegate"}
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

            {/* Filter section */}
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
                        color: 'black'
                    }}
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                >
                    <option value="" style={{color:'black'}}>Select the entity</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country} style={{color: 'black'}}>
                            {country}
                        </option>
                    ))}
                </Form.Select>
                <Badge bg="danger" style={{ fontSize: "18px", padding: "10px 20px" }}>
                    Total: {data.length}
                </Badge>
            </div>

            <Row className="justify-content-center" style={{ width: "80%", maxWidth: "1200px" }}>
                {data.map((delegate: DelegateCardProps, index: number) => (
                    <Col key={index} md={3} sm={2} xs={12} className="d-flex justify-content-center mb-4">
                        <DelegateCard
                            img={delegate.img}
                            name={delegate.name}
                            lc={`AIESEC in ${delegate.lc}`}
                            position={delegate.position}
                        />
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default DelegateScreen;
