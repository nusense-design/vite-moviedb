import React, { useEffect, useState } from "react";

import { useParams } from "react-router";

// import tmdbApi from '../api/tmdbApi';
import apiConfig from "../api/apiConfig";

const CastList = (props) => {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    fetchCasts(props?.id);
  }, [props?.id]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTBiNTljMjMzNTM1YWUzMWNiN2RjZWMwMWJhMDM2ZCIsInN1YiI6IjVmYzRiMmRiM2EzNDBiMDAzZWUwMTRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uxGhDBUh82zz4wcD5Td_hMosU4-QIM68KSFQEfMjQqE",
    },
  };

  const fetchCasts = async (id = 565770) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, options)
      .then((response) => response.json())
      .then((response) => {
        //    setItem(response);
        const casts = response.cast.slice(0, 8);
        setCasts(casts);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="casts">
      {casts.map((item, i) => (
        <div key={i} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className="casts__item__name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
