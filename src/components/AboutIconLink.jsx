import { FaQuestion, FaHome } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const AboutIconLink = ({ match }) => {
  const location = useLocation();

  return (
    <div className="about-link">
      {location.pathname === '/' ? (
        <Link to="/about">
          <FaQuestion size={30} />
        </Link>
      ) : (
        <Link to="/">
          <FaHome size={30} />
        </Link>
      )}
    </div>
  );
};

export default AboutIconLink;
