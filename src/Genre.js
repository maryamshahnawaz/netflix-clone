import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Genre = ({ genre }) => {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/discover/movie/?`,
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: "7b4ee228270013c7be42d484778165ef",
        with_genres: genre,
      },
    }).then((res) => {
      console.log(res.data.results);
      setMovie(res.data.results);
    })
  }, []);
  return (
    <div className="">
      {movie.map((movie) => {
        <div key={movie.id}>
          <h3>{movie?.title}</h3>
          <div className="image">
            {/* <Link to={`/movie/${movie?.id}`}> */}
            <img
              className="poster"
              src={`${base_url}${movie?.poster_path}`}
              alt={movie?.name} />
            {/* </Link> */}
          </div>
        </div>
      })}
    </div>
  )
}

export default Genre;
