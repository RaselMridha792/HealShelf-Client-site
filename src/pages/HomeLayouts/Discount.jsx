import useProducts from "../DashboardLayouts/shared/loadDataHook/useProducts";
import Loader from "../DashboardLayouts/shared/Loader";

const Discount = () => {
    const [products, isLoading] = useProducts()

  return (
    <>
      <section className="my-20">
        <div className="w-full py-10 bg-cyan-400">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-4xl font-bold uppercase">
                get upto 50% discount
              </h1>
              <p className="text-xl font-bold">for our OTC medicines</p>
            </div>
            <img
              className="w-1/2 h-64 object-cover"
              src="https://i.ibb.co.com/1JGtSqK/pngegg-1.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl py-5 capitalize">discount products</h1>
          <div className="my-10">
            {isLoading? <Loader></Loader> :  products.map(product => <div key={product._id}>
                <h1>{product.name}</h1>
            </div>)}
        </div>          
        </div>
      </section>
    </>
  );
};

export default Discount;