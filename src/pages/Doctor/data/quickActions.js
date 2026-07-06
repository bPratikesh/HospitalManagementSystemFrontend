import { CalendarDays, User, Wallet } from "lucide-react";

const quickActions = [
  {
    title: "Appointments",
    description: "Manage all appointments",
    icon: CalendarDays,
    path: "/doctor/appointments",
  },
  {
    title: "My Profile",
    description: "View and edit your profile",
    icon: User,
    path: "/doctor/profile",
  },
];

export default quickActions;
