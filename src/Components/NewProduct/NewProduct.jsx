import { useEffect, useState } from "react";
import SingleNewPro from "./SingleNewPro";


const NewProduct = () => {
    const [newProducts,setNewProduct]=useState([])
    useEffect(()=>{
        fetch('Product2.json')
        .then(res=>res.json())
        .then(data=>setNewProduct(data))
    },[])
    return (
        <div className='mt-10'>
          <h1>New Product:</h1>
          <div className='grid md:grid-cols-5 grid-cols-2 gap-5'>
            {
                newProducts.map(newProduct=> <SingleNewPro key={newProduct.id} newProduct={newProduct}></SingleNewPro>)
            }
            </div>  
        </div>
    );
};

export default NewProduct;