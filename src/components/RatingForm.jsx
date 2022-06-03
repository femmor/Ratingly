import { useState } from 'react';
import Button from './shared/Button';
import Card from './shared/Card';

const RatingForm = () => {
  const [text, setText] = useState('');
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

  return (
    <Card>
      <h2>How would your rate our service?</h2>
      {/* todo - rating select component */}
      <form>
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
