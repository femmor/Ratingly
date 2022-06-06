import { useContext, useEffect, useState } from 'react';
import RatingContext from '../context/RatingContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

const RatingForm = () => {
  // Get addRating from the context
  const { addRating, ratingEdit, updateRating } = useContext(RatingContext);

  const [text, setText] = useState('');
  const [rating, setRating] = useState(null);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (ratingEdit.edit === true) {
      setText(ratingEdit.item.text);
      setRating(ratingEdit.item.rating);
      setBtnDisabled(false);
    } else {
      setText('');
      setRating(null);
      setBtnDisabled(true);
    }
  }, [ratingEdit]);

  // Text validation real time
  const handleTextChange = e => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Please enter at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newRating = {
        text,
        rating,
      };

      // Edit rating / add rating
      if (ratingEdit.edit === true) {
        updateRating(ratingEdit.item.id, newRating);
      } else {
        addRating(newRating);
      }
    }

    setText('');
    setRating(null);
  };

  return (
    <Card>
      <h2>How would you rate our service?</h2>
      <RatingSelect select={rating => setRating(rating)} />
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Please write a review"
            className="form-control"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <p className="message">{message}</p>}
      </form>
    </Card>
  );
};
export default RatingForm;
