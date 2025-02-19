import useProducts from "../DashboardLayouts/shared/loadDataHook/useProducts";
import RowCard from "./RowCard";
import Loader from "../DashboardLayouts/shared/Loader";
import { FaList, FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Context/AuthProvider";

const ShopNow = () => {
      const {changeColor } = useContext(AuthContext);
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState('');
  const [products, isLoading] = useProducts(sort, search);
  return (
    <>
      <section className={`my-32 max-w-screen-2xl mx-auto px-5 ${changeColor?'text-black':'text-white'}`}>
      <Helmet>
        <title>Heal shelf | shop now</title>
        <meta name="Heal shelf" content="Helmet application" />
      </Helmet>
        <h1 className="text-3xl text-center font-bold">Shop Now</h1>
        <hr className="my-5" />
        <div className="flex gap-5 justify-between mb-10">
          <div className="join w-full md:w-8/12">
          <input
          onKeyUp={(e)=>setSearch(e.target.value)}
            type="text"
            className="input input-bordered w-full md:w-8/12 join-item"
            placeholder="search medicine"
          />
          <button className="btn join-item"><FaSearch></FaSearch></button>
          </div>
          <button onClick={() => setSort(!sort)} className={`btn ${sort?'btn-success':'btn-neutral'} text-white`}>
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
