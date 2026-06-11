import { useState } from "react";
import WebsiteDeveloper from "./WebsiteDeveloper";

function FooterLastSection() {
  const [toggleWebSiteDeveloper, setToggleWebsiteDeveloper] = useState(false);

  return (
    <div className="flex justify-between py-4 items-center px-10 bg-red-700">
      <p className="text-white">All rights to this website belong to Shamsashmal (Happiness) Company.</p>
      <button onMouseEnter={() => setToggleWebsiteDeveloper(true)} onMouseLeave={() => setToggleWebsiteDeveloper(false)} className="bg-white px-2  py-1 rounded-2xl">
        website developer
      </button>
      {toggleWebSiteDeveloper && <WebsiteDeveloper />}
    </div>
  );
}

export default FooterLastSection;
