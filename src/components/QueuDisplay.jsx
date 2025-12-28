import React from "react";
import { FaUserXmark } from "react-icons/fa";

const QueuDisplay = ({ queue, UpdateStatus, RemoveData }) => {
  return (
    <div
      className=" shadow  lg:p-5 lg:w-1/2  sm:w-full  lg:ml-3 rounded-xl  "
      style={{ backgroundColor: "#111" }}
    >
      <h1 className="m-10 lg:text-2xl font-bold">Current queue</h1>

      {queue.length === 0 ? (
        <p className="text-gray-300 text-xl  m-10 text-center">
          No Customer Data
        </p>
      ) : (
        queue.map((coustmer) => (
          <div
            key={coustmer.id}
            className="flex justify-between lg:p-2  text-black  h-22 m-4 rounded  "
            style={{ backgroundColor: "#000000" }}
          >
            {/* LEFT SIDE */}
            <div className="text-white  ml-2 mt-1 ">
              <h1 className="  font-semibold  leading-tight text-lg  ">
                {coustmer.name}
              </h1>
              <h1 className="text-sm  text-gray-400 ">{coustmer.Option}</h1>
              <span
                className={`px-2 rounded-full text-xs mt-1 w-fit flex justify-center item-center ${
                  coustmer.status === "Waiting"
                    ? "bg-red-600 "
                    : coustmer.status === "Serving"
                    ? "bg-blue-500 text-blue-100"
                    : "bg-green-600 text-white"
                }`}
              >
                {coustmer.status}
              </span>
            </div>

            {/* RIGHT SIDE BUTTONS */}
            <div className="flex gap-2 justify-center items-center text-white  ">
              {coustmer.status === "Waiting" && (
                <button
                  className="bg-green-500 lg:px-2 lg:py-2   "
                  onClick={() => UpdateStatus(coustmer.id, "Serving")}
                >
                  Serve
                </button>
              )}

              {coustmer.status === "Serving" && (
                <button
                  className="bg-blue-500 h-10 p-1  "
                  onClick={() => UpdateStatus(coustmer.id, "Complete")}
                >
                  Complete
                </button>
              )}

              <button
                className="bg-red-500 lg:h-10 p-1 text-white w-10 flex justify-center items-center "
                onClick={() => RemoveData(coustmer.id)}
              >
                <FaUserXmark  />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default QueuDisplay;
