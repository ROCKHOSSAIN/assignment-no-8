import React from 'react';

const DetailCards = ({ detail }) => {
    const {image, title, donate, category, textColor, categoryBackgroundColor, categoryTextColor } = detail
    const cardStyle = {
        backgroundColor: categoryBackgroundColor
    };
    const categoryStyle = {
        backgroundColor: categoryBackgroundColor,
        color: categoryTextColor
    };
    const categoryStyle2 = {
        backgroundColor: textColor,
        
    };
    const textStyle = {
        color: textColor, 
    };
 
    return (
        <div className='mt-20'>
            <div style={cardStyle}  className="relative flex w-full max-w-[48rem] flex-row rounded-xl  shadow-md">
                <div  className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-clip-border ">
                    <img

                        src={image}
                        alt="image"
                        className="h-full w-full object-cover "
                    />
                </div>
                <div className="p-6">
                    <span style={categoryStyle} className="mb-4 font-sans text-base font-semibold uppercase leading-relaxed tracking-normal antialiased inline-block">
                        {category}
                    </span>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal  antialiased">
                        {title}
                    </h4>
                    <p style={textStyle} className="mb-8 block font-medium text-xl  leading-relaxed  antialiased ">
                        ${donate}
                    </p>
                    <a className="inline-block" href="#">
                        <button style={categoryStyle2} className=' p-2 text-white'>
                            View Details
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DetailCards;