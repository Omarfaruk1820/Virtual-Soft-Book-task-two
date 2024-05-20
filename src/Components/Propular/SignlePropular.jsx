

const SignlePropular = ({propular}) => {
    const {stock,ProductTitle,Previusprice,CurrentPrice,ProductImg}=propular
    return (
        <div className="card border bg-base-100 shadow-xl">
  <figure className="px-6 pt-6">
    <img src={ProductImg} alt="Propular" className="rounded-xl shadow-lg border"/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{stock}</h2>
    <p className='font-semibold'>{ProductTitle}</p>
    <p className='line-through text-xl'>Price:${Previusprice}</p>
    <p className="text-xl">Price:${CurrentPrice}</p>
    
  </div>
</div>
    );
};

export default SignlePropular;