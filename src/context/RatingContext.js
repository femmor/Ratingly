import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [ratingItems, setRatingItems] = useState([
    {
      id: 1,
      text: 'This item is from context API',
      rating: 3,
    },
  ]);

  // Add rating
  const addRating = rating => {
    rating.id = uuidv4();
    setRatingItems([rating, ...ratingItems]);
  };

  // Delete rating
  const deleteRating = id => {
    // confirm delete
    if (window.confirm('Are you sure you want to delete this rating?')) {
      setRatingItems(ratingItems.filter(rating => rating.id !== id));
    }
  };

  return (
    <RatingContext.Provider
      value={{
        ratingItems,
        addRating,
        deleteRating,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
};

export default RatingContext;
