import {
  CalendarCheck,
  Clock3,
  CheckCircle2,
  XCircle,
  Users,
  Wallet,
} from "lucide-react";

import DashboardCard from "./DashboardCard";

function DashboardStats({ dashboard }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-slate-800">
        Dashboard Overview
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <DashboardCard
          title="Total Appointments"
          value={dashboard.totalAppointments}
          icon={CalendarCheck}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
        />

        <DashboardCard
          title="Booked Appointments"
          value={dashboard.bookedAppointments}
          icon={Clock3}
          iconBg="bg-orange-100"
          iconColor="text-orange-600"
        />

        <DashboardCard
          title="Completed Appointments"
          value={dashboard.completedAppointments}
          icon={CheckCircle2}
          iconBg="bg-green-100"
          iconColor="text-green-600"
        />

        <DashboardCard
          title="Cancelled Appointments"
          value={dashboard.cancelledAppointments}
          icon={XCircle}
          iconBg="bg-red-100"
          iconColor="text-red-600"
        />

        <DashboardCard
          title="Patients Treated"
          value={dashboard.totalPatients}
          icon={Users}
          iconBg="bg-purple-100"
          iconColor="text-purple-600"
        />

        <DashboardCard
          title="Wallet Balance"
          value={`₹ ${dashboard.walletBalance}`}
          icon={Wallet}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-600"
        />
      </div>
    </section>
  );
}

export default DashboardStats;
