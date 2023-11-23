import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import * as movieService from "../../services/movieService";
import PostItem from "./PostItem/PostItem";

function Posts() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService.getAll().then((result) => setMovies(result));
  }, []);

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl m-5 font-bold">All Movie Posts</h1>
      <div >
        {movies.map((movie) => (
          <PostItem  key={movie._id} {...movie} />
        ))}
      </div>

      {movies.length === 0 && <h1>No posts yet</h1>}
    </section>
  );
}

export default Posts;
