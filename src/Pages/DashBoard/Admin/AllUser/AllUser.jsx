import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      return response.data;
    },
  });
const handleMakeAdmin = (user) => {
    if (!user || !user._id) {
      console.error('Invalid user or user ID');
      return;
    }
  
    axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        console.log(res.data);
        if (res.data && res.data.modifiedCount > 0) {
            refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an admin now!`,
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          console.error('No modifications were made.');
        }
      })
      .catch(err => {
        console.error('Error occurred:', err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  };
  const handleDeleteUser=(user)=>{
    console.log('User deleted successfully',user.email);
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
        axiosSecure.delete(`/users/${user._id}`)
        .then(res=>{
            console.log(res);
            Swal.fire({
                title: "Deleted!",
                text: `${user.name} has been deleted`,
                icon: "success"
            })
            refetch();
        })
        }
      });
  }
  return (
  <div>
      <div className="flex justify-evenly my-4">
      <div className="text-3xl">All Users</div>
      <div className="text-3xl">Totat Users ({users.length})
      
      </div>
      
    </div>
    <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user,index) => (
                    <tr key={user._id}>
                    <th>{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                    {user.role==='admin'?'Admin': <button 
                      onClick={()=>handleMakeAdmin(user)}
                      className="btn btn-ghost btn-xs bg-orange-500 text-2xl">
                       <FaUsers/>
                      </button>}
                    </td>
                    <td className="text-2xl">
                    <button 
                      onClick={()=>handleDeleteUser(user)}
                      className="btn btn-ghost btn-xs text-lg">
                       <FaTrash/>
                      </button>
                    </td>
                  </tr>
                ))
  
            }
           
          </tbody>
        </table>
      </div>
  </div>
  );
};

export default AllUsers;
