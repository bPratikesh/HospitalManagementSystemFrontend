import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function RecentAppointments({ appointments }) {
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
                <th className="py-3">Date</th>
                <th className="py-3">Time</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="border-b last:border-none hover:bg-slate-50"
                >
                  <td className="py-4 font-medium">{appointment.doctorName}</td>

                  <td>{appointment.specialization}</td>

                  <td>{appointment.date}</td>

                  <td>{appointment.time}</td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        appointment.status === "Upcoming"
                          ? "bg-blue-100 text-blue-700"
                          : appointment.status === "Completed"
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
