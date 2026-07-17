import api from "./api";

const getDoctorById = async (doctorId) => {
  const response = await api.get(`/doctor/${doctorId}`);
  return response.data;
};

const getDoctorsForPatients = async () => {
  const response = await api.get("/doctor/cards");
  return response.data;
};
const updateDoctor = async (doctorId, doctorData) => {
  const response = await api.put(`/doctor/update/${doctorId}`, doctorData);

  return response.data;
};
const searchDoctors = async (name, speciality) => {
  const response = await api.get("/doctor/search", {
    params: {
      name,
      speciality,
    },
  });

  return response.data;
};

export default {
  getDoctorById,
  getDoctorsForPatients,
  updateDoctor,
  searchDoctors,
};
