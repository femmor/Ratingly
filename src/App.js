import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import RatingForm from './components/RatingForm';
import RatingList from './components/RatingList';
import RatingStats from './components/RatingStats';
import RatingData from './data/RatingData';

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
    <>
      <Header />
      <div className="container">
        <RatingForm addRating={addRating} />
        <RatingStats ratingItems={ratingItems} />
        <RatingList ratingItems={ratingItems} deleteRating={deleteRating} />
      </div>
    </>
  );
};

export default App;
