import { Link } from "react-router-dom";

const DiscountCard = ({ product }) => {
  const { name, image, _id } = product;

  const handleViewDetails = (id) => {
    console.log(id);
  };
  return (
    <>
      <div className="card card-compact bg-base-100 w-80 mx-5 border rounded-none">
        <figure>
          <img className="w-52 h-52 object-cover p-5" src={image} alt="Shoes" />
        </figure>
        <div className="card-body flex flex-col min-h-[200px]">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions mt-auto justify-end">
            <Link to="/shop-now"
              onClick={() => handleViewDetails(_id)}
              className="btn btn-outline btn-sm"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountCard;
