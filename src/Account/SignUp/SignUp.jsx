import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const SignUp = () => {
  const [PasswordShow, setPasswordShow] = useState(true);
  return (
    <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 gap-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 bg-[#111827]">
        <h1 className="text-2xl font-bold text-center text-gray-300">
          Sign Up
        </h1>
        <form action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              type={PasswordShow ? "password" : "text"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
            {PasswordShow ? (
              <FaEyeSlash
                className="absolute right-3 bottom-0 top-9 cursor-pointer"
                onClick={() => setPasswordShow(!PasswordShow)}
              ></FaEyeSlash>
            ) : (
              <FaEye
                onClick={() => setPasswordShow(!PasswordShow)}
                className="absolute right-3 bottom-0 top-9 cursor-pointer"
              ></FaEye>
            )}
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block text-gray-400">
              Confirm Password
            </label>
            <input
              type={PasswordShow ? "password" : "text"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
            {PasswordShow ? (
              <FaEyeSlash
                className="absolute right-3 bottom-0 top-9 cursor-pointer"
                onClick={() => setPasswordShow(!PasswordShow)}
              ></FaEyeSlash>
            ) : (
              <FaEye
                onClick={() => setPasswordShow(!PasswordShow)}
                className="absolute right-3 bottom-0 top-9 cursor-pointer"
              ></FaEye>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              Photo URL
            </label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 ">
            Sign up
          </button>
        </form>

        <p className="text-base text-center sm:px-6 dark:text-gray-400 text-slate-300">
          Already have an account?
          <Link className="text-white ml-2 btn-link" to="/login">
            login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
