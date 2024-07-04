import React, { useState } from "react";
import nija from "../../assets/imges/nija.jpeg";
import recipes from "../../assets/imges/recipes.jpg";
import images from "../../assets/imges/images.jpg";

import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

const Content = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-1 md:flex md:justify-end">
          <nav className="text-right">
            <div className="flex justify-between">
              <h1 className="font-bold uppercase p-4 border-b border-gray-100 ">
                <a href="/" className="hover:text-gray-700">
                  Food Ninja
                </a>
              </h1>
              <button
                className="md:hidden block transition"
                onClick={handleClick}
              >
                {click ? <FaTimes /> : <CiMenuBurger />}{" "}
              </button>
            </div>
            <ul
              className={`text-sm mr-5 ${
                click ? "flex flex-col" : "hidden"
              } md:flex md:items-center`}
            >
              <li className="text-gray-700 font-bold">
                <a href="#">
                  <span className="mr-1">Home</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="mr-1">About</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="mr-1">Contact</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className="px-16 py-6 bg-gray-100 md:col-span-2">
          <div className="flex justify-center md:justify-end rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider">
            <a
              href="#"
              className="text-pink-300 border-pink-300 border-2 hover:bg-pink-300 hover:text-white rounded-full w-16 text-center"
            >
              Log in
            </a>
            <a
              href="#"
              className="text-purple-300 ml-3 hover:bg-purple-300 hover:text-white border-purple-300 border-2 rounded-full w-16 text-center"
            >
              Sign up
            </a>
          </div>
          <header>
            <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold">for ninjas</h3>
          </header>
          <div>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              Latest recipes
            </h4>
            <div className="mt-8 grid grid-cols-3 gap-10">
              <div className="bg-white rounded overflow-hidden shadow-xl relative ">
                <img
                  src={nija}
                  alt=""
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="m-2">
                  <span className="font-bold">5 Bean Chilli Stew</span>
                  <span className="block text-gray-500 text-sm">
                    Recipes by Mario
                  </span>
                </div>
                <div className="bg-orange-300 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 inline-block"
                  >
                    <path
                      className="w-1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>25 mins</span>
                </div>
              </div>
              <div className="bg-white rounded overflow-hidden shadow-xl relative ">
                <img
                  src={recipes}
                  alt=""
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="m-2">
                  <span className="font-bold">Veg Noodles</span>
                  <span className="block text-gray-500 text-sm">
                    Recipes by Mario
                  </span>
                </div>
                <div className="bg-orange-300 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 inline-block"
                  >
                    <path
                      className="w-1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <span>25 mins</span>
                </div>
              </div>
              <div className="bg-white rounded overflow-hidden shadow-xl relative  ">
                <img
                  src={images}
                  alt=""
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="m-2">
                  <span className="font-bold">Tofu Curry</span>
                  <span className="block text-gray-500 text-sm">
                    Recipes by Mario
                  </span>
                </div>
                <div className="bg-orange-300 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 inline-block"
                  >
                    <path
                      className="w-1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <span>25 mins</span>
                </div>
              </div>
            </div>
            <h4 className="font-bold mt-12 pb-2 border-b">Most popular</h4>
            <div className="mt-8">{/*  cards go here*/}</div>
            <div className="flex justify-center">
              <div className=" bg-gray-500 rounded-full w-24 h-7 text-center text-white">
                Load more
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Content;
