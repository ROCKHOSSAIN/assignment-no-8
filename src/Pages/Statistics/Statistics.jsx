import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import  { useEffect, useState } from 'react';

const Statistics = () => {
    let   Total = 1853;
    const [statistics, setStatistics]= useState([])

    useEffect(()=>{
        const statisticsItems = JSON.parse(localStorage.getItem('donate'));
        if(detailsItems){
            setStatistics(statisticsItems)
            console.log(statisticsItems)
        }
        else{
            setStatistics('No data Found');
        }
    },[])
    const data = [
        { name: 'Group A', value: 66.7 },
        { name: 'Group B', value: 33.3 },

    ];
    const detailsItems = JSON.parse(localStorage.getItem('donations'));

// Specify the ID you want to find
const targetId = 2; // Replace with the ID you are looking for

// Use the find method to find the item with the matching ID
const specificItem = detailsItems.find((item) => item.id === targetId);

if (specificItem) {
    // Do something with the specific item
    console.log(specificItem);
} else {
    // Item with the specified ID was not found
    console.log('Item not found');
}

    
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false} // Disable animation if needed
                        data={data}
                        cx="50%" // Center of the chart
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8" // Fill color for the pie
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
