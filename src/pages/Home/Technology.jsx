import { FaStackOverflow } from "react-icons/fa";
import { FaCode, FaFigma, FaReact, FaServer, FaToolbox } from "react-icons/fa6";


const Technology = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-20 p-5">
                <h1 className="text-[#111] text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r to-slate-600 from-black">Technologies</h1>
                <p className="my-5 text-[#333232] font-medium text-lg lg:text-2xl md:text-left text-justify">I have a diverse skill set in web development, encompassing everything from creative design to robust backend implementation.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* <!-- tech 1  --> */}
                    <div className="bg-base-100 p-4 rounded shadow-lg" data-aos="zoom-in">
                        <div>
                            <FaReact className="text-3xl"></FaReact>
                            <h1 className="text-[#111] text-xl font-bold">Front-End</h1>
                            <p className="text-[#333232] font-medium">Experience with</p>
                            <p className="text-[#333232] font-medium">Html, Css, Sass, Bootstrap,</p>
                            <p className="text-[#333232] font-medium">TailwindCss, Javascript, ReactJS,</p>
                            <p className="text-[#333232] font-medium">React-router, MaterialUI, Redux etc.</p>
                        </div>
                    </div>
                    {/* <!-- tech 2  --> */}
                    <div className="bg-base-100 p-4 rounded shadow-lg" data-aos="zoom-in">
                        <div>
                            <FaServer className="text-3xl"></FaServer>
                            <h1 className="text-[#111] text-xl font-bold">Backend</h1>
                            <p className="text-[#333232] font-medium">Experience with</p>
                            <p className="text-[#333232] font-medium">Node.js, MongoDb, Mongoose,</p>
                            <p className="text-[#333232] font-medium">Firebase, JWT etc.</p>
                        </div>
                    </div>
                    {/* <!-- tech 3  --> */}
                    <div className="bg-base-100 p-4 rounded shadow-lg" data-aos="zoom-in">
                       <div>
                            <FaFigma className="text-3xl"></FaFigma>
                            <h1 className="text-[#111] text-xl font-bold">Design</h1>
                            <p className="text-[#333232] font-medium">Experience with</p>
                            <p className="text-[#333232] font-medium">Tools like Figma, Adobe</p>
                            <p className="text-[#333232] font-medium">PhotoShop, Adobe XD etc.</p>
                       </div>
                    </div>
                    {/* <!-- tech 4  --> */}
                    <div className="bg-base-100 p-4 rounded shadow-lg" data-aos="zoom-in">
                        <div>
                        <FaStackOverflow className="text-3xl" />
                            <h1 className="text-[#111] text-xl font-bold">Full-Stack</h1>
                            <p className="text-[#333232] font-medium">Experience with</p>
                            <p className="text-[#333232] font-medium">The React framework for</p>
                            <p className="text-[#333232] font-medium">production NextJS.</p>
                        </div>
                    </div>
                    {/* <!-- tech 5  --> */}
                    <div className="bg-base-100 p-4 rounded shadow-lg" data-aos="zoom-in">
                        <div>
                            <FaToolbox className="text-3xl"></FaToolbox>
                            <h1 className="text-[#111] text-xl font-bold">Tools</h1>
                            <p className="text-[#333232] font-medium">Experience with</p>
                            <p className="text-[#333232] font-medium">Tools like Axios, Heroku,</p>
                            <p className="text-[#333232] font-medium">Netlify, Firebase, Git, Github,</p>
                            <p className="text-[#333232] font-medium">Gitlab, Jira, Slack etc.</p>
                        </div>
                    </div>
                    {/* <!-- tech 6  --> */}
                    <div className="bg-base-100 p-4 rounded shadow-lg" data-aos="zoom-in">
                        <div>
                            <FaCode className="text-3xl"></FaCode>
                            <h1 className="text-[#111] text-xl font-bold">Still Learning</h1>
                            <p className="text-[#333232] font-medium">Exploring at free time</p>
                            <p className="text-[#333232] font-medium">GraphQL, Gatsby, Apollo,</p>
                            <p className="text-[#333232] font-medium">Golang, MySql, React Native.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technology;