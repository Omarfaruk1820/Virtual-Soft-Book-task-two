import { useEffect, useState } from "react";
import SingleTrend from "./SingleTrend";


const Trending = () => {
    const  [trends,setTrend]=useState([])
    useEffect(()=>{
        fetch('Trending.json')
        .then(res=>res.json())
        .then(data=>setTrend(data))
    },[])
    return (
        <div className='mt-5'>
          
           <div className='card h-[480px] w-[1400px]  shadow-2xl'>
           <h1 className='text-3xl font-semibold'>Trending Now:</h1>
           <div className=' mx-auto grid md:grid-cols-6 mt-5 grid-cols-2 gap-5 w-[1350px]'>
            {
                trends.map(trend=><SingleTrend key={trend.id} trend={trend}></SingleTrend>)
            }
            </div>
            </div> 
        </div>
    );
};

export default Trending;