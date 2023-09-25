import Campaigns from '../../Components/Campaigns/Campaigns';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
    const campaigns = useLoaderData();
    // console.log(campaigns)
    
    return (
        <div>
            

            <Banner></Banner>
        

           <Campaigns campaigns={campaigns}></Campaigns>
           
        </div>
    );
};

export default Home;