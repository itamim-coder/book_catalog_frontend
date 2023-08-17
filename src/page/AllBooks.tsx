import { useState } from "react";
import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/Features/books/bookApi";
import { IBook } from "../types/globalTypes";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  setGenre,
  setSearchQuery,
  setYear,
} from "../redux/Features/books/bookSlice";

function AllBooks() {
  const { genre, year, searchQuery } = useAppSelector((state) => state.book);
  const {
    data: Books,
    isLoading,
    error,
  } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const dispatch = useAppDispatch();

  const filteredBooks = Books?.data?.filter((book: IBook) => {
    const genreMatch =
      !genre || book.genre.toLowerCase().includes(genre.toLowerCase());
    const yearMatch = !year || book.publicationDate.includes(year);
    const searchMatch =
      !searchQuery ||
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase());

    return genreMatch && yearMatch && searchMatch;
  });

  const handleFilterGenre = (value: string) => {
    dispatch(setGenre(value));
  };

  const handleFilterYear = (value: string) => {
    dispatch(setYear(value));
  };

  const handleSearch = (value: string) => {
    dispatch(setSearchQuery(value));
  };

  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Type here"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="input w-full max-w-xs "
        />
      </div>
      <div>
        <div>
          <select
            className="select w-full max-w-xs"
            onChange={(e) => handleFilterGenre(e.target.value)}
            value={genre}
          >
            <option value="">Pick a genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Science Fiction">Science Fiction</option>
            {/* Add more genres */}
          </select>
          <select
            className="select w-full max-w-xs"
            onChange={(e) => handleFilterYear(e.target.value)}
            value={year}
          >
            <option value="">Pick a Year</option>
            <option value="1851">1851</option>
            <option value="1953">1953</option>
            <option value="2005">2005</option>

            {/* Add more authors */}
          </select>
        </div>
      </div>

      <section>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid max-w-lg gap-7 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
            {filteredBooks?.map((dt: IBook) => (
              <BookCard dt={dt}></BookCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllBooks;
