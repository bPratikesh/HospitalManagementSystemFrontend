import { useEffect, useState } from "react";

import { getUser } from "@/utils/storage";
import appointmentService from "@/services/appointmentService";
import AppointmentCard from "./components/AppointmentCard";

function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const loggedInUser = getUser();

      const data = await appointmentService.getAppointmentsByDoctor(
        loggedInUser.doctorId,
      );

      setAppointments(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="container py-10">Loading...</p>;
  }

  return (
    <div className="container space-y-6 py-10">
      <h1 className="text-3xl font-bold">Manage Appointments</h1>

      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment.id}
          appointment={appointment}
          onRefresh={fetchAppointments}
        />
      ))}
    </div>
  );
}

export default DoctorAppointments;
