
import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/Features/books/bookApi";
import { IBook } from "../types/globalTypes";

function Book() {
  const { data: Books} = useGetBooksQuery(undefined);

  return (
    <>
      <div>
        <section>
          <div className="relative mx-auto max-w-7xl">
            <div className="grid max-w-lg gap-7 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
              {Books?.data?.slice(0, 10).map((dt: IBook) => (
                <BookCard dt={dt}></BookCard>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Book;
