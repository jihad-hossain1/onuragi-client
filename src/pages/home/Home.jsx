import React, { useEffect, useState } from "react";
import img1 from "../../assets/svg/Cloudy.svg";
import GallaryCard from "../../components/gallaryCard/GallaryCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useTitle from "../../hook/useTitle";
// import DragonToys from "../../components/toyCategory/DragonToys";

// import img2 from '../../assets/svg/babyBanner-removebg-preview.png'
const Home = () => {
  useTitle("Home");
  const [gallaries, setGallaries] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [allToys, setAllToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/toyGallary")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setGallaries(data);
      });
  });
  useEffect(() => {
    fetch("http://localhost:3000/category")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategories(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3000/alltoys")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setAllToys(data);
  //     });
  // }, []);
  // console.log(allToys);
  const latestBlog = [
    {
      name: "June cha",
      date: "21/03/2023",
      img: "https://i.ibb.co/LtcYshh/eee.png",
      details: "Baby Planet's toys makes learning so easy",
      id: 1,
    },
    {
      name: "June cha",
      date: "21/03/2023",
      img: "https://i.ibb.co/5skchS2/three.jpg",
      details: "Baby Planet's toys makes learning so easy",
      id: 2,
    },
    {
      name: "June cha",
      date: "21/03/2023",
      img: "https://i.ibb.co/sW1NYTJ/two.jpg",
      details: "Baby Planet's toys makes learning so easy",
      id: 3,
    },
  ];
  return (
    <>
      {/* banner section  */}
      <div
        className="hero "
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Best Kids Toys Store & Online Shop
            </h1>
            <p className="mb-5">Give The Gift Of Your Children Everyday</p>
            <button className="btn btn-primary btn-outline">Get Started</button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto">
        {/* gallary section  */}
        <div className="mt-24">
          <h3 className="text-center font-extrabold text-4xl">Toys Gallary</h3>
        </div>
        <div className="" data-aos="fade-up-left">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mx-3 my-7">
            {gallaries.map((gallary) => (
              <GallaryCard key={gallary._id} gallary={gallary}></GallaryCard>
            ))}
          </div>
        </div>

        {/* shop by category */}
        <div className="my-6 md:mt-24" data-aos="fade-up-left">
          <div className="py-5">
            <h4 className="text-center text-3xl font-extrabold">
              Shop By Category
            </h4>
          </div>
          <div className="flex justify-center mt-6 px-4">
            <Tabs>
              <TabList className={`text-slate-600 font-semibold `}>
                {categories.map((category) => (
                  <Tab key={category._id}>{category.name}</Tab>
                ))}
              </TabList>

              <TabPanel></TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>

        {/* extra two section  */}
        <div className="mt-24">
          <div className="text-center space-y-3" data-aos="fade-down-right">
            <h4 className="text-5xl font-extrabold">Latest Blog</h4>
            <p className="text-sm text-gray-600">
              From jungle animals to farm animals, discover animal toys and
              figures here. Pick up one <br /> of our animal tubs full of
              exciting miniature figures or magical unicorns,
            </p>
          </div>
          <div className="md:flex items-center space-y-3 space-x-2 my-2 mx-3 px-4">
            {latestBlog.map((blog) => (
              <div key={blog.id} data-aos="fade-down-left">
                <img className="rounded" src={blog.img} alt="" />
                <p className="font-bold mt-1 ">
                  <span className="text-gray-500">By,</span>{" "}
                  <span className="text-primary">{blog.name}</span>,{" "}
                  <span className="text-gray-600">{blog.date}</span>{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="mt-24 mb-10"
          data-aos="fade-up"
          data-aos-anchor=".other-element"
        >
          <h2 className="text-center font-extrabold text-4xl">
            Deal Of The Day
          </h2>
          <div className="grid md:grid-cols-2 gap-3 px-3 mt-5">
            <div
              data-aos="zoom-in-left"
              className="hero"
              style={{
                backgroundImage: `url("https://i.ibb.co/RHmMrrT/5.jpg")`,
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center ">
                <div className="max-w-md">
                  <h1 className="mb-5 text-4xl font-bold text-white">
                    Collection
                  </h1>
                  <p className="mb-5 text-white font-bold">
                    Flat <span className="text-3xl font-bold">20%</span> of
                  </p>
                  <button className="rounded-xl px-4 py-2 bg-primary text-white font-semibold hover:bg-secondary hover:text-primary">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in-right"
              className="hero"
              style={{
                backgroundImage: `url("https://i.ibb.co/NnrQM2k/4.jpg")`,
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center ">
                <div className="max-w-md">
                  <h1 className="mb-5 text-4xl font-bold text-white">
                    Collection
                  </h1>
                  <p className="mb-5 text-white font-bold">
                    Flat <span className="text-3xl font-bold">30%</span> of
                  </p>
                  <button className="rounded-xl px-4 py-2 bg-primary text-white font-semibold hover:bg-secondary hover:text-primary">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
