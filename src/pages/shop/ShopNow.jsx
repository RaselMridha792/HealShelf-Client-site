import useProducts from "../DashboardLayouts/shared/loadDataHook/useProducts";
import RowCard from "./RowCard";
import Loader from "../DashboardLayouts/shared/Loader";

const ShopNow = () => {
  const [products, isLoading] = useProducts();
  console.log(products);
  return (
    <>
      <section className="my-40 max-w-screen-2xl mx-auto px-5">
        <h1 className="text-4xl">Shop Now</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Add to Cart</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {isLoading ? <Loader></Loader> : products.map(product => <RowCard key={product._id} product={product}></RowCard>) }
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ShopNow;
