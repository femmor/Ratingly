import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [ratingItems, setRatingItems] = useState([
    {
      id: 1,
      text: 'This is item 1 from context API',
      rating: 3,
    },
    {
      id: 2,
      text: 'This is item 2 from context API',
      rating: 6,
    },
    {
      id: 3,
      text: 'This is item 3 from context API',
      rating: 10,
    },
  ]);

  const [ratingEdit, setRatingEdit] = useState({
    item: {},
    edit: false,
  });

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

  // Edit rating
  const editRating = rating => {
    setRatingEdit({
      item: rating,
      edit: true,
    });
  };

  // Update rating
  const updateRating = (id, updRating) => {
    setRatingItems(
      ratingItems.map(item =>
        item.id === id ? { ...item, ...updRating } : item
      )
    );
    setRatingEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <RatingContext.Provider
      value={{
        ratingItems,
        addRating,
        deleteRating,
        editRating,
        ratingEdit,
        updateRating,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
};

export default RatingContext;
