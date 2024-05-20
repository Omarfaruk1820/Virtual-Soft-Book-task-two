

const SignleDelivery = ({delivery}) => {
    const {ShopTitle,Rating,location,ProductImg}=delivery
    return (
        <div className="card mt-2 border-green-600 border bg-base-100 shadow-xl">
        <figure className="px-4 pt-4">
          <img src={ProductImg} alt="CashOnDelivery" className="rounded-xl w-32 h-20" />
        </figure>
        <div className=" ml-2">
          <h2 className="card-title">{Rating}</h2>
          <p>{ShopTitle}</p>
          <h1>{location}</h1>
         
        </div>
      </div>
    );
};

export default SignleDelivery;