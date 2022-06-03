import Card from './shared/Card';

const RatingItem = ({ ratingItem }) => {
  const { rating, text } = ratingItem;

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  );
};
export default RatingItem;
