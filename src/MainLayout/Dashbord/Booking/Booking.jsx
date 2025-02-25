import { useEffect, useState } from "react";
import Secure from "../../../Axios/Secure/Secure";


const Booking  = () => {
  const axios = Secure();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/admin/orders").then((res) => {
      setOrders(res.data);
    });
  }, [axios]);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5 text-white">Admin Booking  Panel</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">User Email</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Transaction ID</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="text-center text-white">
              <td className="border p-2">{order.email}</td>
              <td className="border p-2">${order.price}</td>
              <td className="border p-2">{order.transaction || "N/A"}</td>
              <td className={`border p-2 ${order.status === "confirmed" ? "text-green-500" : "text-red-500"}`}>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booking ;