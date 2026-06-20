import { FaTimes } from "react-icons/fa";

function SearchDesktop({ handleToggleSearch }) {
  return (
    <div className="fixed z-999 top-0 right-0 w-full min-h-28 bg-white border border-gray-400 px-4 py-2">
      <div className="flex py-8 gap-4 justify-between items-center">
        <input
          placeholder="search"
          className="w-full px-2 py-1 h-10  border border-gray-200 bg-gray-100 rounded-lg "
        />
        <FaTimes className="cursor-pointer" onClick={handleToggleSearch} />
      </div>
    </div>
  );
}

export default SearchDesktop;
