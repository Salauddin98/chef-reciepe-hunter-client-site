import React from "react";
import food1 from "../../../image/food1.jpg";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";

const Home = () => {
  const chefData = useLoaderData();
  console.log(chefData);
  return (
    <>
      <section className=" bg-[url('image/team.jpg')] bg-no-repeat bg-center bg-cover bg-opacity-10">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="w-full h-[400px] bg-[url('image/burger.jpg')] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center text-center rounded-md bg-opacity-80">
                <div className="bg-black px-6 py-4 bg-opacity-60 text-gray-300 absolute inset-0 transition duration-700 rounded-md flex flex-col justify-center items-center">
                  <h1 className="text-white text-6xl font-bold">
                    Cheese Burger
                  </h1>
                  <p className="text-white font-bold mt-2 text-lg">
                    A handful of simple ingredients typify the fresh, vibrant
                    flavors of Greek cooking.
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <div className="w-full h-full bg-[url('image/food2.jpg')] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center text-center rounded-md bg-opacity-80">
                <div className="bg-black px-6 py-4 bg-opacity-60 text-gray-300 absolute inset-0 transition duration-700 rounded-md flex flex-col justify-center items-center">
                  <h1 className="text-white text-6xl font-bold">
                    Chicken Tikka Masala
                  </h1>
                  <p className="text-white font-bold mt-2 text-lg">
                    A handful of simple ingredients typify the fresh, vibrant
                    flavors of Greek cooking.
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <div className="w-full h-[400px] bg-[url('image/food3.jpg')] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center text-center rounded-md bg-opacity-80">
                <div className="bg-black px-6 py-4 bg-opacity-60 text-gray-300 absolute inset-0 transition duration-700 rounded-md flex flex-col justify-center items-center">
                  <h1 className="text-white text-6xl font-bold">
                    Baked Chicken Breast
                  </h1>
                  <p className="text-white font-bold mt-2 text-lg">
                    A handful of simple ingredients typify the fresh, vibrant
                    flavors of Greek cooking.
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              {/* <img src={food1} className="w-full h-[400px] " /> */}
              <div className="w-full h-[400px] bg-[url('image/food4.jpg')] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center text-center rounded-md bg-opacity-80">
                <div className="w-full h-[400px] bg-[url('image/food3.jpg')] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center text-center rounded-md bg-opacity-80">
                  <div className="bg-black px-6 py-4 bg-opacity-60 text-gray-300 absolute inset-0 transition duration-700 rounded-md flex flex-col justify-center items-center">
                    <h1 className="text-white text-6xl font-bold">
                      Baked Chicken Breast
                    </h1>
                    <p className="text-white font-bold mt-2 text-lg">
                      A handful of simple ingredients typify the fresh, vibrant
                      flavors of Greek cooking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('image/pattern-home.jpg')] bg-no-repeat   mt-10">
        <h1 className="text-center text-4xl font-bold py-8">
          OUR CHEF
          <hr className="w-24 mt-2 border-[3px] mx-auto border-orange-500" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 gap-10">
          {chefData.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
