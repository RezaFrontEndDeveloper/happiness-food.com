import React, { useContext } from "react";
import { DataContext } from "../../App";

function BasketNumber() {
  const { basket } = useContext(DataContext);
  const basketNumber = basket.length || 0;

  return <div className="absolute top-[-10px] right-0 px-1 text-sm bg-red-600 text-white rounded-full">{basketNumber}</div>;
}

export default BasketNumber;
