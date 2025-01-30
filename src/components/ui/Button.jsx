import React from "react";

const Button = ({ btnText }) => {
  return (
    <>
      <button
        type="submit"
        className="bg-golden font-medium xxs:text-sm text-black text-[10px] xxs:py-2 py-1 xxs:px-3 px-2 rounded-sm cursor-pointer font-opensans shadow hover:shadow-sm hover:shadow-white transition-all ease-in-out duration-300"
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
