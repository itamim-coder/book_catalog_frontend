import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../redux/Features/books/bookApi";

function BookDetails() {
  const { id } = useParams();
  const { data: book, isLoading, error } = useSingleBookQuery(id);
  console.log(book?.data);

  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteBook(id).unwrap();
      // Redirect to book list after successful deletion
      navigate("/books");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                {book?.data?.title}
              </a>
              <p className="text-xs dark:text-gray-400">
                By
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  {book?.data?.author}
                </a>
              </p>
            </div>
            <div className="dark:text-gray-100">
              <p>Genre: {book?.data?.genre}</p>
              <p>Publication Date: {book?.data?.publicationDate}</p>
            </div>
            <div className="flex justify-between">
              <button className="btn btn-outline btn-info">Edit</button>
              <button
                onClick={handleDelete}
                className="btn btn-outline btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
