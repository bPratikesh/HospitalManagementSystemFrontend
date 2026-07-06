import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import DoctorRegisterForm from "@/pages/Auth/DoctorRegisterForm";
import PatientRegisterForm from "@/pages/Auth/PatientRegisterForm";

import Layout from "@/components/common/Layout";
import DoctorRoute from "@/components/auth/DoctorRoute";
import PatientRoute from "@/components/auth/PatientRoute";
import Doctor from "@/pages/Doctor/Doctor";
import Patient from "@/pages/Patient/Patient";
import BrowseDoctors from "@/pages/Patient/BrowseDoctors";
import BookAppointment from "@/pages/Patient/BookAppointment";

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
          <Route
            path="/doctor"
            element={
              <DoctorRoute>
                <Doctor />
              </DoctorRoute>
            }
          />
          <Route
            path="/patient"
            element={
              <PatientRoute>
                <Patient />
              </PatientRoute>
            }
          />
          <Route
            path="/patient/doctors"
            element={
              <PatientRoute>
                <BrowseDoctors />
              </PatientRoute>
            }
          />
          <Route
            path="/patient/book-appointment/:doctorId"
            element={
              <PatientRoute>
                <BookAppointment />
              </PatientRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
