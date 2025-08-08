import { motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      {/* Desktop layout */}
      <div
        className="hidden md:flex min-h-screen max-w-7xl 2xl:max-w-[1900px] mx-auto bg-base-800 px-0 py-8 items-center w-full"
        id="intro"
      >
        {/* Bio */}
        <motion.div
          className="flex flex-col flex-[7] items-start text-left pl-8 pt-64"
          initial={{ x: -160, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            delay: 0.1,
          }}
        >
          <p className="font-montserrat text-6xl 2xl:text-8xl text-primary max-w-3xl 2xl:max-w-7xl">
            Hi! <br />
            I'm Ru, <br />
            a SWE student <br />
            at McGill University. <br />
            Welcome to my portfolio!
          </p>
        </motion.div>
        {/* Profile Picture and Title */}
        <motion.div
          className="flex flex-col flex-[3] pr-8 items-center"
          initial={{ x: 160, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            delay: 0.3,
          }}
        >
          <img
            src="/profile.png"
            alt="Profile"
            className="w-77 h-77 object-cover rounded-full shadow-lg border-4 border-primary"
          />
          <div className="mt-4 flex flex-col items-center">
            <span className="text-4xl 2xl:text-5xl font-extrabold tracking-wide text-primary drop-shadow-lg">
              Ru Chen
            </span>
            <span className="mt-2 text-xl 2xl:text-2xl font-medium tracking-wider text-secondary bg-base-200 bg-opacity-90 px-4 py-2 rounded-full shadow border border-secondary/40 uppercase">
              Software Engineer
            </span>
          </div>
        </motion.div>
      </div>

      {/* Mobile layout */}
      <div
        className="flex md:hidden min-h-screen w-full bg-base-800 items-center justify-center px-4"
        id="intro"
      >
        <div className="flex flex-col items-center justify-center w-full gap-6">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-primary ml-24"
          />
          <p className="font-montserrat text-3xl font-semibold text-primary max-w-xs leading-snug text-left pr-16">
            Hi!
            <br />
            I'm Ru.
            <br />
            Welcome to
            <br />
            my portfolio!
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
