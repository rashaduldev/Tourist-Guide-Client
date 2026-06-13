import type { ReactNode } from "react";
import PrivetRoute from "@/Route/PrivetRoute";
import DashBoard from "@/LayOut/DashBoard";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PrivetRoute>
      <DashBoard>{children}</DashBoard>
    </PrivetRoute>
  );
}
