import { useEffect, useState } from "react";
import SingleShop from "./SingleShop";
import { Link } from "react-router-dom";


const Shop = () => {
    const [shopes,setShop]=useState([])
    useEffect(()=>{
        fetch('Shop.json')
        .then(res=>res.json())
        .then(data=>setShop(data))
    },[])
    return (
        <div className='mt-10'>
           <div className='flex mx-5 justify-between'>
           <h1 className='text-3xl font-semibold'>Shops:</h1>
           <Link to='seemoreshop'><button className="btn w-40 text-black rounded-full"> Show More</button></Link>
           </div>

           <div className='grid md:grid-cols-6 grid-cols-2 gap-5'>
            {
                shopes.map(shop=> <SingleShop key={shop.id} shop={shop}></SingleShop>)
            }
            </div> 
        </div>
    );
};

export default Shop;