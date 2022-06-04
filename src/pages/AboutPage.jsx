import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          This is a simple React App to leave reviews, ratings and feedback for
          products and/or services.
        </p>
        <Link to="/">Return to the homepage</Link>
      </div>
    </Card>
  );
};
export default AboutPage;
