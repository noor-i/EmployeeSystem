import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LookUpSystem = () => {
  return (
    <div className="flex flex-col mt-15 bg-[rgba(205,204,199,0.9)] border-2 border-[rgb(57,57,53)] shadow-2xl rounded-xl w-[90%] md:w-[80%] m-auto gap-3">
      <h1 className="text-center font-bold md:text-3xl text-2xl p-2">
        Lookup System
      </h1>
      <div className="flex flex-col m-3">
        <form className="md:mx-30">
          <div className="flex gap-4 items-center justify-center bg-[rgb(247,248,250)] mx-3 py-2 rounded-2xl shadow-sm shadow-gray-600 md:py-3">
            <label className="font-bold text-lg md:text-xl">Employee-ID:</label>
            <input
              className="border-2 rounded-xl p-1"
              placeholder="eg. AB98"
            ></input>
            <button>
              <FontAwesomeIcon
                icon={faSearch}
                className="text-xl text-black font-bold hover:cursor-pointer bg-gray-300 p-2 rounded-3xl border-2 border-b-gray-600md:text-2xl"
              />
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className="bg-[rgb(14,16,17)] text-white flex m-10 p-5 rounded-sm text-lg md:text-xl md:mx-30">
          <p>
            Please begin your search by entering in a valid employee id from the
            employee roster webpage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LookUpSystem;
