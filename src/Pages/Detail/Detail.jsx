import swal from 'sweetalert';
import Statistics from '../Statistics/Statistics';

const Detail = ({ detail }) => {
    // console.log(detail)
    const { id, image, description, title, donate } = detail
    const handleDonate = () => {
        const addDonationLists = [];
        const addDonateLists = [];
        const allDonations = JSON.parse(localStorage.getItem('donations'));
        const Donate = JSON.parse(localStorage.getItem('donate')) || [];

        if (!allDonations) {
            addDonationLists.push(detail);
            localStorage.setItem('donations', JSON.stringify(addDonationLists));
            swal("Good job!", "Products added successfully", "success");

        }
        else {
            const isExist = allDonations.find((donation) => donation.id === id);
            if (!isExist) {
                addDonationLists.push(...allDonations, detail);
                localStorage.setItem('donations', JSON.stringify(addDonationLists));
                swal("Good job!", "Products added successfully", "success");

            }
            else {
                swal("Error!", "No Duplicate", "error");

            }
        }

        if (!Donate.includes(detail.donate)) {
            Donate.push(detail.donate);
            localStorage.setItem('donate', JSON.stringify(Donate));
        } 
        
    }
    return (
        <div>
            <div className="flex mt-10 justify-center items-center flex-col relative w-max mx-auto">
                <img className=' md:w-[800px] ' src={image} alt="" />
                <div className=' bg-opacity-50 bg-black w-full'>

                <div className='absolute left-0 md:left-0  md:top-96 bg-opacity-50 bg-black w-full md:w-[800px] bottom-0'>
                    <button onClick={handleDonate} className='bg-[#FF444A] md:ml-10 md:mt-5 text-white text-bold text-xs md:text-2xl p-3 '>Donate ${donate}</button>
                </div>
                </div>
            </div>
            <div className=' mt-10 ml-0 md:ml-64'>

                <h1 className='text-5xl font-semibold'>{title}</h1>
                <p className='text-xl mt-10 w-full md:w-[800px]'>{description}</p>
            </div>
        
        </div>
    );
};

export default Detail;