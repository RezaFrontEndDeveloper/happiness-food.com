import IconInFooter from "./IconInFooter";
import { FaRegUser } from "react-icons/fa6";
import { FaHandDots } from "react-icons/fa6";
import { FaFlagUsa } from "react-icons/fa6";
import { FaCreativeCommonsSa } from "react-icons/fa";

function FooterUp() {
  return (
    <div className="flex gap-8  sm:flex-row justify-between p-8 bg-red-300 w-full">
      <IconInFooter icon={<FaRegUser size={30} />}>Cooperate with us</IconInFooter>
      <IconInFooter icon={<FaHandDots size={30} />}>Cooperate with us</IconInFooter>
      <IconInFooter icon={<FaFlagUsa size={30} />}>Cooperate with us</IconInFooter>
      <IconInFooter icon={<FaCreativeCommonsSa size={30} />}>Cooperate with us</IconInFooter>
    </div>
  );
}

export default FooterUp;
