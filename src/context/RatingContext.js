import { createContext, useEffect, useState } from 'react';

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [ratingItems, setRatingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ratingEdit, setRatingEdit] = useState({
    item: {},
    edit: false,
  });

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
  const deleteRating = async id => {
    // confirm delete
    if (window.confirm('Are you sure you want to delete this rating?')) {
      await fetch(`/ratings/${id}`, {
        method: 'DELETE',
      });

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
  const updateRating = async (id, updRating) => {
    const response = await fetch(`/ratings/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updRating),
    });
    const data = await response.json();

    setRatingItems(
      ratingItems.map(item => (item.id === id ? { ...item, data } : item))
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
