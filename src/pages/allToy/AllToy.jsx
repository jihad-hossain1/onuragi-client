import React, { useEffect, useState } from "react";
import SingleToyCard from "./toyCard/SingleToyCard";
import useTitle from "../../hook/useTitle";

const AllToy = () => {
  useTitle("AllToys");
  const [allToys, setAllToys] = useState([]);
  const [seeMore, setSeeMore] = useState();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/usertoy")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        console.log(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/getToyByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      <h3 className="text-xl text-gray-600 font-semibold">
        Total Toys : {allToys.length}
      </h3>
      {/* <form>
        <input type="search" name="" id="" />
      </form> */}
      <div className=" p-2 text-center">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-1 border border-primary"
        />{" "}
        <button
          className="border border-primary shadow rounded px-3"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        {" "}
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Toy Name</th>
              <th>Available Qty</th>
              <th>seller</th>
              <th>Price</th>
              <th>catetory</th>
              <th>details</th>
            </tr>
          </thead>
          <tbody>
            {allToys
              .slice(0, seeMore ? allToys.length : 20)
              .map((toy, index) => (
                <SingleToyCard
                  key={toy._id}
                  toy={toy}
                  index={index}
                ></SingleToyCard>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-end my-4">
        {!seeMore && (
          <button
            onClick={setSeeMore}
            className="px-3 py-1 rounded-md border border-secondary hover:border-secondary hover:bg-secondary hover:font-semibold hover:text-black shadow-md"
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default AllToy;
