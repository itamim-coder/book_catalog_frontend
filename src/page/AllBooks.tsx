import React from "react";
import BookCard from "../components/BookCard";

function AllBooks() {
  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Type here"
          className="input w-full max-w-xs "
        />
      </div>
      <div>
        <div>
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </div>
        <div>
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </div>
      </div>
      <div>
        <BookCard></BookCard>
      </div>
    </>
  );
}

export default AllBooks;
