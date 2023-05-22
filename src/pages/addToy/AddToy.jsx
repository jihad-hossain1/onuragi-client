import React from "react";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";

const AddToy = () => {
  useTitle("AddToy");
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const details = form.details.value;
    const categoryId = form.categoryId.value;
    const price = form.price.value;
    const photoUrl = form.photoUrl.value;
    const rating = form.rating.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const quantity = form.quantity.value;
    const allProducts = {
      name,
      category,
      details,
      categoryId,
      price,
      photoUrl,
      rating,
      seller,
      email,
      quantity,
    };
    console.log(allProducts);

    fetch("http://localhost:3000/dashboard", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product has been added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-4xl font-extrabold text-gray-600 my-10">
        Add Your Products
      </h2>
      <div>
        <form onSubmit={handleAddToy}>
          <div className="px-10 md:flex md:justify-center md:items-center md:space-x-10">
            <div className="divaid ">
              <div className="input-field">
                <label className="text-sm text-cyan-600">Product Name </label>{" "}
                <br />
                <input
                  type="text"
                  className="shadow input input-bordered input-secondary w-full max-w-xs"
                  name="name"
                  required
                />
              </div>
              <div className="input-field">
                <label className="text-sm text-cyan-600">
                  Product category{" "}
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="shadow input input-bordered input-secondary w-full max-w-xs"
                  name="category"
                  required
                />
              </div>
              <div className="input-field">
                <label className="text-sm text-cyan-600">
                  Product details{" "}
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="shadow input input-bordered input-secondary w-full max-w-xs"
                  name="details"
                  required
                />
              </div>
              <div className="input-field">
                <label className="text-sm text-cyan-600">
                  Product categoryId{" "}
                </label>{" "}
                <br />
                <input
                  type="number"
                  className="shadow input input-bordered input-secondary w-full max-w-xs"
                  name="categoryId"
                  required
                />
              </div>
              <div className="input-field">
                <label className="text-sm text-cyan-600">Product price </label>{" "}
                <br />
                <input
                  type="number"
                  className="shadow input input-bordered input-secondary w-full max-w-xs"
                  name="price"
                  required
                />
              </div>
            </div>
            <div className="divaid ">
              <div className="input-field">
                <label className="text-sm text-cyan-600">
                  Product quantity{" "}
                </label>{" "}
                <br />
                <input
                  type="number"
                  className="shadow input input-bordered input-secondary w-full max-w-xs "
                  name="quantity"
                  required
                />
              </div>
              <div className="input-field">
                <label className="text-sm text-cyan-600">
                  Product photoUrl{" "}
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="shadow input input-bordered input-secondary w-full max-w-xs"
                  name="photoUrl"
                  required
                />
              </div>
              <div className="input-field">
                <label className="text-sm text-cyan-600">Product rating </label>{" "}
                <br />
                <input
                  type="number"
                  className="shadow input input-bordered input-secondary w-full max-w-xs"
                  name="rating"
                  required
                />
              </div>
              <div className="input-field">
                <label className="text-sm text-cyan-600">seller Name </label>{" "}
                <br />
                <input
                  type="text"
                  className="shadow input input-bordered input-secondary w-full max-w-xs"
                  name="seller"
                  required
                />
              </div>
              <div className="input-field">
                <label className="text-sm text-cyan-600">email Name </label>{" "}
                <br />
                <input
                  type="email"
                  className="shadow input input-bordered input-secondary w-full max-w-xs"
                  name="email"
                  required
                />
              </div>
            </div>
          </div>
          <div className="Submit-field text-center">
            <input
              type="submit"
              value="add Toys"
              className="shadow input input-bordered input-secondary w-full max-w-xs mt-5 cursor-pointer hover:bg-primary uppercase border border-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
