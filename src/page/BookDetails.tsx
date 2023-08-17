import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/Features/books/bookApi";
import BookReview from "../components/BookReview";

function BookDetails() {
  const { id } = useParams();
  const { data: book, isLoading, error } = useSingleBookQuery(id);

  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();
  const [updateBook] = useUpdateBookMutation();
  const handleDelete = async () => {
    try {
      await deleteBook(id).unwrap();
      // Redirect to book list after successful deletion
      navigate("/books");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleUpdate = async (data: {
    title: any;
    author: any;
    genre: any;
    publicationDate: any;
  }) => {
    try {
      const changedFields = {};
      if (data.title !== book.data.title) {
        changedFields.title = data.title;
      }
      if (data.author !== book.data.author) {
        changedFields.author = data.author;
      }
      if (data.genre !== book.data.genre) {
        changedFields.genre = data.genre;
      }
      if (data.publicationDate !== book.data.publicationDate) {
        changedFields.publicationDate = data.publicationDate;
      }
      console.log(changedFields);
      if (Object.keys(changedFields).length > 0) {
        // Call the update mutation with PATCH method
        const updatedData = await updateBook({ id, bookData: changedFields });
        if (updatedData.error) {
          console.error("Error updating book:", updatedData.error);
        } else {
          // Update the UI with the new data
          console.log("Book updated:", updatedData.data);
        }
      }
    } catch (error) {
      console.error("Error updating book:", error);
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
              <button
                onClick={() => window.my_modal_3.showModal()}
                className="btn btn-outline btn-info"
              >
                Edit
              </button>
              <dialog id="my_modal_3" className="modal">
                <div method="dialog" className="modal-box">
                  <h3 className="font-bold text-lg text-red-600">
                    Update Book
                  </h3>
                  <div className="flex justify-center mt-5">
                    <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          defaultValue={book?.data?.title}
                          {...register("title")}
                          className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${
                            errors.title ? "border-red-500" : ""
                          }`}
                        />
                        {errors.title && (
                          <p className="mt-2 text-sm text-red-500">
                            Title is required
                          </p>
                        )}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="author"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Author
                        </label>
                        <input
                          type="text"
                          id="author"
                          defaultValue={book?.data?.author}
                          {...register("author")}
                          className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${
                            errors.author ? "border-red-500" : ""
                          }`}
                        />
                        {errors.author && (
                          <p className="mt-2 text-sm text-red-500">
                            Author is required
                          </p>
                        )}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="genre"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Genre
                        </label>
                        <input
                          type="text"
                          id="genre"
                          defaultValue={book?.data?.genre}
                          {...register("genre")}
                          className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${
                            errors.genre ? "border-red-500" : ""
                          }`}
                        />
                        {errors.genre && (
                          <p className="mt-2 text-sm text-red-500">
                            Genre is required
                          </p>
                        )}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="publicationDate"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Publication Date
                        </label>
                        <input
                          type="date"
                          id="publicationDate"
                          defaultValue={book?.data?.publicationDate}
                          {...register("publicationDate")}
                          className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${
                            errors.publicationDate ? "border-red-500" : ""
                          }`}
                        />
                        {errors.publicationDate && (
                          <p className="mt-2 text-sm text-red-500">
                            Publication Date is required
                          </p>
                        )}
                      </div>

                      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button
                          onClick={handleUpdate}
                          type="submit"
                          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        >
                          Confirm Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>
              {/* Open the modal using ID.showModal() method */}
              <button
                className="btn btn-outline btn-error"
                onClick={() => window.my_modal_2.showModal()}
              >
                Delete
              </button>
              <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box">
                  <h3 className="font-bold text-lg text-red-600">
                    Are you sure you want to delete??
                  </h3>
                  <div className="flex justify-center mt-5">
                    <button
                      onClick={handleDelete}
                      className="btn  btn-outline btn-error"
                    >
                      Confirm Delete
                    </button>
                  </div>
                </form>
              </dialog>
            </div>

            <BookReview id={!id}></BookReview>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
