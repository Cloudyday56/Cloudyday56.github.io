import { motion } from "framer-motion";

const Intro = () => {
    return (
        <div
            id="intro"
            className="flex flex-col items-center justify-center py-20 px-4 max-w-7xl mx-auto w-full min-h-screen"
        >
            <div className="flex flex-col md:flex-row gap-10 items-stretch justify-center w-full max-w-5xl bg-base-200 p-6 md:p-8 rounded-2xl border border-base-300 shadow-xl mt-16 md:mt-0">

                {/* Left */}
                <motion.div
                    className="md:w-2/5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-base-300 pb-6 md:pb-0 md:pr-8"
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 18,
                        delay: 0.1,
                    }}
                >
                    <div className="overflow-hidden rounded-full border-4 border-primary w-48 h-48 md:w-60 md:h-60 shadow-lg">
                        <img
                            src="/profile.png"
                            alt="Profile"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-primary font-montserrat tracking-wide">
                            Hi! I'm Ru
                        </h1>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    className="md:w-3/5 flex flex-col gap-6 justify-center items-center md:items-start md:pl-8 text-center md:text-left"
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 18,
                        delay: 0.3,
                    }}
                >
                    <div className="overflow-hidden rounded-xl border border-base-300 bg-white/5 p-4 w-40 h-40 flex items-center justify-center shadow-inner">
                        <img
                            src="/Mcgill.png"
                            alt="McGill University Logo"
                            className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-secondary font-montserrat">
                            McGill University
                        </h2>
                        <h3 className="text-xl font-semibold text-primary">
                            Software Engineering Program
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                            Pursuing a Bachelor of Software Engineering, have interest in full-stack development and software development in java.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Intro;