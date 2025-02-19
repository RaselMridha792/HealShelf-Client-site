import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen px-5 w-full flex-col flex items-center justify-center">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold capitalize">Something`s wrong here </h1>
          <p>we can`t find the page you are looking for. You can Go back</p>
          <Link to="/" className="btn bg-cyan-500 text-white">
            Go Back
          </Link>
        </div>
        <img
          className="lg:w-1/3 md:w-1/2"
          src="https://i.ibb.co.com/Kxq62NL3/404-Error-pana.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorPage;
