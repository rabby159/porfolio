/* eslint-disable react/prop-types */

const Project = ({ project }) => {
  const { title, image, description } = project;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-10 p-5">
        <div className="card bg-base-100 shadow-xl h-[500px]">
          <figure className="">
            <img src={image} alt="img" className="rounded-xl h-48" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-transparent bg-clip-text bg-gradient-to-r to-slate-600 from-black">
              {title}
            </h2>
            <p className="text-justify my-5 text-[#333232] font-light">
              {description}
            </p>
            <div className="card-actions">
              <button className="btn bg-gradient-to-r to-slate-600 from-black text-white">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
