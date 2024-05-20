import { useEffect, useState } from "react";
import SingleCardDelivery from "./SingleCardDelivery";


const Right = () => {
    const [onDelivery,setDelivery]=useState([])
    useEffect(()=>{
        fetch('COD.json')
        .then(res=>res.json())
        .then(data=>setDelivery(data))
    },[])
    return (
        <div>
            <h1 className='text-5xl font-semibold'>B2B:</h1>
           <h1 className='text-3xl font-semibold'> Pay cash on delivery:</h1>
           <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
            {
                onDelivery.map(delivery=><SingleCardDelivery key={delivery.id} delivery={delivery}></SingleCardDelivery>)
            }
           </div>
        </div>
    );
};

export default Right;