import useAuth from "@/hooks/useAuth";

import WelcomeCard from "./components/WelcomeCard";
import WalletCard from "./components/WalletCard";
import UpcomingAppointment from "./components/UpcomingAppointment";
import QuickActions from "./components/QuickActions";
import RecentAppointments from "./components/RecentAppointments";

import quickActions from "./data/quickActions";
import { useEffect, useState } from "react";

import appointmentService from "@/services/appointmentService";
import { getUser } from "@/utils/storage";
import patientService from "@/services/patientService";

function Patient() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const loggedInUser = getUser();

      if (!loggedInUser) return;

      const data = await appointmentService.getAppointmentsByPatient(
        loggedInUser.patientId,
      );
      const patientData = await patientService.getPatientById(
        loggedInUser.patientId,
      );

      setPatient(patientData);

      setAppointments(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const dashboardData = {
    patientName: user?.name ?? "Patient",
    walletBalance: patient?.walletBalance ?? 0,
  };

  const upcomingAppointment =
    appointments.find((appointment) => appointment.status === "BOOKED") || null;

  if (loading) {
    return <div className="container py-10">Loading dashboard...</div>;
  }

  return (
    <div className="container space-y-10 py-10">
      <WelcomeCard patientName={dashboardData.patientName} />
      <QuickActions actions={quickActions} />

      <section className="grid gap-6 lg:grid-cols-2">
        <WalletCard balance={dashboardData.walletBalance} />
        <UpcomingAppointment appointment={upcomingAppointment} />
      </section>
      <RecentAppointments appointments={appointments} />
    </div>
  );
}

export default Patient;
