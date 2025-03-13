import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const LookUpSystem = () => {
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [employeeData, setEmployeeData] = useState(false);

  const closeCard = () => {
    setDetailsOpen(!detailsOpen);
  };

  async function getEmployeeData(e) {
    e.preventDefault(); // Prevent form submission default behavior

    const eID = document.getElementById("e_id").value;
    const url = import.meta.env.VITE_API_GATEWAY_URL;

    if (!eID) {
      alert("Please enter a valid Employee ID.");
      return;
    }
    try {
      const response = await fetch(`${url}${eID}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Update employee data state
      setEmployeeData(data);
      setDetailsOpen(true);
    } catch (error) {
      console.log("Error fetching employee data:", error);
    }
  }

  return (
    <div className="flex flex-col my-15 bg-[rgba(205,204,199,0.9)] border-2 border-[rgb(57,57,53)] shadow-2xl rounded-xl w-[90%] md:w-[80%] m-auto gap-8 overflow-hidden">
      <h1 className="text-center font-bold md:text-3xl text-2xl p-2 mt-4">
        Lookup System
      </h1>
      <div className="flex flex-col">
        <form className="flex flex-row justify-center">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center bg-[rgb(247,248,250)] mx-3 py-2 px-10 rounded-2xl shadow-sm shadow-gray-600 md:py-3 md:px-[12vw]">
            <label className="font-bold text-lg md:text-xl">Employee-ID:</label>
            <input
              className="border-2 rounded-xl p-1"
              placeholder="eg. AB98"
              type="text"
              id="e_id"
              name="e_id"
            ></input>
            <button onClick={getEmployeeData} type="submit">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-lg md:text-xl text-black font-bold hover:cursor-pointer bg-gray-300 p-2 rounded-3xl border-2 border-b-gray-600 hover:bg-blue-300"
              />
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className="bg-[rgba(14,16,17,0.6)] text-white flex m-7 p-5 rounded-sm text-lg md:text-xl md:mx-30">
          <p>
            Please begin your search by entering in a valid employee id from the
            employee roster webpage.
          </p>
        </div>
      </div>
      {detailsOpen && employeeData && (
        <div className="relative bg-white flex flex-col justify-center items-center mx-[10vw] mb-10 pt-[3vh] pb-[5vh] px-[3vw] gap-5 shadow-md shadow-gray-800 rounded-lg">
          <button onClick={closeCard}>
            <FontAwesomeIcon
              icon={faClose}
              className="absolute top-2.5 right-3 md:text-xl text-black font-bold hover:cursor-pointer hover:bg-blue-300 bg-gray-300 px-1 py-0.5 rounded-full border-2 border-b-gray-600md:text-2xl"
            />
          </button>
          <h1 className="font-bold text-lg mb-7 mt-7 md:text-xl border-2 border-b-blue-300 p-2 rounded-lg">
            Employee Details
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 min-w-[344px] md:gap-12 lg:gap-20">
            <FontAwesomeIcon
              icon={faAddressCard}
              className="text-4xl md:text-6xl lg:text-8xl"
            />
            <div className="flex flex-col gap-5 text-md md:text-lg">
              <div className="flex flex-col sm:flex-row gap-2">
                <h1 className="font-semibold">Name:</h1>
                <p>{employeeData.Name}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <h1 className="font-semibold">E-ID:</h1>
                <p>{employeeData.EmployeeID}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <h1 className="font-semibold">Phone:</h1>
                <p>{employeeData.Phone}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <h1 className="font-semibold">Email:</h1>
                <p>{employeeData.Email}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <h1 className="font-semibold">Leaves:</h1>
                <p>
                  {employeeData.Leaves !== undefined
                    ? employeeData.Leaves
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LookUpSystem;
