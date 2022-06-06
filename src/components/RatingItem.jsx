import { useContext } from 'react';
import RatingContext from '../context/RatingContext';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';

const RatingItem = ({ ratingItem }) => {
  const { deleteRating, editRating } = useContext(RatingContext);

  const { id, rating, text } = ratingItem;

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteRating(id)}>
        <FaTimes color="#a6a867" />
      </button>
      <button className="edit" onClick={() => editRating(ratingItem)}>
        <FaEdit color="#a6a867" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};
export default RatingItem;
