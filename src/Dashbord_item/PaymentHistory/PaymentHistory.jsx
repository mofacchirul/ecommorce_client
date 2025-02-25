import { useContext } from "react";
import { Authcontext } from "../../Provider/ProviderAuth/ProviderAuth";
import { useQuery } from "@tanstack/react-query";
import Secure from "../../Axios/Secure/Secure";

const PaymentHistory = () => {
    const axios = Secure();
    const { user } = useContext(Authcontext);

    // Fetch payment data
    const { data: payment = [], isLoading, error } = useQuery({
        queryKey: ["payment", user?.email],
        queryFn: async () => {
            const res = await axios.get(`/payment/${user?.email}`);
            return res.data;
        },
    });

    // Handle loading state
    if (isLoading) return <p className="text-white">Loading...</p>;

    // Handle error state
    if (error) return <p className="text-red-500">Error fetching payment history</p>;

    return (
        <div className="text-white">
            <h1>Total Payment: {payment.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* Table Header */}
                    <thead>
                        <tr className="text-white">
                            <th>NO</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Transaction ID</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {payment.length > 0 ? (
                            payment.map((item, index) => (
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.email}</td>
                                    <td>${item.price}</td>
                                    <td>{item.transection}</td>
                                    <td>{item.date}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center text-gray-400">
                                    No payment history available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
