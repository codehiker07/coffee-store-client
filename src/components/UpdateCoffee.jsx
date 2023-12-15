import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, test, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      test,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // Send data to the Server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedId) {
          Swal.fire({
            title: "Success",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-20 max-w-6xl text-center items-center mx-auto">
      <h2 className="text-3xl font-extrabold">Update Coffee</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered join-item w-full"
                name="name"
                defaultValue={name}
                placeholder="Coffee Name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered join-item w-full"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
              />
            </label>
          </div>
        </div>
        {/* form supplier*/}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered join-item w-full"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier Name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Test</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered join-item w-full"
                name="test"
                defaultValue={test}
                placeholder="Test"
              />
            </label>
          </div>
        </div>

        {/* form category and details row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered join-item w-full"
                name="category"
                defaultValue={category}
                placeholder="Category Name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered join-item w-full"
                name="details"
                defaultValue={details}
                placeholder="Details"
              />
            </label>
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <label className="input-group">
            <input
              className="input input-bordered join-item w-full"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
            />
          </label>
        </div>
        <br />
        <br />
        <input className="btn btn-block" type="submit" value="Update Coffee" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
