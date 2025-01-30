import React from "react";
import PackagesOffer from "../components/PackagesOffer";

const Packages = () => {
  useEffect(() => {
    document.title = "Packages | Wanderlust Adventure";
  });
  return (
    <div>
      <PackagesOffer />
    </div>
  );
};

export default Packages;
