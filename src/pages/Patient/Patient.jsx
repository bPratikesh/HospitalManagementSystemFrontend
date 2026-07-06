import useAuth from "@/hooks/useAuth";

import WelcomeCard from "./components/WelcomeCard";
import WalletCard from "./components/WalletCard";
import UpcomingAppointment from "./components/UpcomingAppointment";
import QuickActions from "./components/QuickActions";
import RecentAppointments from "./components/RecentAppointments";

import quickActions from "./data/quickActions";
import recentAppointments from "./data/recentAppointments";

function Patient() {
  const { user } = useAuth();

  const dashboardData = {
    patientName: user?.name ?? "Patient",
    walletBalance: 5000,

    upcomingAppointment: {
      doctorName: "Dr. John Smith",
      specialization: "Cardiologist",
      date: "10 Jul 2026",
      time: "10:30 AM",
      status: "Upcoming",
    },
  };

  return (
    <div className="container space-y-10 py-10">
      <WelcomeCard patientName={dashboardData.patientName} />
      <QuickActions actions={quickActions} />

      <section className="grid gap-6 lg:grid-cols-2">
        <WalletCard balance={dashboardData.walletBalance} />
        <UpcomingAppointment appointment={dashboardData.upcomingAppointment} />
      </section>
      <RecentAppointments appointments={recentAppointments} />
    </div>
  );
}

export default Patient;
