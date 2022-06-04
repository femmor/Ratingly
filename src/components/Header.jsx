import { Link } from 'react-router-dom';

const Header = ({ text, textColor, bgColor }) => {
  const headerStyle = { color: textColor, backgroundColor: bgColor };

  return (
    <header style={headerStyle}>
      <div className="container">
        <Link to="/">
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'Ratingly',
  bgColor: 'rgba(0, 0, 0, 0.5)',
  textColor: '#E3DCC2',
};

export default Header;
