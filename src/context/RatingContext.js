import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [ratingItems, setRatingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch ratings from backend
  const fetchRatings = async () => {
    const response = await fetch(
      'http://localhost:5000/ratings?_sort=id&_order=asc'
    );
    const data = await response.json();
    setRatingItems(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRatings();
  }, []);

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
        isLoading,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
};

export default RatingContext;
