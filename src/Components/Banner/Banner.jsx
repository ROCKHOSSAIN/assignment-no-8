
const Banner = () => {



    return (
        <div className="bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png')]  bg-contain h-[50vh]  bg-no-repeat relative ">
            <div className="hero-overlay bg-white bg-opacity-90">
                <div className="absolute left-10 md:left-64 mt-10 md:mt-32">
                    <h2 className="text-xl md:text-5xl text-center font-bold text-black mt-2">I Grow By Helping People In Need</h2>
                </div>
                <div className="form-control absolute left-16 md:left-96 mt-12 md:mt-44">
                    <div className="input-group flex items-center justify-center mt-10 px-5 md:px-0">
                        <input
                            type="text"
                            placeholder="Search by category"
                            className="input input-bordered w-full md:w-[400px] bg-white"></input>
             
                             

                            <button className="btn bg-[#FF444A] text-white border-none hover:bg-[#FF444A]">
                            Search
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
