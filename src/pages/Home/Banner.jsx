
import resume from '../../assets/images/CV Of Md Rabby.pdf'
import about from '../../assets/images/aboutme.jpg'
import project from '../../assets/images/project .jpg'
import blog from '../../assets/images/blog.jpg'
import profile from '../../assets/images/profiles.jpg'
import { FaPencilAlt } from "react-icons/fa";
import { FaCode, FaCreativeCommonsSampling, FaHackerrank } from 'react-icons/fa6'

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div>
               <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-20 mb-10 p-5 gap-8">
                   <div className="">
                       <div className="bg-base-100 p-5 rounded-2xl shadow-xl">
                           <h1 className="text-black text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-slate-600 from-black ">Hello There, I'm Md Rabby</h1>
                           <p className="mt-5 text-[#333232] text-lg font-light">A dedicated full-stack JavaScript developer with an implacable thirst for creating dynamic and scalable web applications. From conceptualization to deployment, I thrive on building innovative digital solutions that seamlessly blend user-centric design with robust backend functionality.</p>
                           <div className="flex justify-center items-center">
                               <a href={resume}><button className="btn bg-gradient-to-r to-slate-600 from-black  mt-7 text-white">My Resume</button></a>
                           </div>
                       </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-7 " >
                       <div className="bg-base-100 p-5 rounded-2xl shadow-xl" data-aos="zoom-in">
                           <div>
                               <img className="" src={about} alt="" />
                               <h4 className="text-black text-xl font-medium text-center mt-8">More About Me</h4>
                           </div>
                       </div>
                       <div className="bg-base-100 p-5 rounded-2xl shadow-xl" data-aos="zoom-in">
                           <div>
                               <img className="" src={project} alt="" />
                               <h4 className="text-black text-xl font-medium text-center mt-8">Project</h4>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-20 p-5">
                   <div className="bg-base-100 p-5 rounded-2xl shadow-xl" data-aos="zoom-in">
                       <div>
                           <img className="" src={blog} alt="" />
                           <h4 className="text-black text-xl font-medium text-center mt-8">Blogs</h4>
                       </div>
                   </div>
                   <div className="bg-base-100 p-5 rounded-2xl shadow-xl md:col-start-2 md:col-span-4 " data-aos="zoom-in">
                       <div>
                           <div className="mt-16 flex justify-center">
                               <FaPencilAlt className='text-4xl mr-2 md:mr-28' />
                               <FaCode className='text-4xl  mr-2 md:mr-28'/>
                               <FaHackerrank className='text-4xl  mr-2 md:mr-28' />
                               <FaCreativeCommonsSampling className='text-4xl  mr-2'/>
                           </div>
                           <h4 className="text-black text-xl font-medium text-center mt-8">Service Offering</h4>
                       </div>
                   </div>
                   <div className="bg-base-100 p-5 rounded-2xl shadow-xl" data-aos="zoom-in">
                       <div>
                           <img className="" src={profile} alt="" />
                       <h4 className="text-black text-xl font-medium text-center mt-8">Profiles</h4>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Banner;