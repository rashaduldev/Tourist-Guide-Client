import AdminRoute from "@/Route/AdminRoute";
import AdminDashboard from "@/Pages/DashBoard/Admin/AdminDashboard/AdminDashboard";

export default function DashboardHomePage() {
  return (
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  );
}
