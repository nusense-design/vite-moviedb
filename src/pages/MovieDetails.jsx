import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiConfig from "../api/apiConfig";
import CastList from "./CastList";
import "./detail.scss";

const MovieDetails = () => {
  const [item, setItem] = useState(null);
  const location = useLocation();
  useEffect(() => {
    fetchDetailsBasedOnId(location.state?.data?.id);
  }, [location.state?.data]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTBiNTljMjMzNTM1YWUzMWNiN2RjZWMwMWJhMDM2ZCIsInN1YiI6IjVmYzRiMmRiM2EzNDBiMDAzZWUwMTRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uxGhDBUh82zz4wcD5Td_hMosU4-QIM68KSFQEfMjQqE",
    },
  };

  const fetchDetailsBasedOnId = async (id = 565770) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => {
        setItem(response);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      {item && (
        <div className="details-container">
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <br />
              <div className="cast">
                <div style={{ marginTop: "8vh" }} className="section__header">
                  <h2 style={{ color: "#000" }}>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
