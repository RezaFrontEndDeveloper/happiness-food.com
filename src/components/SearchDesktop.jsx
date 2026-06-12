import { useContext } from "react";
import { TfiSearch } from "react-icons/tfi";
import { DataContext } from "../App";
import { FaTimes } from "react-icons/fa";

function SearchDesktop() {
  const { toggleSearch, setToggleSearch, handleToogleSearch } = useContext(DataContext);

  return (
    <>
      <div>
        <TfiSearch color="white" size={25} className="cursor-pointer" onClick={handleToogleSearch} />
      </div>
      {toggleSearch && (
        <div className="fixed top-0 right-0 w-full min-h-28 bg-white border border-gray-400 px-4 py-2">
          <div className="flex py-8 gap-4 justify-between items-center">
            <input placeholder="search" className="w-full px-2 py-1 h-10  border border-gray-200 bg-gray-100 rounded-lg " />
            <FaTimes onClick={() => setToggleSearch(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default SearchDesktop;
