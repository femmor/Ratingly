import { useState } from 'react';
import Header from './components/Header';
import RatingList from './components/RatingList';
import RatingData from './data/RatingData';

const App = () => {
  const [ratingItems, setRatingItems] = useState(RatingData);

  return (
    <>
      <Header />
      <div className="container">
        <RatingList ratingItems={ratingItems} />
      </div>
    </>
  );
};

export default App;
