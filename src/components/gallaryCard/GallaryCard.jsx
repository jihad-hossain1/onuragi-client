import React from "react";

const GallaryCard = ({ gallary }) => {
  //   console.log(gallary);
  const { image, name, price } = gallary;
  return (
    <div
      className="rounded border shadow-sm bg-secondary px-5 flex flex-col"
      data-aos="zoom-in-down"
    >
      <img className="pt-5" src={image} alt="" />
      <div className="py-5 mt-auto">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <h4 className="font-semibold text-2xl">{name}</h4>
        <p className="font-semibold text-xl">{price}</p>
      </div>
    </div>
  );
};

export default GallaryCard;
