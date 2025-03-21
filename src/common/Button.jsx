const Button = ({ children, className = "", ...rest }) => {
  return (
    <button
      type="button"
      className={`${className} rounded-lg text-base text-center px-4 md:px-6 py-3 hover:transition  hover:opacity-90`}
     
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
