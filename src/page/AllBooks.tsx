import { useState } from "react";
import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/Features/books/bookApi";
import { IBook } from "../types/globalTypes";

function AllBooks() {
  const [searchQuery, setSearchQuery] = useState("");
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

  const [filterGenre, setFilterGenre] = useState("");
  const [filterYear, setFilterYear] = useState("");

  let booksData = Books?.data;

  // Apply filters
  if (filterGenre) {
    booksData = booksData.filter((book: IBook) =>
      book.genre.toLowerCase().includes(filterGenre.toLowerCase())
    );
  }

  if (filterYear) {
    booksData = booksData.filter((book: IBook) =>
      book.publicationDate.includes(filterYear)
    );
  }

  if (searchQuery) {
    booksData = booksData.filter(
      (book: IBook) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (!filterGenre && !filterYear) {
    booksData = Books?.data;
  }

  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Type here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input w-full max-w-xs "
        />
      </div>
      <div>
        <div>
          <select
            className="select w-full max-w-xs"
            onChange={(e) => setFilterGenre(e.target.value)}
            value={filterGenre}
          >
            <option value="">Pick a genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Science Fiction">Science Fiction</option>
            {/* Add more genres */}
          </select>
          <select
            className="select w-full max-w-xs"
            onChange={(e) => setFilterYear(e.target.value)}
            value={filterYear}
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
            {booksData?.map((dt: IBook) => (
              <BookCard dt={dt}></BookCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllBooks;
