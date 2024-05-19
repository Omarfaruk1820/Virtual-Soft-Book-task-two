

const SingleTrend = ({trend}) => {
    const {stock,productTitle,priviusPrice,CurrentPrice,img}=trend
    return (
       
         <div className="card border bg-base-50 shadow-xl">
        <figure className="px-6 pt-6">
          <img src={img} alt="Product" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{stock}</h2>
          <p>{productTitle}</p>
          <h1 className='line-through'>${priviusPrice}</h1>
          <h1>${CurrentPrice}</h1>
          
        </div>
      </div>
       
    );
};

export default SingleTrend;