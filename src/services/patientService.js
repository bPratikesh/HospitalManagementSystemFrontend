import api from "./api";

const getPatientById = async (patientId) => {
  const response = await api.get(`/patient/${patientId}`);
  return response.data;
};
const updatePatient = async (patientId, patientData) => {
  const response = await api.put(`/patient/update/${patientId}`, patientData);

  return response.data;
};

export default {
  getPatientById,
  updatePatient,
};
