import { useParams } from "react-router-dom";
import Loader from "../DashboardLayouts/shared/Loader";
import RowCard from "../shop/RowCard";
import useProduct from "../DashboardLayouts/shared/loadDataHook/useProduct";

const CategoryDetails = () => {
    const params = useParams()
    const [products, isLoading] = useProduct();
    const specificProduct = products?.filter(product => product.category == params.category)
  return (
    <>
      <section className="my-40 max-w-screen-2xl mx-auto px-5">
        <h1 className="text-4xl">Category wise data</h1>
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
              {isLoading ? <Loader></Loader> : specificProduct.map(product => <RowCard key={product._id} product={product}></RowCard>) }
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default CategoryDetails;
