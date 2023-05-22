import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {
    toyName,
    category,
    details,
    price,
    photoUrl,
    rating,
    seller,
    email,
    quantity,
  } = toy;
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-2 justify-around">
        <figure>
          <img className="w-full" src={photoUrl} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <p>
            Seller : <span className="font-semibold">{seller}</span>
          </p>
          <p>
            Price : <span className="font-semibold">${price}</span>
          </p>
          <p>
            Quantity : <span className="font-semibold">{quantity}</span>
          </p>
          <p>
            Category : <span className="font-semibold">{category}</span>
          </p>
          <p>
            Rating : <span className="font-semibold">{rating}</span>
          </p>

          <p>
            Email : <span>{email}</span>
          </p>
          <p>
            Details : <span>{details}</span>
          </p>

          <div className="card-actions justify-center ">
            <button className="px-3 py-1 rounded-md border border-secondary hover:border-secondary hover:bg-secondary hover:font-semibold hover:text-black shadow-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
