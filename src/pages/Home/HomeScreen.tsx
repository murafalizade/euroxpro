import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import "./HomeScreen.css";
import MerchScreen from "./MerchScreen.tsx";
import Feedback from "./Feedback.tsx";
import DelegateScreen from "./DelegateScreen.tsx";
import ResourceScreen from "./ResourcesScreen.tsx";
import Footer from "../../components/Footer.tsx";
import ConferenceTeamScreen from "./ConferenceTeamScreen.tsx";
import ItalyExploreScreen from "./ItalyExploreScreen.tsx";

const HomeScreen = () => {
    return (
        <>
            <div className={'home-container'}>
                <section
                    id={'home'}
                    className="home-overlay"
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
                                    loop: true
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
                            <a href={'https://aiesecitaly.typeform.com/REuroXpro25'} className="btn btn-danger">Register
                                Now</a>
                            <button className="btn btn-danger">Get Location</button>
                            <a href={'https://aiesecitaly.typeform.com/ShopEuroXpro25'} className="btn btn-danger">AIESEC
                                Shop</a>
                        </motion.div>

                    </motion.div>
                </section>
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
                    <a href="#italy">
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

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0, transition: {duration: 0.8}}
                }}
            >
                <ItalyExploreScreen/>
            </motion.div>


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

            <ConferenceTeamScreen/>
            <DelegateScreen/>
            <ResourceScreen/>

            <motion.section
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.4, delay: 0.2}}
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
