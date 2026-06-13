import AdminRoute from "@/Route/AdminRoute";
import Users from "@/Pages/DashBoard/Admin/Users/Users";

export default function ManageUsersPage() {
  return (
    <AdminRoute>
      <Users />
    </AdminRoute>
  );
}
