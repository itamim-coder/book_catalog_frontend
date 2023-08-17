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
          placeholder="Search here"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="input w-full max-w-xs bg-white border border-gray-200 rounded-lg"
        />
      </div>
      <div className="m-5">
        <div className="m-5">
          <select
            className="select w-full lg:m-5 sm:m-3  max-w-xs bg-white border border-gray-200 rounded-lg"
            onChange={(e) => handleFilterGenre(e.target.value)}
            value={genre}
          >
            <option value="">Pick a genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction">Science Fiction</option>
            {/* Add more genres */}
          </select>

          <select
            className="select w-full lg:m-5 sm:m-3 max-w-xs bg-white border border-gray-200 rounded-lg"
            onChange={(e) => handleFilterYear(e.target.value)}
            value={year}
          >
            <option value="">Pick a Year</option>
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>

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
