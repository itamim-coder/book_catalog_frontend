import { ChangeEvent, FormEvent, useState } from "react";
interface IProps {
  id: string;
}
function BookReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const options = {
    //   id: id,
    //   data: { comment: inputValue },
    // };
    // console.log(options);
    // postComment(options);
    // setInputValue("");
  };
  return (
    <>
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <textarea
          className="min-h-[30px] w-full"
          onChange={handleChange}
          value={inputValue}
        />
        <button
          type="submit"
          className="rounded-full h-10 w-13 bg-black p-2 "
        >
            Send
          {/* <FiSend /> */}
        </button>
      </form>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-bubble">
          It was said that you would, destroy the Sith, not join them.
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-bubble">
          It was you who would bring balance to the Force
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-bubble">Not leave it in Darkness</div>
      </div>
    </>
  );
}

export default BookReview;
