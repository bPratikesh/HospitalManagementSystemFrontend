import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function PatientLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50">
      <Navbar />

      <main className="flex-1">
        <div className="container py-8">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PatientLayout;
