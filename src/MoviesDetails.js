import { useState, useEffect } from 'react';
import axios from 'axios';
import "./MoviesDetails.css";
import NavBar from "./NavBar";


function MovieDetails(props) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const { movieID } = props.match.params;
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}`,
      params: {
        api_key: '7b4ee228270013c7be42d484778165ef',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: '1',
      },
    }).then((response) => {
      setMovie(response.data);
      console.log(response.data);
    });
  }, [props.match.params]);
  const { title, tagline, overview, poster_path } = movie;

  return (
    <>
      <NavBar />
      <div className="card">
        <div className="description">
          <h3>{title}</h3>
          <h4>{tagline}</h4>
          <p>{overview}</p>
          <p>Movie Run Time: {movie.runtime}</p>
          <p>Movie Release Date: {movie.release_date}</p>
          <span>
            <a href={movie.homepage}>Trailer</a>
          </span>
        </div>
        <div className="image">
          <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt={`Movie poster for ${title}`} />
        </div>
      </div>

    </>
  );
}
export default MovieDetails;