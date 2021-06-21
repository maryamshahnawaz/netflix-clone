import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Catalogue.css';
const Catalogue = ({ title, link, genre }) => {
  const [movies, setMovies] = useState([]);
  // const url = `https://api.themoviedb.org/3/movie/${link}/`
  const url = `https://api.themoviedb.org/3/discover/movie?$`
  useEffect(() => {
    axios({
      url: `${url}`,
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: "7b4ee228270013c7be42d484778165ef",
        with_genres: genre
      },

    }).then((res) => {
      setMovies(res.data.results);
    })
  }, [url]);
  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
  return (
    <>
      <h2 className="wrapper">{title}</h2>
      <div className="movies__catalogue">

        {movies.map((movie) => {
          return (
            <div className="single_movie" key={movie?.id}>
              <p className="title_paragraph">{truncate(movie?.title, 16)}</p>
              <div className="movie" key={movie?.id}>
                <Link to={`/movie/${movie?.id}`}>
                  <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    alt={`Poster for ${movie?.original_title}`}
                  />
                </Link>
              </div>
            </div>

          );
        })}
      </div>
    </>
  )
}

export default Catalogue;
