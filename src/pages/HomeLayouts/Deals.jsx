import { Link } from "react-router-dom";

const Deals = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 gap-5">
      <div className="lg:col-span-3 border  border-cyan-500 rounded-lg p-5">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-5">
            <img
              className="w-16"
              src="https://img.icons8.com/?size=100&id=ApOLCbcm9KeC&format=png&color=000000"
              alt=""
            />
            <h1 className="text-xl capitalize font-bold border-r-2 pr-5 border-cyan-500">
              deals of the day
            </h1>
            <p className="text-cyan-500 ">Ends In: 7days</p>
          </div>
          <div>
            <Link
              className="text-cyan-500 text-lg underline hover:text-cyan-300"
              to={"/shop-now"}
            >
              See All
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
          <div className="card bg-base-100 shadow-sm hover:shadow-lg border rounded-sm duration-300">
            <figure>
              <img
                src="https://img.icons8.com/?size=100&id=YKmWcwT48liT&format=png&color=000000"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                personal care
                <div className="badge badge-secondary">-20%</div>
              </h2>
              <p>Blood Pressure and Sprague Stethoscope Kit</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm hover:shadow-lg border rounded-sm duration-300">
            <figure>
              <img
                src="https://img.icons8.com/?size=100&id=124316&format=png&color=000000"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Heart Medicine
                <div className="badge badge-secondary">-20%</div>
              </h2>
              <p>Supports heart function, regulates blood flow.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm hover:shadow-lg border rounded-sm duration-300">
            <figure>
              <img
                src="https://img.icons8.com/?size=100&id=zdyJAwQtaLsX&format=png&color=000000"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Mental Health
                <div className="badge badge-secondary">-20%</div>
              </h2>
              <p>Enhances mood & stability, reduces anxiety.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm hover:shadow-lg border rounded-sm duration-300">
            <figure>
              <img
                src="https://img.icons8.com/?size=100&id=KNklzhnWchAi&format=png&color=000000"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                physical health
                <div className="badge badge-secondary">-20%</div>
              </h2>
              <p>Boosts body strength, improves immunity.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cyan-500 bg-opacity-20 rounded-lg md:col-span-1 w-full p-5">
        <h1 className="text-2xl font-bold">How to Order Medicines online?</h1>
        <div className="divider"></div>
        <div className="mt-5 space-y-5">
          <div className="flex gap-2 items-center">
            <p className="border-r pr-2 border-cyan-500 font-bold">Step One</p>
            <h1>
              Search your meds <br />
              Compare prices & brands.
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <p className="border-r pr-2 border-cyan-500 font-bold">Step Two</p>
            <h1>
            Place your order <br />
            We`ll get your prescriptions.
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <p className="border-r pr-2 border-cyan-500 font-bold">Step three</p>
            <h1>
            Sastifaction Guaranteed <br />
            Meds delivered on your teams.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
