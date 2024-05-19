

const SignlePropular = ({propular}) => {
    const {stock,ProductTitle,Previusprice,CurrentPrice,ProductImg}=propular
    return (
        <div className="card border bg-base-100 shadow-xl">
  <figure className="px-6 pt-6">
    <img src={ProductImg} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{stock}</h2>
    <p>{ProductTitle}</p>
    <p className='line-through'>Price:${Previusprice}</p>
    <p>{CurrentPrice}</p>
    
  </div>
</div>
    );
};

export default SignlePropular;