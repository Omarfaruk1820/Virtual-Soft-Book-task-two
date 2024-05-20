import { useEffect, useState } from "react";
import SignleTopShop from "./SignleTopShop";


const TopShop = () => {
    const [topshops,setTopShop]=useState([])
    useEffect(()=>{
        fetch('TopShop.json')
        .then(res=>res.json())
        .then(data=>setTopShop(data))
    },[])
    return (
        <div>
          <h1 className='text-3xl font-semibold mt-10'>Top Rating shop:</h1>
          <div className='grid md:grid-cols-6 grid-cols-2 gap-4'>
            {
                topshops.map(topshop=><SignleTopShop key={topshop.id} topshop={topshop}></SignleTopShop>)
            }
            </div>  
        </div>
    );
};

export default TopShop;