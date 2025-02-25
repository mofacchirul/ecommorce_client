import Swal from "sweetalert2";
import Itemtan from "../../Axios/Hook/Item/Item";
import { MdDelete } from "react-icons/md";
import Secure from "../../Axios/Secure/Secure";
import { Link } from "react-router-dom";
const Card = () => {
  const [item,refetch]= Itemtan();
  const totalprice = item.reduce((total,items)=>total+ items.price,0)
  const axios = Secure()
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
     
      axios.delete(`/item/${id}`)
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


  return (
    <div>
        <div className='flex justify-between items-center'>
        <h3 className="lg:text-4xl text-xl text-white">Totel Item {item.length}</h3>
        <h3 className="lg:text-4xl text-xl text-white">Totel Price $ {totalprice} </h3>
{
  item.length ?  
<Link to='/dashbord/pay'>
<button className='btn bg-[#F6AD55] text-white '>Pay</button>
</Link>
  :
  <button disabled className='btn bg-[#F6AD55] text-white '>Pay</button>
}

        </div>

        <div>
        <div className="overflow-x-auto r text-white py-6">
<table className="table w-full">
{/* head */}
<thead className='text-white '>
  <tr>
    <th>No</th>
    <th>Image</th>
    <th>Name</th>
    <th>Email</th>
    <th>Price </th>
    <th>Date</th>
    <th>Delet</th>
  </tr>
</thead>
<tbody>
 {
  item.map((item,index)=>
    <tr key={item._id}>
  <th>{index+1}</th>
  <td><img src={item.image} className='w-14 h-14 rounded-full' alt="" /></td>
  <td>{item.name}</td>
  <td> {item.email} </td>
  <td>{item.price}</td>
  <td>{item.date} </td>
  <td> {item.sie} </td>

  <td className='text-3xl' onClick={()=>Handledelet(item._id)}><MdDelete /></td>
</tr>
)  
 }

 
 
</tbody>
</table>
</div>
        </div>
    </div>
);
};

export default Card;