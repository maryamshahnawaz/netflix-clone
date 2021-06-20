import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Header.css";

const Header = () => {
  const [background, setBackground] = useState('');

  useEffect(() => {
    axios({
      url: 'https://api.themoviedb.org/3/movie/popular?',
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: "7b4ee228270013c7be42d484778165ef",
      },

    }).then((res) => {
      setBackground(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]);
    })
  }, []);
  const truncate = (str, num) => {
    return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  }

  return (
    <>
      <header className="movie_header" style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${background?.backdrop_path}")`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: "85vh"

      }}>

        <div className="header_content">
          <p class="popularity">{background?.vote_average * 10}%</p>
          <h1>{background?.title || background?.name || background?.original_name}</h1>
          <p >{truncate(`${background.overview}`, 150)}</p>
          <div className="header_btns">
            <button>
              Play
            </button>
            <button>
              More Info
            </button>
          </div>
        </div>
      </header >
    </>
  )
}

export default Header
