import { Link } from "react-router-dom";



const NavigationBar = () => {
    const NavLink=<>
    
    
   <Link to='/home'>Home</Link>
    <Link><a>Shops</a></Link>
    <Link><a>Categories</a></Link>
    <Link to='/contact'>Contact</Link>
    </>
    return (
    <div className="navbar bg-base-50  shadow-lg mt-2">
        
  <div className="navbar-start gap-10 text-xl font-semibold ml-32 ">
   
    
    {NavLink}
    
   
  </div>

 
</div>
    );
};

export default NavigationBar;