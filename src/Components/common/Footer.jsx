import { Link } from "react-router-dom";
import logo from "../../assets/authRelated/healshelf.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <section className="bg-cyan-400 py-10">
        <footer className="footer p-10 max-w-screen-2xl mx-auto px-5">
          <div>
            <aside className="flex items-center w-full h-full">
              <img className="w-52" src={logo} alt="" />
            </aside>
            <p className="">
              HealShelf: Your One-Stop Destination for Trusted Medicines, Expert <br />
              Care, and Wellness Solutions Delivered Right to Your Doorstep!
            </p>
          </div>
          <nav>
            <h6 className="text-xl font-bold">Navlinks</h6>
            <div className="flex flex-col md:flex-row gap-5 text-lg">
              <Link to="/" className="link link-hover">
                Home
              </Link>
              <Link to="/shop-now" className="link link-hover">
                shop now
              </Link>
              <Link to="/cart" className="link link-hover">
                Cart
              </Link>
              <Link to="/profile" className="link link-hover">
                Profile
              </Link>
            </div>
          </nav>
          <nav>
            <h6 className="text-xl font-bold">Connect With Us</h6>
            <div className="flex gap-5 text-3xl">
              <p>
                <FaFacebook></FaFacebook>
              </p>
              <p>
                <FaLinkedin></FaLinkedin>
              </p>
              <p>
                <FaTwitter></FaTwitter>
              </p>
              <p>
                <FaInstagram></FaInstagram>
              </p>
            </div>
          </nav>
        </footer>
        <hr className="mt-10 border-gray-500 max-w-screen-2xl mx-auto" />
        <div className="footer footer-center p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Rasel Mridha
            </p>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Footer;
