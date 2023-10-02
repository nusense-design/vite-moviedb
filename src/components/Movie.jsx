import React from 'react'
import {motion}  from "framer-motion"

const Movie = (props) => {
  const {movie} = props;
  return (
    <motion.div layout>
      <h2>{movie?.title}</h2>
      <img src={"https://image.tmdb.org/t/p/w500" + movie?.backdrop_path} alt="" />
    </motion.div>
  )
}

export default Movie