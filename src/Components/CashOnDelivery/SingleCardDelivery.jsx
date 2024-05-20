

const SingleCardDelivery = ({delivery}) => {
    const {ShopTitle,Rating,location,ProductImg}=delivery
    return (
        <div>
            <div className="card border border-green-600   bg-base-100 shadow-xl">
  <figure className="px-3 pt-3">
    <img  src={ProductImg} alt="B2B" className="rounded-xl h-28 p-5" />
  </figure>
  <div className="mt-5 ml-2">
    <h2 className="card-title">{Rating}</h2>
    <p>{ShopTitle}</p>
    <p>{location}</p>
    
  </div>
</div>
        </div>
    );
};

export default SingleCardDelivery;