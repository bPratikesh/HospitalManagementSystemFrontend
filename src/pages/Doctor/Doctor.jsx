import { Wallet, CalendarDays, Users } from "lucide-react";

import useAuth from "@/hooks/useAuth";

import WelcomeCard from "./components/WelcomeCard";
import StatsCard from "./components/StatsCard";
import QuickActions from "./components/QuickActions";
import quickActions from "./data/quickActions";
import RecentAppointments from "./components/RecentAppointments";
import recentAppointments from "./data/recentAppointments";

function Doctor() {
  const { user } = useAuth();

  // Temporary dashboard data
  const dashboardData = {
    doctorName: user?.name ?? "Doctor",
    walletBalance: 0,
    totalAppointments: 0,
    totalPatients: 0,
  };

  return (
    <div className="container space-y-10 py-10">
      <WelcomeCard doctorName={dashboardData.doctorName} />
      <QuickActions actions={quickActions} />

      <section className="grid gap-6 md:grid-cols-3">
        <StatsCard
          title="Wallet Balance"
          value={`₹ ${dashboardData.walletBalance}`}
          icon={<Wallet size={28} />}
        />

        <StatsCard
          title="Appointments"
          value={dashboardData.totalAppointments}
          icon={<CalendarDays size={28} />}
        />

        <StatsCard
          title="Patients"
          value={dashboardData.totalPatients}
          icon={<Users size={28} />}
        />
      </section>
      <RecentAppointments appointments={recentAppointments} />
    </div>
  );
}

export default Doctor;
