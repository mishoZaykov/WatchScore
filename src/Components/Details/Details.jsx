import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as movieService from "../../services/movieService";
import * as commentService from "../../services/commentService";

function Details() {
  const [movie, setMovie] = useState({});
  const [comments, setComments] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieService.getOne(movieId).then(setMovie);

    commentService.getAll().then(setComments);
  }, [movieId]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newComment = await commentService.create(
      movieId,
      formData.get("username"),
      formData.get("comment")
    );

    setComments(state => [...state, newComment]);
  };

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap ">
            <img
              alt={movie.title}
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={movie.imageUrl}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                POST DETAILS
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">
                {movie.title}
              </h1>
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CAME OUT IN:
              </h2>
              <p className="text-gray-400 text-xl title-font font-medium mb-5">
                {movie.year}
              </p>
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                GENRE:
              </h2>
              <h3 className="text-gray-900 text-3xl title-font font-medium mb-5">
                {movie.genre}
              </h3>
              {/* <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div> */}
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                REVIEW:
              </h2>
              <p className="leading-relaxed">{movie.review}</p>
              <div className="flex">
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Button
                </button>
              </div>

              <div className="antialiased mx-auto max-w-screen-sm">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Comments:
                </h3>
                <div className="space-y-4">
                  {comments.map(({ username, text, _id }) => (
                    <div key={_id} className="flex">
                      <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                        <strong>{username}</strong>{" "}
                        <p className="text-sm">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex  items-center justify-center shadow-lg mt-10 mx-8 mb-4 max-w-lg">
                <form
                  className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
                  onSubmit={addCommentHandler}
                >
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
                      Add a new comment
                    </h2>
                    <div className="w-full md:w-full px-3 mb-2 mt-2">
                      <input
                        className="bg-gray-100 rounded border border-gray-400  py-2 px-3 mb-4 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                        type="text"
                        name="username"
                        placeholder="Username"
                      />
                      <textarea
                        className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                        name="comment"
                        placeholder="Type Your Comment"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="w-full md:w-full flex items-start md:w-full px-3">
                      <div className="-mr-1">
                        <input
                          type="submit"
                          className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                          defaultValue="Post Comment"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
