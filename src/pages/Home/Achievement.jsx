

const Achievement = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-20 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
                {/* <!-- achievement 01 --> */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="text-2xl font-semibold">02+</h2>
                      <p className="text-[#333232] font-medium mt-3">YEARS EXPERIENCE</p>
                    </div>
                  </div>
                {/* <!-- achievement 01 --> */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="font-semibold text-2xl">10+</h2>
                      <p className="text-[#333232] font-medium mt-3">PROJECT</p>
                    </div>
                  </div>
                {/* <!-- achievement 01 --> */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="font-semibold text-2xl">15+</h2>
                      <p className="text-[#333232] font-medium mt-3">GITHUB FOLLOWERS</p>
                    </div>
                  </div>
            </div>
        </div>
    );
};

export default Achievement;