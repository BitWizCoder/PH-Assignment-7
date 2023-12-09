import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

function Cards({ getdata, data }) {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setCardData(data));
    }

    fetchData();

    return () => {
      return false;
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-5 justify-center w-[75%]">
      {cardData.map((item, index) => (
        <Card key={index} item={item} getData={getdata} data={data}></Card>
      ))}
    </div>
  );
}

export default Cards;
