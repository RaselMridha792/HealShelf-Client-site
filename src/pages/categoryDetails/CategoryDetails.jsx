import { useParams } from "react-router-dom";
import Loader from "../DashboardLayouts/shared/Loader";
import RowCard from "../shop/RowCard";
import useProduct from "../DashboardLayouts/shared/loadDataHook/useProduct";
import { Helmet } from "react-helmet";

const CategoryDetails = () => {
    const params = useParams()
    const [products, isLoading] = useProduct();
    const specificProduct = products?.filter(product => product.category == params.category)
  return (
    <>
      <section className="my-40 max-w-screen-2xl mx-auto px-5">
      <Helmet>
        <title>Heal shelf | category</title>
        <meta name="Heal shelf" content="Helmet application" />
      </Helmet>
        <h1 className="text-3xl text-center font-bold uppercase">Category Details</h1>
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
