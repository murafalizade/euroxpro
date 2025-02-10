import {FC} from "react";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import DelegateCard, {DelegateCardProps} from "../../components/DelegateCard";
import {fetchAllSheetData} from "../../service/sheetService.ts";
import {useQuery} from "react-query";
import {useSearchParams} from "react-router-dom";

const DelegateScreen: FC = () => {
    const [searchParams] = useSearchParams();
    const position = searchParams.get("position")

    const {data = []} = useQuery('ALL_DELEGATE_DATA', fetchAllSheetData, {
        select: (data) => {
            if(position){
                return data.filter(x=> x.position === position)
            }
            else{
                return data;
            }
        }
    })

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
            id={'delegate'}
        >
            <motion.h1
                style={{ fontSize: "36px", marginBottom: "20px", fontWeight: "bold", textAlign: "center" }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {position ? `${position} - `  : "" } Delegates
            </motion.h1>

            <Row className="justify-content-center" style={{ width: "80%", maxWidth: "1200px" }}>
                {data.map((delegate:DelegateCardProps, index:number) => (
                    <Col key={index} md={3} sm={6} className="d-flex justify-content-center mb-4">
                        <DelegateCard img={delegate.img} name={delegate.name} lc={`AIESEC in ${delegate.lc}`} position={delegate.position} />
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default DelegateScreen;
