
const Banner = () => {
    return (
        <div>
            <h2 className="text-5xl text-center font-bold text-black mt-20">I Grow By Helping People In Need</h2>
            <div className="form-control ">
                <div className="input-group flex items-center justify-center mt-10 px-5 md:px-0">
                    <input type="text" placeholder="Search here" className="input input-bordered w-full md:w-[400px] bg-white" />
                    <button className="btn  bg-[#FF444A] text-white border-none hover:bg-[#FF444A]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>

            </div>
           
        </div>
    );
};

export default Banner;