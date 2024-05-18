
import { FaUser } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const Header = () => {
 

   
    return  ( 
        <div className="navbar bg-base-100">

        <div className="flex-1 ml-32">
          <h1 className=" text-5xl font-extrabold mr-5 mt-[-20px]">Evaly</h1>
          <div className="form-control w-[700px]">
            <input type="text" placeholder="Search in Virtual Soft Book" className="input input-bordered bg-gray-50  md:w-auto "/>
            </div>
          
        </div>
       <h1 className='text-3xl font-bold mr-20'> <MdOutlineProductionQuantityLimits /></h1>
        <div className="dropdown dropdown-end mr-20">
        <div className='flex'>
        <button className="btn">
            <h1 className='text-xl'><FaUser /></h1>
            <span className='text-xl'>Sign IN</span>
        </button>
        </div>
           </div>

           
        </div>
        
  
 
    )    
};

export default Header;