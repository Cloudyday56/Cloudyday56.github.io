import { motion } from "framer-motion";

const Intro = () => {
    return (
        <div
            id="intro"
            className="flex items-center justify-center w-full h-full px-4"
        >
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch justify-center w-full max-w-5xl bg-base-200/80 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-base-300 shadow-2xl mt-14 md:mt-0">

                {/* Left — photo + name */}
                <motion.div
                    className="md:w-2/5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-base-300 pb-6 md:pb-0 md:pr-10"
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
                >
                    <div className="overflow-hidden rounded-full border-4 border-primary w-44 h-44 md:w-64 md:h-64 shadow-lg">
                        <img
                            src="/profile.png"
                            alt="Profile"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="mt-5 text-center">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-primary font-montserrat tracking-wide">
                            Hi! I'm Ru
                        </h1>
                        <p className="text-gray-400 text-sm mt-1">Software Engineering Student</p>
                    </div>
                </motion.div>

                {/* Right — school info */}
                <motion.div
                    className="md:w-3/5 flex flex-col gap-5 justify-center items-center md:items-start md:pl-10 text-center md:text-left"
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.3 }}
                >
                    <div className="overflow-hidden rounded-xl border border-base-300 bg-white/5 p-4 w-36 h-36 md:w-44 md:h-44 flex items-center justify-center shadow-inner">
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
                        <h3 className="text-lg md:text-xl font-semibold text-primary">
                            Bachelor of Software Engineering
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                            Interested in full-stack development, backend systems in Java, and building things
                            that are actually fun to use.
                        </p>
                    </div>

                    {/* Quick-stat chips */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-1">
                        {["Java", "React", "TypeScript", "Spring Boot", "Docker"].map((s) => (
                            <span
                                key={s}
                                className="px-3 py-1 text-xs font-semibold rounded-full bg-base-300 text-secondary border border-base-100"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Intro;
