import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import NavigationBar from "../Components/Navigation/NavigationBar";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";



const Main = () => {
    return (
        <div className=' mt-5'>
            <Header></Header>
            <NavigationBar></NavigationBar>
        <div className='max-w-[1400px] mx-auto mt-5'>
        <Banner></Banner>
        </div>
        <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;