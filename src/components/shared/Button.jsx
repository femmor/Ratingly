const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button
      className={`btn btn-${type} btn-${version}`}
      type={type}
      version={version}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  version: 'primary',
  isDisabled: false,
};

export default Button;
