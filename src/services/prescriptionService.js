import api from "./api";

const createPrescription = async (appointmentId, prescriptionData) => {
  const response = await api.post(
    `/prescription/appointment/${appointmentId}`,
    prescriptionData,
  );

  return response.data;
};

const getPrescriptionByAppointment = async (appointmentId) => {
  const response = await api.get(`/prescription/appointment/${appointmentId}`);

  return response.data;
};
const getAllPrescriptionsByPatient = async (patientId) => {
  const response = await api.get(`/prescription/patient/${patientId}`);

  return response.data;
};

export default {
  createPrescription,
  getPrescriptionByAppointment,
  getAllPrescriptionsByPatient,
};
