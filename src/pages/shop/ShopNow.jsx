import useProducts from "../DashboardLayouts/shared/loadDataHook/useProducts";
import RowCard from "./RowCard";
import Loader from "../DashboardLayouts/shared/Loader";
import { FaList } from "react-icons/fa";
import { useState } from "react";

const ShopNow = () => {
  const [sort, setSort] = useState(false);
  const [products, isLoading] = useProducts(sort);
  return (
    <>
      <section className="my-32 max-w-screen-2xl mx-auto px-5">
        <h1 className="text-3xl text-center font-bold">Shop Now</h1>
        <hr className="my-5" />
        <div className="flex gap-5 justify-between mb-10">
          <input
            type="text"
            className="input input-bordered w-full md:w-8/12"
            placeholder="search medicine"
          />
          <button onClick={() => setSort(!sort)} className={`btn ${sort?'btn-success':'btn-neutral'}`}>
            <FaList></FaList> {sort?"sorted by price":"short by price"}
          </button> 
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-cyan-600 text-white">
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Add to Cart</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {isLoading ? (
                <Loader></Loader>
              ) : (
                products.map((product) => (
                  <RowCard key={product._id} product={product}></RowCard>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ShopNow;
