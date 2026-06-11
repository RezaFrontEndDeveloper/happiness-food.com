import { BsTelegram } from "react-icons/bs";

function WebsiteDeveloper() {
  return (
    <div className="flex gap-8 absolute h-auto w-60 bottom-14 right-0 p-2 flex-col justify-center items-center px rounded-2xl bg-white">
      <div className="flex w-full border border-gray-400 px-2 py-1 rounded-2xl justify-between items-center">
        <BsTelegram size={20} color="blue" />
        <span>@reza</span>
      </div>
      <div className="flex w-full border border-gray-400 px-2 py-1 rounded-2xl justify-between items-center">
        <BsTelegram size={20} color="blue" />
        <span>@reza</span>
      </div>
      <div className="flex w-full border border-gray-400 px-2 py-1 rounded-2xl justify-between items-center">
        <BsTelegram size={20} color="blue" />
        <span>@reza</span>
      </div>
      <div className="flex justify-between w-full items-center"></div>
    </div>
  );
}

export default WebsiteDeveloper;
