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
          
           <div className='card md:h-[480px] md:w-[1400px]  shadow-2xl'>
           <h1 className='text-3xl font-semibold'>Trending Now:</h1>
           <div className='  grid md:grid-cols-6  grid-cols-2  md:w-[1350px] mt-5 mx-auto gap-5'>
            {
                trends.map(trend=><SingleTrend key={trend.id} trend={trend}></SingleTrend>)
            }
            </div>
            </div> 
        </div>
    );
};

export default Trending;