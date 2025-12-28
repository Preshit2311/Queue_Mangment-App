import React from "react";
import QueuForm from "./components/QueuForm";
import { useState } from "react";
import QueuDisplay from "./components/QueuDisplay";

const App = () => {
  const [queue, setqueue] = useState([]);

  function AddData(coustmer) {
    setqueue([...queue, { ...coustmer, id: Date.now(), status: "Waiting" }]);
    console.log([...queue, { ...coustmer, id: Date.now, status: "Waiting" }]);
  }

  function UpdateStatus(id, newStatus) {
    setqueue(
      queue.map((coustmer) => {
        return coustmer.id === id
          ? { ...coustmer, status: newStatus }
          : coustmer;
      })
    );
  }

  function RemoveData(id) {
    setqueue(queue.filter((coustmer =>  coustmer.id !== id )))
  }

  return (
    <div className="m-20 ">
      <header >
        <h1 className="text-4xl text-center font-bold text-blue-600">Queue Managment Application </h1>
        <p  className="text-gray-400 text-center text-xl">Manage your Customers effeciently</p>
      </header>
      <main className=" mt-10  flex flex-col md:flex-row">
        <QueuForm AddData={AddData} />
        <QueuDisplay
          UpdateStatus={UpdateStatus}
          queue={queue}
          RemoveData={RemoveData}
        />
      </main>
    </div>
  );
};

export default App;
