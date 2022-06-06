import Loading from 'react-loading';

const Loader = ({ type, color }) => {
  return (
    <Loading
      className="loader"
      type={type}
      color={color}
      height={100}
      width={100}
    />
  );
};
export default Loader;
