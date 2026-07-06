import { CalendarDays, Clock, UserRound } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate, formatTime } from "@/utils/dateUtils";

function UpcomingAppointment({ appointment }) {
  if (!appointment) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointment</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-slate-500">You have no upcoming appointments.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="text-green-600" size={22} />
          Upcoming Appointment
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div>
          <h3 className="text-xl font-semibold text-slate-800">
            Dr. {appointment.doctor.doctorName}
          </h3>

          <p className="text-sm text-slate-500">
            {appointment.doctor.speciality}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <CalendarDays size={18} className="text-slate-500" />

            <span>{formatDate(appointment.time)}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock size={18} className="text-slate-500" />

            <span>{formatTime(appointment.time)}</span>
          </div>

          <div className="flex items-center gap-3">
            <UserRound size={18} className="text-slate-500" />

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {appointment.status}
            </span>
          </div>
        </div>

        <Button className="w-full">View Details</Button>
      </CardContent>
    </Card>
  );
}

export default UpcomingAppointment;
