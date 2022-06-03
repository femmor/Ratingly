const RatingItem = ({ ratingItem }) => {
  const { rating, text } = ratingItem;

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
};
export default RatingItem;
