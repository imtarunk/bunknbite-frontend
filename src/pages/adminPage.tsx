import { useState } from "react";
import PlaneForm from "../components/createPlaneForm";
import Sidebar from "../components/sidebar";
import VendorDashboard from "../components/adminDashboard";

const AdminDashboard = () => {
  const [page, setPage] = useState("dashboard | createMeal | setting");

  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <Sidebar page={page} setPage={setPage} />
      <div className="bg-white w-full ">
        {page === "createMeal" ? <PlaneForm /> : <VendorDashboard />}
      </div>
    </div>
  );
};
export default AdminDashboard;
