function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="bg-red-200 font-bold cursor-pointer text-red-700 px-4 py-2 rounded-md w-50  hover:bg-red-700 hover:text-white text-center transition-all duration-300 ">
      {children}
    </button>
  );
}

export default Button;
