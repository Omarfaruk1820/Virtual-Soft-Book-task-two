import LeftSide from "./LeftSide";
import Right from "./Right";


const CashOnDelivery = () => {
    return (
        <div className=' grid  md:grid-cols-8 gap-3'>
            <div className='col-span-4  mt-10'>
                <LeftSide></LeftSide>
            </div>

            <div className='col-span-4  mt-10'>
                <Right></Right>
            </div>
        </div>
    );
};

export default CashOnDelivery;