import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, test, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side p-8 bg-base-100 shadow-xl">
        <figure>
          <img className="w-36 h-full" src={photo} alt="photo" />
        </figure>
        <div className="flex justify-between w-full p-4">
          <h2 className="card-title">Name: {name}</h2>
          <div className="grid grid-cols-1">
            <p>{details}</p>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{test}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-4">
              <button className="btn join-item">View</button>
              <Link to={`update-coffee/${_id}`}>
                <button className="btn join-item">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
