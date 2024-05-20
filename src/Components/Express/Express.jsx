import { useEffect, useState } from "react";
import SingleExpress from "./SingleExpress";


const Express = () => {
    const [exprees,setExprees]=useState([])
    useEffect(()=>{
        fetch('Express.json')
        .then(res=>res.json())
        .then(data=>setExprees(data))
    },[])
    return (
        <div className='mt-10'>
            <h1 className='text-3xl font-semibold'>Express:</h1>
            <h1 className='text-2xl font-semibold'>Enjoy Delivery in 1 Hour</h1>
            <div className="grid md:grid-cols-7 grid-cols-2 gap-5 mt-5">
                {
                    exprees.map(express=><SingleExpress key={express.id} express={express}></SingleExpress>)
                }
            </div>
        </div>
    );
};

export default Express;