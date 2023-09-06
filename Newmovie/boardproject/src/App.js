import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import WeekMovieList from "./WeekMovieList";
import MonthMovieList from "./MonthMovieList";
import AllMovieList from "./AllMovieList";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/weekmovies">이번주 영화리스트</Link>
            </li>
            <li>
              <Link to="/monthmovies">이번달 영화리스트</Link>
            </li>
            <li>
              <Link to="/allmovies">전체 영화리스트</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weekmovies" element={<WeekMovieList />} />
          <Route path="/monthmovies" element={<MonthMovieList />} />
          <Route path="/allmovies" element={<AllMovieList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
