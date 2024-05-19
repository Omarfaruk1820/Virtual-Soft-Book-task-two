import { useEffect, useState } from "react";
import SignlePropular from "./SignlePropular";


const Propular = () => {
    const [propulars,setPropular]=useState([])
    useEffect(()=>{
        fetch('PropularProduct.json')
        .then(res=>res.json())
        .then(data=>setPropular(data))
    },[])
    return (
        <div className='mt-10'>
           <h1 className="text-3xl font-semibold">Propular Product:</h1>
           <div className="grid md:grid-cols-6 grid-cols-2 gap-5">
            {
                propulars.map(propular=><SignlePropular key={propular.id} propular={propular}></SignlePropular>)
            }
           </div>
        </div>
    );
};

export default Propular;