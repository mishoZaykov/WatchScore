
import { useEffect, useState } from "react";

import * as movieService from "../../services/movieService";
import PostItem from "./PostItem/PostItem";

function Posts() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService.getAll()
    .then((result) => setMovies(result))
    .catch(err => {
      console.log(err);
    })
  }, []);


  return (
    <section className=" h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl m-5 font-bold">All Movie Posts</h1>
      <div >
        {movies.map((movie) => (
          <PostItem  key={movie._id} {...movie} />
        ))}
      </div>

      {movies.length === 0 && <h1 className="pt-40 h-screen text-3xl font-extrabold text-gray-900 dark:text-gray-900 md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-indigo-400">No</span> Posts Yet.</h1>}
    </section>
  );
}

export default Posts;
