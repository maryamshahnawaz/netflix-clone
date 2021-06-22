import React from 'react';
import NavBar from "./NavBar";
import Header from "./Header";
import Catalogue from "./Catalogue";
import MovieDetails from './MoviesDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>

        <Route path="/" exact component={NavBar} />
        <Route path="/" exact component={Header} />

        <Route exact path="/">
          <Catalogue title="Action" genre={28} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Adventure" genre={12} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Animation" genre={16} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Comedy" genre={35} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Crime" genre={80} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Documentary" genre={99} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Drama" genre={18} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Family" genre={10751} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Fantasy" genre={14} />
        </Route>
        <Route exact path="/">
          <Catalogue title="History" genre={36} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Horror" genre={27} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Music" genre={10402} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Mystery" genre={9648} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Romance" genre={10749} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Science Fiction" genre={878} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Tv Movie" genre={10770} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Thriller" genre={53} />
        </Route>
        <Route exact path="/">
          <Catalogue title="War" genre={10752} />
        </Route>
        <Route exact path="/">
          <Catalogue title="Western" genre={37} />
        </Route>
        <Route path="/movie/:movieID/" exact component={MovieDetails} />

      </Router>


    </div >
  );
}

export default App;
