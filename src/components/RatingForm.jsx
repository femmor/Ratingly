import { useState } from 'react';
import Card from './shared/Card';

const RatingForm = () => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <Card>
      <h2>How would your rate our service?</h2>
      {/* todo - rating select component */}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Please write a review"
            className="form-control"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
};
export default RatingForm;
