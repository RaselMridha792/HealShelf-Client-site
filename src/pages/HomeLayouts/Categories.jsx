import useCategories from "../DashboardLayouts/shared/loadDataHook/useCategories";
import Loader from "../DashboardLayouts/shared/Loader";

const Categories = () => {
  const [categories, isLoading] = useCategories();
  console.log(categories);
  return (
    <>
      <section className="my-20">
        <h1 className="text-2xl py-5 font-bold">Our Popular Categories:</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
          {isLoading ? (
            <Loader></Loader>
          ) : (
            categories.map((category) => (
              <div
                className="card border hover:border-cyan-500 duration-300 rounded-none"
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
                    <button className="btn btn-sm btn-outline text-cyan-700">
                      view more
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Categories;
