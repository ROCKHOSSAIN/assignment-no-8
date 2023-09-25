import React from 'react';
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
    const {id,image,category,title,categoryBackgroundColor,textColor,backgroundColor,categoryTextColor} =campaign
    const textStyle = {
        color: textColor, // Set the text color dynamically
    };
    const cardStyle = {
        backgroundColor: backgroundColor,
        // You can add more CSS properties here if needed
    };
    const categoryStyle = {
        backgroundColor: categoryBackgroundColor,
        color: categoryTextColor
    };
    

    return (
        <Link to ={`/details/${id}`}>
        <div className='mt-32 rounded-xl' style={cardStyle} >
            <div className="card card-compact  shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="">

                    <span className="card-title inline-block p-1" style={categoryStyle}>{category}</span>
                    </div>
                    <p className='text-xl font-semibold' style={textStyle}>{title}</p>
                    
                </div>
            </div>
        </div>
        </Link>
    );
};

export default CampaignCard;