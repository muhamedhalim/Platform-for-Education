const Herocontent = () => {
    return (
        <div className="text-white">
            <h1
                data-aos="fade-right"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-md"
            >
                Best Online Platform for Education
            </h1>

            <p
                data-aos="fade-left"
                data-aos-delay="150"
                className="mt-6 text-sm md:text-base text-white text-opacity-70 max-w-xl"
            >
                Learn from the best tutors across the globe. We help you level up your skills and career with top-notch courses and resources.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 transition-all duration-300 shadow-lg font-semibold"
                >
                    Get Started
                </button>
                <button
                    data-aos="zoom-in"
                    data-aos-delay="450"
                    className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 transition-all duration-300 shadow-lg font-semibold"
                >
                    Learn More
                </button>
            </div>

            {/* Stats Section */}
            <div className="mt-12 flex flex-wrap items-center gap-10">
                <div data-aos="fade-up" data-aos-delay="600" className="text-center">
                    <p className="text-2xl lg:text-3xl font-bold">2260+</p>
                    <div className="w-16 h-1 bg-green-500 my-2 rounded-full mx-auto" />
                    <p className="text-white text-opacity-80 text-sm md:text-base">Tutors</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="750" className="text-center">
                    <p className="text-2xl lg:text-3xl font-bold">260+</p>
                    <div className="w-16 h-1 bg-blue-500 my-2 rounded-full mx-auto" />
                    <p className="text-white text-opacity-80 text-sm md:text-base">Students</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="900" className="text-center">
                    <p className="text-2xl lg:text-3xl font-bold">60+</p>
                    <div className="w-16 h-1 bg-pink-500 my-2 rounded-full mx-auto" />
                    <p className="text-white text-opacity-80 text-sm md:text-base">Courses</p>
                </div>
            </div>
        </div>
    );
};

export default Herocontent;
