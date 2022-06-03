import { useState } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

const RatingForm = ({ ratingItems, addRating }) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(null);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

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

      addRating(newRating);
    }

    setText('');
    setRating(null);
  };

  return (
    <Card>
      <h2>How would your rate our service?</h2>
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
