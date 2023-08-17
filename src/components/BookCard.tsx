import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../types/globalTypes";

interface IProps {
  dt: IBook;
}

function BookCard({ dt }: IProps) {
  return (
    <div
      key={dt?._id}
      className="flex flex-col mb-12 overflow-hidden cursor-pointer"
    >
      {/* <div className="card card-side bg-base-100 shadow-xl h-full">
        <figure className="h-56 w-100">
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?size=626&ext=jpg"
            alt="Book Cover"
          />
        </figure>
        <div className="card-body flex flex-col justify-between">
          <div>
            <h2 className="card-title">{dt?.title}</h2>
            <p>{dt?.author}</p>
            <p>{dt?.genre}</p>
            <p>{dt?.publicationDate}</p>
          </div>
          <div className="card-actions">
            <Link to={`/details/${dt?._id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div> */}
      <>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {dt?.title}
            </h5>
          </a>
          <p>{dt?.author}</p>
          <p>{dt?.genre}</p>
          <p>{dt?.publicationDate}</p>
          <Link to={`/details/${dt?._id}`}>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </Link>
        </div>
      </>
    </div>
  );
}

export default BookCard;
