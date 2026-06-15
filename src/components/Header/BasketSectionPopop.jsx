import { useContext, useRef, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { DataContext } from "../../App";
import Button from "../Button";

function BasketSectionPopop() {
  const { setToggleBasket, basket, handleDeleteItemAtBasket } = useContext(DataContext);
  const total = basket.reduce((acc, cur) => cur.price + acc, 0);
  const popopRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popopRef.current && !popopRef.current.contains(event.target)) {
        setToggleBasket(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setToggleBasket]);

  return (
    <div ref={popopRef} className="flex  fixed sm:p-10 top-0 right-0 h-screen gap-4  sm:w-1/3 bg-white shadow-xl flex-col">
      <div>
        <IoCloseOutline size={30} onClick={() => setToggleBasket(false)} className="cursor-pointer" />
      </div>
      <div className="w-full flex gap-4 flex-col ">
        {basket.map((item) => (
          <div key={item?.id} className=" flex justify-between items-center border border-gray-200 p-2 w-full">
            <h2>{item?.title}</h2>
            <p>{item?.price}</p>
            <img src={item?.images?.[0]} alt="" className="w-20" />
            <IoCloseOutline className="cursor-pointer" size={20} color="red" onClick={() => handleDeleteItemAtBasket(item.id)} />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center w-full ">
        <p className="text-xl text-red-700 font-bold">TOTAL :{total} </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button>Cash out</Button>
      </div>
    </div>
  );
}

export default BasketSectionPopop;

//
