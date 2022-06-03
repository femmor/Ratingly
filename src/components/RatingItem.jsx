import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';

const RatingItem = ({ ratingItem, handleDelete }) => {
  const { id, rating, text } = ratingItem;
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => handleDelete(id)}>
        <FaTimes color="#a6a867" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};
export default RatingItem;
