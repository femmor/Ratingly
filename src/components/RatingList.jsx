import RatingItem from './RatingItem';

const RatingList = ({ ratingItems }) => {
  // Check to see o=if there are any ratings
  if (!ratingItems || ratingItems.length === 0) {
    return <p>No Ratings Yet!</p>;
  }

  return (
    <div className="rating-list">
      {ratingItems.map(ratingItem => (
        <RatingItem key={ratingItem.id} ratingItem={ratingItem} />
      ))}
    </div>
  );
};
export default RatingList;
