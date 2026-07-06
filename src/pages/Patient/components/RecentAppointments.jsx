import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDateTime } from "@/utils/dateUtils";

function RecentAppointments({ appointments }) {
  if (appointments.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Appointments</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-slate-500">No appointments found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Appointments</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b">
              <tr>
                <th className="py-3">Doctor</th>
                <th className="py-3">Specialization</th>
                <th className="py-3">Date & Time</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="border-b last:border-none hover:bg-slate-50"
                >
                  <td className="py-4 font-medium">
                    Dr. {appointment.doctor.doctorName}
                  </td>

                  <td>{appointment.doctor.speciality}</td>

                  <td>{formatDateTime(appointment.time)}</td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        appointment.status === "BOOKED"
                          ? "bg-blue-100 text-blue-700"
                          : appointment.status === "COMPLETED"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentAppointments;
