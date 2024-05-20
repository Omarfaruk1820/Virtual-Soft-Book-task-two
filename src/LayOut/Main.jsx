import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import NavigationBar from "../Components/Navigation/NavigationBar";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Product from "../Components/Product";
import Shop from "../Components/Shop/Shop";
import Trending from "../Components/Trending/Trending";
import Propular from "../Components/Propular/Propular";
import TopShop from "../Components/TopShop/TopShop";



const Main = () => {
    return (
        <div className=' mt-5'>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <div className='max-w-[1400px] mx-auto mt-5'>
                <Banner></Banner>
            </div>
            <div className='max-w-[1400px] mx-auto'>
            <Product></Product>
            <Shop></Shop>
            <Trending></Trending>
            <Propular></Propular>
            <TopShop></TopShop>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;