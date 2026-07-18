import { useEffect, useState } from "react";

import useAuth from "@/hooks/useAuth";

import WelcomeCard from "./components/WelcomeCard";
import DashboardStats from "./components/DashboardStats";
import QuickActions from "./components/QuickActions";
import RecentAppointments from "./components/RecentAppointments";

import quickActions from "./data/quickActions";

import doctorService from "@/services/doctorService";
import appointmentService from "@/services/appointmentService";

import { getUser } from "@/utils/storage";

function Doctor() {
  const { user } = useAuth();

  const [doctor, setDoctor] = useState(null);
  const [dashboard, setDashboard] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const loggedInUser = getUser();

      if (!loggedInUser) return;

      const [doctorData, dashboardData, appointmentData] = await Promise.all([
        doctorService.getDoctorById(loggedInUser.doctorId),
        doctorService.getDashboard(loggedInUser.doctorId),
        appointmentService.getAppointmentsByDoctor(loggedInUser.doctorId),
      ]);

      setDoctor(doctorData);
      setDashboard(dashboardData);
      setAppointments(appointmentData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container py-10 text-center">Loading Dashboard...</div>
    );
  }

  return (
    <div className="container space-y-10 py-10">
      <WelcomeCard
        doctorName={doctor?.doctorName ?? user?.name ?? "Doctor"}
        bookedAppointments={dashboard?.bookedAppointments ?? 0}
      />

      <DashboardStats dashboard={dashboard} />

      <QuickActions actions={quickActions} />

      <RecentAppointments appointments={appointments} />
    </div>
  );
}

export default Doctor;
