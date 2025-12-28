import React from "react";
import { FaUserPlus } from "react-icons/fa6";
import { useState } from "react";

const QueuForm = ({ AddData }) => {
  const [name, setname] = useState("");
  const [Option, setoption] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !Option) return;
    AddData({ name, Option });
    setname("");
    setoption("");
  }

  return (
    <div>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{ backgroundColor: "#111" }}
        className="rounded-2xl "
      >
        <h1 className="font-bold text-2xl text-blue-600 p-4">Add to queue</h1>

        <div className="flex flex-col gap-3  px-2 m-2 py-8  lg:px-7 lg:py-8 ">
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="border  py-2  px-5 p-1 rounded "
            placeholder="Coustmer name"
            type="text"
          />

          {/* Dropdown */}
          <select
            value={Option}
            onChange={(e) => setoption(e.target.value)}
            className=" bg-black border p-1"
          >
            
            <option value="" style={{ backgroundColor: "#212121" }}>
              {" "}
              Select Service{" "}
            </option>
            <option value="Normal">Normal</option>
            <option value="Priority">Priority</option>
            <option value="VIP">VIP</option>
          </select>
            {/* Button */}
          <div className="">
            <button className="lg:w-60 w-full rounded bg-blue-600 active:scale-95 flex justify-center items-center gap-2 py-2  active:bg-purple-400 ">
              <FaUserPlus /> Add to Coustmer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QueuForm;
