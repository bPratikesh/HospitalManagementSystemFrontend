import api from "./api";

const getPatientById = async (patientId) => {
  const response = await api.get(`/patient/${patientId}`);
  return response.data;
};

export default {
  getPatientById,
};
