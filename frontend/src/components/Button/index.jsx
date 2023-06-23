export const Button = ({
  type,
  onClick,
  children
}) => {
  const classType = type === 'button-confirm' ? 'btn btn-danger w-full' : 'btn btn-light w-full';

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={classType}
    >
      { children }
    </button>
  );
}

export default Button;