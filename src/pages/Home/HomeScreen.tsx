import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./HomeScreen.css";
import MerchScreen from "./MerchScreen.tsx";
import Feedback from "./Feedback.tsx";
import DelegateScreen from "./DelegateScreen.tsx";
import ResourceScreen from "./ResourcesScreen.tsx";
import Footer from "../../components/Footer.tsx";

const HomeScreen = () => {
    return (
        <>
            <div className={'home-container'}>
                <motion.section
                    className="home-overlay"
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    <motion.div
                        className="home-content"
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, ease: "easeOut"}}
                    >
                        <h1 className="title">
                            <Typewriter
                                options={{
                                    loop:true
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString("EuroXPro 2025")
                                        .pauseFor(500)
                                        .deleteAll()
                                        .typeString("United for Exchange")
                                        .start()
                                        .pauseFor(500);
                                }}
                            />
                        </h1>
                        <motion.p
                            className="subtitle"
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.3}}
                        >
                            19-25 March, Italy, Rimini Hotel
                        </motion.p>

                        <motion.div
                            className="buttons"
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.6, delay: 0.5}}
                        >
                            <button className="btn btn-danger">Register Now</button>
                            <button className="btn btn-danger">Delegate Booklet</button>
                            <button className="btn btn-danger">AIESEC Shop</button>
                        </motion.div>

                    </motion.div>
                </motion.section>
                <div
                    style={{
                        position: 'absolute',
                        bottom: '3rem', // Adjust based on your needs
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <a href="#merch">
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                height: '64px',
                                width: '35px',
                                borderRadius: '1.5rem', // Equivalent to rounded-3xl
                                border: '4px solid #ff6347', // Replace with your actual color
                                padding: '0.5rem',
                            }}
                        >
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                style={{
                                    backgroundColor: '#ff6347', // Replace with your actual color
                                    marginBottom: '0.25rem',
                                    height: '0.75rem',
                                    width: '0.75rem',
                                    borderRadius: '50%',
                                }}
                            />
                        </div>
                    </a>
                </div>

            </div>

            {/* Sections with Scroll Animations */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0, transition: {duration: 0.8}}
                }}
            >
                <MerchScreen/>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0, transition: {duration: 0.8, delay: 0.2}}
                }}
            >
                <DelegateScreen/>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0, transition: {duration: 0.8, delay: 0.4}}
                }}
            >
                <ResourceScreen/>
            </motion.div>

            <motion.section
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.8, delay: 0.6}}
            >
                <div className="d-flex">
                    <Feedback/>
                </div>
            </motion.section>
            <Footer/>
        </>
    );
};

export default HomeScreen;
