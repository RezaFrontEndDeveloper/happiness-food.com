import React from "react";
import basketLogo from "../../assets/basket.svg";
import { SlBasketLoaded } from "react-icons/sl";

function BasketLogo({ onClick }) {
  return <SlBasketLoaded onClick={onClick} color="white" size={25} className="cursor-pointer" />;
}

export default BasketLogo;
