import React from 'react'
import {motion}  from "framer-motion"
import { useNavigate } from 'react-router-dom';

const Movie = (props) => {
  const navigate = useNavigate()
  const {movie} = props;
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      style={{ cursor: "pointer" }}
      onClick={() =>
        navigate("/vite-moviedb/detailsPage/", {
          state: {
            data: movie,
          },
        })
      }
    >
      <h2>{movie?.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie?.backdrop_path}
        alt=""
      />
    </motion.div>
  );
}

export default Movie