import React from 'react';
import NavBar from "./NavBar";
import Header from "./Header";
import Catalogue from "./Catalogue";
import MovieDetails from './MoviesDetails';
import TvShow from './TvShow';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={NavBar} />
        <Route path="/" exact component={Header} />
        <Route exact path="/">
          <Catalogue title="Now Playing" link={"now_playing"} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Upcoming" link={"upcoming"} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Top Rated" link={"top_rated"} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Popular" link={"popular"} />
        </Route>
        <Route path="/movie/:movieID/" exact component={MovieDetails} />
        <Route path="/">
          <TvShow link={"latest"} />
        </Route>
        <Route path="/">
          <TvShow link={"airing_today"} />
        </Route>






      </Router>


    </div >
  );
}

export default App;
