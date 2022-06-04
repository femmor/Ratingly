import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import Header from './components/Header';
import RatingForm from './components/RatingForm';
import RatingList from './components/RatingList';
import RatingStats from './components/RatingStats';
import RatingData from './data/RatingData';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <RatingForm />
                <RatingStats />
                <RatingList />
              </>
            }
          />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
  );
};

export default App;
