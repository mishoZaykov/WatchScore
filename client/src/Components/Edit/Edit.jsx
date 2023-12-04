import { useNavigate, useParams } from "react-router-dom";

import * as movieService from "../../services/movieService";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Edit() {
  const navigate = useNavigate();
  const {movieId} = useParams();
  const [movie, setMovie] = useState({
    title: '',
    year: '',
    genre: '',
    imageUrl: '',
    review: '',
  });

  useEffect(() => {
    movieService.getOne(movieId)
        .then(result => {
            setMovie(result);
        })
  }, [movieId])

  const editMovieSubmitHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await movieService.edit(movieId, values);
      toast.success('Post edited!')
      navigate("/posts");
    } catch (error) {
      toast.error(error.message)
    }
  };

  const onChange = (e) => {
    setMovie(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <div className="flex justify-center items-center h-screen bg-white bg-opacity-90 ">
      <form
        className="w-1/2 dark:bg-gray-800 p-8 rounded-lg"
        onSubmit={editMovieSubmitHandler}
      >
        <h1 className="text-center text-3xl font-bold text-white pb-8">
          Edit review
        </h1>
        <div className="mb-6">
          <label
            htmlFor="movie"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Movie Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={movie.title}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Year of Movie:
          </label>
          <input
            type="text"
            id="year"
            name="year"
            value={movie.year}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="genre"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Genre:
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={movie.genre}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="imageUrl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image Url:
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={movie.imageUrl}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            required
            pattern="https?://.+"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="review"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Review:
          </label>
          <textarea
            type="text"
            id="review"
            name="review"
            value={movie.review}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Add Review
        </button>
      </form>
    </div>
  );
}

export default Edit;
