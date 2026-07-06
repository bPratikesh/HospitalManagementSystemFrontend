import api from "@/api/api";

const createAppointment = async (patientId, doctorId, appointmentData) => {
  const response = await api.post(
    `/appointment/patient/${patientId}/doctor/${doctorId}`,
    appointmentData,
  );

  return response.data;
};

const getAppointmentsByPatient = async (patientId) => {
  const response = await api.get(`/appointment/patient/${patientId}`);
  return response.data;
};

const cancelAppointment = async (appointmentId) => {
  const response = await api.put(
    `/appointment/patient/cancel/${appointmentId}`,
  );

  return response.data;
};

export default {
  createAppointment,
  getAppointmentsByPatient,
  cancelAppointment,
};
