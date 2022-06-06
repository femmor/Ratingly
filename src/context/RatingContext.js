import { createContext, useEffect, useState } from 'react';

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [ratingItems, setRatingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch ratings from backend
  const fetchRatings = async () => {
    const response = await fetch('/ratings?_sort=id&_order=asc');
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
  const addRating = async rating => {
    const response = await fetch('/ratings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rating),
    });
    const data = await response.json();
    setRatingItems([data, ...ratingItems]);
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
