import { ChangeEvent, FormEvent, useState } from "react";
import {
  useGetReviewQuery,
  usePostReviewMutation,
} from "../redux/Features/books/bookApi";
import {  toast } from "react-toastify";
interface IProps {
  id: string;
}
function BookReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [postReview] =
    usePostReviewMutation();
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  const { data } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    // pollingInterval: 30000,
  });
  console.log(data?.data?.reviews);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const options = {
      id: id,
      data: { review: inputValue },
    };
    console.log(options);
    postReview(options);
    toast.success("Review Added!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setInputValue("");
  };
  return (
    <>
      <form className="flex  gap-5 items-center" onSubmit={handleSubmit}>
        <textarea
          className="min-h-[30px] w-full text-black"
          onChange={handleChange}
          value={inputValue}
        />
        <button type="submit" className="rounded-full h-10 w-13 bg-black p-2 ">
          Send
          {/* <FiSend /> */}
        </button>
      </form>
      {data?.data?.reviews?.map((review: string) => (
        <>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-bubble">{review}</div>
          </div>
        </>
      ))}
    </>
  );
}

export default BookReview;
