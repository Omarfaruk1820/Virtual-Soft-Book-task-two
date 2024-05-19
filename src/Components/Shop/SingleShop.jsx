

const SingleShop = ({shop}) => {
    const {ShopTitle,img}=shop;
    return (
        <div className="card  bg-base-100 border shadow-sm">
  <figure className="px-6 pt-6">
    <img className='h-40' src={img} alt="Shoes" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{ShopTitle}</h2>
    <p></p>
    
  </div>
</div>
    );
};

export default SingleShop;