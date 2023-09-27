import Campaigns from '../../Components/Campaigns/Campaigns';
import { useLoaderData } from 'react-router-dom';
// import Banner from '../../Components/Banner/Banner';
import { useState } from 'react';

const Home = () => {
    const campaigns = useLoaderData();
    const [fullCampains, setfullCampaigns] = useState(campaigns);
    const [searchValue, setsearchValue] = useState([]);
   
    const handleSearch = (e) => {
        const search = document.getElementById('searchInput').value;
        console.log(search)
        e.preventDefault();
        if (search.length) {
            const filterCampaigns = fullCampains.filter((campaign) => campaign.category.toLowerCase() === search.toLowerCase());
            console.log(filterCampaigns)
            if (filterCampaigns) {
                setsearchValue(filterCampaigns);
            }
        }
        else{
            setsearchValue(fullCampains)
        }
    }
    return (
        <div>

<div className="bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png')]  bg-contain h-[50vh]  bg-no-repeat relative ">
            <div className="hero-overlay bg-white bg-opacity-90">
                <div className="absolute left-20 md:left-64 mt-10 md:mt-32">
                    <h2 className="text-xl md:text-5xl text-center font-bold text-black mt-2">I Grow By Helping People In Need</h2>
                </div>
                <div className="form-control absolute left-16 md:left-96 mt-12 md:mt-44">
                    <div className="input-group flex items-center justify-center mt-10 px-5 md:px-0">
                        <input
                        // ref={searchValue}
                        id='searchInput'
                            type="text"
                            placeholder=" "
                            className="input input-bordered w-full md:w-[400px] bg-white "></input>
             
                             

                            <button
                            onClick={handleSearch}
                            className="btn bg-[#FF444A] text-white border-none hover:bg-[#FF444A]">
                            Search
                        </button>
                    </div>
                </div>
            </div>

        </div>
            {/* <Banner></Banner> */}
            <Campaigns campaigns={campaigns}></Campaigns>

        </div>
    );
};

export default Home;