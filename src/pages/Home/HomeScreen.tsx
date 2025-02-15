import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import "./HomeScreen.css";
import ItalyExploreScreen from "./ItalyExploreScreen.tsx";

const HomeScreen = () => {
    return (
        <main>
            <div className={'home-container'}>
                <video autoPlay loop muted playsInline>
                    <source src="/italy_video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
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
                            19-23 March, Italy, Rimini Hotel
                        </motion.p>

                        <motion.div
                            className="buttons"
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.6, delay: 0.5}}
                        >
                            <a target={'_blank'} href={'https://aiesecitaly.typeform.com/REuroXpro25'} className="btn btn-danger">Register
                                Now</a>
                            <a target={'_blank'} href={'https://maps.app.goo.gl/bSoxj6m21DaHheSK8'} className="btn btn-danger">Get Location</a>
                            <a target={'_blank'} href={'https://aiesecitaly.typeform.com/ShopEuroXpro25'} className="btn btn-danger">AIESEC
                                Shop</a>
                        </motion.div>

                    </motion.div>
                </section>
                <div
                    style={{
                        position: 'absolute',
                        bottom: '3rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        zIndex: 3
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
                                border: '4px solid white', // Replace with your actual color
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
                                    backgroundColor: 'white', // Replace with your actual color
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
        </main>
    );
};

export default HomeScreen;
