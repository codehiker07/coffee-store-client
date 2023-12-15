const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, test, category, details, photo } = coffee;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="photo" />
        </figure>
        <div className="flex justify-between w-full p-4">
          <h2 className="card-title">Name: {name}</h2>
          <p>{details}</p>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{test}</p>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-4">
              <button className="btn join-item">View</button>
              <button className="btn join-item">Edit</button>
              <button className="btn join-item">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
