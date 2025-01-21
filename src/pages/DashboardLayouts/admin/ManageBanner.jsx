const ManageBanner = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center py-5 capitalize">
        manage banner advertise
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-cyan-500 text-white">
            <tr>
              <th>
               #
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Add to Banner</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                 #
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <input type="checkbox" className="toggle" />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageBanner;
