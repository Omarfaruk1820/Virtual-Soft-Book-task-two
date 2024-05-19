

const SingleProduct = ({product}) => {
    const {modelName,previousPrice,nowPrice,img}=product;
    return (
      <div className="card border  shadow-xl">
    <div className=" border  ">
  <div className=" place-items-end">
  <span className="indicator-item badge badge-primary">new</span>
        <figure className="px-4 pt-4">
          <img className='h-48 w-full  ' src={img} alt="img"  />
        </figure>
        <div className="card-body">
          <h2 className="  font-semibold">{modelName}</h2>

          <p className='line-through text-gray-600 font-semibold'>Previous Price:${previousPrice}</p>
          <p className='text-black-600 font-semibold'>Current Price: ${nowPrice}</p>
          
        </div>
      </div>
 
  </div>
</div>
    );
};

export default SingleProduct;