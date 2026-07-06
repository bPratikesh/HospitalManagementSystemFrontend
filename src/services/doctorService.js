import api from "./api";

const getDoctorsForPatients = async () => {
  const response = await api.get("/doctor/cards");
  return response.data;
};

export default {
  getDoctorsForPatients,
};
