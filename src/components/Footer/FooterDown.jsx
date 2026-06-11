import IconTextFlex from "./IconTextFlex";
import { MdLocationOn } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

function FooterDown() {
  return (
    <div className="w-full flex bg-red-700 p-8  border-b-2 border-white">
      <div className="flex w-full flex-1 flex-col gap-10 justify-start items-center">
        <IconTextFlex icon={<MdLocationOn size={30} color="white" />}>Mazandaran Province, Shahrsari, Industrial Park No. 1, Shamsashmal Factory (Happiness)</IconTextFlex>
        <div className="flex justify-start items-center gap-4 w-full">
          <CiInstagram size={30} color="white" />
          <FaTelegram size={30} color="white" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-end items-center gap-2 w-full">
        <IconTextFlex icon={<MdOutlineWifiCalling3 size={30} color="white" />}>09129722987</IconTextFlex>
        <IconTextFlex icon={<MdOutlineWifiCalling3 size={30} color="white" />}>09391590692</IconTextFlex>
        <IconTextFlex icon={<MdOutlineEmail size={30} color="white" />}>rezablackcamel@gmail.com</IconTextFlex>
      </div>
    </div>
  );
}

export default FooterDown;
