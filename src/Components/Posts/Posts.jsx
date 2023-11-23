import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import * as movieService from "../../services/movieService";
import PostItem from "./PostItem/PostItem";

function Posts() {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    movieService.getAll()
      .then(result => setMovies(result))
  }, [])

  return (
    <section>
      <h1>All Movie Posts</h1>

      {movies.map(movie => (
        <PostItem key={movie._id} {...movie}/>
      ))}

      {movies.length === 0 && (
        <h1>No posts yet</h1>
      )}
    </section>
  );
}

export default Posts;
