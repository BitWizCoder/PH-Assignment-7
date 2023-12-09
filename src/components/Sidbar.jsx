import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";

function Sidbar({ data }) {
  const [price, setPrice] = useState(0);
  const initialCredit = 20;
  const [remainingCredit, setRemainingCredit] = useState(initialCredit);
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    const totalPrice = data.reduce((acc, item) => acc + item.price, 0);
    setPrice(totalPrice);
    const totalCredit = data.reduce((acc, item) => acc + item.credit, 0);
    if (totalCredit > 20) {
      return Swal.fire({
        title: "Error!",
        text: "credit finished.",
        icon: "error",
        confirmButtonText: "Exit",
      });
    } else {
      setTotalCredit(totalCredit);
    }
  }, [data]);

  const canAddMoreTitles = remainingCredit > 0;

  const handleAddItem = (item) => {
    if (canAddMoreTitles) {
      const itemCredit = item.credit || 0;
      setRemainingCredit((prevRemainingCredit) =>
        Math.max(prevRemainingCredit - itemCredit, 0)
      );
    } else {
      console.log("Credit limit reached. Cannot add more items.");
    }
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-5 w-[25%] max-h-[500px] sticky top-2 overflow-auto">
      <h1 className="text-blue-500 font-semibold my-4">
        Credit Hour Remaining{" "}
        {initialCredit - totalCredit > 0 ? initialCredit - totalCredit : 0} hr
      </h1>
      <hr />
      <h2 className="my-4 font-semibold text-xl text-gray-800">Course Name</h2>
      <ol className="list-decimal text-gray-600">
        {canAddMoreTitles &&
          data.map((item) => {
            return (
              <li key={item.id} className="ml-4 my-2">
                {item.title}
              </li>
            );
          })}
      </ol>
      <hr />
      <p className="my-4">Total Credit Hour : {totalCredit}</p>
      <hr />

      <div>
        <p className="font-semibold text-gray-600 my-4">
          Total Price: ${price} USD
        </p>
      </div>
    </div>
  );
}

export default Sidbar;
