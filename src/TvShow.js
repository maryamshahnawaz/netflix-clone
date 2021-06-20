import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const TvShow = ({ link }) => {
  const [tv, setTv] = useState([]);
  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/tv/${link}`,
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: "7b4ee228270013c7be42d484778165ef",
      },
    }).then((res) => {
      console.log(res.data.results);
    })
    return () => {
      setTv([])
    }
  }, []);




  return (
    <div>
    </div>
  )
}

export default TvShow
