import { FaFeatherPointed } from "react-icons/fa6";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-10 p-5">
                <h1 className="text-[#111] text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r to-slate-600 from-black">About Me</h1>
                <p className="my-5 text-[#333232] font-medium text-lg lg:text-2xl md:text-left text-justify">I am a curious tech lover who always wants to learn, and I enjoy crafting awesome websites and digital creations!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* <!-- about 1  --> */}
                    <div className=" md:border-r-2" data-aos="fade-right" data-aos-delay="50"
    data-aos-duration="1000">
                        <div>
                            <div className="flex gap-1">
                                <h1 className="text-[#111] text-xl font-bold">2020</h1>
                                <FaFeatherPointed className="text-xl"></FaFeatherPointed>
                            </div>
                            <p className="text-[#333232] font-medium mt-3">Become Interested and start to learn front-end basics.</p>
                        </div>
                    </div>
                    {/* <!-- about 2  --> */}
                    <div className="lg:border-r-2" data-aos="fade-right" data-aos-delay="50"
    data-aos-duration="1000">
                        <div>
                            <div className="flex gap-1">
                                <h1 className="text-[#111] text-xl font-bold">2021</h1>
                                <FaFeatherPointed className="text-xl"></FaFeatherPointed>
                            </div>
                            <p className="text-[#333232] font-medium mt-3">Took some Javascript course and build some small projects.</p>
                        </div>
                    </div>
                    {/* <!-- about 3  --> */}
                    <div className="md:border-r-2" data-aos="fade-right" data-aos-delay="50"
    data-aos-duration="1000">
                       <div>
                        <div className="flex gap-1">
                            <h1 className="text-[#111] text-xl font-bold">2022</h1>
                            <FaFeatherPointed className="text-xl"></FaFeatherPointed>
                       </div>
                        <p className="text-[#333232] font-medium mt-3">Started to learn modern technologies of front-end and backend.</p>
                       </div>
                    </div>
                    {/* <!-- about 4  --> */}
                    <div>
                        <div data-aos="fade-right" data-aos-delay="50"
    data-aos-duration="1000">
                            <div className="flex gap-1">
                                <h1 className="text-[#111] text-xl font-bold">2023</h1>
                                <FaFeatherPointed className="text-xl"></FaFeatherPointed>
                            </div>
                            <p className="text-[#333232] font-medium mt-3">Started to build some project to enhance my knowledge.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;