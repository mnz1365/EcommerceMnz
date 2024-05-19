import React from "react";
import i18n from "../i18n";
import productData from "../productData";

const HeaderTwo = () => {
  return (
    <div className="w-full h-10 bg-gradient-to-r from-red-100 to-emerald-700">
      <div className="lang flex text-[15px] font-mono font-semibold text-white float-right mr-10 mt-2">
        <button
          className="hover:underline hover:text-sky-400"
          onClick={() => i18n.changeLanguage("en")}
        >
          English
        </button>
        |
        <button
          className="hover:underline hover:text-sky-400"
          onClick={() => {i18n.changeLanguage("fa")}}
        >
          farsi
        </button>
      </div>
    </div>
  );
};

export default HeaderTwo;
