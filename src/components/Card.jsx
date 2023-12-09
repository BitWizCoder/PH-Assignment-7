import Button from "./Button";
import { FaDollarSign } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";

function Card({item, getData, data}) {
   const {image, title, description, price, credit} = item;
  return (
    <div className="w-[300px] shadow-sm p-5 rounded-md mb-5 bg-white">
        <img src={image} alt="course cover" />
        <h1 className="font-semibold my-2 text-gray-800">{title}</h1>
        <p className="text-gray-700">{description}</p>
        <div className="flex justify-between text-gray-700 my-3">
            <p className="flex items-center"><FaDollarSign style={{ fontSize: '18px' }} />Price: {price}</p>
            <p className="flex items-center"><FaBookOpen style={{ fontSize: '20px' }} />&nbsp;Credit: {credit}hr</p>
        </div>
        <Button item={item} getData={getData} data={data} ></Button>
    </div>
  )
}

export default Card