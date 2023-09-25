import  { useEffect, useState } from 'react';
import DetailCards from '../DetailCards/DetailCards';

const Donations = () => {
    const [detail, setdetails]= useState([])
    const [noFound,setNoFound] = useState(false);
    const[isShow,setIsShow] = useState(false);
    useEffect(()=>{
        const detailsItems = JSON.parse(localStorage.getItem('donations'));
        if(detailsItems){
            setdetails(detailsItems)
            console.log(detail)
        }
        else{
            setNoFound('No data Found');
        }
    },[])
    console.log(detail)
    console.log(isShow)
    return (
        <div className='py-20'>
            {
                noFound?<p className='h-[80vh] flex justify-center items-center'>{noFound}</p> : 
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {
                        isShow ? detail.map(detail=><DetailCards key={detail.id} detail={detail}></DetailCards>) 
                        :
                        detail.slice(0,4).map(detail=><DetailCards key={detail.id} detail={detail}></DetailCards>)
                    }
                </div>
            }
                <button onClick={()=>setIsShow(!isShow)} className='mt-10 p-5 bg-green-600 block mx-auto'>
                    {
                        isShow ? "See Less" :"See All"
                    }
                </button>


        </div>
    );
};

export default Donations;