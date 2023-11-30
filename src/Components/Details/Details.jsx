import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as movieService from "../../services/movieService";
import * as commentService from "../../services/commentService";
import AuthContext from "../../context/authContext";
import reducer from "./commentReducer";

function Details() {
  const { username, userId } = useContext(AuthContext);
  const [movie, setMovie] = useState({});
  const [comments, dispatchComment] = useReducer(reducer, []);
  const { movieId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    movieService.getOne(movieId).then(setMovie);

    commentService.getAll(movieId).then((result) => {
      dispatchComment({
        type: "GET_ALL_COMMENTS",
        payload: result,
      });
    });
  }, [movieId]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newComment = await commentService.create(
      movieId,
      formData.get("comment")
    );

    newComment.owner = { username };

    dispatchComment({
      type: "ADD_COMMENT",
      payload: newComment,
    });
  };

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm('Do you really want to delete your post?');

    if(hasConfirmed){
      await movieService.remove(movieId)

      navigate('/posts')
    }
  }

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

              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                REVIEW:
              </h2>
              <p className="leading-relaxed">{movie.review}</p>

              {userId === movie._ownerId && (
                <div className="flex justify-end gap-3">
                  <Link to={`/details/${movieId}/edit`} className="flex  text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded">
                    Edit
                  </Link>
                  <button onClick={deleteButtonClickHandler} className="flex  text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded">Delete</button>
                </div>
              )}

              <div className="antialiased mx-auto max-w-screen-sm">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Comments:
                </h3>
                <div className="space-y-4">
                  {comments.map(({ _id, text, owner: { username } }) => (
                    <div key={_id} className="flex">
                      <div className="flex-1 border bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
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
