import { useQuery } from "@tanstack/react-query";
import Secure from "../../Axios/Secure/Secure";
import { IoMdContacts } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";

const ALl_user = () => {
  const axios = Secure();
  const { data: users = [],refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get("/user"); // Check your API route
      return res.data;
    },
  });




 const Handledelet=(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
     
      axios.delete(`/user/${id}`)
      .then(res=>{
         if(res.data.deletedCount > 0){
          refetch()
                 Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
         }
          
      })
      }
    });
    
   }


   const HandleAdmin = (user)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, admin"
      }).then((result) => {
        if (result.isConfirmed) {
       
        axios.patch(`/user/${user._id}`)
        .then(res=>{
           if(res.data.modifiedCount > 0){
            refetch()
                   Swal.fire({
            title: "Admin!",
            text: `${user.name} is an admin Now!`,
            icon: "success"
          });
           }
            
        })
        }
      });
    

   }






  return (
    <div className="text-white">
      <div className="flex justify-around items-center border-b-2 border-solid border-orange-500 py-2">
        <h1 className="text-xl lg:text-4xl">All User</h1>
        <h1 className="text-xl lg:text-4xl">Total Users: {users.length}</h1>
      </div>
      <div className="overflow-x-auto py-3">
        <table className="table text-white ">
          {/* head */}
          <thead className="text-white bg-orange-500 border-2 border-solid rounded-full border-b-amber-50  ">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="text-white">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-xl lg:text-4xl">
                {
                user.role=== 'admin' ? 'admin' :  <button onClick={()=>HandleAdmin(user)}>     <IoMdContacts /></button>
             }
                </td>
                <td onClick={()=>Handledelet(user._id) } className="text-xl lg:text-4xl">
                  <TiDelete />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ALl_user;
