// Profile pic
// Background

const Intro = () => {
  return (
    <div
      id="intro"
      className="flex min-h-screen max-w-7xl mx-auto bg-base-800 px-0 py-8 items-center w-full"
    >
      {/* Bio */}
      <div className="flex flex-col flex-[7] items-start text-left pl-8 pt-64">
        <p className="font-montserrat text-6xl text-primary max-w-3xl">
          Hi! <br />
          I'm Ru, <br />
          a SWE student <br />
          at McGill University. <br />
          Welcome to my portfolio!
        </p>
      </div>
      {/* Profile Picture and Title */}
      <div className="flex flex-col flex-[3] pr-8 items-center">
        <img
          src="/avatar.png" // change to profile
          alt="Profile"
          className="w-77 h-77 object-cover rounded-full shadow-lg border-4 border-primary"
        />
        <div className="mt-4 flex flex-col items-center">
          <span className="text-4xl font-extrabold tracking-wide text-primary drop-shadow-lg">
            Ru Chen
          </span>
          <span className="mt-2 text-xl font-medium tracking-wider text-secondary bg-base-200 bg-opacity-90 px-4 py-2 rounded-full shadow border border-secondary/40 uppercase">
            Software Engineer
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
