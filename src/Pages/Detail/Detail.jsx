import React from 'react';
import swal from 'sweetalert';

const Detail = ({detail}) => {
    // console.log(detail)
    const {id,image,description,title,donate} = detail
    const handleDonate=()=>{
        const addDonationLists = [];
        const allDonations = JSON.parse(localStorage.getItem('donations'));
        if(!allDonations){
            addDonationLists.push(detail);
            localStorage.setItem('donations',JSON.stringify(addDonationLists));
            swal("Good job!", "Products added successfully", "success");

        }
        else{
            const isExist = addDonationLists.find((donation)=>donation.id===id);
            if(!isExist){
                addDonationLists.push(...allDonations,detail);
                localStorage.setItem('donations',JSON.stringify(addDonationLists));
            swal("Good job!", "Products added successfully", "success");

            }
            else{
                swal("Good job!", "No Duplicate Products", "error");

            }
        }
    }
    return (
        <div>
            <div className="flex mt-10 justify-center items-center flex-col relative">
            <img className='w-[800px] ' src={image} alt="" />
            <div onClick={handleDonate} className='absolute left-5 md:left-72 top-44 md:top-96'>
                <button className='bg-[#FF444A] text-white text-bold text-2xl p-3 '>Donate ${donate}</button>
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