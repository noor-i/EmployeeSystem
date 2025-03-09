import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EmployeeRoster = () => {
  const employees = [
    { id: "AB98", details: "fsbgkjfbvkjfdbvkjfdbjkfdb" },
    { id: "CD45", details: "loremipsumdolorsitamet" },
    { id: "EF23", details: "consecteturadipiscingelit" },
    { id: "GH67", details: "seddoeiusmodtemporincididunt" },
    { id: "IJ89", details: "utlaboreetdoloremagnaaliqua" },
    { id: "KL01", details: "utautemveliteacommodi" },
    { id: "MN23", details: "consequaturautperferendis" },
    { id: "OP45", details: "doloremquequasiarchitecto" },
    { id: "QR67", details: "beataevoluptatevelit" },
    { id: "ST89", details: "essequamnihil" },
    { id: "UV01", details: "molestiaeconsequatur" },
    { id: "WX23", details: "velillumquedolorem" },
    { id: "YZ45", details: "fugiatnullapariatur" },
    { id: "AA67", details: "excepteursintoccaecat" },
    { id: "BB89", details: "cupidatatnonproident" },
  ];

  return (
    <div className="flex flex-col gap-8 my-10 w-[90%] md:w-[80%] lg:w-[70%] mx-auto backdrop-blur-2xl p-4 md:p-6 border-2 rounded-2xl border-gray-300 shadow-md">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
        Employee Roster
      </h1>

      <div className="flex flex-col gap-4">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="flex flex-col sm:flex-row items-start sm:items-center border-2 border-gray-300 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow md:gap-4"
          >
            <div className="flex items-center gap-2 sm:gap-4 sm:w-1/4 mb-2 sm:mb-0">
              <FontAwesomeIcon icon={faUser} className="text-blue-600" />
              <p className="font-medium">Employee-ID: {employee.id}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:w-3/4 gap-2 sm:gap-4">
              <p className="font-medium">Details:</p>
              <div className="filter blur-xs">{employee.details}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeRoster;
