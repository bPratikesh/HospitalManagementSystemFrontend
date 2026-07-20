import { CalendarDays, User, MessageCircle } from "lucide-react";

const quickActions = [
  {
    title: "Appointments",
    description: "Manage all appointments",
    icon: CalendarDays,
    path: "/doctor/appointments",
  },
  {
    title: "Reviews",
    description: "View patient feedback",
    icon: MessageCircle,
    path: "/doctor/reviews",
  },
  {
    title: "My Profile",
    description: "View and edit your profile",
    icon: User,
    path: "/doctor/profile",
  },
];

export default quickActions;
