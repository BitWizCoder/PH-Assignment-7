import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Sidbar from "./components/Sidbar";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl mt-10 mb-8 text-gray-700 font-bold">
        Course Registration
      </h1>
      <div className="flex justify-around">
        <Cards getdata={setData} data={data}></Cards>
        <Sidbar data={data}></Sidbar>
      </div>
    </div>
  );
}

export default App;
