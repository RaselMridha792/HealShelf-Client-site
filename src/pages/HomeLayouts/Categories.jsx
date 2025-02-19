import { Link } from "react-router-dom";
import useCategories from "../DashboardLayouts/shared/loadDataHook/useCategories";
import Loader from "../DashboardLayouts/shared/Loader";

const Categories = () => {
  const [categories, isLoading] = useCategories();
  return (
    <>
      <section className="mb-20 mt-10">
        <h1 className="text-2xl py-5 font-bold">Our Popular Categories </h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5">
          {isLoading ? (
            <Loader></Loader>
          ) : (
            categories.map((category) => (
              <Link to={`/category/${category.categoryName}`}
                className="card border hover:border-cyan-500 hover:shadow-lg duration-300 rounded-none"
                key={category._id}
              >
                <figure className="flex p-2 items-center justify-center">
                  <img
                    className="h-52 md:w-64 object-cover"
                    src={category.image}
                    alt=""
                  />
                </figure>
                <div className="card-body px-3">
                  <h1 className="card-title">{category.categoryName}</h1>
                  <div className="mt-auto flex items-center">
                    <p className="text-sm">{category.medicineCount} Product</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Categories;
