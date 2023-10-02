import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviePage from '../pages/MoviePage';
import MovieDetails from '../pages/MovieDetails';


const PageRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MoviePage />} />
          <Route path="/vite-moviedb" element={<MoviePage />} />
          <Route path="/vite-moviedb/detailsPage" element={<MovieDetails />} />
        </Routes>
      </Router>
    );
}

export default PageRoutes;
