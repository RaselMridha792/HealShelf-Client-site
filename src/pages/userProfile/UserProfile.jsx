const UserProfile = () => {
  return (
    <>
      <section className="max-w-screen-2xl border rounded-xl mx-auto px-5 mt-40">
        <div className="flex items-center justify-between p-5">
          <div className=" flex items-center gap-5">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Rasel Mridh</h1>
              <p>Raselmridha792@gmail.com</p>
            </div>
          </div>
          <div>
            <button className="btn btn-primary">Edit</button>
          </div>
        </div>
        {/* <div>
          <div className="flex gap-5 w-full flex-col md:flex-row">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input bg-gray-100"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
        </div> */}
        <div className="divider"></div>
        <div>
          <h1 className="text-2xl font-bold">Personal Information</h1>
          <div className="flex gap-10">
            <div className="pt-5">
              <h1 className="font-bold">First name</h1>
              <p className="text-gray-500">Rasel</p>
            </div>
            <div className="pt-5">
              <h1 className="font-bold">Last name</h1>
              <p className="text-gray-500">Mridha</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
