

const SingleExpress = ({express}) => {
    const {ShopTitle,Rating,location,ProductImg}=express
    return (
        <div className="card  border border-yellow-300 bg-base-100 shadow-xl">
  <figure className="px-4 pt-4">
    <img src={ProductImg} alt="express" className="rounded-xl h-20" />
  </figure>
  <div className="ml-2">
    <h2 className="card-title">{Rating}</h2>
    <p>{ShopTitle}</p>
    <p>{location}</p>
   
  </div>
</div>
    );
};

export default SingleExpress;