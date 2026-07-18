import { CalendarDays, Clock, UserRound, Stethoscope } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import appointmentService from "@/services/appointmentService";
import { useNavigate } from "react-router-dom";
import { showError } from "@/lib/toast";
import { formatDate } from "@/utils/dateUtils";
import { formatSlot } from "@/utils/slotUtils";

function AppointmentCard({ appointment, onRefresh }) {
  const navigate = useNavigate();
  const handleCancel = async () => {
    try {
      await appointmentService.cancelAppointmentByDoctor(appointment.id);
      onRefresh();
    } catch (error) {
      console.error(error);
      // alert("Failed to cancel appointment.");
      showError("Failed to cancel appointment.");
    }
  };
  const handlePrescribe = () => {
    navigate(`/doctor/prescription/${appointment.id}`);
  };

  const statusColor =
    appointment.status === "BOOKED"
      ? "bg-blue-100 text-blue-700"
      : appointment.status === "COMPLETED"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700";

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="space-y-6 p-6">
        {/* Patient Information */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">
              {appointment.patient.user.name}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {appointment.patient.user.email}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${statusColor}`}
          >
            {appointment.status}
          </span>
        </div>

        {/* Appointment Details */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-3">
            <CalendarDays size={18} className="text-slate-500" />
            <span>{formatDate(appointment.appointmentDate)}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock size={18} className="text-slate-500" />
            <span>{formatSlot(appointment.appointmentSlot)}</span>
          </div>

          <div className="flex items-center gap-3">
            <UserRound size={18} className="text-slate-500" />
            <span>{appointment.patient.user.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <Stethoscope size={18} className="text-slate-500" />
            <span>{appointment.symptoms}</span>
          </div>
        </div>

        {/* Action Buttons */}

        <div className="flex justify-end gap-3">
          {/* BOOKED */}
          {appointment.status === "BOOKED" && (
            <>
              <Button onClick={handlePrescribe}>Prescribe</Button>

              <Button variant="destructive" onClick={handleCancel}>
                Cancel Appointment
              </Button>
            </>
          )}

          {/* COMPLETED but payment pending */}
          {appointment.status === "COMPLETED" &&
            appointment.paymentStatus === "PENDING" && (
              <Button variant="outline" disabled>
                Waiting for Payment
              </Button>
            )}

          {/* COMPLETED and payment done */}
          {appointment.status === "COMPLETED" &&
            appointment.paymentStatus === "PAID" && (
              <Button variant="secondary" disabled>
                Paid
              </Button>
            )}

          {/* CANCELLED */}
          {appointment.status === "CANCELLED" && (
            <Button variant="destructive" disabled>
              Cancelled
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default AppointmentCard;
