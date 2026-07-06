import { useEffect, useState } from "react";

import { getUser } from "@/utils/storage";
import appointmentService from "@/services/appointmentService";

import AppointmentCard from "./components/AppointmentCard";

function PatientAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

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
  const handleCancelAppointment = async (appointmentId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this appointment?",
    );

    if (!confirmCancel) return;

    try {
      await appointmentService.cancelAppointment(appointmentId);

      alert("Appointment cancelled successfully.");

      fetchAppointments();
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Failed to cancel appointment.");
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
    <div className="container py-10">
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
    </div>
  );
}

export default PatientAppointments;
