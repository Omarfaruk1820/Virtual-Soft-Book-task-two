import { useEffect, useState } from "react";
import SingleShop from "./SingleShop";


const Shop = () => {
    const [shopes,setShop]=useState([])
    useEffect(()=>{
        fetch('Shop.json')
        .then(res=>res.json())
        .then(data=>setShop(data))
    },[])
    return (
        <div>
           <h1 className='text-3xl font-semibold '>Shops:</h1>
           <div className='grid md:grid-cols-6 grid-cols-2 gap-5'>
            {
                shopes.map(shop=> <SingleShop key={shop.id} shop={shop}></SingleShop>)
            }
            </div> 
        </div>
    );
};

export default Shop;