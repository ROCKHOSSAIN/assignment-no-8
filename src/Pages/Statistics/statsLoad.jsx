import React, { useEffect, useState } from 'react';

const statsLoad = () => {
    const[stats,setstats]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setstats(data));
    },[])
    console.log(stats)
    return (
        <div>
            
        </div>
    );
};

export default statsLoad;