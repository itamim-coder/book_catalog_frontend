import { useState, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/Features/books/bookApi";
import BookReview from "../components/BookReview";

function BookDetails() {
  const { id } = useParams();
  const { data: book, isLoading } = useSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    // pollingInterval: 30000,
  });
  console.log(book);
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();
  const [updateBook] = useUpdateBookMutation();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const handleDelete = async () => {
    try {
      await deleteBook(id).unwrap();
      // Redirect to book list after successful deletion
      navigate("/books");
      toast.success("Successfully Deleted", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data: any = {};
      if (title) {
        data.title = title;
      }
      if (author) {
        data.author = author;
      }
      if (genre) {
        data.genre = genre;
      }
      if (publicationDate) {
        data.publicationDate = publicationDate;
      }
      // console.log(data);
      const updatedData: any = await updateBook({ id, bookData: data });
      if (updatedData.error) {
        console.error("Error updating book:", updatedData.error);
      } else {
        // Update the UI with the new data
        navigate("/books");
        toast.success("Successfully Updated", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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
                By <span> </span>
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
                <div className="modal-box">
                  <h3 className="font-bold text-lg text-red-600">
                    Update Book
                  </h3>
                  <div className="flex justify-center mt-5">
                    <form
                      action="#"
                      onSubmit={handleUpdate}
                      className="mt-8 grid grid-cols-6 gap-6"
                    >
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
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm`}
                        />
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
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm`}
                        />
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
                          value={genre}
                          onChange={(e) => setGenre(e.target.value)}
                          className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm`}
                        />
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
                          value={publicationDate}
                          onChange={(e) => setPublicationDate(e.target.value)}
                          className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm`}
                        />
                      </div>

                      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button
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
            <div className="">Post Review</div>
            <BookReview id={id!}></BookReview>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
