import {
  UserRoundSearch,
  CalendarDays,
  User,
} from "lucide-react";

const quickActions = [
  {
    title: "Browse Doctors",
    description: "Find doctors by specialization and book appointments.",
    icon: UserRoundSearch,
    path: "/patient/doctors",
  },
  {
    title: "My Appointments",
    description: "View your upcoming and previous appointments.",
    icon: CalendarDays,
    path: "/patient/appointments",
  },
  {
    title: "My Profile",
    description: "View and update your personal information.",
    icon: User,
    path: "/patient/profile",
  },
];

export default quickActions;