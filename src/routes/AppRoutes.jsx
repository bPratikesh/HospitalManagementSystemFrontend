import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import DoctorRegisterForm from "@/pages/Auth/DoctorRegisterForm";
import PatientRegisterForm from "@/pages/Auth/PatientRegisterForm";

import Layout from "@/components/common/Layout";
import PatientLayout from "@/components/common/PatientLayout";
import DoctorLayout from "@/components/common/DoctorLayout";

import DoctorRoute from "@/components/auth/DoctorRoute";
import PatientRoute from "@/components/auth/PatientRoute";

import Doctor from "@/pages/Doctor/Doctor";
import Patient from "@/pages/Patient/Patient";

import BrowseDoctors from "@/pages/Patient/BrowseDoctors";
import BookAppointment from "@/pages/Patient/BookAppointment";
import PatientAppointments from "@/pages/Patient/PatientAppointments";
import PatientPrescription from "@/pages/Patient/PatientPrescription";
import PatientAllPrescriptions from "@/pages/Patient/PatientAllPrescriptions";
import PatientProfile from "@/pages/Patient/PatientProfile";
import DoctorReviews from "@/pages/Doctor/components/DoctorReviews";

import DoctorAppointments from "@/pages/Doctor/DoctorAppointments";
import PrescribePatient from "@/pages/Doctor/PrescribePatient";
import DoctorProfile from "@/pages/Doctor/DoctorProfile";
import RateDoctor from "@/pages/Patient/RateDoctor";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= Public ================= */}

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctor-register" element={<DoctorRegisterForm />} />
          <Route path="/patient-register" element={<PatientRegisterForm />} />
        </Route>

        {/* ================= Patient ================= */}

        <Route
          element={
            <PatientRoute>
              <PatientLayout />
            </PatientRoute>
          }
        >
          <Route path="/patient" element={<Patient />} />

          <Route path="/patient/doctors" element={<BrowseDoctors />} />

          <Route
            path="/patient/book-appointment/:doctorId"
            element={<BookAppointment />}
          />

          <Route
            path="/patient/appointments"
            element={<PatientAppointments />}
          />

          <Route
            path="/patient/prescription/:appointmentId"
            element={<PatientPrescription />}
          />

          <Route
            path="/patient/prescriptions"
            element={<PatientAllPrescriptions />}
          />

          <Route path="/patient/profile" element={<PatientProfile />} />
          <Route
            path="/patient/review/:appointmentId"
            element={<RateDoctor />}
          />
        </Route>

        {/* ================= Doctor ================= */}

        <Route
          element={
            <DoctorRoute>
              <DoctorLayout />
            </DoctorRoute>
          }
        >
          <Route path="/doctor" element={<Doctor />} />

          <Route path="/doctor/appointments" element={<DoctorAppointments />} />

          <Route
            path="/doctor/prescription/:appointmentId"
            element={<PrescribePatient />}
          />

          <Route path="/doctor/profile" element={<DoctorProfile />} />
          <Route path="/doctor/reviews" element={<DoctorReviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
