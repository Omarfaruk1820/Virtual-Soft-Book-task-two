

const SignleTopShop = ({topshop}) => {
    const {ShopTitle,Rating,location,ProductImg}=topshop
    return (
        <div className="">
           <div className="card  border bg-base-100 shadow-xl mt-5">
  <figure className="px-4 pt-4">
    <img className='h-40 border shadow-lg rounded-xl' src={ProductImg} alt="TopShop"  />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{ShopTitle}</h2>
    <p className='font-semibold'>{Rating}</p>
   <div className='text-xl'>
   <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
   </div>
    <p className='font-semibold'>{location}</p>

  </div>
</div> 
        </div>
    );
};

export default SignleTopShop;