import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import RatingForm from './components/RatingForm';
import RatingList from './components/RatingList';
import RatingStats from './components/RatingStats';
import RatingData from './data/RatingData';
import AboutPage from './pages/AboutPage';

const App = () => {
  const [ratingItems, setRatingItems] = useState(RatingData);

  // Delete rating
  const deleteRating = id => {
    // confirm delete
    if (window.confirm('Are you sure you want to delete this rating?')) {
      setRatingItems(ratingItems.filter(rating => rating.id !== id));
    }
  };

  // Add rating
  const addRating = rating => {
    rating.id = uuidv4();
    setRatingItems([rating, ...ratingItems]);
  };

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
                <RatingForm addRating={addRating} />
                <RatingStats ratingItems={ratingItems} />
                <RatingList
                  ratingItems={ratingItems}
                  deleteRating={deleteRating}
                />
              </>
            }
          />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
