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
import PatientAppointments from "@/pages/Patient/PatientAppointments";
import DoctorAppointments from "@/pages/Doctor/DoctorAppointments";
import PrescribePatient from "@/pages/Doctor/PrescribePatient";
import PatientPrescription from "@/pages/Patient/PatientPrescription";
import PatientAllPrescriptions from "@/pages/Patient/PatientAllPrescriptions";
import PatientProfile from "@/pages/Patient/PatientProfile";
import DoctorProfile from "@/pages/Doctor/DoctorProfile";

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
          <Route
            path="/patient/appointments"
            element={
              <PatientRoute>
                <PatientAppointments />
              </PatientRoute>
            }
          />
          <Route
            path="/doctor/appointments"
            element={
              <DoctorRoute>
                <DoctorAppointments />
              </DoctorRoute>
            }
          />
          <Route
            path="/doctor/prescription/:appointmentId"
            element={<PrescribePatient />}
          />
          <Route
            path="/patient/prescription/:appointmentId"
            element={
              <PatientRoute>
                <PatientPrescription />
              </PatientRoute>
            }
          />
          <Route
            path="/patient/prescriptions"
            element={
              <PatientRoute>
                <PatientAllPrescriptions />
              </PatientRoute>
            }
          />
          <Route
            path="/patient/profile"
            element={
              <PatientRoute>
                <PatientProfile />
              </PatientRoute>
            }
          />
          <Route
            path="/doctor/profile"
            element={
              <DoctorRoute>
                <DoctorProfile />
              </DoctorRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
