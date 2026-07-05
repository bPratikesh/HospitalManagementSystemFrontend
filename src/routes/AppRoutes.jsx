import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import DoctorRegisterForm from "@/pages/Auth/DoctorRegisterForm";
import PatientRegisterForm from "@/pages/Auth/PatientRegisterForm";

import Layout from "@/components/common/Layout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/doctor-register" element={<DoctorRegisterForm />} />

          <Route path="/patient-register" element={<PatientRegisterForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
