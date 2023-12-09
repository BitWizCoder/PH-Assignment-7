import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";

function Button({ item, getData, data }) {
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    const totalCredit = data.reduce((acc, item) => acc + item.credit, 0);
    if (totalCredit > 20) {
      setTotalCredit(20);
    } else {
      setTotalCredit(totalCredit);
    }
  }, [data]);

  function getItem() {
    const foundObject = data.find(
      (obj) => obj.id === item.id && obj.name === item.name
    );

    if (!foundObject && totalCredit < 20) {
      getData([...data, item]);
      return;
    } else if (totalCredit <= 20 && !foundObject) {
      return Swal.fire({
        title: "Error!",
        text: "credit finished.",
        icon: "error",
        confirmButtonText: "Exit",
      });
    } else {
      return Swal.fire({
        title: "Error!",
        text: "Item already added.",
        icon: "error",
        confirmButtonText: "Exit",
      });
    }
  }
  return (
    <button
      className="bg-blue-600 text-white w-full rounded-md py-2 text-lg font-semibold"
      onClick={getItem}
    >
      Select
    </button>
  );
}

export default Button;
