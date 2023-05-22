import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedToy = () => {
  const toy = useLoaderData();
  console.log("toy daTa", toy);
  const { toyName, price, photoUrl, details, _id, quantity } = toy;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyName = form.toyName.value;
    const details = form.details.value;
    const price = form.price.value;
    const photoUrl = form.photoUrl.value;
    const quantity = form.quantity.value;
    const updateToys = {
      toyName,
      details,
      price,
      photoUrl,
      quantity,
    };
    console.log(updateToys);
    fetch(`http://localhost:3000/usertoy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Update Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      <h4>Update Your Toy: {toyName}</h4>
      <div>
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col items-center space-y-5">
            <input
              type="text"
              placeholder="Toys Name"
              className="input input-bordered input-secondary w-full max-w-xs shadow"
              name="toyName"
              required
              defaultValue={toyName}
            />

            <input
              type="text"
              placeholder="Details"
              className="shadow input input-bordered input-secondary w-full max-w-xs"
              name="details"
              required
              defaultValue={details}
            />

            <input
              type="text"
              placeholder="Price"
              className="shadow input input-bordered input-secondary w-full max-w-xs"
              name="price"
              required
              defaultValue={price}
            />

            <input
              type="text"
              placeholder="Quantity"
              className="shadow input input-bordered input-secondary w-full max-w-xs "
              name="quantity"
              required
              defaultValue={quantity}
            />
            <input
              type="text"
              placeholder="Photo Url"
              className="shadow input input-bordered input-secondary w-full max-w-xs"
              name="photoUrl"
              required
              defaultValue={photoUrl}
            />

            <input
              type="submit"
              value="Update Toy"
              className="shadow input input-bordered input-secondary w-full max-w-xs mt-5 cursor-pointer hover:bg-primary uppercase border border-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatedToy;
