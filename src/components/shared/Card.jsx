const Card = ({ children, reverse }) => {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
};

Card.defaultProps = {
  children: null,
  reverse: false,
};

export default Card;
