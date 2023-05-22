import React from "react";
import { Link } from "react-router-dom";

const SingleToyCard = ({ toy, index }) => {
  const { toyName, category, price, photoUrl, seller, quantity, _id } = toy;
  return (
    <>
      <tr data-aos="zoom-in">
        <th>
          <button className=""></button>
        </th>
        <td>
          <button className="">{index + 1}</button>
        </td>
        <td>
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={photoUrl} alt="" />
            </div>
          </div>
        </td>
        <td className="font-semibold">{toyName}</td>
        <td className="font-semibold">{quantity}</td>
        <td>{seller}</td>
        <td>${price}</td>
        <td>{category}</td>
        <th>
          <button className="px-3 py-1 rounded-md border border-primary hover:border-secondary hover:bg-primary hover:text-white">
            <Link to={`/allToy/${_id}`}>Details</Link>
          </button>
        </th>
      </tr>
    </>
  );
};

export default SingleToyCard;
