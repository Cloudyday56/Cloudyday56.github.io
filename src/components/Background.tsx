import { motion } from "framer-motion";

const Background = () => {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-black">
            <motion.div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.75, scale: 1 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{
                    backgroundImage: "url('/blue-green-painting.png')",
                    filter: "brightness(0.85) contrast(1.05) saturate(1.0)"
                }}
            />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/60" /> {/* Changed from-black/60 to /40, and to-black/80 to /60 */}
        </div>
    );
};

export default Background;
