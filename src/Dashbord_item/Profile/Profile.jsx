import { useContext } from "react";
import { Authcontext } from "../../Provider/ProviderAuth/ProviderAuth";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user, loading ,Singout} = useContext(Authcontext);

    if (loading) {
        return <div className="text-center text-white">Loading...</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
                <img 
                    src={user?.photoURL || "https://via.placeholder.com/150"} 
                    alt="User Profile" 
                    className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500" 
                />
                <h2 className="text-2xl text-white font-semibold mt-4">{user?.displayName || "Guest User"}</h2>
                <p className="text-gray-400 mt-2">{user?.email || "No Email Provided"}</p>
                <p className="text-gray-400 mt-2">Joined: {user?.metadata?.creationTime || "Unknown Date"}</p>
                <p className="text-gray-400 mt-2">Last Sign-in: {user?.metadata?.lastSignInTime || "Unknown Date"}</p>
                <p className="text-gray-400 mt-2">Phone: {user?.phoneNumber || "Not Available"}</p>
                <p className="text-gray-400 mt-2">Role: {user?.role || "Standard User"}</p>
                <div className="flex justify-center gap-4 mt-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Edit Profile
                    </button>
                   <Link to="/dashbord/home">
                   <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                        View Dashboard
                    </button>
                   </Link>
                    <button onClick={Singout} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
