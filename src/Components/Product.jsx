import { useEffect } from "react";
import { useState } from "react";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";


const Product = () => {
    const [products,setProduct]=useState([])
    useEffect(()=>{
        fetch('Product.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className='mt-10'>
           <div className='flex justify-between'>
           <h1 className='text-3xl font-semibold'>Products:</h1>
           <Link to='seemoreProduct'><button className="btn w-40 text-black rounded-full"> Show More</button></Link>
           </div>
           <div className=' grid md:grid-cols-6 gap-2 grid-cols-2 mt-5'>
            {
                products.map(product=> <SingleProduct key={product.id} product={product}></SingleProduct>)
            }
            </div> 
        </div>
    );
};

export default Product;