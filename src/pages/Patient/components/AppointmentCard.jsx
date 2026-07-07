import { CalendarDays, Clock, Stethoscope, FileText } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { formatDateTime } from "@/utils/dateUtils";

import paymentService from "@/services/paymentService";

function AppointmentCard({ appointment, onCancel }) {
  const navigate = useNavigate();
  const handlePayment = async () => {
    try {
      await paymentService.payForAppointment(appointment.id);

      navigate(`/patient/prescription/${appointment.id}`);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Payment failed.");
    }
  };

  const handleViewPrescription = () => {
    navigate(`/patient/prescription/${appointment.id}`);
  };
  return (
    <Card className="transition-shadow duration-300 hover:shadow-lg ">
      <CardContent className="space-y-6 p-6">
        {/* Doctor Details */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Dr. {appointment.doctor.doctorName}
            </h2>

            <p className="mt-1 flex items-center gap-2 text-slate-500">
              <Stethoscope size={16} />
              {appointment.doctor.speciality}
            </p>
          </div>

          <Badge variant="secondary">{appointment.status}</Badge>
        </div>

        {/* Appointment Time */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-3">
            <CalendarDays size={18} className="text-blue-600" />

            {formatDateTime(appointment.time)}
          </div>

          <div className="flex items-center gap-3">
            <Clock size={18} className="text-green-600" />

            <span>{appointment.status}</span>
          </div>
        </div>

        {/* Symptoms */}
        <div>
          <h3 className="mb-2 flex items-center gap-2 font-semibold">
            <FileText size={18} />
            Symptoms
          </h3>

          <p className="rounded-lg bg-slate-50 p-4 text-slate-600">
            {appointment.symptoms}
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-end gap-3">
          {/* BOOKED */}
          {appointment.status === "BOOKED" && (
            <Button
              variant="destructive"
              onClick={() => onCancel(appointment.id)}
            >
              Cancel Appointment
            </Button>
          )}

          {/* COMPLETED but payment pending */}
          {appointment.status === "COMPLETED" &&
            appointment.paymentStatus === "PENDING" && (
              <Button onClick={handlePayment}>Pay & View Prescription</Button>
            )}

          {/* COMPLETED and payment done */}
          {appointment.status === "COMPLETED" &&
            appointment.paymentStatus === "PAID" && (
              <Button onClick={handleViewPrescription}>
                View Prescription
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
