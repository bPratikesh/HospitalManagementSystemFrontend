import { useEffect, useState } from "react";

import { getUser } from "@/utils/storage";
import appointmentService from "@/services/appointmentService";

import AppointmentCard from "./components/AppointmentCard";
import { showSuccess, showError } from "@/lib/toast";
import ConfirmDialog from "./components/ConfirmDialog";

function PatientAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const user = getUser();

      const data = await appointmentService.getAppointmentsByPatient(
        user.patientId,
      );

      setAppointments(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleCancelAppointment = (appointmentId) => {
    setSelectedAppointmentId(appointmentId);
    setOpenConfirmDialog(true);
  };
  const confirmCancellation = async () => {
    try {
      await appointmentService.cancelAppointment(selectedAppointmentId);

      showSuccess("Appointment cancelled successfully.");

      fetchAppointments();
    } catch (error) {
      console.error(error);

      const message =
        error.response?.data?.message || "Failed to cancel appointment.";

      showError(message);
    } finally {
      setOpenConfirmDialog(false);
      setSelectedAppointmentId(null);
    }
  };

  if (loading) {
    return (
      <div className="container py-10">
        <h1 className="text-3xl font-bold">My Appointments</h1>

        <p className="mt-6 text-slate-500">Loading appointments...</p>
      </div>
    );
  }

  return (
    <div className="py-2">
      <h1 className="mb-8 text-3xl font-bold">My Appointments</h1>

      {appointments.length === 0 ? (
        <p className="text-slate-500">No appointments booked yet.</p>
      ) : (
        <div className="space-y-6">
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              onCancel={handleCancelAppointment}
            />
          ))}
        </div>
      )}
      <ConfirmDialog
        open={openConfirmDialog}
        onOpenChange={setOpenConfirmDialog}
        title="Cancel Appointment"
        description="Are you sure you want to cancel this appointment? This action cannot be undone."
        confirmText="Yes, Cancel"
        cancelText="Keep Appointment"
        onConfirm={confirmCancellation}
      />
    </div>
  );
}

export default PatientAppointments;
