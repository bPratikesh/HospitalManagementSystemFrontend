import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/utils/dateUtils";
import { formatSlot } from "@/utils/slotUtils";

function RecentAppointments({ appointments }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Appointments</CardTitle>
      </CardHeader>

      <CardContent>
        {appointments.length === 0 ? (
          <p className="text-center text-slate-500 py-8">
            No appointments found.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b">
                <tr>
                  <th className="py-3">Patient</th>
                  <th className="py-3">Symptoms</th>
                  <th className="py-3">Date</th>
                  <th className="py-3">Time</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {appointments
                  .slice(0, 5)
                  .map((appointment) => (
                    <tr
                      key={appointment.id}
                      className="border-b last:border-none hover:bg-slate-50"
                    >
                      <td className="py-4 font-medium">
                        {appointment.patient.user.name}
                      </td>

                      <td>{appointment.symptoms}</td>

                      <td>{formatDate(appointment.appointmentDate)}</td>

                      <td>{formatSlot(appointment.appointmentSlot)}</td>

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
        )}
      </CardContent>
    </Card>
  );
}

export default RecentAppointments;
