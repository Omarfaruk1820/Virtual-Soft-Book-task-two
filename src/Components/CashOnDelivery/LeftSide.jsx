import { useEffect, useState } from "react";
import SignleDelivery from "./SignleDelivery";


const LeftSide = () => {
    const [deliverys,setDeliver]=useState([])
    useEffect(()=>{
        fetch('COD2.json')
        .then(res=>res.json())
        .then(data=>setDeliver(data))
    },[])
    return (
        <div>
            <h1 className='text-4xl  font-semibold'>COD:</h1>
            <h1 className='text-3xl font-semibold'>Pay cash on delivery:</h1>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-3'>
                {
                    deliverys.map(delivery=> <SignleDelivery key={delivery.id} delivery={delivery}></SignleDelivery>)
                }
            </div>
        </div>
    );
};

export default LeftSide;