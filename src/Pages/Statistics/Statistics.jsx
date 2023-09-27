import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

const Statistics = () => {
    const [statistics, setStatistics] = useState([])
    const [data, setData] = useState([
        { name: 'Group A', },
        { name: 'Group B', },
    ]);
    useEffect(() => {
        const statisticsItems = JSON.parse(localStorage.getItem('donate'));
        if (detailsItems) {
            const total = 1855
            setStatistics(statisticsItems)
            console.log(statisticsItems)
            let sum = 0
            for (let i = 0; i < statisticsItems.length; i++) {
                sum = sum + statisticsItems[i];
            }
            console.log(sum)
            const percentage = ((sum / total) * 100).toFixed(1);
            const totalPercentage = 100 - percentage
            console.log(`Percentage: ${percentage}%`);
            console.log(`Percentage: ${totalPercentage}%`);
            // console.log(statistics)
            const percentageData = { name: 'Percentage', value: parseFloat(percentage) };
            const totalPercentageData = { name: 'Total Percentage', value: parseFloat(totalPercentage) };

            // Update the data array with the new objects
            setData([...data, percentageData, totalPercentageData]);

        }
        else {
            setStatistics('No data Found');
        }
    }, [])

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

    const COLORS = ['#00C49F', '#FF444A'];
    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie


                        dataKey="value"

                        isAnimationActive={true} // Disable animation if needed
                        data={data}
                        cx="50%" // Center of the chart
                        cy="50%"
                        outerRadius={80}
                        fill="#F6546A" // Fill color for the pie
                        label
                        labelLine={true}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>

                </PieChart>
            </ResponsiveContainer>
            <div className='flex gap-5 md:gap-20 items-center justify-center'>
                <div className='flex gap-2 md:gap-5'>

                    <div >

                        <h1 className='text-base md:text-xl'>Your Donation</h1>
                    </div>
                    <div className='w-[40px] md:w-[100px] bg-[#00C49F]'>

                    </div>
                </div>

                <div className='flex gap-2 md:gap-5'>

                    <div >

                        <h1 className='text-base md:text-xl'>Total Donation</h1>
                    </div>
                    <div className='w-[40px] md:w-[100px] bg-[#FF444A]'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
