import AdminRoute from "@/Route/AdminRoute";
import AddPackageForm from "@/Pages/DashBoard/Admin/AddPackageForm/AddPackageForm";

export default function AddPackagePage() {
  return (
    <AdminRoute>
      <AddPackageForm />
    </AdminRoute>
  );
}
