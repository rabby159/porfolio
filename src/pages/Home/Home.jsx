import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Project from "../../Shared/Project";
import Banner from "./Banner";

const Home = () => {
  const projects = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[#111]  text-5xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r to-slate-600 from-black">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects?.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </div>
        <div className="flex justify-center mb-10">
          <Link to={'https://github.com/rabby159'} target="_blank">
            <button className="btn bg-gradient-to-r to-slate-600 from-black text-white">
              More on GitHub
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
