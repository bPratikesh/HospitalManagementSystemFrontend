import api from "./api";

const getDoctorById = async (doctorId) => {
  const response = await api.get(`/doctor/${doctorId}`);
  return response.data;
};

const getDoctorsForPatients = async () => {
  const response = await api.get("/doctor/cards");
  return response.data;
};

export default {
  getDoctorById,
  getDoctorsForPatients,
};
