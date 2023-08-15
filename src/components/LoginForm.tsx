import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <form action="#" className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6">
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            type="email"
            id="Email"
            name="email"
            className="mt-1 py-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 ">
          <label
            htmlFor="Password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <input
            type="password"
            id="Password"
            name="password"
            className="mt-1 py-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
            Login
          </button>
          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            Don't have an account?
            <Link to="/signup" className="text-gray-700 underline">
              Signup Now!!
            </Link>
            .
          </p>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
