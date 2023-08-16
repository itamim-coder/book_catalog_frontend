import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../types/globalTypes";

interface IProps {
  dt: IBook;
}

function BookCard({ dt }: IProps) {
  console.log(dt);
  return (
    <div
      key={dt?._id}
      className="flex flex-col mb-12 overflow-hidden cursor-pointer"
    >
      <div className="card card-side bg-base-100 shadow-xl h-full">
        <figure className="h-56 w-100">
          {" "}
          {/* Set a fixed height */}
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
      </div>
    </div>
  );
}

export default BookCard;
