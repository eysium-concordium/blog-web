import { useState } from "react";

const CommentCard = () => {
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState(14);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="card p-4 bg-white shadow-lg rounded-xl w-[450px]">
      <span className="title font-bold text-gray-700 border-b pb-2">Comments</span>
      <div className="comments grid grid-cols-[35px_1fr] gap-4 p-4">
        <div className="comment-react flex flex-col items-center bg-gray-100 p-2 rounded">
          <button onClick={handleLike} className="relative flex items-center justify-center">
            <svg
              fill={liked ? "#f5356e" : "none"}
              viewBox="0 0 24 24"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors"
            >
              <path
                fill={liked ? "#f5356e" : "#707277"}
                strokeLinecap="round"
                strokeWidth="2"
                stroke={liked ? "#f5356e" : "#707277"}
                d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
              ></path>
            </svg>
          </button>
          <hr className="w-4/5 h-[1px] bg-gray-300 my-2" />
          <span className="text-xs font-semibold text-gray-600">{likes}</span>
        </div>
        <div className="comment-container flex flex-col gap-4">
          <div className="user flex items-center gap-3">
            <div className="user-pic bg-gray-100 p-2 rounded-full relative">
              <div className="w-2 h-2 bg-green-500 rounded-full absolute right-0 bottom-0 border-2 border-white"></div>
            </div>
            <div className="user-info flex flex-col">
              <span className="text-sm font-bold text-gray-700">Yassine Zanina</span>
              <p className="text-xs text-gray-500">Wednesday, March 13th at 2:45pm</p>
            </div>
          </div>
          <p className="comment-content text-sm text-gray-600">
            I've been using this product for a few days now and I'm really impressed! The interface is intuitive and easy to
            use, and the features are exactly what I need to streamline my workflow.
          </p>
        </div>
      </div>
      <div className="text-box bg-gray-100 p-2 rounded-lg">
        <textarea
          className="w-full h-10 p-2 rounded-md text-sm border border-gray-300 focus:outline-blue-400"
          placeholder="Reply"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="send bg-blue-500 text-white px-4 py-1 rounded-md mt-2 hover:bg-blue-600"
          title="Send"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CommentCard;