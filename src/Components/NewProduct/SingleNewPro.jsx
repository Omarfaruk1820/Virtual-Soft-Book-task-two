

const SingleNewPro = ({newProduct}) => {
    const {productTile,previousPrice,nowPrice,img}=newProduct

    return (
        <div className="card border border-yellow-200  shadow-xl">
        <div className=" border  ">
      <div className=" place-items-end">
      <span className="indicator-item badge badge-primary">new</span>
            <figure className="">
              <img className='h-40 ' src={img} alt="img"  />
            </figure>
            <div className="card-body">
              <h2 className="  font-semibold">{productTile}</h2>
    
              <p className='line-through text-gray-600 font-semibold'>Previous Price:${previousPrice}</p>
              <p className='text-black-600 font-semibold'>Current Price: ${nowPrice}</p>
              
            </div>
          </div>
     
      </div>
    </div>
    );
};

export default SingleNewPro;