import { motion } from "framer-motion";

export const ChallengesScreen = () => {
    return (
        <motion.div
            className="positions-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h2
                className="fs-1 font-bold mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
            >
                🚀 Welcome to Challenge Day 0!
            </motion.h2>

            <motion.p
                className="fs-5 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
            >
                Your challenge today: 📸 <br />
                Take a picture with your delegation
                and share it in the <strong>Telegram Group</strong>!
                Let's capture the energy of <b>EuroXpro 2025! </b>🔥
            </motion.p>

            <motion.a
                href={'https://t.me/addlist/TMSQLPMYsKViMzQ8'}
                target={'_blank'}
                className="mt-3 text-blue-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 btn btn-danger"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Accept Challenge ✅
            </motion.a>
        </motion.div>
    );
};
