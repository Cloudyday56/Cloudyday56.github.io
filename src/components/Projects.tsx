import StockMounts from "./projects/StockMounts";
import GMplatform from "./projects/GM-platform";

const Projects = () => {
    return (
        <div
            id="projects"
            className="flex items-center justify-center w-full h-full px-4 py-6 md:py-0"
        >
            <div className="flex flex-col w-full max-w-5xl gap-6 mt-14 md:-mt-10">
                <h2 className="font-montserrat text-3xl md:text-5xl text-primary font-bold text-center">
                    Recent Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch">
                    <StockMounts/>
                    <GMplatform/>
                </div>
            </div>
        </div>
    );
};

export default Projects;
