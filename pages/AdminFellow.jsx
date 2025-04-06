import React, { useEffect, useState } from 'react'
import FellowHeader from '../components/fellow/FellowHeader'
import { baseUrl } from '../utils/Context';
import MiniLoader from '../utils/MiniLoader';
import { VscDebugDisconnect } from "react-icons/vsc";

const AdminFellow = () => {
  const [fellows, setFellows] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFellow = async () => {
    setLoading(true);
    try {
      const request = await fetch(`${baseUrl}/fellow`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
  
      const response = await request.json();
      if (!request.ok || response.error) {
        throw new Error(response.error || "Unknown error occurred.");
      }
  
      setFellows(response.fellows);
    } catch (error) {
      console.error("Error fetching fellows:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getFellow();
  },[]);
  
  return (
    <div className='w-full h-[85vh] flex flex-col gap-4 p-4'>
      <FellowHeader />
      <div>
        {loading ? (
          <div className='flex gap-5 my-auto h-[300px] w-full justify-center items-center flex-col'>
            <MiniLoader color={"black"} size={20} />
            <p className="text-gray-500">Loading fellows...</p>
          </div>
        ) : error ? (
          <div className='w-full flex flex-col justify-center items-center py-10 h-fit'>
            <VscDebugDisconnect size={50} />
            <p className='flex text-center font-bold text-gray-500 text-3xl'>Error Occur</p>
            <p className='text-center text-xs text-slate-700'>Error while getting Fellows, check your internet connection and reload the website</p>
          </div>
        ) : fellows && fellows.length > 0 ? (
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Fellow ID</th>
                <th className="border border-gray-300 px-4 py-2">Number of Campaigns</th>
              </tr>
            </thead>
            <tbody>
              {fellows.map((fellow) => (
                <tr key={fellow.fellowId} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{fellow.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{fellow.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{fellow.fellowId}</td>
                  <td className="border border-gray-300 px-4 py-2">{fellow.campaigns.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No fellows found.</p>
        )}
      </div>
    </div>
  )
}

export default AdminFellow