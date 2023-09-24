import CampaignCard from '../CampaignCard/CampaignCard';

const Campaigns = ({campaigns}) => {
    // console.log(Campaigns)

    return (
        <div className='grid grid-cols-4 items-center justify-center gap-6'>
            {
             campaigns?.map(campaign=><CampaignCard key={campaign.id} campaign={campaign}></CampaignCard>)  
            }
        </div>
    );
};

export default Campaigns;