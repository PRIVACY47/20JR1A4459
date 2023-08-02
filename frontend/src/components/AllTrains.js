import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const TrainTable = ({ data }) => {
  return (
    <div className=" bg-gray-900 overflow-x-auto">
      <table className=" bg-gray-900 w-full border-collapse table-auto">
        <thead bg-gray-900>
          <tr className="bg-gray-900">
            <th className="px-4 py-2">Train Name</th>
            <th className="px-4 py-2">Train Number</th>
            <th className="px-4 py-2">Departure Time</th>
            <th className="px-4 py-2">Seats Available (Sleeper)</th>
            <th className="px-4 py-2">Seats Available (AC)</th>
            <th className="px-4 py-2">Price (Sleeper)</th>
            <th className="px-4 py-2">Price (AC)</th>
            <th className="px-4 py-2">Delayed By (minutes)</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900">
          {data.map((train, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-700'}>
              <td className="border px-4 py-2 text-white underline" >  <Link to={ `/${train.trainNumber}  `} >{train.trainNumber}  </Link>   </td>
              <td className="border px-4 py-2">{train.trainName}</td>
              <td className="border px-4 py-2">{train.seatsAvailable.sleeper}</td>
              <td className="border px-4 py-2">{train.seatsAvailable.AC}</td>
              <td className="border px-4 py-2">{train.price.sleeper}</td>
              <td className="border px-4 py-2">{train.price.AC}</td>
              <td className="border px-4 py-2">{train.delayedBy}</td>
              <td className="border px-4 py-2">
                {train.departureTime.Hours}:{train.departureTime.Minutes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


function AllTrains(){
    const [trains, setTrains] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/trains')
          .then(response => {
            setTrains(response.data);
            console.log(trains)
          })
          .catch(error => {
            console.error('Error ', error.message);
          });
      }, []);
    return (
        <div className='bg-gray-900 h-full'>
        <center>
          <h1 className='text-4xl font-bold mb-4 text-white'> ALL TRAINS DATA </h1>
        </center>
        
        <div className="bg-gray-900 text-white container mx-auto p-4 h-full">
      <TrainTable data={trains} />
    </div>
      </div>
    )
}

export default AllTrains