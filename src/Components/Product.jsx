import { useEffect } from "react";
import { useState } from "react";
import SingleProduct from "./SingleProduct";


const Product = () => {
    const [products,setProduct]=useState([])
    useEffect(()=>{
        fetch('Product.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div>
           <h1 className='text-3xl font-semibold'>Products:</h1>
           <div className=' grid md:grid-cols-6 gap-2 grid-cols-2 mt-5'>
            {
                products.map(product=> <SingleProduct key={product.id} product={product}></SingleProduct>)
            }
            </div> 
        </div>
    );
};

export default Product;